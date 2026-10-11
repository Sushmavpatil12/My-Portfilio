import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { DynamicIcon } from '../utils/iconHelper';

export const Certifications: React.FC = () => {
  const washiTapes = ['washi-sage', 'washi-lavender', 'washi-yellow', 'washi-pink'];

  return (
    <section
      id="certifications"
      aria-label="Certifications and Technical Training"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F5EF] border-t border-[#E5E1D8] relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E1D8] text-[#344C40] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <span className="text-[#8BA995]">✦</span>
            <span>Badge Collection</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#302F38] tracking-tight">
            Certifications & <span className="text-[#344C40] italic font-normal">Learning Badges.</span>
          </h2>
          <p className="font-handwriting text-xl sm:text-2xl text-[#8BA995] mt-1">
            structured courses and verified training milestones 📜
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E1D8] hover:border-[#8BA995] shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between relative"
            >
              {/* Washi Tape Strip */}
              <div className={`w-24 h-5 washi-tape ${washiTapes[index % washiTapes.length]} -top-2.5 left-8 -rotate-1`} />

              <div>
                <div className="flex items-start justify-between gap-4 mb-4 pt-1">
                  <div className="w-12 h-12 rounded-2xl bg-[#E8F0EA] border border-[#C3D8CB] flex items-center justify-center text-[#344C40] shadow-sm">
                    <DynamicIcon name={cert.icon} className="w-6 h-6 text-[#344C40]" />
                  </div>

                  <span className="text-xs font-semibold px-3 py-1 rounded-xl bg-[#F8F5EF] border border-[#E5E1D8] text-[#6B6A75]">
                    {cert.issueDate}
                  </span>
                </div>

                <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#302F38] mb-1">
                  {cert.title}
                </h3>

                <p className="text-xs font-semibold text-[#8BA995] mb-3">
                  {cert.issuer}
                </p>

                <p className="text-xs sm:text-sm text-[#6B6A75] leading-relaxed mb-4">
                  {cert.summary}
                </p>
              </div>

              {/* Skills Gained Tags & Verification */}
              <div className="pt-4 border-t border-[#E5E1D8] flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsGained.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-lg bg-[#F8F5EF] border border-[#E5E1D8] text-[10px] font-semibold text-[#302F38]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#8BA995]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
