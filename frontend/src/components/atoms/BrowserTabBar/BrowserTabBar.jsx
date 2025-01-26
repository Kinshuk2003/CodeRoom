import { RiChatAiLine } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa";
import { useBrowserTabBarStore } from "../../../store/browserTabBarStore";


export function BrowserTabBar( ) {
    const {browser, setBrowser, setCopilot} = useBrowserTabBarStore();

    return (
        <div className="flex bg-gray-900 border-b border-gray-700">
            <div className={`group flex items-center min-w-[120px] max-w-[200px] h-9 px-3 border-r border-gray-700 cursor-pointer
                ${browser ? 'bg-gray-800' : 'bg-gray-900 hover:bg-gray-800/50'}`}
                onClick={() => setBrowser()}
            >
                <span className="flex items-center gap-1 text-sm text-gray-300">
                    <FaGlobe className="w-4 h-4" />
                    Browser
                </span>
            </div>
            <div className={`group flex items-center min-w-[120px] max-w-[200px] h-9 px-3 border-r border-gray-700 cursor-pointer
                ${!browser ? 'bg-gray-800' : 'bg-gray-900 hover:bg-gray-800/50'}`}
                onClick={() => setCopilot()}
            >
                <span className="flex items-center gap-1 text-sm text-gray-300">
                    <RiChatAiLine className="w-4 h-4" />
                    Copliot Chat
                </span>
            </div>
        </div>
    );
}
