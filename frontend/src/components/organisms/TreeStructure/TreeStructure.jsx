import { useTreeStructureStore } from "../../../store/treeStructureStore"
import { useEffect } from "react";
import { TreeNode } from "../../molecules/TreeNode/TreeNode";
import { useFileContextMenuStore } from "../../../store/fileContextMenuStore";
import { FileContextMenu } from "../../molecules/ContextMenu/FileContextMenu";

export const TreeStructure = () => {
    
    const {treeStructure, setTreeStructure} = useTreeStructureStore();
    const {
        file,
        isOpen: isFileContextOpen,
        x: fileContextX,
        y: fileContextY} = useFileContextMenuStore();

    useEffect(() => {
        
        if (treeStructure) {
            console.log("tree", treeStructure);
        }else {
            setTreeStructure();
            console.log("hello", treeStructure);
        }
    }, [treeStructure, setTreeStructure]);

    return (
        <>
        {isFileContextOpen && fileContextX && fileContextY && (
            <FileContextMenu x={fileContextX} y={fileContextY} path={file}/>
        )}
        <div className="h-screen overflow-y-auto">
            <div className="p-2 text-gray-200 text-sm font-medium border-b border-gray-700">
                EXPLORER
            </div>
            <div className="py-2">
                <TreeNode fileFolderData={treeStructure}/>
            </div>
        </div>
        </>
    )
}