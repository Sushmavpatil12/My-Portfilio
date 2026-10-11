import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Filter, Layers, CheckCircle2, Star, Code2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'Data Analytics', 'Core Engineering'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  // Playful project badges and personality tags (tailored to 4 authentic projects)
  const projectFlavorTags = [
    { tag: "Algorithmic Scheduling ✦", washi: "washi-sage", accent: "#8BA995", note: "Timetable Constraint Engine" },
    { tag: "Order & Billing Architecture ✦", washi: "washi-yellow", accent: "#D4AF75", note: "Restaurant Management" },
    { tag: "Power BI Retail Intelligence ✦", washi: "washi-lavender", accent: "#C7B8E5", note: "Blinkit Quick-Commerce" },
    { tag: "NLP Grievance Pipeline ✦", washi: "washi-pink", accent: "#E9A5BC", note: "Pollution Analysis" }
  ];

  return (
    <section
      id="projects"
      aria-label="Creative Projects Gallery"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F5EF] border-t border-[#E5E1D8] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E1D8] text-[#344C40] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              <span className="text-[#8BA995]">✦</span>
              <span>Project Showcase</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#302F38] tracking-tight">
              Things I've <span className="text-[#344C40] italic font-normal">Built & Explored.</span>
            </h2>
            <p className="font-handwriting text-xl sm:text-2xl text-[#8BA995] mt-1">
              practical applications, analytics pipelines, and systems made with curiosity 🛠️
            </p>
          </div>

          {/* Filter Bar with Scrapbook feel */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white border border-[#E5E1D8] rounded-2xl shadow-sm self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#8BA995] text-white shadow-sm'
                    : 'text-[#302F38] hover:text-[#344C40] hover:bg-[#E8F0EA]'
                }`}
                aria-pressed={selectedCategory === cat}
              >
                {cat === 'All' ? 'All Builds' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Varied Creative Projects Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isHeroCard = index === 0 && selectedCategory === 'All';
              const flavor = projectFlavorTags[index % projectFlavorTags.length];

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`group bg-white rounded-3xl border border-[#E5E1D8] hover:border-[#8BA995] shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden relative ${
                    isHeroCard ? 'lg:col-span-12' : 'lg:col-span-6'
                  }`}
                >
                  {/* Washi Tape Accent on Card Top */}
                  <div className={`w-28 h-5 washi-tape ${flavor.washi} -top-2.5 left-8 -rotate-1`} />

                  <div className={`grid ${isHeroCard ? 'grid-cols-1 lg:grid-cols-12' : 'grid-cols-1'} h-full`}>
                    
                    {/* Screenshot Container */}
                    <div className={`relative overflow-hidden bg-[#FAF8F4] border-b lg:border-b-0 ${isHeroCard ? 'lg:col-span-7 lg:border-r border-[#E5E1D8]' : 'aspect-[16/10]'} border-[#E5E1D8]`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 min-h-[240px]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#302F38]/55 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Flavor Tag Sticker */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-[#344C40] border border-[#E5E1D8] shadow-sm flex items-center gap-1.5">
                          <span>{flavor.tag}</span>
                        </span>
                      </div>

                      {/* Bottom Screenshot Caption */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-xs text-white font-medium drop-shadow-sm line-clamp-1">
                          {project.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className={`p-6 sm:p-8 flex flex-col justify-between ${isHeroCard ? 'lg:col-span-5' : ''}`}>
                      <div>
                        {/* Category & Badge */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#8BA995]">
                            {project.category}
                          </span>
                          <span className="font-handwriting text-base text-[#6B6A75]">
                            project 0{index + 1}
                          </span>
                        </div>

                        <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#302F38] group-hover:text-[#344C40] transition-colors mb-2.5">
                          {project.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#6B6A75] line-clamp-3 leading-relaxed mb-5">
                          {project.problem}
                        </p>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.technologies.slice(0, isHeroCard ? 6 : 4).map((tech, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-xl bg-[#F8F5EF] border border-[#E5E1D8] text-[11px] font-semibold text-[#302F38]"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > (isHeroCard ? 6 : 4) && (
                            <span className="px-2 py-1 rounded-xl bg-[#F8F5EF] border border-[#E5E1D8] text-[11px] font-semibold text-[#8BA995]">
                              +{project.technologies.length - (isHeroCard ? 6 : 4)} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Bar: Case Study & GitHub Repository */}
                      <div className="pt-4 border-t border-[#E5E1D8] flex items-center justify-between gap-3">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#344C40] hover:text-[#8BA995] transition-colors rounded-md px-1 py-0.5"
                        >
                          <span>Read Case Study</span>
                          <ArrowUpRight className="w-4 h-4 text-[#8BA995]" />
                        </button>

                        <div className="flex items-center gap-2">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2.5 rounded-xl bg-[#F8F5EF] border border-[#E5E1D8] text-[#302F38] hover:border-[#8BA995] hover:text-[#344C40] transition-colors"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Playful Scrapbook Footnote */}
        <div className="mt-12 text-center">
          <p className="font-handwriting text-2xl text-[#8BA995]">
            "One project at a time — built with care, tested with patience"
          </p>
        </div>

      </div>

      {/* Interactive Case Study Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};
