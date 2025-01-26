import { FiCodesandbox } from "react-icons/fi";


export const Footer = () => {
    
    return (
        <footer className="border-t border-slate-800 mt-20">
            <div className="container mx-auto px-4 py-8">
                <div className={`flex justify-between items-center transform transition-all duration-1000`}>
                    <div className="flex items-center space-x-2">
                        <FiCodesandbox className="w-6 h-6 text-blue-400" />
                        <span className="font-bold">CodeRoom</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        Built with ❤️ in India.
                    </div>
                    <div className="text-sm text-gray-400">
                        © 2024 CodeRoom. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}
