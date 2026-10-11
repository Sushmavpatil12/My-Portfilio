import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, Star, Info, Tag, Layers } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { DynamicIcon } from '../utils/iconHelper';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = skillCategories.map(cat => {
    const matchingSkills = cat.skills.filter(skill => {
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            skill.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCat = activeCategory === 'all' || cat.id === activeCategory;
      return matchesSearch && matchesCat;
    });
    return { ...cat, skills: matchingSkills };
  }).filter(cat => cat.skills.length > 0);

  const totalFilteredSkills = filteredCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  // Array of playful pastel themes for 5 categories
  const getCategoryTheme = (idx: number) => {
    const themes = [
      { washi: 'washi-sage', tagBg: 'bg-[#E8F0EA]', border: 'border-[#C3D8CB]', accent: '#8BA995', pill: 'text-[#344C40]' },
      { washi: 'washi-lavender', tagBg: 'bg-[#F5F2FB]', border: 'border-[#DFD7F2]', accent: '#C7B8E5', pill: 'text-[#5B4687]' },
      { washi: 'washi-yellow', tagBg: 'bg-[#FFF9E6]', border: 'border-[#F1E5C4]', accent: '#D4AF75', pill: 'text-[#8A6D3B]' },
      { washi: 'washi-pink', tagBg: 'bg-[#FCF2F6]', border: 'border-[#F3D2DE]', accent: '#E9A5BC', pill: 'text-[#9A4B69]' },
      { washi: 'washi-sage', tagBg: 'bg-[#EAF3ED]', border: 'border-[#C3D8CB]', accent: '#344C40', pill: 'text-[#22332B]' },
    ];
    return themes[idx % themes.length];
  };

  return (
    <section
      id="skills"
      aria-label="Skills and Technical Sticker Board"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F5EF] border-t border-[#E5E1D8] relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E1D8] text-[#344C40] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              <span className="text-[#8BA995]">✦</span>
              <span>My Sticker Board</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#302F38] tracking-tight">
              Tools, Tech & <span className="text-[#344C40] italic font-normal">Digital Craft.</span>
            </h2>
            <p className="font-handwriting text-xl sm:text-2xl text-[#8BA995] mt-1">
              things I use to turn curiosity into working applications ✨
            </p>
          </div>

          {/* Search Input styled as a clean sticker search */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#8BA995] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search a sticker (React, SQL, Python)..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-2xl bg-white border border-[#E5E1D8] text-[#302F38] placeholder:text-[#9694A0] focus:outline-none focus:border-[#8BA995] focus:ring-2 focus:ring-[#8BA995]/20 shadow-sm transition-all"
              aria-label="Search skills"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#6B6A75] hover:text-[#344C40]"
                aria-label="Clear skill search"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
              activeCategory === 'all'
                ? 'bg-[#8BA995] text-white shadow-sm'
                : 'bg-white text-[#302F38] hover:text-[#344C40] border border-[#E5E1D8] hover:bg-[#E8F0EA]'
            }`}
          >
            All Stickers ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#8BA995] text-white shadow-sm'
                  : 'bg-white text-[#302F38] hover:text-[#344C40] border border-[#E5E1D8] hover:bg-[#E8F0EA]'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Empty State */}
        {totalFilteredSkills === 0 && (
          <div className="bg-white p-12 rounded-3xl border border-[#E5E1D8] text-center max-w-md mx-auto my-8 shadow-card">
            <Info className="w-8 h-8 text-[#8BA995] mx-auto mb-3" />
            <h3 className="font-editorial text-lg font-bold text-[#302F38]">No matching stickers</h3>
            <p className="text-xs text-[#6B6A75] mt-1">Try another keyword or click "All Stickers".</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-4 px-4 py-2 text-xs font-bold text-white bg-[#8BA995] hover:bg-[#344C40] rounded-xl shadow-sm transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Sticker Collection Display */}
        <div className="flex flex-col gap-10">
          {filteredCategories.map((category, catIdx) => {
            const theme = getCategoryTheme(catIdx);

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E1D8] shadow-card relative"
              >
                {/* Washi Tape Accent */}
                <div className={`w-24 h-5 washi-tape ${theme.washi} -top-2.5 left-8 -rotate-1`} />

                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-[#E5E1D8]">
                  <div>
                    <h3 className="font-editorial text-xl font-bold text-[#302F38] flex items-center gap-2">
                      <span>{category.title}</span>
                      <span className="text-xs" style={{ color: theme.accent }}>✦</span>
                    </h3>
                    <p className="text-xs text-[#6B6A75] mt-0.5">
                      {category.description}
                    </p>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full ${theme.tagBg} ${theme.pill} border ${theme.border} self-start sm:self-auto font-semibold`}>
                    {category.skills.length} tools
                  </span>
                </div>

                {/* Skills Grid: Playful Sticker-like Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.03, y: -2 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className="group p-4 rounded-2xl bg-[#F8F5EF]/70 hover:bg-white border border-[#E5E1D8] hover:border-[#8BA995] shadow-sm hover:shadow-card transition-all duration-200 flex flex-col justify-between"
                    >
                      <div className="flex items-start gap-3">
                        {/* Skill Icon */}
                        <div className="w-10 h-10 rounded-2xl bg-white border border-[#E5E1D8] group-hover:border-[#8BA995] flex items-center justify-center text-[#344C40] group-hover:text-[#8BA995] shadow-xs flex-shrink-0 transition-colors">
                          <DynamicIcon name={skill.iconName} className="w-5 h-5" />
                        </div>
                        
                        <div className="flex flex-col min-w-0">
                          <p className="text-sm font-bold text-[#302F38] group-hover:text-[#344C40] transition-colors truncate">
                            {skill.name}
                          </p>
                          <p className="text-[11px] text-[#6B6A75] line-clamp-2 mt-0.5 leading-snug">
                            {skill.description || skill.category}
                          </p>
                        </div>
                      </div>

                      {/* Skill Category Pill */}
                      <div className="mt-3 pt-2.5 border-t border-[#E5E1D8]/60 flex items-center justify-between">
                        <span className="text-[10px] font-semibold text-[#8BA995] uppercase tracking-wider flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8BA995]" />
                          <span>{skill.category}</span>
                        </span>
                        <span className="text-[10px] text-[#9694A0] group-hover:text-[#302F38] transition-colors">
                          ✦ tool
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Playful Scrapbook Footnote */}
        <div className="mt-12 text-center">
          <p className="font-handwriting text-2xl text-[#8BA995]">
            "Made with curiosity ✦ Always expanding one tool at a time"
          </p>
        </div>

      </div>
    </section>
  );
};
