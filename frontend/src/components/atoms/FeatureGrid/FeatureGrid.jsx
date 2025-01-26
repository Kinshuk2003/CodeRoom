import { FiCpu } from "react-icons/fi";
import { HiOutlineGlobe } from "react-icons/hi";
import { LuBoxes } from "react-icons/lu";


export const FeatureGrid = ({ isVisible }) => {
    const feature = [
        { icon: FiCpu, title: "Integrated Tools", desc: "Built-in terminal and Browser" },
        { icon: HiOutlineGlobe, title: "Collaborate Anywhere", desc: "Work with your team in real-time, no matter where they are in the world." },
        { icon: LuBoxes, title: "Instant Setup", desc: "Start coding immediately with pre-configured development environments." }
      ]

    return (
        <section className="container mx-auto px-4 py-20" id="features">
            <div className="grid md:grid-cols-3 gap-8">
                { feature.map((feature, index) => (
                    <div key={index}
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
    )
}
