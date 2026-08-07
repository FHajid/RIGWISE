import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Features from './Components/Features';

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  );
}