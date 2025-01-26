import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiGithub } from "react-icons/fi";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Footer } from '../components/atoms/Footer/Footer';
import { Logo } from '../components/atoms/Logo/Logo';
import { FeatureGrid } from '../components/atoms/FeatureGrid/FeatureGrid';
import { CodePreview } from '../components/atoms/CodePreview/CodePreview';
import { Pricing } from '../components/atoms/Pricing/Pricing';

function Landing() {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
            
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0098fa] rounded-full filter blur-[128px] animate-float"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00f2fe] rounded-full filter blur-[128px] animate-float" style={{ animationDelay: '-3s' }}></div>
            </div>

            {/* Header */}
            <header className="container mx-auto px-4 py-6">
                <nav className={`flex items-center justify-between transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
                    <Logo />
                    <div className="flex items-center space-x-8">
                        <a href="#features" className="hover:text-blue-400 transition-colors hover:scale-105 transform duration-200">Features</a>
                        <a href="#pricing" className="hover:text-blue-400 transition-colors hover:scale-105 transform duration-200">Pricing</a>
                        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                                onClick={() => navigate('/project/create')}
                        >
                            Start Coding
                        </button>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-20 text-center">
                <h1 className={`text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text animate-gradient transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    Development Environment,<br />Reimagined
                </h1>

                <h3 className={`text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Code.</span>{' '}
                    <span className="text-white">Collaborate.</span>{' '}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Create.</span>
                </h3>

                <p className={`text-xl text-gray-300 mb-12 max-w-2xl mx-auto transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    A powerful cloud IDE for Web development that lets you code, build, and deploy from anywhere. No setup required.
                </p>

                <div className={`flex justify-center space-x-4 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                            onClick={() => navigate('/project/create')}
                    >
                        <span>Try Now</span>
                        <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            onClick={() => window.open('https://github.com/Kinshuk2003/CodeX-IDE')}
                    >
                        <FiGithub className="w-4 h-4" />
                        <span>Star on GitHub</span>
                    </button>
                </div>
            </section>

            {/* Feature Grid */}
            <FeatureGrid isVisible={isVisible} />

            {/* Code Preview */}
            <CodePreview isVisible={isVisible} />

            {/* Pricing Section */}
            <Pricing isVisible={isVisible} />

            {/* CTA Section */}
            <section className="container mx-auto px-4 py-20 text-center">
                <div className={`bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-12 transform transition-all duration-1000 hover:scale-[1.02] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                    <h2 className="text-4xl font-bold mb-6">Ready to Start Coding?</h2>
                    <p className="text-xl text-gray-300 mb-8">Join thousands of developers who trust CodeRoom for their projects.</p>
                    <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                            onClick={() => navigate('/project/create')}
                    >
                        Get Started Free
                    </button>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Landing;