import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, FileDown, Sparkles, ChevronDown, CheckCircle2, Star, Code2, Heart, Smile } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onDownloadResume: () => void;
  onNavigateToProjects: () => void;
  onNavigateToContact: () => void;
  onNavigateToAbout?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onDownloadResume,
  onNavigateToProjects,
  onNavigateToContact,
  onNavigateToAbout
}) => {
  const scrollToAbout = () => {
    if (onNavigateToAbout) {
      onNavigateToAbout();
    } else {
      const el = document.getElementById('story') || document.getElementById('about');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="hero"
      aria-label="Introduction & Welcome to Sushma's Creative World"
      className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F8F5EF]"
    >
      {/* Background Ambience: Subtle Notebook Dots & Organic Pastel Gradients */}
      <div className="absolute inset-0 bg-cream-dots opacity-40 pointer-events-none" />

      {/* Pastel Blobs for Playful Depth */}
      <div className="absolute top-10 left-6 w-80 h-80 bg-[#FFEAA7]/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-8 w-96 h-96 bg-[#C7B8E5]/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-16 left-1/3 w-88 h-88 bg-[#E9A5BC]/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-2/3 left-10 w-72 h-72 bg-[#8BA995]/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Whimsical Doodles & Sparkles */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        className="absolute top-24 left-[8%] text-[#8BA995] opacity-80 hidden md:block select-none"
      >
        <span className="text-2xl font-bold">✦</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.8 }}
        className="absolute bottom-24 left-[5%] text-[#FDCB6E] opacity-90 hidden md:block select-none"
      >
        <Star className="w-6 h-6 fill-current" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.4 }}
        className="absolute top-28 right-[10%] text-[#E9A5BC] opacity-80 hidden md:block select-none"
      >
        <Heart className="w-5 h-5 fill-current" />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Playful Journal Opening (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Scrapbook Tape Tag: Name & Identity */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E1D8] text-[#344C40] text-xs font-bold uppercase tracking-wider shadow-sm mb-4"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#8BA995] animate-pulse" />
            <span>Hello, internet!</span>
            <span className="text-[#E9A5BC]">✦</span>
            <span className="text-[#6B6A75] normal-case font-medium">welcome to my digital journal</span>
          </motion.div>

          {/* Large Stylish Name Typography */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="flex items-baseline gap-3 mb-2"
          >
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#302F38] tracking-tight">
              Sushma Patil
            </h1>
            <span className="font-handwriting text-2xl sm:text-3xl text-[#8BA995] -rotate-3 select-none">
              ✦
            </span>
          </motion.div>

          {/* Editorial Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-[#302F38] tracking-tight leading-[1.2] mb-4 text-balance"
          >
            Turning Ideas Into <span className="text-[#344C40] italic relative inline-block">
              Digital Experiences.
              {/* Hand-drawn Underline SVG */}
              <svg className="absolute -bottom-2 left-0 w-full h-3.5 text-[#FDCB6E]" viewBox="0 0 260 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 10C70 3 185 2 257 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h2>

          {/* Introduction Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.5 }}
            className="text-base sm:text-lg text-[#6B6A75] max-w-2xl leading-relaxed mb-8 text-balance font-sans"
          >
            I’m Sushma Patil, an aspiring software developer who enjoys building practical applications, exploring technology, and solving problems through code.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto"
          >
            {/* Primary CTA: Explore My Work */}
            <button
              onClick={onNavigateToProjects}
              className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-[#8BA995] hover:bg-[#344C40] text-white font-bold text-sm sm:text-base rounded-2xl shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary CTA: Get in Touch */}
            <button
              onClick={onNavigateToContact}
              className="group flex items-center justify-center gap-2 px-5 py-3.5 bg-white text-[#302F38] border border-[#E5E1D8] hover:border-[#8BA995] hover:bg-[#E8F0EA] font-semibold text-sm sm:text-base rounded-2xl shadow-sm active:scale-[0.98] transition-all duration-200"
            >
              <Mail className="w-4 h-4 text-[#8BA995]" />
              <span>Get in Touch</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onDownloadResume}
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-white text-[#344C40] border border-[#E5E1D8] hover:text-[#8BA995] hover:border-[#8BA995] hover:bg-[#E8F0EA] text-sm font-semibold rounded-2xl shadow-sm transition-all active:scale-[0.98]"
              aria-label="Download Sushma Patil Resume"
            >
              <FileDown className="w-4 h-4 text-[#E9A5BC]" />
              <span>Resume</span>
            </button>
          </motion.div>

          {/* Social Links & Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="flex items-center gap-6 pt-4 border-t border-[#E5E1D8] w-full max-w-xl text-xs text-[#6B6A75]"
          >
            <span className="font-semibold text-[#302F38] flex items-center gap-1">
              <span>Find me here:</span>
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white border border-[#E5E1D8] hover:border-[#8BA995] hover:text-[#344C40] text-[#302F38] transition-colors shadow-sm flex items-center gap-1.5 font-medium"
                aria-label="Visit Sushma Patil's GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-[#344C40]" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white border border-[#E5E1D8] hover:border-[#8BA995] hover:text-[#344C40] text-[#302F38] transition-colors shadow-sm flex items-center gap-1.5 font-medium"
                aria-label="Visit Sushma Patil's LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-[#344C40]" />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 ml-auto text-[#344C40]">
              <CheckCircle2 className="w-4 h-4 text-[#8BA995]" />
              <span className="text-[11px] font-semibold">Open for Opportunities</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Scrapbook-Style Frame with Overlapping Notes & Stickers (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
            
            {/* Scrapbook Under-Layer 1: Soft Lavender Tilted Card */}
            <div className="absolute -inset-4 bg-[#C7B8E5]/40 rounded-3xl -rotate-3 transform -z-20 shadow-sm" />
            
            {/* Scrapbook Under-Layer 2: Soft Sage Green Tilted Card */}
            <div className="absolute -inset-2 bg-[#8BA995]/30 rounded-2xl rotate-2 -z-10 border border-[#8BA995]/40" />
            
            {/* Scrapbook Under-Layer 3: Sunny Yellow Sticky Backing */}
            <div className="absolute -top-3 -right-3 w-28 h-28 bg-[#FFEAA7]/60 rounded-2xl rotate-6 -z-10" />

            {/* Main Polaroid Frame */}
            <div className="relative bg-white p-4 sm:p-5 rounded-2xl border border-[#E5E1D8] shadow-card">
              
              {/* Washi Tape Strip at Top (Blush Pink) */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 washi-tape washi-pink -rotate-1 rounded-sm shadow-sm" />

              {/* Photo Canvas */}
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-gradient-to-b from-[#FAF8F4] to-[#E8F0EA] mb-3 border border-[#E5E1D8] shadow-inner">
                <img
                  src={personalInfo.photo}
                  alt="Sushma Patil"
                  className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#302F38]/25 via-transparent to-transparent pointer-events-none" />
                
                {/* Monogram Stamp in corner */}
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-xl text-xs font-editorial font-bold text-[#344C40] border border-[#E5E1D8] shadow-sm flex items-center gap-1">
                  <span>SP</span>
                  <span className="text-[#E9A5BC] text-[10px]">✦</span>
                </div>

                {/* Handwritten Photo Note Tag */}
                <div className="absolute bottom-3 left-3 right-3 px-3 py-2 bg-white/95 backdrop-blur-md rounded-xl border border-[#E5E1D8] flex items-center justify-between shadow-sm">
                  <span className="font-editorial text-xs font-bold text-[#302F38]">Sushma Patil</span>
                  <span className="font-handwriting text-sm font-semibold text-[#8BA995]">
                    student & builder ✨
                  </span>
                </div>
              </div>

              {/* Scrapbook Caption Footnote */}
              <div className="pt-2 px-1 flex items-center justify-between text-xs text-[#6B6A75]">
                <span className="font-handwriting text-base text-[#344C40]">
                  "A little code, a lot of ideas."
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8BA995] bg-[#F8F5EF] px-2 py-0.5 rounded-full border border-[#E5E1D8]">
                  creative corner ✦
                </span>
              </div>
            </div>

            {/* Overlapping Sticky Note 1: Yellow sticky on Bottom Left */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-[#FFF9E6] p-3 sm:p-3.5 rounded-2xl border border-[#F1E5C4] shadow-card flex flex-col gap-1 max-w-[200px] -rotate-4 z-30 select-none"
            >
              <div className="w-12 h-3 washi-tape washi-yellow -top-1.5 left-4" />
              <p className="font-handwriting text-lg text-[#302F38] font-bold leading-tight">
                Powered by curiosity ✦
              </p>
              <p className="font-handwriting text-sm text-[#8BA995] leading-tight">
                always learning something new
              </p>
            </motion.div>

            {/* Overlapping Sticky Note 2: Lavender pill tag on Top Right */}
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 0.6 }}
              className="absolute -top-6 -right-6 bg-white px-3.5 py-2 rounded-2xl border border-[#C7B8E5] shadow-card flex items-center gap-2 rotate-6 z-30 select-none"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#C7B8E5] animate-ping" />
              <span className="font-handwriting text-base font-bold text-[#344C40]">
                Currently creating… 🚀
              </span>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Scroll Down Cue */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ delay: 0.8, repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#6B6A75] hover:text-[#344C40] transition-colors text-xs font-semibold focus-visible:outline-none"
        aria-label="Scroll down to about section"
      >
        <span className="font-handwriting text-base text-[#8BA995]">flip to my journal</span>
        <ChevronDown className="w-4 h-4 text-[#8BA995]" />
      </motion.button>
    </section>
  );
};
