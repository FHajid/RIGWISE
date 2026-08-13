const features = [
  {
    number: "01",
    title: "Edge Telemetry",
    desc: "Stream high-frequency controller data with zero packet loss in remote conditions."
  },
  {
    number: "02",
    title: "Predictive Failure",
    desc: "Machine learning algorithms flag acoustic and thermal anomalies prior to outage."
  },
  {
    number: "03",
    title: "Automated Logging",
    desc: "Generate audit-ready regulatory compliance reports automatically."
  },
  {
    number: "04",
    title: "Enterprise Security",
    desc: "End-to-end encrypted architecture meeting strict SOC2 Type II standards."
  }
];

export default function Features() {
  return (
    <section className="bg-white border-b border-slate-200 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200">
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400">
            System Capabilities
          </h2>
          <span className="text-xs font-mono text-slate-400">04 CORE MODULES</span>
        </div>

        {/* Minimal Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-b border-slate-200">
          {features.map((item, idx) => (
            <div key={idx} className="py-8 md:py-0 md:px-6 first:pl-0 last:pr-0">
              <span className="text-xs font-mono text-slate-400">{item.number}</span>
              <h3 className="text-base font-bold text-slate-950 mt-3">{item.title}</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}