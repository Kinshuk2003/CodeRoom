import {IoIosArrowForward, IoIosArrowDown} from "react-icons/io";
import { useState } from "react";
import { FileIcon } from "../../atoms/FileIcon/FileIcon";
import { useEditorSocketStore } from "../../../store/editorSocketStore";
import { useFileContextMenuStore } from "../../../store/fileContextMenuStore";


export const TreeNode = ({fileFolderData}) => {
    
    const [visibility, setVisibility] = useState({});
    const {editorSocket} = useEditorSocketStore();
    
    const {
            setFile, 
            setIsOpen: setFileContextMenuIsOpen, 
            setX: setFileContextMenuX, 
            setY: setFileContextMenuY} = useFileContextMenuStore();

    function toggleVisibility(name) {
        setVisibility({
            ...visibility,
            [name]: !visibility[name]
        });
    }

    function computeExtension(filename) {
        const names = filename.split(".");
        return names[names.length - 1];
    }

    function handleDisplayFile(fileFolderData) {
        if (!editorSocket) {
            console.error("Editor socket is not initialized");
            return;
        }
        console.log("Reading file", fileFolderData);
        editorSocket.emit("readFile", {
            fileOrFolderPath: fileFolderData.path,
        });
    }

    function handleContextMenuForFiles(e, path) {
        e.preventDefault();
        console.log("Right Clicked on file", path);
        setFile(path);
        setFileContextMenuX(e.clientX);
        setFileContextMenuY(e.clientY);
        setFileContextMenuIsOpen(true);
    }
    
    return (
        fileFolderData && (
            <div
                style={{
                    paddingLeft: "5px",
                    color: "white"
                }}
            >
                {fileFolderData.children ? (
                    /** The current Node is Folder, Render it as Button */
                    <button 
                        onClick={() => toggleVisibility(fileFolderData.name)}
                        style={{
                            outline: "none",
                            border: "none",
                            color: "white",
                            cursor: "pointer",
                            backgroundColor: "transparent",
                            paddingTop: "15px",
                            fontSize: "15px"
                        }}
                    > 
                        {visibility[fileFolderData.name] ? <IoIosArrowDown style={{height:"15px", width:"15px"}}/> : <IoIosArrowForward style={{height:"15px", width:"15px"}}/>}
                        {fileFolderData.name}
                    </button>
                    ): (
                        /** The current Node is File, Render it as <p> tag */
                            <div style={{display: "flex", alignItems:"center"}}>
                                <FileIcon extension={computeExtension(fileFolderData.name)} />
                                <p
                                style={{
                                    paddingTop: "5px",
                                    fontSize: "15px",
                                    cursor: "pointer",
                                    color: "white",
                                    marginLeft: "5px"
                                }}
                                onContextMenu={(e) => handleContextMenuForFiles(e, fileFolderData.path)}  
                                onDoubleClick={() => handleDisplayFile(fileFolderData)}
                                >
                                    {fileFolderData.name}
                                </p>
                            </div>
                    )
            }
                {visibility[fileFolderData.name] && fileFolderData.children && (
                        fileFolderData.children.map((child) => (
                            <TreeNode key={child.name} fileFolderData={child}/>
                        ))
                    )
                }
            </div>
        )
    )
}