export const CodePreview = ({ isVisible }) => {

    return (
        <div className={`bg-[#1e1e1e] border border-[#404040] max-w-3xl mx-auto rounded-xl p-6 mb-20 transition-all duration-1000 delay-900 hover:border-[#0098fa] hover:shadow-lg hover:shadow-[#0098fa]/10 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
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
    )
}
