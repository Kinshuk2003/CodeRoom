import {IoIosArrowForward, IoIosArrowDown} from "react-icons/io";
import { FaRegFolder } from "react-icons/fa";
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
        setY: setFileContextMenuY } = useFileContextMenuStore();

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
            fileOrFolderName: fileFolderData.name
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
        <div className="select-none">
            <div className={`flex items-center py-1 px-2 text-gray-100`}>
                {   fileFolderData && (
                    <div>
                        {   fileFolderData.children ? (
                            /** The current Node is Folder, Render it as Button  */
                            <button className="flex items-center gap-1 hover:bg-gray-700/50 cursor-pointer py-1 px-2"
                                onClick={() => toggleVisibility(fileFolderData.name)}
                            > 
                                <span className="w-4 h-4">
                                    {visibility[fileFolderData.name] ? <IoIosArrowDown/> : <IoIosArrowForward/>}
                                </span>
                                <FaRegFolder className="w-4 h-4 text-blue-400" />
                                <span className="ml-1 text-sm">{fileFolderData.name}</span>
                            </button>
                        ):(
                            /** The current Node is File, Render it as <p> tag */
                            <div className="flex items-center gap-1 hover:bg-gray-700/50 cursor-pointer py-1 px-2">
                                <span className="w-4 h-4">
                                    <FileIcon extension={computeExtension(fileFolderData.name)} />
                                </span>
                                <span className="ml-1 text-sm"
                                    onContextMenu={(e) => handleContextMenuForFiles(e, fileFolderData.path)}  
                                    onDoubleClick={() => handleDisplayFile(fileFolderData)}
                                >
                                    {fileFolderData.name}
                                </span>
                            </div>
                        )}
                        {   visibility[fileFolderData.name] && fileFolderData.children && (
                                fileFolderData.children.map((child) => (
                                    <TreeNode key={child.name} fileFolderData={child}/>
                                ))
                            )
                        }
                    </div>)
                }
            </div>
        </div>
    )
}
