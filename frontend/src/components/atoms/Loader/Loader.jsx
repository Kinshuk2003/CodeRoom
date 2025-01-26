import { FiCodesandbox } from "react-icons/fi";


export const Loader = ({text}) => {
  
    return (
        <div className="flex flex-col items-center justify-center min-h-[200px]">
            <div className="animate-bounce-slow">
                <FiCodesandbox className="text-[#646cff] text-5xl animate-spin-slow" />
            </div>
            <p className="mt-4 text-lg text-[#646cff]">{text}</p>
        </div>
    );
}
