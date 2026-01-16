import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import Projects from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />

      <main>
        <Hero />

        {/* Decorative gradient seperator */}
        <div className="relative h-24 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950 z-10" />
          <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-600/20 blur-[100px] rounded-full" />
        </div>

        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="py-8 border-t border-white/5 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Designed & Built with
            <span className="text-cyan-400 px-1">React</span> +
            <span className="text-indigo-400 px-1">Tailwind</span>
          </p>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        </div>
      </footer>
    </div>
  );
}

export default App;
