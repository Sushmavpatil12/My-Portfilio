import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Lightbulb, AlertTriangle, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#302F38]/70 backdrop-blur-md overflow-y-auto"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-white rounded-3xl border border-[#E5E1D8] shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col text-[#302F38]"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-[#E5E1D8]">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#E8F0EA] text-[#344C40] border border-[#C3D8CB]">
                {project.category}
              </span>
              <span className="text-xs text-[#6B6A75] font-semibold hidden sm:inline">
                Case Study & Technical Deep Dive
              </span>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#302F38] hover:text-[#344C40] hover:bg-[#E8F0EA] transition-colors focus-visible:outline-none"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            
            {/* Title & Tagline */}
            <div>
              <h2 id="modal-project-title" className="font-editorial text-2xl sm:text-3xl font-bold text-[#302F38]">
                {project.title}
              </h2>
              <p className="text-base text-[#8BA995] font-semibold mt-1.5">
                {project.tagline}
              </p>
            </div>

            {/* Project Hero Image */}
            <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full rounded-2xl overflow-hidden border border-[#E5E1D8] bg-[#F8F5EF]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#302F38]/40 via-transparent to-transparent" />
            </div>

            {/* Problem & Solution (Two columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-[#F8F5EF] border border-[#E5E1D8]">
                <div className="flex items-center gap-2 text-[#302F38] mb-2 font-bold text-xs uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4 text-[#8BA995]" />
                  <span>The Problem</span>
                </div>
                <p className="text-sm text-[#6B6A75] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#F8F5EF] to-[#E8F0EA] border border-[#C3D8CB]">
                <div className="flex items-center gap-2 text-[#344C40] mb-2 font-bold text-xs uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4 text-[#8BA995]" />
                  <span>The Solution</span>
                </div>
                <p className="text-sm text-[#344C40] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Technology Stack Tags */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#302F38] mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#8BA995]" />
                <span>Technologies & Frameworks</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-xl bg-[#F8F5EF] border border-[#E5E1D8] text-xs font-semibold text-[#302F38]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture Overview */}
            <div className="p-5 rounded-2xl bg-white border border-[#E5E1D8] shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#302F38] mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#8BA995]" />
                <span>Architecture & Data Flow</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#302F38] leading-relaxed font-mono bg-[#F8F5EF] p-3.5 rounded-xl border border-[#E5E1D8]">
                {project.architectureOverview}
              </p>
            </div>

            {/* Key Contributions & Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#302F38] mb-3">
                  My Specific Contributions
                </h3>
                <ul className="space-y-2.5">
                  {project.myContributions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#6B6A75] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#8BA995] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#302F38] mb-3">
                  Key System Features
                </h3>
                <ul className="space-y-2.5">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#6B6A75] leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8BA995] mt-2 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Challenges & Technical Lessons */}
            <div className="p-5 rounded-2xl bg-[#F8F5EF] border border-[#E5E1D8]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#302F38] mb-2">
                Engineering Challenges & Takeaways
              </h3>
              <ul className="space-y-2">
                {project.challengesAndLearnings.map((lesson, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-[#6B6A75] flex items-start gap-2">
                    <span className="text-[#8BA995] font-bold">✦</span>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Sticky Modal Footer Actions */}
          <div className="sticky bottom-0 z-10 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-t border-[#E5E1D8]">
            <div className="text-xs text-[#6B6A75] font-semibold">
              {project.metricsOrOutcome || "Project verified and ready for review"}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-[#302F38] bg-white border border-[#E5E1D8] hover:border-[#8BA995] hover:text-[#344C40] rounded-xl shadow-sm transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-[#8BA995] hover:bg-[#344C40] rounded-xl shadow-sm transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
