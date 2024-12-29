import fs from 'fs/promises';
import { getContainerPort } from '../containers/handleContainerCreate.js';


export const handleEditorSocketEvents = (socket, editorNameSpace) => {

    socket.on('writeFile', async ({data, fileOrFolderPath}) => {
        try {
            const response = await fs.writeFile(fileOrFolderPath, data);
            editorNameSpace.emit('writeFileSuccess', {
                data: "File written successfully"
            });
        }catch(error) {
            console.error("Error writting the file",error);
            socket.emit('writeFileError', {
                data: "Error writting the file"
            });
        }

    });

    socket.on('createFile', async ({fileOrFolderPath}) => {
        const isFilePresent = await fs.stat(fileOrFolderPath);
        if(isFilePresent) {
            socket.emit('createFileError', {
                data: "File already exists"
            });
            return;
        }

        try {
            const response = await fs.writeFile(fileOrFolderPath, "");
            socket.emit('createFileSuccess', {
                data: "File created successfully"
            });
        }catch(error) {
            console.error("Error creating the file",error);
            socket.emit('createFileError', {
                data: "Error creating the file"
            });
        }

    });

    socket.on('readFile', async ({fileOrFolderPath}) => {
        try {
            const response = await fs.readFile(fileOrFolderPath);
            socket.emit('readFileSuccess', {
                data: response.toString(),
                path: fileOrFolderPath
            });
        }catch(error) {
            console.error("Error reading the file",error);
            socket.emit('readFileError', {
                data: "Error reading the file"
            });
        }

    });

    socket.on('deleteFile', async ({fileOrFolderPath}) => {
        try {
            const response = await fs.unlink(fileOrFolderPath);
            socket.emit('deleteFileSuccess', {
                data: "File deleted successfully"
            });
        }catch(error) {
            console.error("Error deleting the file",error);
            socket.emit('deleteFileError', {
                data: "Error deleting the file"
            });
        }

    });

    socket.on('createFolder', async ({fileOrFolderPath}) => {
        // const isFilePresent = await fs.stat(fileOrFolderPath);
        // if(isFilePresent) {
        //     socket.emit('createFileError', {
        //         data: "File already exists"
        //     });
        //     return;
        // }

        try {
            const response = await fs.mkdir(fileOrFolderPath);
            socket.emit('createFolderSuccess', {
                data: "Folder created successfully"
            });
        }catch(error) {
            console.error("Error creating the folder",error);
            socket.emit('createFolderError', {
                data: "Error creating the folder"
            });
        }

    });

    socket.on('deleteFolder', async ({fileOrFolderPath}) => {
        try {
            const response = await fs.rmdir(fileOrFolderPath, {recursive: true});
            socket.emit('deleteFolderSuccess', {
                data: "Folder deleted successfully"
            });
        }catch(error) {
            console.error("Error deleting the folder",error);
            socket.emit('deleteFolderError', {
                data: "Error deleting the folder"
            });
        }
    });

    socket.on('getPort', async ({containerName}) => {
        try{
            console.log("Container name :", containerName);
            const port = await getContainerPort(containerName);
            console.log("Port data :", port);
            socket.emit('getPortSuccess', {
                port: port
            });
        }catch(error) {
            console.error("Error getting the port",error);
            socket.emit('getPortError', {
                data: "Error getting the port"
            });
        }
    });
}