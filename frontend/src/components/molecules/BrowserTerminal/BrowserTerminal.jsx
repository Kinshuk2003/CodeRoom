import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import "@xterm/xterm/css/xterm.css"; // required styles
import { useEffect, useRef } from 'react';
import { AttachAddon } from '@xterm/addon-attach';
import { useParams } from 'react-router-dom';
import { useTerminalSocketStore } from '../../../store/terminalSocketStore';


export const BrowserTerminal = () => {
    
    const terminalRef = useRef(null);
    //const socket = useRef(null);
    //const {projectId: projectIdParam} = useParams();

    const  {terminalSocket} = useTerminalSocketStore();

    useEffect(() => {
        const terminal = new Terminal({
            cursorBlink: true,
            theme: {
                background: "#282a37",
                foreground: "#f8f8f3",
                cursor: "#f8f8f3",
                cursorAccent: "#282a37",
                red: "#ff5544",
                green: "#50fa7c",
                yellow: "#f1fa8c",
                cyan: "#8be9fd",
            },
            fontSize: 16,
            fontFamily: "Fira Code",
            convertEol: true, // convert CRLF to LF
        });
        terminal.open(terminalRef.current);
        const fitAddon = new FitAddon();
        terminal.loadAddon(fitAddon);
        fitAddon.fit();

        
        if (!terminalSocket) {
            terminalSocket.onopen = () => {
                const attachAddon = new AttachAddon(terminalSocket);
                terminal.loadAddon(attachAddon);
                //socket.current = ws;
            }
        }
        

        return () => { 
            terminal.dispose();
            socket.current.close();
        }
    }, [terminalSocket]);
    
    return (
        <div 
            ref={terminalRef}
            style={{
                width: '100%', 
                height: '25vh', 
                overflow: 'auto'
                }}
            className='terminal'
            id='terminal-container' 
        >

            
        </div>
    )
}