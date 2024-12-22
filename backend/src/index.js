import express from 'express';
import cors from 'cors';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import chokidar from 'chokidar';
import path from 'node:path';

import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/index.js';
import { handleEditorSocketEvents } from './socketHandlers/editorHandler.js';

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const editorNameSpace = io.of('/editor');

editorNameSpace.on('connection', (socket) => {
    console.log('a user connected to editor', socket.id);
    console.log("project id From socket", socket.handshake.query['projectId']);
    const projectId = socket.handshake.query['projectId'];
    if (projectId) {
        var watcher = chokidar.watch(`./projects/${projectId}`, {
            ignored: (path) => path.includes('node_modules'),
            persistent: true, /** Keeps the watcher in running state till the time app is running */
            awaitWriteFinish: {
                stabilityThreshold: 2000, /** Ensures stability of files before triggering events */
                pollInterval: 100
            },
            ignoreInitial: true /** To ignore the events at the time of creation of the project using vite  */
        });
        watcher.on('all', (event, path) => {
            console.log(event, path);
        });
    }
    socket.on('disconnect', async () => {
        console.log('user disconnected from editor', socket.id);
        await watcher.close();
    });

    handleEditorSocketEvents(socket, editorNameSpace)
});

app.get('/ping', (req, res) => {
    return res.json({message: 'pong'});
});

app.use('/api', apiRouter);  //TODO: Covert it to only / 

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

