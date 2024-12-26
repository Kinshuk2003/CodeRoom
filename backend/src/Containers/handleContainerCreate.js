import Docker from 'dockerode';
import path from 'path';

const docker = new Docker();

export const handleContainerCreate = async (projectId, terminalSocket, req, tcpSocket, head) => {
    console.log('Project Id received for the container', projectId);
    try {
        const container = await docker.createContainer({
            Image: 'sandbox', //name given by me for the written dockerfile
            AttachStdin: true,
            AttachStdout: true,
            AttachStderr: true,
            Cmd: ['/bin/bash'],
            Tty: true,
            User: 'sandbox',
            ExposedPorts: {
                '5173/tcp': {},
            },
            Env: ["HOST=0.0.0.0"],
            HostConfig: {
                Binds: [ //mounting the project directory to the container
                    `${process.cwd()}/projects/${projectId}:/home/sandbox/app`,
                ],
                PortBindings: {
                    '5173/tcp': [
                        {
                            HostPort: "0",
                        },
                    ],
                },
            },
        });

        await container.start();
        console.log('Container created successfully', container.id);

        //console.log('handleContainerCreate called with:', { projectId, reqUrl: req});

        
        await terminalSocket.handleUpgrade(req, tcpSocket, head, (establishedWSConn) => {
            try {
                console.log('Upgrade handled successfully', terminalSocket);
                terminalSocket.emit('connection', establishedWSConn, req, container);
            }catch(error) {
                console.log('Error handling upgrade', error);
            }
            
        });
        
        //console.log('Upgrade handled successfully', terminalSocket);

    } catch (error) {
        console.log('Error creating container', error);
        // socket.emit('containerCreateError', {
        //     data: 'Error creating container',
        // });
        // return;
    }
}