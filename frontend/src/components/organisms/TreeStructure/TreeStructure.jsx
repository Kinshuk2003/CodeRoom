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
        <div>
            <p
                style={{
                    color: 'white',
                    fontSize: '20px',
                    paddingLeft: '10px'
                }}
            
            >EXPLORER</p>
            <TreeNode fileFolderData={treeStructure}/>
        </div>
        </>
    )
}