import express from 'express';
import cors from 'cors';
import { createServer } from 'node:http';
import { Server as SocketIOServer } from 'socket.io';
import { WebSocketServer } from 'ws';
import chokidar from 'chokidar';
import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/index.js';
import { handleEditorSocketEvents } from './socketHandlers/editorHandler.js';
import { handleContainerCreate } from './Containers/handleContainerCreate.js';
import { handleTerminalConnection } from './Containers/handleTerminalConnection.js';

const app = express();
const server = createServer(app);

// Socket.IO setup
const io = new SocketIOServer(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

// WebSocket (ws) setup
const webSocketForTerminal = new WebSocketServer({ noServer: true });

// Express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Express routes
app.get('/ping', (req, res) => res.json({ message: 'pong' }));
app.use('/api', apiRouter);  // TODO: Convert to only "/"

// Socket.IO namespace for editor
const editorNameSpace = io.of('/editor');

editorNameSpace.on('connection', (socket) => {
    console.log('A user connected to editor', socket.id);
    const projectId = socket.handshake.query['projectId'];
    
    if (projectId) {
        socket.join(projectId);
        const watcher = chokidar.watch(`./projects/${projectId}`, {
            ignored: (path) => path.includes('node_modules'),
            persistent: true,
            awaitWriteFinish: {
                stabilityThreshold: 2000,
                pollInterval: 100
            },
            ignoreInitial: true
        });

        watcher.on('all', (event, path) => {
            console.log(event, path);
        });

        socket.on('disconnect', async () => {
            console.log('User disconnected from editor', socket.id);
            await watcher.close();
        });
    }

    handleEditorSocketEvents(socket, editorNameSpace);
});

// WebSocket (ws) upgrade handling
server.on('upgrade', (request, socket, head) => {
    if (request.url.includes('/terminal')) {
        webSocketForTerminal.handleUpgrade(request, socket, head, (ws) => {
            webSocketForTerminal.emit('connection', ws, request);
        });
    } else {
        socket.destroy(); // Reject unknown upgrade requests
    }
});

// WebSocket connection logic
webSocketForTerminal.on('connection', async (ws, req) => {
    const isTerminal = req.url.includes('/terminal');
    
    if (isTerminal) {
        const projectId = req.url.split('=')[1];
        console.log('Project ID received after connection:', projectId);
        
        const container = await handleContainerCreate(projectId, webSocketForTerminal);
        handleTerminalConnection(container, ws);
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
