import { RiCloseLargeLine } from "react-icons/ri";
import { useEditorSocketStore } from "../../../store/editorSocketStore";


export function TabBar({ tabs, onTabClick, onTabClose }) {
    const {editorSocket} = useEditorSocketStore();

    function handleTabClick(tab) {
        onTabClick(tab);
        editorSocket.emit("readFile", {
            fileOrFolderPath: tab.path,
            fileOrFolderName: tab.name
        });

    }

    if (tabs.length === 0) {
        return null;
    }

    return (
        <div className="flex bg-gray-900 border-b border-gray-700 overflow-x-auto">
            {   tabs.map((tab) => (
                <div key={tab.id}
                    className={`group flex items-center min-w-[120px] max-w-[200px] h-9 px-3 border-r border-gray-700 cursor-pointer
                    ${tab.isActive ? 'bg-gray-800' : 'bg-gray-900 hover:bg-gray-800/50'}`}
                    onClick={() => handleTabClick(tab)}
                >
                    <span className="flex-1 truncate text-sm text-gray-300">
                        {tab.title}
                    </span>
                    <button className="ml-2 p-1 rounded-sm opacity-0 group-hover:opacity-100 hover:bg-gray-700"
                            onClick={(e) => { 
                                e.stopPropagation();
                                onTabClose(tab.id);
                            }}
                    >
                        <RiCloseLargeLine className="w-3 h-3 text-gray-400" />
                    </button>
                </div>
            ))}
        </div>
    );
}
