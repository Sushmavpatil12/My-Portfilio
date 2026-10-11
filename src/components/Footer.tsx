import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#F8F5EF] border-t border-[#E5E1D8] pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-[#6B6A75]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#E5E1D8]">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-xl bg-[#8BA995] flex items-center justify-center text-white font-editorial font-bold text-base shadow-sm">
                S
              </div>
              <span className="font-editorial text-xl font-bold text-[#302F38]">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-[#6B6A75] max-w-sm">
              Aspiring Software Developer & Technology Explorer. Building practical applications, exploring creative design, and solving problems through code.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-[#302F38]">
            <a href="#hero" className="hover:text-[#8BA995] transition-colors">Home</a>
            <a href="#story" className="hover:text-[#8BA995] transition-colors">My Story</a>
            <a href="#projects" className="hover:text-[#8BA995] transition-colors">Projects</a>
            <a href="#beyond" className="hover:text-[#8BA995] transition-colors">Beyond the Code</a>
            <a href="#contact" className="hover:text-[#8BA995] transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-2xl bg-white border border-[#E5E1D8] text-[#302F38] hover:text-[#344C40] hover:border-[#8BA995] transition-all shadow-sm hover:scale-105"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4 text-[#344C40]" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-2xl bg-white border border-[#E5E1D8] text-[#302F38] hover:text-[#344C40] hover:border-[#8BA995] transition-all shadow-sm hover:scale-105"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4 text-[#344C40]" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-2xl bg-[#344C40] hover:bg-[#23342C] text-white transition-all shadow-sm ml-2 hover:scale-105 active:scale-95"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright & Subtext */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B6A75]">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-handwriting text-base text-[#344C40]">
            <span>Crafted with curiosity, warm tea & code</span>
            <Heart className="w-3.5 h-3.5 text-[#E9A5BC] fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
};
