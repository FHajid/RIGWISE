import { Shield, ChevronRight } from 'lucide-react';

export default function Navbar() 
    { return (
    <header className="fixed top-0 left-0 right-0 z-50  border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
        <div className="p-2  from-cyan-500 to-blue-600 rounded-lg shadow-lg shadow-cyan-500/20">
            <Shield className="w-6 h-6 text-slate-950 stroke-[2.5]" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
            RIG<span className="text-cyan-400">WISE</span>
            </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
        <a href="#solutions" className="hover:text-cyan-400 transition-colors">Solutions</a>
        <a href="#platform" className="hover:text-cyan-400 transition-colors">Platform</a>
        <a href="#analytics" className="hover:text-cyan-400 transition-colors">Telemetry & AI</a>
        <a href="#company" className="hover:text-cyan-400 transition-colors">Company</a>
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-4">
        <a href="#login" className="hidden sm:inline-block text-sm font-medium text-slate-300 hover:text-white">
            Sign In
        </a>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg  from-cyan-500 to-blue-600 text-slate-950 font-semibold text-sm hover:brightness-110 shadow-lg shadow-cyan-500/25 transition-all">
            Schedule Demo
            <ChevronRight className="w-4 h-4 " />
        </button>
        </div>
    </div>
    </header>
);
}