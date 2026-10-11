import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown, Sparkles, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onDownloadResume: () => void;
}

interface NavLinkItem {
  id: string;
  label: string;
  isSpecial?: boolean;
}

const navLinks: NavLinkItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'story', label: 'My Story' },
  { id: 'projects', label: 'Projects' },
  { id: 'beyond', label: 'Beyond the Code' },
  { id: 'contact', label: 'Contact' }
];

export const Navbar: React.FC<NavbarProps> = ({ onDownloadResume }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8F5EF]/92 backdrop-blur-md border-b border-[#E5E1D8] shadow-subtle py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Wordmark */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="group flex items-center gap-2.5 rounded-xl px-2 py-1"
          aria-label="Sushma Patil Portfolio Home"
        >
          <div className="w-9 h-9 rounded-2xl bg-[#8BA995] flex items-center justify-center text-[#FFFFFF] font-editorial font-bold text-lg shadow-sm group-hover:scale-105 transition-transform duration-200">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-editorial text-lg sm:text-xl font-bold tracking-tight text-[#302F38] group-hover:text-[#344C40] transition-colors flex items-center gap-1.5">
              <span>{personalInfo.name}</span>
              <span className="text-[#E9A5BC] text-xs">✦</span>
            </span>
            <span className="font-handwriting text-sm text-[#8BA995] hidden sm:inline-block leading-none -mt-0.5">
              digital journal & projects ✨
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 bg-[#FFFFFF]/90 border border-[#E5E1D8] rounded-full px-4 py-1.5 shadow-sm backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-[#FFFFFF] font-bold shadow-sm'
                    : 'text-[#302F38] hover:text-[#344C40] hover:bg-[#E8F0EA]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-[#8BA995] rounded-full -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="flex items-center gap-1">
                  {link.label}
                  {link.isSpecial && <span className="text-[#D4AF75] text-[11px]">✦</span>}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Action Button: Resume */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onDownloadResume}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#FFFFFF] bg-[#344C40] hover:bg-[#23342C] active:scale-98 rounded-full shadow-sm transition-all"
          >
            <FileDown className="w-3.5 h-3.5 text-[#E9A5BC]" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onDownloadResume}
            className="px-3 py-1.5 text-xs font-bold text-[#FFFFFF] bg-[#344C40] rounded-full shadow-sm sm:hidden"
          >
            Resume
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#302F38] hover:bg-[#E8F0EA] rounded-xl border border-[#E5E1D8] transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#F8F5EF] border-b border-[#E5E1D8] px-4 pt-3 pb-6 shadow-elevation overflow-hidden"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold text-left transition-colors ${
                      isActive
                        ? 'bg-[#8BA995]/15 text-[#344C40] border-l-4 border-[#8BA995]'
                        : 'text-[#302F38] hover:bg-[#E8F0EA]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {link.label}
                      {link.isSpecial && <span className="text-[#D4AF75]">✦</span>}
                    </span>
                    {isActive && <span className="text-xs text-[#8BA995] font-bold">Active</span>}
                  </button>
                );
              })}

              <div className="pt-4 mt-2 border-t border-[#E5E1D8]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onDownloadResume();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 text-xs font-bold text-[#FFFFFF] bg-[#344C40] hover:bg-[#23342C] rounded-full shadow-sm"
                >
                  <FileDown className="w-4 h-4 text-[#E9A5BC]" />
                  <span>Download Resume (PDF)</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
