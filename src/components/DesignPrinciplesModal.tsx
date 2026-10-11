import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Eye, Compass, Layers, MousePointerClick, Zap } from 'lucide-react';

interface PrinciplesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const heuristicsList = [
  {
    num: 1,
    title: "Visibility of System Status",
    implementation: "Live active scroll-spy on navbar, interactive loading spinner & progress states during contact form submission, clear active filter pill indications, and instant toast notifications."
  },
  {
    num: 2,
    title: "Match Between System and Real World",
    implementation: "Standard domain-specific terminology (Full-Stack, DAX, NLP, Star Schema, ACID), standard iconography (Lucide icon library), and natural conceptual models."
  },
  {
    num: 3,
    title: "User Control and Freedom",
    implementation: "Universal modal exit via Escape key & backdrop click, back-to-top button, easily switchable project & skill filters, clear non-blocking navigation."
  },
  {
    num: 4,
    title: "Consistency and Standards",
    implementation: "Unified 8-point spacing grid, cohesive design token system (#FAF9F6, #FFFFFF, #5F8D7B, #252824), standard button hierarchies, and consistent card elevations."
  },
  {
    num: 5,
    title: "Error Prevention",
    implementation: "Client-side form input validation, formatted email checks, minimum character requirements, and disabled submit states during transit to avoid duplicate submissions."
  },
  {
    num: 6,
    title: "Recognition Rather than Recall",
    implementation: "Visible navigation links with active state highlight, explicit skill tags with descriptive subtitles rather than raw ambiguous logos, and visual category tags on project cards."
  },
  {
    num: 7,
    title: "Flexibility and Efficiency of Use",
    implementation: "Instant real-time skill search, category filter shortcuts, keyboard-accessible interactive targets, and direct email copy shortcut."
  },
  {
    num: 8,
    title: "Aesthetic and Minimalist Design",
    implementation: "Warm Ivory palette (#FAF9F6), generous whitespace, restrained 10% accent color budget, zero visual clutter, and avoidance of decorative gimmicks."
  },
  {
    num: 9,
    title: "Help Users Recognize, Diagnose, and Recover from Errors",
    implementation: "Descriptive error alerts on form inputs with actionable guidance (e.g. 'Message must be at least 10 characters long') and transparent email client fallbacks."
  },
  {
    num: 10,
    title: "Help and Documentation",
    implementation: "Clear contact details, contextual subtitles on technical competencies, architecture summaries on project deep-dives, and this UX evaluation breakdown."
  }
];

const designLaws = [
  {
    name: "Figure–Ground Principle",
    description: "Pure White cards (#FFFFFF) floating over Warm Ivory canvas (#FAF9F6) with subtle 1px border (#E7E8E2) and restrained elevation shadows to guarantee crisp visual hierarchy."
  },
  {
    name: "Fitts's Law",
    description: "All primary call-to-actions, category filters, and navigation links have generous touch targets (minimum 44x44px equivalent) and prominent positioning."
  },
  {
    name: "Hick's Law",
    description: "Categorized skill groups and streamlined project filter pills (All, Full-Stack, Data Analytics, Core) prevent decision paralysis and cognitive overload."
  },
  {
    name: "Progressive Disclosure",
    description: "Project cards surface clean executive summaries upfront, while full architectural breakdowns, database schemas, and learnings are disclosed in deep-dive modals."
  },
  {
    name: "WCAG 2.2 AA Accessibility",
    description: "4.5:1+ contrast ratio for standard body copy (#252824 on #FAF9F6 / #FFFFFF), visible keyboard focus rings, semantic HTML5 landmarks, and full prefers-reduced-motion support."
  }
];

export const DesignPrinciplesModal: React.FC<PrinciplesModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#252824]/60 backdrop-blur-sm overflow-y-auto"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="ux-principles-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-[#FFFFFF] rounded-2xl border border-[#E7E8E2] shadow-elevation overflow-hidden my-auto max-h-[90vh] flex flex-col text-[#252824]"
        >
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E7E8E2]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#5F8D7B]" />
              <h2 id="ux-principles-title" className="font-editorial text-lg sm:text-xl font-bold text-[#252824]">
                UI/UX Design Architecture & Usability Breakdown
              </h2>
            </div>
            
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#737873] hover:text-[#252824] hover:bg-[#F2F7F4] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F8D7B]"
              aria-label="Close UI/UX principles dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            
            {/* Overview Banner */}
            <div className="p-5 rounded-xl bg-[#F2F7F4] border border-[#C7DED1]">
              <p className="text-xs sm:text-sm text-[#3D5E51] leading-relaxed">
                This portfolio is engineered as a testament to both technical software capability and human-centered design. Every section directly complies with Jakob Nielsen's 10 Usability Heuristics, Gestalt Psychology, and WCAG 2.2 AA Accessibility standards.
              </p>
            </div>

            {/* Section 1: Nielsen's 10 Heuristics */}
            <div>
              <h3 className="font-editorial text-xl font-bold text-[#252824] mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#5F8D7B]" />
                <span>Nielsen's 10 Usability Heuristics Implementation</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {heuristicsList.map((item) => (
                  <div key={item.num} className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E7E8E2]">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-[#5F8D7B] text-[#FAF9F6] text-[10px] font-bold flex items-center justify-center">
                        {item.num}
                      </span>
                      <h4 className="text-xs font-bold text-[#252824]">{item.title}</h4>
                    </div>
                    <p className="text-xs text-[#737873] leading-relaxed">
                      {item.implementation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Core UX Laws & Visual Psychology */}
            <div>
              <h3 className="font-editorial text-xl font-bold text-[#252824] mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#D4AF37]" />
                <span>Gestalt Principles & UX Laws</span>
              </h3>

              <div className="space-y-3">
                {designLaws.map((law, index) => (
                  <div key={index} className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E7E8E2]">
                    <h4 className="text-xs font-bold text-[#252824] mb-1 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#5F8D7B]" />
                      <span>{law.name}</span>
                    </h4>
                    <p className="text-xs text-[#737873] leading-relaxed">
                      {law.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Color Palette & Proportions */}
            <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E7E8E2] shadow-subtle">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#737873] mb-3">
                Design Token & Palette Ratio Check
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-lg bg-[#FAF9F6] border border-[#E7E8E2]">
                  <div className="w-6 h-6 rounded-full bg-[#FAF9F6] border border-[#E7E8E2] mx-auto mb-1" />
                  <p className="text-[11px] font-bold text-[#252824]">Warm Ivory (70%)</p>
                  <p className="text-[10px] text-[#737873]">#FAF9F6 Background</p>
                </div>
                <div className="p-3 rounded-lg bg-[#FAF9F6] border border-[#E7E8E2]">
                  <div className="w-6 h-6 rounded-full bg-[#FFFFFF] border border-[#E7E8E2] mx-auto mb-1" />
                  <p className="text-[11px] font-bold text-[#252824]">Pure White (20%)</p>
                  <p className="text-[10px] text-[#737873]">#FFFFFF Surface</p>
                </div>
                <div className="p-3 rounded-lg bg-[#FAF9F6] border border-[#E7E8E2]">
                  <div className="w-6 h-6 rounded-full bg-[#5F8D7B] mx-auto mb-1" />
                  <p className="text-[11px] font-bold text-[#252824]">Sage Green (10%)</p>
                  <p className="text-[10px] text-[#737873]">#5F8D7B Primary</p>
                </div>
                <div className="p-3 rounded-lg bg-[#FAF9F6] border border-[#E7E8E2]">
                  <div className="w-6 h-6 rounded-full bg-[#D4AF37] mx-auto mb-1" />
                  <p className="text-[11px] font-bold text-[#252824]">Champagne Gold (&lt;2%)</p>
                  <p className="text-[10px] text-[#737873]">#D4AF37 Micro Accent</p>
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="sticky bottom-0 z-10 flex items-center justify-end px-6 py-4 bg-[#FFFFFF]/95 backdrop-blur-md border-t border-[#E7E8E2]">
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold text-[#FAF9F6] bg-[#5F8D7B] hover:bg-[#4D7565] rounded-xl shadow-sm transition-colors"
            >
              Close Review
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
