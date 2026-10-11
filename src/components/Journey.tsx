import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, CheckCircle2, Sparkles, Pin } from 'lucide-react';
import { educationHistory } from '../data/portfolioData';

export const Journey: React.FC = () => {
  const milestoneNotes = [
    { washi: "washi-sage", note: "diving deep into IT systems & web craft 🎓" },
    { washi: "washi-yellow", note: "where my curiosity for coding began 💻" }
  ];

  return (
    <section
      id="journey"
      aria-label="Education and Learning Journey"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F5EF] border-t border-[#E5E1D8] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E1D8] text-[#344C40] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <span className="text-[#8BA995]">✦</span>
            <span>Academic Roadmap</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#302F38] tracking-tight">
            My Learning Journey & <span className="text-[#344C40] italic font-normal">Milestones.</span>
          </h2>
          <p className="font-handwriting text-xl sm:text-2xl text-[#8BA995] mt-1">
            from writing my first lines of code to building software applications 🧭
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[#8BA995] via-[#C7B8E5] to-[#D4AF75] -translate-x-1/2 rounded-full" />

          <div className="space-y-12">
            {educationHistory.map((item, index) => {
              const isEven = index % 2 === 0;
              const meta = milestoneNotes[index % milestoneNotes.length];

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-8 group`}
                >
                  {/* Timeline Node Marker */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-2xl bg-[#8BA995] text-white flex items-center justify-center shadow-sm z-10 group-hover:scale-110 transition-all duration-300">
                    <GraduationCap className="w-5 h-5" />
                  </div>

                  {/* Content Card with Scrapbook Washi Tape */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-6 w-full">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E5E1D8] hover:border-[#8BA995] shadow-card hover:shadow-card-hover transition-all duration-200 relative"
                    >
                      {/* Washi Tape Accent */}
                      <div className={`w-24 h-5 washi-tape ${meta.washi} -top-2.5 left-8 -rotate-1`} />

                      {/* Top Meta Line: Period & Status */}
                      <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#344C40] bg-[#E8F0EA] px-3 py-1 rounded-xl border border-[#C3D8CB]">
                          <Calendar className="w-3.5 h-3.5 text-[#8BA995]" />
                          <span>{item.period}</span>
                        </span>

                        <span
                          className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                            item.status === 'In Progress'
                              ? 'bg-[#F5F2FB] text-[#604E85] border border-[#DFD7F2]'
                              : 'bg-[#F8F5EF] text-[#302F38] border border-[#E5E1D8]'
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      {/* Degree & Institution */}
                      <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#302F38]">
                        {item.degree}
                      </h3>

                      <p className="text-xs sm:text-sm font-semibold text-[#8BA995] mt-1 mb-3">
                        {item.institution}
                      </p>

                      {/* Handwritten Reflection Note */}
                      <div className="mb-4 p-2.5 rounded-xl bg-[#F8F5EF] border border-[#E5E1D8] font-handwriting text-base text-[#344C40]">
                        "{meta.note}"
                      </div>

                      {/* Key Academic Highlights */}
                      <div className="pt-3 border-t border-[#E5E1D8] space-y-2">
                        {item.highlights.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs text-[#6B6A75] leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#8BA995] mt-0.5 flex-shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
