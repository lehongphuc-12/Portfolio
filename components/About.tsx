import React from "react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { Briefcase, GraduationCap } from "lucide-react";
import { EXPERIENCE, PROFILE, EDUCATION } from "../constants";

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
            {PROFILE.bio}
          </p>
          <p className="text-slate-400 leading-relaxed text-lg">
            When I'm not coding, you can find me exploring 3D modeling,
            contributing to open-source, or seeking inspiration in modern
            architecture.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-400/30 transition-colors duration-300">
              <h4 className="text-3xl font-bold text-indigo-400">
                {PROFILE.yearsOfExperience || 5}+
              </h4>
              <p className="text-sm text-slate-500 mt-1">Years of Experience</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-400/30 transition-colors duration-300">
              <h4 className="text-3xl font-bold text-cyan-400">20+</h4>
              <p className="text-sm text-slate-500 mt-1">Projects Completed</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8 pl-8 border-l border-white/10">
          {[...EXPERIENCE].reverse().map((exp, index) => (
            <div key={exp.id} className="relative group">
              {/* Dot */}
              <div
                className={`absolute -left-[37px] top-1 h-4 w-4 rounded-full border-2 border-slate-900 transition-colors duration-300 ${index === 0 ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" : "bg-slate-700 group-hover:bg-cyan-400"}`}
              />

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {exp.role}
                </h3>
                <span className="text-sm font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">
                  {exp.period}
                </span>
              </div>

              <div className="text-indigo-300 font-medium mb-3 flex items-center gap-2">
                <Briefcase size={14} />
                {exp.company}
                {exp.location && (
                  <span className="text-slate-500 font-normal">
                    | {exp.location}
                  </span>
                )}
              </div>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="text-slate-400 text-sm leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-cyan-500 mt-1.5 w-1 h-1 rounded-full bg-cyan-500 shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>

              {exp.techStack && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono text-slate-500 bg-slate-800/50 px-2 py-0.5 rounded border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}

          {EDUCATION.map((edu, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-slate-700 border-2 border-slate-900 group-hover:bg-cyan-400 transition-colors" />
              <div className="flex flex-col mb-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-lg font-bold text-white uppercase tracking-wider">
                    {index === 0 && (
                      <span className="text-xs text-cyan-400 font-mono">
                        Education
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-white font-bold mt-1">{edu.degree}</div>
                <div className="text-indigo-400 font-medium flex items-center gap-2 text-sm">
                  <GraduationCap size={14} /> {edu.institution}
                </div>
                <div className="text-slate-500 text-xs font-mono mt-1">
                  {edu.period}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
