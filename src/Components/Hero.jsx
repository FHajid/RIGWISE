import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
return (
    <section className="bg-white text-slate-900 border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Real-Time Telemetry & AI for Critical Infrastructure
        </h1>
        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Rigwise is a cutting-edge telemetry and AI platform designed for high-stakes operations. Our solution enables real-time monitoring, predictive analytics, and automated compliance reporting for critical infrastructure.
        </p>
        <div className="mt-8 flex gap-4">
            <a href="#demo" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:brightness-110 shadow-lg shadow-cyan-500/25 transition-all">
            Schedule Demo
            <ArrowUpRight className="w-4 h-4 " />
            </a>
            <a href="#learn" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition-all">
            Learn More
            </a>
        </div>
        </div>
        </div>
    </section>
);
}
