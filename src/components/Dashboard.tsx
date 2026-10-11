import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Target, Star, Bookmark } from 'lucide-react';
import { currentlyExploring } from '../data/portfolioData';

export const Dashboard: React.FC = () => {
  const cardTints = [
    { washi: "washi-sage", bg: "bg-white", border: "border-[#E5E1D8]", tag: "#8BA995" },
    { washi: "washi-lavender", bg: "bg-white", border: "border-[#E5E1D8]", tag: "#7A63A5" },
    { washi: "washi-yellow", bg: "bg-white", border: "border-[#E5E1D8]", tag: "#D4AF75" },
    { washi: "washi-pink", bg: "bg-white", border: "border-[#E5E1D8]", tag: "#E9A5BC" }
  ];

  return (
    <section
      id="dashboard"
      aria-label="Currently Exploring and Learning Desk Notes"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F5EF] border-t border-[#E5E1D8] relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E1D8] text-[#344C40] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <span className="text-[#8BA995]">✦</span>
            <span>Desk Notes</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#302F38] tracking-tight">
            Currently Learning & <span className="text-[#344C40] italic font-normal">Active Goals.</span>
          </h2>
          <p className="font-handwriting text-xl sm:text-2xl text-[#8BA995] mt-1">
            topics on my desk right now, experiments in progress, and upcoming milestones 📝
          </p>
        </div>

        {/* Learning Cards Grid with Scrapbook Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {currentlyExploring.map((item, index) => {
            const tint = cardTints[index % cardTints.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className={`p-5 sm:p-6 rounded-3xl ${tint.bg} border ${tint.border} hover:border-[#8BA995] shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between relative`}
              >
                {/* Washi Tape */}
                <div className={`w-20 h-4 washi-tape ${tint.washi} -top-2 left-6 -rotate-1`} />

                <div>
                  <div className="flex items-center justify-between mb-3 pt-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider" style={{ color: tint.tag }}>
                      {item.category}
                    </span>
                    
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                        item.status === 'In Active Study'
                          ? 'bg-[#E8F0EA] text-[#344C40] border border-[#C3D8CB]'
                          : item.status === 'Building Practice'
                          ? 'bg-[#F5F2FB] text-[#604E85] border border-[#DFD7F2]'
                          : 'bg-[#FFF9E6] text-[#8A6D3B] border border-[#F1E5C4]'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="font-editorial text-base font-bold text-[#302F38] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#6B6A75] leading-relaxed mb-4">
                    {item.notes}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5E1D8] flex flex-wrap gap-1">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-lg bg-[#F8F5EF] text-[10px] font-semibold text-[#302F38] border border-[#E5E1D8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
