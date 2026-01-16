import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import Projects from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { CustomCursor } from "./components/ui/CustomCursor";
import { BackgroundEffects } from "./components/ui/BackgroundEffects";
import { BackToTop } from "./components/ui/BackToTop";
import { PROFILE, NAV_ITEMS, SOCIAL_LINKS } from "./constants";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      <CustomCursor />
      <BackgroundEffects />
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

      <BackToTop />
      <footer className="py-12 border-t border-white/5 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500 mb-4">
                {PROFILE.name.split(" ")[0]}.DEV
              </h3>
              <p className="text-slate-400 text-sm max-w-xs">{PROFILE.bio}</p>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-2">
              <h4 className="text-white font-semibold mb-2">Quick Links</h4>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-cyan-400 transition-colors"
                  >
                    <link.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 text-center">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
            </p>
            <p className="text-slate-600 text-xs mt-2">
              Built with <span className="text-cyan-400">React</span> &{" "}
              <span className="text-indigo-400">Tailwind CSS</span>
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </footer>
    </div>
  );
}

export default App;
