import { useNavigate } from 'react-router-dom';
import { FiCheck } from "react-icons/fi";

export const Pricing = ({isVisible}) => {
    const navigate = useNavigate();
    const freeTier = [
        "5 public & private Repositories",
        "Real-time Collaboration",
        "Terminal Access",
        "Built-in Browser",
        "Community Support"
      ];

    return (
        <div id="pricing"
            className={`bg-[#252526] border border-[#404040] max-w-md mx-auto rounded-xl p-8 mb-20 transition-all duration-1000 delay-900 hover:border-[#0098fa] hover:shadow-lg hover:shadow-[#0098fa]/10 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
        >
            <h2 className="text-4xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Simple Pricing</span>
            </h2>
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Free Forever</h3>
                <p className="text-[#a7a7a7] mb-4">Everything you need to start coding</p>
                <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">$0</span>
                    <span className="text-[#a7a7a7] ml-2">/month</span>
                </div>
            </div>
            <div className="space-y-4 mb-8">
                {freeTier.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                        <FiCheck className="w-5 h-5 text-[#0098fa]" />
                        <span className="text-[#d4d4d4]">{feature}</span>
                    </div>
                ))}
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-white"
                onClick={() => navigate('/project/create')}
            >
                Get Started Free
            </button>
        </div>
    )
}
