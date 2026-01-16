import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { PROFILE, SOCIAL_LINKS } from "../constants";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 w-full h-full bg-slate-950">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container relative z-10 px-6 mx-auto text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-3/5 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-mono backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Available for New Projects
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                {PROFILE.name}
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              {PROFILE.title}. {PROFILE.bio}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-white text-slate-950 rounded-full font-semibold overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                  Check My Work <ArrowRight size={18} />
                </span>
              </a>

              <a
                href="#contact"
                className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-white font-medium"
              >
                Contact Me
              </a>

              {PROFILE.resumeUrl && (
                <a
                  href={PROFILE.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-white font-medium flex items-center gap-2"
                >
                  <Download size={18} /> Download CV
                </a>
              )}
            </div>

            <div className="flex items-center gap-6 pt-8 text-slate-500">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors transform hover:scale-110"
                  aria-label={social.platform}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Abstract Visual / Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:w-2/5 relative"
          >
            <div className="relative w-full aspect-square max-w-[400px] mx-auto">
              {/* Spinning Ring */}
              <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-dashed border-cyan-500/30 animate-[spin_15s_linear_infinite_reverse]" />

              {/* Glass Card in Hero */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-80 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transform rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
                  <div className="h-full flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="h-2 w-1/3 bg-white/10 rounded-full" />
                      <div className="h-2 w-full bg-white/10 rounded-full" />
                      <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-white/5">
                      <div className="font-mono text-xs text-cyan-300">
                        &lt;Code /&gt;
                      </div>
                      <div className="mt-2 text-2xl font-bold text-white">
                        100%
                      </div>
                      <div className="text-xs text-slate-400">Efficiency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
