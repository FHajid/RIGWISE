import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        
        {/* Editorial Headline */}
        <div className="max-w-4xl">
          <p className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-4">
            Rigwise // Operations Platform
          </p>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.05]">
            Intelligent asset telemetry for zero-downtime energy operations.
          </h1>
        </div>

        {/* Action Row */}
        <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="text-sm text-slate-500 max-w-xl leading-relaxed">
            Unify real-time edge monitoring, compliance logging, and predictive maintenance across global operations in a single stream.
          </p>

          <button className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-slate-950 text-white font-medium text-sm hover:bg-slate-800 transition-colors shrink-0">
            <span>Schedule Demo</span>
            <ArrowUpRight className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

        {/* Minimal Metrics Grid */}
        <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-mono tracking-tight">
              99.8%
            </div>
            <div className="text-xs font-mono text-slate-500 mt-1 uppercase">Fleet Availability</div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-mono tracking-tight">
              $1.4M
            </div>
            <div className="text-xs font-mono text-slate-500 mt-1 uppercase">Avg. NPT Saved / Yr</div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-mono tracking-tight">
              &lt;15ms
            </div>
            <div className="text-xs font-mono text-slate-500 mt-1 uppercase">Edge Sync Latency</div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-mono tracking-tight">
              ISO 27001
            </div>
            <div className="text-xs font-mono text-slate-500 mt-1 uppercase">Encrypted Pipeline</div>
          </div>
        </div>

      </div>
    </section>
  );
}