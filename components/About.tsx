import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { Experience } from '../types';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Frontend Engineer",
    company: "TechNova Solutions",
    period: "2021 - Present",
    description: "Leading a team of 5 developers to build scalable SaaS products using React and Next.js. Improved performance by 40%."
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Creative Pulse Agency",
    period: "2018 - 2021",
    description: "Developed award-winning marketing sites and interactive experiences for Fortune 500 clients using WebGL and GSAP."
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "StartUp Inc",
    period: "2016 - 2018",
    description: "Collaborated with designers to implement pixel-perfect UIs. Transitioned legacy jQuery codebase to React."
  }
];

export const About: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Bio Section */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Beyond the <span className="text-cyan-400">Code</span>
          </h2>
          <p className="text-slate-400 leading-relaxed text-lg">
            I'm a developer with a passion for design. I don't just write code; I craft experiences. 
            My journey began with a curiosity for how things work on the web, leading me to master 
            both the creative and technical aspects of frontend engineering.
          </p>
          <p className="text-slate-400 leading-relaxed text-lg">
            When I'm not coding, you can find me exploring 3D modeling, contributing to open-source, 
            or seeking inspiration in modern architecture.
          </p>
          
          <div className="grid grid-cols-2 gap-4 pt-4">
             <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h4 className="text-3xl font-bold text-indigo-400">8+</h4>
                <p className="text-sm text-slate-500 mt-1">Years of Experience</p>
             </div>
             <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h4 className="text-3xl font-bold text-cyan-400">50+</h4>
                <p className="text-sm text-slate-500 mt-1">Projects Completed</p>
             </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8 pl-8 border-l border-white/10">
           {experiences.map((exp, index) => (
             <div key={exp.id} className="relative group">
               {/* Dot */}
               <div className={`absolute -left-[37px] top-1 h-4 w-4 rounded-full border-2 border-slate-900 transition-colors duration-300 ${index === 0 ? 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 'bg-slate-700 group-hover:bg-cyan-400'}`} />
               
               <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                 <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                   {exp.role}
                 </h3>
                 <span className="text-sm font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">
                   {exp.period}
                 </span>
               </div>
               
               <div className="text-indigo-300 font-medium mb-2 flex items-center gap-2">
                 <Briefcase size={14} />
                 {exp.company}
               </div>
               
               <p className="text-slate-400 text-sm leading-relaxed">
                 {exp.description}
               </p>
             </div>
           ))}
           
           <div className="relative">
              <div className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-slate-700 border-2 border-slate-900" />
              <div className="flex items-center gap-2 text-lg font-bold text-white mb-1">
                 Education
              </div>
              <div className="text-indigo-300 font-medium flex items-center gap-2">
                  <GraduationCap size={16} /> BS Computer Science
              </div>
           </div>
        </div>
      </div>
    </SectionWrapper>
  );
};