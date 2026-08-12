import { Cpu, Lock, BarChart3, Radio } from 'lucide-react';

const features = [
{
    icon: Radio,
    title: "Edge Telemetry Aggregation",
    desc: "Stream high-frequency sensor data directly from asset controllers with zero packet loss in remote environments."
  },
  {
    icon: Cpu,
    title: "Predictive Failure Detection",
    desc: "Machine learning models analyze acoustic and thermal signatures to flag component degradation before outages occur."
  },
  {
    icon: BarChart3,
    title: "Automated Compliance Logging",
    desc: "Generate audit-ready regulatory reports and environmental safety documentation automatically."
  },
  {
    icon: Lock,
    title: "Enterprise Security Architecture",
    desc: "End-to-end encrypted pipelines meeting SOC2 Type II and ISO 27001 standards for critical infrastructure."
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
            <span className="w-6 h-[2px] bg-cyan-600" />
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Built for High-Stakes Operations
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((item, idx) => (
            <div 
              key={idx} 
              className="p-6 bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-200"
            >
              <div className="p-2.5 bg-slate-950 text-cyan-400 w-fit">
                <item.icon className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="text-base font-bold text-slate-950 mt-5">{item.title}</h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}