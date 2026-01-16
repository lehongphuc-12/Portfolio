import React from "react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { GlassCard } from "./ui/GlassCard";
import { SKILLS, CERTIFICATIONS } from "../constants";
import {
  Layout,
  Database,
  Smartphone,
  Terminal,
  Cpu,
  Code,
} from "lucide-react";

export const Skills: React.FC = () => {
  const frontendSkills = SKILLS.filter((s) => s.category === "frontend");
  const backendSkills = SKILLS.filter((s) => s.category === "backend");
  const toolsSkills = SKILLS.filter((s) => s.category === "tools");
  const otherSkills = SKILLS.filter((s) => s.category === "other");

  return (
    <SectionWrapper id="skills">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Technical <span className="text-cyan-400">Arsenal</span>
        </h2>
        <p className="text-slate-400 max-w-2xl">
          A comprehensive overview of the technologies and tools I use to bring
          ideas to life. Organized to show the breadth of my full-stack
          capabilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-fr">
        {/* Main Feature Card - Frontend */}
        <GlassCard className="md:col-span-2 md:row-span-2 p-8 flex flex-col justify-between group">
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20">
              <Layout className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Frontend Mastery
            </h3>
            <p className="text-slate-400 mb-6">
              Building pixel-perfect, responsive, and accessible user
              interfaces. I specialize in the React ecosystem with a focus on
              animation and micro-interactions.
            </p>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-cyan-200 flex items-center gap-2"
                >
                  <skill.icon size={14} className="text-cyan-400" />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Decorative Background */}
          <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-500">
            <Layout size={300} />
          </div>
        </GlassCard>

        {/* Backend Card */}
        <GlassCard className="md:col-span-1 p-6 flex flex-col gap-4">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
            <Database className="text-indigo-400" size={20} />
          </div>
          <h3 className="text-xl font-bold text-white">Backend</h3>
          <div className="flex flex-wrap gap-3">
            {backendSkills.map((skill) => (
              <div key={skill.name} className="flex flex-col w-full gap-1">
                <div className="flex justify-between text-xs font-mono text-slate-400">
                  <span>{skill.name}</span>
                  {skill.level && <span>{skill.level}%</span>}
                </div>
                {skill.level && (
                  <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-500 transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Certifications */}
        <GlassCard className="md:col-span-1 p-6 flex flex-col gap-4 bg-gradient-to-br from-amber-900/30 to-slate-900/40">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
            <Database className="text-amber-400" size={20} />
          </div>
          <h3 className="text-xl font-bold text-white">Certifications</h3>
          <div className="space-y-2">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-2 text-sm text-slate-400"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <div className="flex-1">
                  <div className="text-slate-300">{cert.name}</div>
                  <div className="text-xs text-slate-500">
                    {cert.issuer} • {cert.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Tools Card */}
        <GlassCard className="md:col-span-1 p-6 flex flex-col gap-4">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
            <Terminal className="text-green-400" size={20} />
          </div>
          <h3 className="text-xl font-bold text-white">Tools & Ops</h3>
          <div className="flex flex-wrap gap-2">
            {toolsSkills.map((skill) => (
              <span
                key={skill.name}
                className="px-2 py-1 bg-white/5 border border-white/5 rounded text-xs text-slate-300 hover:border-green-400/30 transition-colors"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </GlassCard>

        {/* Meta/System Design */}
        <GlassCard className="md:col-span-1 p-6 bg-gradient-to-br from-indigo-900/40 to-slate-900/40">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
            <Cpu className="text-purple-400" size={20} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Systems</h3>
          <p className="text-xs text-slate-500 mb-4">
            Focusing on scalability and clean architecture.
          </p>
          <div className="space-y-2">
            {otherSkills.length > 0 ? (
              otherSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  {skill.name}
                </div>
              ))
            ) : (
              <div className="flex flex-wrap gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse delay-75" />
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse delay-150" />
              </div>
            )}
          </div>
        </GlassCard>
      </div>
    </SectionWrapper>
  );
};
