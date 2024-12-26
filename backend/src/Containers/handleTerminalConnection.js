export const handleTerminalConnection = (container, ws) => {
    container.exec({
        Cmd: ['bin/bash'],
        User: 'sandbox',
        AttachStdin: true,
        AttachStdout: true,
        AttachStderr: true,
        Tty: true,
    }, (err, exec) => {
        if (err) {
            console.error('Error creating exec', err);
            return;
        }
        exec.start({ hijack: true, stdin: true }, (err, stream) => {
            if (err) {
                console.error('Error starting exec', err);
                return;
            }

            // Step 1: Process the stream
            processStreamOutput(stream, ws);
            // Step 2: Write to Stream            
            ws.on('message', (data) => {
                stream.write(data);
            });
        });
    });
}

function processStreamOutput(stream, ws) {
    let nextDataType = null; // Stores the type of next Message
    let nextDataLength = null; // Stores the length of next Message
    let buffer = Buffer.from(''); // Stores the buffer of data

    function bufferSlicer(end) {
        // This function will slice the buffer and return the data
        const data = buffer.slice(0, end);
        buffer = Buffer.from(buffer.slice(end, buffer.length));
        return data;
    }
    
    function processStreamData(data){
        // This is helper function to process the data from stream
        if (data) {
            buffer = Buffer.concat([buffer, data]); // Concatenate the incoming data to buffer
        }

        if (!nextDataType) {
            // If nextDataType is not know, then we need to read the next 8 bytes to determine the type and length of the message
            if (buffer.length >= 8) {
                const header = bufferSlicer(8); // Read the first 8 bytes
                nextDataType = header.readUInt32BE(0); // The first 4 bytes represent the type of the message
                nextDataLength = header.readUInt32BE(4); // The next 4 bytes represent the length of the message
                processStreamData(); // Call the function recursively to process the data
            }else{
                if (buffer.length >= nextDataLength) {
                    const content = bufferSlicer(nextDataLength); // Read the content of the message
                    ws.send(content); // Send the content to the client
                    nextDataType = null; // Reset the nextDataType
                }
            }
        }
    }

    stream.on('data', processStreamData)
}