import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { io } from 'socket.io-client';
import { Allotment } from "allotment";
import { Divider } from "antd";
import { useTreeStructureStore } from "../store/treeStructureStore";
import { useEditorSocketStore } from "../store/editorSocketStore";
import { useTerminalSocketStore } from "../store/terminalSocketStore";
import { useTabStore } from "../store/tabBarStore";
import { useBrowserTabBarStore } from "../store/browserTabBarStore";
import { BrowserTabBar } from "../components/atoms/BrowserTabBar/BrowserTabBar";
import EditorComponent from "../components/molecules/EditorComponent/EditorComponent";
import BrowserTerminal from "../components/molecules/BrowserTerminal/BrowserTerminal";
import { TabBar } from "../components/molecules/TabBar/TabBar";
import { TreeStructure } from "../components/organisms/TreeStructure/TreeStructure";
import { Browser } from "../components/organisms/Browser/Browser";
import { Copilot } from "../components/organisms/Copilot/Copilot";
import "allotment/dist/style.css";
import "./ProjectPlayground.css";


export default function ProjectPlayground() {
    const {projectId: projectIdParam} = useParams();

    const {projectId, setProjectId} = useTreeStructureStore();
    const {setEditorSocket} = useEditorSocketStore();
    const { terminalSocket, setTerminalSocket } = useTerminalSocketStore();
    const { tabs, activateTab, closeTab } = useTabStore();
    const {browser} = useBrowserTabBarStore();
    
    useEffect(() => {
        if (projectIdParam) {
            setProjectId(projectIdParam);

            const editorSocketConn = io(`${import.meta.env.VITE_BACKEND_URL}/editor`, {
                query: {
                    projectId: projectIdParam
                }
            });
            
            setEditorSocket(editorSocketConn);
        }
    }, [setProjectId, projectIdParam, setEditorSocket]);

    useEffect(() => {
        if (projectIdParam) {
            const ws = new WebSocket(`${import.meta.env.VITE_WS_URL}/terminal?projectId=`+projectIdParam);
            ws.onopen = () => console.log("WebSocket connected!");
            ws.onerror = (error) => console.error("WebSocket error:", error);
            ws.onclose = () => console.log("WebSocket connection closed.");
            setTerminalSocket(ws);
            console.log("ws", ws);
            return () => ws.close();
        }
    }, [projectIdParam, setTerminalSocket]);

    return (
        <div className="project-playground">
            <Allotment>
                {/* Left Sidebar */}
                <Allotment.Pane preferredSize={380} minSize={200} maxSize={400}>
                    {   projectId && (
                        <div className="tree-structure">
                            <TreeStructure />
                        </div>
                    )}
                </Allotment.Pane>

                {/* Main Content */}
                <Allotment.Pane>
                    <Allotment vertical>
                        <Allotment.Pane preferredSize="60%" minSize={300}>
                            {/* Editor Tab Bar */}
                            <div className="flex-1 flex flex-col">
                                <TabBar tabs={tabs} 
                                    onTabClick={(tab) => activateTab(tab.id)}
                                    onTabClose={closeTab}
                                />
                            </div>
                            {/* Editor */}
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
                <Allotment.Pane preferredSize={300} minSize={250} className="border-l border-[#3e3e54]">
                    {/* Browser Tab Bar*/}   
                    <BrowserTabBar />
                    
                    {   browser && projectIdParam && terminalSocket && (
                        <Browser projectId={projectIdParam} />
                    )}

                    {   !browser && (
                        <Copilot />
                    )}
                </Allotment.Pane>
            </Allotment>
        </div>
    )
}
