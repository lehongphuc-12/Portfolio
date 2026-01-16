import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { GlassCard } from './ui/GlassCard';
import { SkillCategory } from '../types';
import { Code, Database, Layout, Smartphone, Terminal, Cpu } from 'lucide-react';

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js"],
    span: 2, // Large block
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "GraphQL"],
    span: 1,
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "AWS", "Figma"],
    span: 1,
  },
  {
    title: "Architecture",
    skills: ["Microservices", "Serverless", "System Design"],
    span: 2, // Wide block
  }
];

export const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills">
      <div className="mb-12 text-center md:text-left">
         <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical <span className="text-cyan-400">Arsenal</span>
         </h2>
         <p className="text-slate-400 max-w-2xl">
            A comprehensive overview of the technologies and tools I use to bring ideas to life.
            Organized to show the breadth of my full-stack capabilities.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-fr">
         {/* Main Feature Card - Frontend */}
         <GlassCard className="md:col-span-2 md:row-span-2 p-8 flex flex-col justify-between group">
            <div className="relative z-10">
               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20">
                  <Layout className="text-white" size={24} />
               </div>
               <h3 className="text-2xl font-bold text-white mb-4">Frontend Mastery</h3>
               <p className="text-slate-400 mb-6">
                  Building pixel-perfect, responsive, and accessible user interfaces. I specialize in the React ecosystem with a focus on animation and micro-interactions.
               </p>
               <div className="flex flex-wrap gap-2">
                  {skillCategories[0].skills.map(skill => (
                     <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-cyan-200">
                        {skill}
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
            <div className="flex flex-wrap gap-2">
               {skillCategories[1].skills.map(skill => (
                  <span key={skill} className="text-sm text-slate-400 font-mono">
                     {">"} {skill}
                  </span>
               ))}
            </div>
         </GlassCard>

         {/* Mobile/Other Card */}
         <GlassCard className="md:col-span-1 p-6 flex flex-col gap-4">
             <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
               <Smartphone className="text-pink-400" size={20} />
            </div>
            <h3 className="text-xl font-bold text-white">Mobile</h3>
            <p className="text-sm text-slate-400">React Native exp.</p>
            <div className="h-1 w-full bg-slate-800 rounded-full mt-2 overflow-hidden">
               <div className="h-full bg-pink-500 w-[75%]" />
            </div>
         </GlassCard>

         {/* Tools Card */}
         <GlassCard className="md:col-span-1 p-6 flex flex-col gap-4">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
               <Terminal className="text-green-400" size={20} />
            </div>
            <h3 className="text-xl font-bold text-white">DevOps</h3>
            <div className="flex flex-wrap gap-2">
               {skillCategories[2].skills.map(skill => (
                  <span key={skill} className="px-2 py-1 bg-white/5 rounded text-xs text-slate-300">
                     {skill}
                  </span>
               ))}
            </div>
         </GlassCard>

         {/* Architecture/System Design */}
         <GlassCard className="md:col-span-1 p-6 bg-gradient-to-br from-indigo-900/40 to-slate-900/40">
             <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
               <Cpu className="text-purple-400" size={20} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Systems</h3>
            <div className="space-y-2">
                {skillCategories[3].skills.map(skill => (
                   <div key={skill} className="flex items-center gap-2 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {skill}
                   </div>
                ))}
            </div>
         </GlassCard>
      </div>
    </SectionWrapper>
  );
};