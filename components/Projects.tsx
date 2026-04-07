import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import { Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "../constants";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Import Swiper styles are handled in index.html via CDN,
// but we use the library for logic.

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-16"
        >
          <span className="text-cyan-400 font-mono text-xl mr-4">02.</span>
          <h2 className="text-3xl font-bold text-white">
            Some Things I've Built
          </h2>
          <div className="h-[1px] bg-slate-700 w-full ml-6 max-w-xs"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            loop={PROJECTS.length > 0}
            loopedSlides={6}
            speed={800}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-full py-12"
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 50,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
            }}
          >
            {[...PROJECTS, ...PROJECTS, ...PROJECTS].map((project, index) => (
              <SwiperSlide
                key={`${project.id}-copy-${index}`}
                className="w-[300px] sm:w-[350px] md:w-[400px]"
              >
                <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-2xl h-full flex flex-col">
                  {/* Image Area */}
                  <div className="h-48 overflow-hidden relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 bg-slate-800 rounded-full text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 bg-slate-800 rounded-full text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      <span
                        className={`text-[10px] font-mono px-2 py-1 rounded-full ${
                          project.projectType === "team"
                            ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                            : "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                        }`}
                      >
                        {project.projectType === "team" ? "TEAM" : "PERSONAL"}
                      </span>
                    </div>
                    <div className="bg-slate-900/50 p-3 rounded mb-4 text-sm text-slate-400 flex-1">
                      {project.description}
                    </div>
                    <ul className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
