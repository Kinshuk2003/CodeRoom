import { FiCodesandbox } from "react-icons/fi";


export const Logo = () => {
    
    return (
        <div className="flex items-center space-x-2">
            <FiCodesandbox className="w-8 h-8 text-blue-400 animate-float" />
            <span className="text-xl font-bold">CodeRoom</span>
        </div>
    )
}
