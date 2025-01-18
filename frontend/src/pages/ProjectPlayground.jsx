import { useParams } from "react-router-dom";
import EditorComponent from "../components/molecules/EditorComponent/EditorComponent";
import { EditorButton } from "../components/atoms/EditorButton/EditorButton";
import { TreeStructure } from "../components/organisms/TreeStructure/TreeStructure";
import { useEffect, useState } from "react";
import { useTreeStructureStore } from "../store/treeStructureStore";
import { useEditorSocketStore } from "../store/editorSocketStore";
import { io } from 'socket.io-client';
import BrowserTerminal from "../components/molecules/BrowserTerminal/BrowserTerminal";
import { useTerminalSocketStore } from "../store/terminalSocketStore";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import "./ProjectPlayground.css";
import { Browser } from "../components/organisms/Browser/Browser";
import { Divider } from "antd";


export default function ProjectPlayground() {
    
    const {projectId: projectIdParam} = useParams();
    const {projectId, setProjectId} = useTreeStructureStore();
    const {setEditorSocket} = useEditorSocketStore();
    const { terminalSocket, setTerminalSocket } = useTerminalSocketStore();
    const [loadBrowser, setLoadBrowser] = useState(false);

    
    useEffect(() => {
        if (projectIdParam) {
            setProjectId(projectIdParam);

            const editorSocketConn = io(`${import.meta.env.VITE_BACKEND_URL}/editor`, {
                query: {
                    projectId: projectIdParam
                }
            });

            try {
                const ws = new WebSocket("ws://localhost:3000/terminal?projectId="+projectIdParam);
                setTerminalSocket(ws);
                
            } catch(error) {
                console.log("error in ws", error);
            }
            
            setEditorSocket(editorSocketConn);
        }
    

    }, [setProjectId, projectIdParam, setEditorSocket, setTerminalSocket]);

    return (
        <div className="project-playground">
            <Allotment>
                {/* Left Sidebar */}
                <Allotment.Pane preferredSize={250} minSize={200} maxSize={400}>
                    {projectId && (
                        <div className="tree-structure">
                            <TreeStructure />
                        </div>
                    )}
                </Allotment.Pane>

                {/* Main Content */}
                <Allotment.Pane>
                    <Allotment vertical>
                        {/* Editor */}
                        <Allotment.Pane preferredSize="70%" minSize={300}>
                            <div className="editor-component">
                                <EditorComponent />
                            </div>
                        </Allotment.Pane>
                        
                        {/* Terminal */}
                        <Allotment.Pane preferredSize="30%" minSize={100}>
                            <Divider style={{color: "white", border: "1px solid #333254", margin: 0}} > Terminal </Divider>
                            <div className="browser-terminal">
                                <BrowserTerminal />
                            </div>
                        </Allotment.Pane>
                    </Allotment>
                </Allotment.Pane>
                {/* Browser */}
                <Allotment.Pane preferredSize={300} minSize={250}>
                    <div className="browser-container">
                        <button onClick={() => setLoadBrowser(true)}>Load my browser</button>
                        {loadBrowser && projectIdParam && terminalSocket && (
                            <Browser projectId={projectIdParam} />
                        )}
                    </div>
                </Allotment.Pane>
            </Allotment>
            {/* <div>
                <button onClick={() => setLoadBrowser(true)}>Browser</button>
               {loadBrowser && projectId && terminalSocket && <Browser projectId={projectIdParam}/>}
            </div> */}
        </div>
        

    )
}