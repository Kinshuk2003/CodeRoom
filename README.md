# CodeX-IDE
A Web browser based Code Sandbox for Building Scalable Web Application in the Cloud.

## Features
### Code Editor
- A feature-rich code editor that supports syntax highlighting, code completion, and code folding.
- Supports major programming languages like JavaScript, TypeScript, Python, Java, C, C++, etc.
- Built using the Monaco Editor from Microsoft that powers Visual Studio Code.

### Terminal
- A terminal emulator that allows you to run shell commands.
- Supports common shell commands like `ls`, `cd`, `mkdir`, `rm`, etc.
- Built using the xterm.js library used by popular projects such as VS Code, Replit, Azure Cloud Shell and JupyterLab.

### Code Execution
 - Real time code execution in the Docker container and streaming the output back to the client using WebSockets.

<!-- ### Code Execution
- A code execution environment that allows you to run code in various programming languages.
- Supports running code in the browser using WebAssembly.
- Built using the WebAssembly System Interface (WASI) that allows you to run WebAssembly modules outside the browser. -->

### File Explorer
- A file explorer that allows you to navigate through the files and directories.
- Supports creating, renaming, deleting files and directories. (coming soon)

### Live Preview
- A live preview of the web application that updates in real-time as you type code.
- Supports HTML, CSS, and JavaScript.
- Built using the iframe element that allows you to embed web content in your web page.

## Tech Stack
- Frontend: React, JavaScript
- Backend: Node.js, Express.js
- Real-time Communication: Socket.io
- Containerization: Docker
<!-- - Database: MongoDB (Atlas) (coming soon)
- Cloud: AWS (coming soon) -->

## Getting Started
1. Backend
   See the [README.md](./backend/README.md) in the `backend` directory for more information.

2. Frontend
    See the [README.md](./frontend/README.md) in the `frontend` directory for more information.

## Coming Soon
- Code Sharing 
- Collaboration 


## License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Acknowledgements
- [React](https://reactjs.org/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Socket.io](https://socket.io/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [xterm.js](https://xtermjs.org/)
- [Monaco Editor](https://microsoft.github.io/monaco-editor/)
