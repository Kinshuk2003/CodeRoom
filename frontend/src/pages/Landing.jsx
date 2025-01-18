import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCpu, FiGithub, FiCheck } from "react-icons/fi";
import { HiOutlineGlobe, HiOutlineArrowRight } from "react-icons/hi";
import { LuBoxes } from "react-icons/lu";
import { Footer } from '../components/atoms/Footer/Footer';
import { Logo } from '../components/atoms/Logo/Logo';

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
          {/* <span className="gradient-text">Code.</span>{' '}
          <span className="text-white">Collaborate.</span>{' '}
          <span className="gradient-text">Create.</span>           */}
        Development Environment,<br />Reimagined
        </h1>
        <h3 className={`text-5xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
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

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20" id="features">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: FiCpu, title: "Integrated Tools", desc: "Built-in terminal and Browser" },
            { icon: HiOutlineGlobe, title: "Collaborate Anywhere", desc: "Work with your team in real-time, no matter where they are in the world." },
            { icon: LuBoxes, title: "Instant Setup", desc: "Start coding immediately with pre-configured development environments." }
          ].map((feature, index) => (
            <div 
              key={index}
              className={`bg-slate-800/50 p-6 rounded-xl border border-slate-700 transform transition-all duration-700 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <feature.icon className="w-12 h-12 text-blue-400 mb-4 animate-float" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Code Preview */}
      <div className={`bg-[#1e1e1e] border border-[#404040] max-w-3xl mx-auto rounded-xl p-6 mb-20 transition-all duration-1000 delay-900 hover:border-[#0098fa] hover:shadow-lg hover:shadow-[#0098fa]/10 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <pre className="text-sm font-mono">
            <code>
              <span className="text-[#569cd6]">import</span>{' '}
              <span className="text-[#9cdcfe]">React</span>{' '}
              <span className="text-[#569cd6]">from</span>{' '}
              <span className="text-[#ce9178]">'react'</span>;{'\n\n'}
              <span className="text-[#569cd6]">function</span>{' '}
              <span className="text-[#dcdcaa]">App</span>() {'{'}
              {'\n  '}
              <span className="text-[#569cd6]">return</span> ({'\n    '}
              <span className="text-[#808080]">&lt;</span>
              <span className="text-[#4ec9b0]">div</span>{' '}
              <span className="text-[#9cdcfe]">className</span>
              <span className="text-[#808080]">=</span>
              <span className="text-[#ce9178]">"container"</span>
              <span className="text-[#808080]">&gt;</span>
              {'\n      '}
              <span className="text-[#808080]">&lt;</span>
              <span className="text-[#4ec9b0]">h1</span>
              <span className="text-[#808080]">&gt;</span>
              Hello, Code Roomie!
              <span className="text-[#808080]">&lt;/</span>
              <span className="text-[#4ec9b0]">h1</span>
              <span className="text-[#808080]">&gt;</span>
              {'\n      '}
              <span className="text-[#6a9955]">// Start coding here...</span>
              {'\n    '}
              <span className="text-[#808080]">&lt;/</span>
              <span className="text-[#4ec9b0]">div</span>
              <span className="text-[#808080]">&gt;</span>
              {'\n  '});{'\n'}
              {'}'}
            </code>
          </pre>
        </div>

      {/* Pricing Section */}
      <div className={`bg-[#252526] border border-[#404040] max-w-md mx-auto rounded-xl p-8 mb-20 transition-all duration-1000 delay-900 hover:border-[#0098fa] hover:shadow-lg hover:shadow-[#0098fa]/10 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} id="pricing">
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
          {[
            "5 public & private Repositories",
            "Real-time Collaboration",
            "Terminal Access",
            "Built-in Browser",
            "Community Support"
          ].map((feature, index) => (
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