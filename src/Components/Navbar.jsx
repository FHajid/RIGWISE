export default function Navbar() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        
        {/* Logo */}
        <span className="text-sm font-bold tracking-widest uppercase text-slate-950 font-mono">
          Rigwise<span className="text-slate-400">.io</span>
        </span>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-600">
          <a href="#platform" className="hover:text-slate-950 transition-colors">Platform</a>
          <a href="#solutions" className="hover:text-slate-950 transition-colors">Solutions</a>
          <a href="#telemetry" className="hover:text-slate-950 transition-colors">Telemetry</a>
          <a href="#company" className="hover:text-slate-950 transition-colors">Company</a>
        </nav>

        {/* Minimal Action */}
        <button className="text-xs font-mono uppercase tracking-wider text-slate-950 font-semibold hover:text-slate-600 transition-colors">
          Sign In →
        </button>

      </div>
    </header>
  );
}