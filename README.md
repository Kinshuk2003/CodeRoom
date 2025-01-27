# CodeX-IDE

A web browser-based code sandbox for building scalable web applications in the cloud.

![Visitors](https://visitor-badge.glitch.me/badge?page_id=Kinshuk2003.CodeX-IDE)

### Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/DYJYtFtdlZg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### High Level System Design
![HLD Diagram](https://github.com/Kinshuk2003/CodeX-IDE/blob/main/High-level-system-design.png)

## Features

### Code Editor

- **Feature-rich editor** with syntax highlighting, code completion, and code folding.
- **Language support** for JavaScript, TypeScript, Python, Java, C, C++, and more.
- **Powered by Monaco Editor**, the same editor that drives Visual Studio Code.

### Terminal

- **Terminal emulator** to run shell commands directly in your browser.
- Supports common shell commands like `ls`, `cd`, `mkdir`, `rm`, and more.
- **Built using xterm.js**, the library behind popular projects like VS Code, Replit, Azure Cloud Shell, and JupyterLab.

### Code Execution

- **Real-time code execution** within a Docker container.
- Streams execution output back to the client using WebSockets.

<!-- ### Code Execution
- A code execution environment that allows you to run code in various programming languages.
- Supports running code in the browser using WebAssembly.
- Built using the WebAssembly System Interface (WASI) that allows you to run WebAssembly modules outside the browser. -->

### File Explorer

- **File explorer** for navigating files and directories.
- Features like creating, renaming, and deleting files and directories (coming soon).

### Live Preview

- **Live preview** of your web application that updates in real-time as you type code.
- Supports HTML, CSS, and JavaScript.
- Built using the `iframe` element for embedding web content seamlessly.

## Tech Stack

- **Frontend :**  React, JavaScript
- **Backend :**  Node.js, Express.js
- **Real-time Communication :** Socket.io
- **Containerization :** Docker
<!-- - Database: MongoDB (Atlas) (coming soon)
- Cloud: AWS (coming soon) -->

## Getting Started

### Backend

See the [README.md](./backend/README.md) file in the `backend` directory for setup instructions.

### Frontend

See the [README.md](./frontend/README.md) file in the `frontend` directory for setup instructions.

## Coming Soon

- **Code Sharing**: Share your code snippets effortlessly.
- **Collaboration**: Real-time collaboration with teammates.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Acknowledgements

We would like to acknowledge the following open source projects and technologies:

- [React](https://reactjs.org/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Socket.io](https://socket.io/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [xterm.js](https://xtermjs.org/)
- [Monaco Editor](https://microsoft.github.io/monaco-editor/)
