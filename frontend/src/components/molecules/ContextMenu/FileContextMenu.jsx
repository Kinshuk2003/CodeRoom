import { useEditorSocketStore } from "../../../store/editorSocketStore";
import { useFileContextMenuStore } from "../../../store/fileContextMenuStore";

import "./FileContextMenu.css";

export const FileContextMenu = ({x, y, path}) => {

    const {setIsOpen } = useFileContextMenuStore();
    const {editorSocket} = useEditorSocketStore();

    function handleFileDelete(e) {
        e.preventDefault();
        console.log("Deleting file", path);
    }


    function handleFileDelete(e) {
        e.preventDefault();
        console.log("Deleting file", path);
        useEditorSocketStore.emit("deleteFile", {
            fileOrFolderPath: path
        });
    }
    
    return (
        <div
            onMouseLeave={() => setIsOpen(false)}
            style={{
                className: ".fileContextOptionsWrapper",
                top: y,
                left: x,
            }}
        >
            <button onClick={handleFileDelete} className="fileContextButton">Delete File</button>
            <button className="fileContextButton">Rename File</button>

        </div>
    )

}
