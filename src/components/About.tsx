import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Coffee, Heart, Pin, Compass, Feather } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="story"
      aria-label="A Little More About Me ✿"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F5EF] border-t border-[#E5E1D8] relative overflow-hidden"
    >
      {/* Background Ambience: Subtle Pastel Blobs & Dots */}
      <div className="absolute inset-0 bg-cream-dots opacity-35 pointer-events-none" />
      <div className="absolute top-12 right-12 w-96 h-96 bg-[#C7B8E5]/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-16 left-8 w-96 h-96 bg-[#FFEAA7]/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E9A5BC]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header: Scrapbook Page Title */}
        <div className="flex flex-col items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E1D8] text-[#344C40] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm"
          >
            <span className="text-[#E9A5BC]">✿</span>
            <span>Personal Scrapbook • Chapter 01</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#302F38] tracking-tight text-balance"
          >
            A Little More About Me <span className="text-[#E9A5BC] font-normal">✿</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-handwriting text-xl sm:text-2xl text-[#8BA995] mt-2"
          >
            a peek into my world, the way I think, and what makes me tick ✨
          </motion.p>
        </div>

        {/* 4 Playful Asymmetrical Sticky Notes (Requested natural phrases) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          
          {/* Note 1: A curious mind */}
          <motion.div
            whileHover={{ scale: 1.03, rotate: -2 }}
            className="p-5 rounded-3xl bg-[#FFF9E6] border border-[#F1E5C4] shadow-card relative -rotate-1 transition-transform select-none flex flex-col justify-between"
          >
            <div className="w-14 h-4 washi-tape washi-yellow -top-2 left-8" />
            <div className="pt-2">
              <span className="text-xs font-bold tracking-wider uppercase text-[#D4AF75]">Mindset ✦</span>
              <p className="font-handwriting text-2xl font-bold text-[#302F38] mt-1.5 leading-snug">
                "A curious mind with a million little interests."
              </p>
            </div>
            <p className="font-sans text-xs text-[#6B6A75] mt-3 pt-3 border-t border-[#F1E5C4]/70">
              Always wondering how things work under the hood.
            </p>
          </motion.div>

          {/* Note 2: Always learning something new */}
          <motion.div
            whileHover={{ scale: 1.03, rotate: 2 }}
            className="p-5 rounded-3xl bg-[#F5F2FB] border border-[#DFD7F2] shadow-card relative rotate-1.5 transition-transform select-none flex flex-col justify-between"
          >
            <div className="w-14 h-4 washi-tape washi-lavender -top-2 right-8" />
            <div className="pt-2">
              <span className="text-xs font-bold tracking-wider uppercase text-[#7A63A5]">Motto ✦</span>
              <p className="font-handwriting text-2xl font-bold text-[#344C40] mt-1.5 leading-snug">
                "Always learning something new."
              </p>
            </div>
            <p className="font-sans text-xs text-[#6B6A75] mt-3 pt-3 border-t border-[#DFD7F2]/70">
              Ideas first, perfection later — building with joy.
            </p>
          </motion.div>

          {/* Note 3: A little competitive when it comes to cricket */}
          <motion.div
            whileHover={{ scale: 1.03, rotate: -1.5 }}
            className="p-5 rounded-3xl bg-[#E8F0EA] border border-[#C3D8CB] shadow-card relative -rotate-1.5 transition-transform select-none flex flex-col justify-between"
          >
            <div className="w-14 h-4 washi-tape washi-sage -top-2 left-10" />
            <div className="pt-2">
              <span className="text-xs font-bold tracking-wider uppercase text-[#8BA995]">Energy 🏏</span>
              <p className="font-handwriting text-2xl font-bold text-[#22332B] mt-1.5 leading-snug">
                "A little competitive when it comes to cricket."
              </p>
            </div>
            <p className="font-sans text-xs text-[#6B6A75] mt-3 pt-3 border-t border-[#C3D8CB]/70">
              Adrenaline, timing & the thrill of a good match.
            </p>
          </motion.div>

          {/* Note 4: Cars can definitely grab my attention */}
          <motion.div
            whileHover={{ scale: 1.03, rotate: 2 }}
            className="p-5 rounded-3xl bg-[#FCF2F6] border border-[#F3D2DE] shadow-card relative rotate-2 transition-transform select-none flex flex-col justify-between"
          >
            <div className="w-14 h-4 washi-tape washi-pink -top-2 right-10" />
            <div className="pt-2">
              <span className="text-xs font-bold tracking-wider uppercase text-[#E9A5BC]">Fascination 🏎️</span>
              <p className="font-handwriting text-2xl font-bold text-[#302F38] mt-1.5 leading-snug">
                "Cars can definitely grab my attention."
              </p>
            </div>
            <p className="font-sans text-xs text-[#6B6A75] mt-3 pt-3 border-t border-[#F3D2DE]/70">
              Drawn to aerodynamic precision and timeless lines.
            </p>
          </motion.div>

        </div>

        {/* Main Scrapbook Spread: Magazine / Journal Desk Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Notebook Desk Spread (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="bg-white p-7 sm:p-10 rounded-3xl border border-[#E5E1D8] shadow-card relative bg-notebook-grid overflow-hidden">
              
              {/* Corner Washi Tapes */}
              <div className="w-24 h-5 washi-tape washi-sage -top-2.5 left-8 -rotate-2" />
              <div className="w-24 h-5 washi-tape washi-yellow -top-2.5 right-8 rotate-2" />

              {/* Notebook Title & Stamp */}
              <div className="flex items-center justify-between pt-2 mb-6 border-b border-[#E5E1D8] pb-4">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-2xl bg-[#8BA995] flex items-center justify-center text-white shadow-sm font-editorial font-bold text-lg">
                    S
                  </span>
                  <div>
                    <h3 className="font-editorial text-2xl font-bold text-[#302F38]">
                      Collecting Interests, Memories & Ideas
                    </h3>
                    <p className="font-handwriting text-base text-[#8BA995]">
                      personal journal entry ✿ thoughts on building & living
                    </p>
                  </div>
                </div>
                <span className="text-[#E9A5BC] text-lg select-none">✦</span>
              </div>
              
              {/* Natural Storytelling Paragraphs (Non-academic, Conversational) */}
              <div className="flex flex-col gap-4 text-base text-[#6B6A75] leading-relaxed">
                <p>
                  I've always believed that the best things happen when you follow genuine curiosity. I don't see coding as just typing commands into a text editor—to me, it's digital crafting. Taking a spark of an idea, sketching it on scrap paper with a warm cup of chai, and breathing life into something interactive and real gives me immense joy.
                </p>
                <p>
                  I love the creative satisfaction of piecing together practical applications. Whether it's organizing backend data logically with SQL, crafting clean and responsive layouts with React, or turning raw numbers into visual dashboards, I enjoy finding clarity in complexity.
                </p>
                <p>
                  Outside of screens and code, my world is filled with things that make me pause: the thrill of stepping onto a cricket ground for a weekend match, the sculpted bodywork of a sports car cutting through the air, quiet morning sunlight, and books that challenge how I think.
                </p>
                <p>
                  Life feels richest when you're constantly learning, experimenting with ideas without taking yourself too seriously, and staying open to new experiences.
                </p>
              </div>

              {/* Bottom Quote & Handwritten Annotation */}
              <div className="mt-8 pt-5 border-t border-[#E5E1D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 font-handwriting text-xl text-[#344C40]">
                  <Coffee className="w-4 h-4 text-[#8BA995]" />
                  <span>"Collecting interests, memories, and new experiences."</span>
                </div>
                <div className="flex items-center gap-1.5 self-start sm:self-auto">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8BA995] animate-pulse" />
                  <span className="text-xs font-semibold text-[#302F38] uppercase tracking-wider">
                    Always Curious ✦
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Aesthetic Vibe Pills Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div className="p-4 rounded-2xl bg-white border border-[#E5E1D8] text-center shadow-sm -rotate-1 hover:rotate-0 transition-transform">
                <p className="font-handwriting text-lg text-[#8BA995]">Creativity</p>
                <p className="font-editorial text-sm font-bold text-[#302F38]">Digital Craft ✦</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#E5E1D8] text-center shadow-sm rotate-1 hover:rotate-0 transition-transform">
                <p className="font-handwriting text-lg text-[#7A63A5]">Energy</p>
                <p className="font-editorial text-sm font-bold text-[#302F38]">Cricket Lover 🏏</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#E5E1D8] text-center shadow-sm -rotate-1 hover:rotate-0 transition-transform">
                <p className="font-handwriting text-lg text-[#D4AF75]">Precision</p>
                <p className="font-editorial text-sm font-bold text-[#302F38]">Car Admirer 🏎️</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#E5E1D8] text-center shadow-sm rotate-1 hover:rotate-0 transition-transform">
                <p className="font-handwriting text-lg text-[#E9A5BC]">Daily Fuel</p>
                <p className="font-editorial text-sm font-bold text-[#302F38]">Chai & Books ☕</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Moodboard Cards & Lifestyle Reflections (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            
            {/* Scrapbook Memo: How My Mind Operates (Playful Pseudo-code) */}
            <div className="bg-white p-6 rounded-3xl border border-[#E5E1D8] shadow-card rotate-1 hover:rotate-0 transition-transform duration-300 relative">
              <div className="w-24 h-5 washi-tape washi-pink -top-2.5 left-1/2 -translate-x-1/2" />
              
              <div className="rounded-2xl p-4 bg-[#F8F5EF] border border-[#E5E1D8] mb-4 relative overflow-hidden font-mono text-xs">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#E5E1D8] text-[11px] text-[#6B6A75]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E9A5BC]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFEAA7]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#8BA995]" />
                  </div>
                  <span className="font-editorial font-bold text-[#344C40]">sushma_daily_loop.ts</span>
                </div>

                <div className="space-y-1.5 text-[#302F38]">
                  <p className="text-[#8BA995] font-semibold">// Daily curiosity engine</p>
                  <p><span className="text-[#7A63A5] font-bold">while</span> (true) &#123;</p>
                  <p className="pl-4">sipChai();</p>
                  <p className="pl-4">sketchIdeasOnPaper();</p>
                  <p className="pl-4">buildCleanCode();</p>
                  <p className="pl-4">playCricket(); <span className="text-[#8BA995] font-semibold">// keep moving</span></p>
                  <p className="pl-4">readAndReflect();</p>
                  <p>&#125;</p>
                </div>
              </div>

              <div className="text-center px-2">
                <p className="font-handwriting text-2xl text-[#302F38] font-bold">
                  "taking it one idea at a time"
                </p>
                <p className="text-xs text-[#8BA995] font-semibold mt-1">
                  software developer & curious mind ✦
                </p>
              </div>
            </div>

            {/* What Makes Me Tick: 3 Lifestyle Notes */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E5E1D8] shadow-card">
              <div className="flex items-center gap-2 mb-4 text-[#302F38]">
                <Pin className="w-4 h-4 text-[#8BA995] -rotate-45" />
                <h4 className="font-editorial text-lg font-bold">
                  Things I Truly Value
                </h4>
              </div>

              <div className="flex flex-col gap-3">
                <div className="p-3.5 rounded-2xl bg-[#F8F5EF] border border-[#E5E1D8] hover:border-[#8BA995] transition-colors">
                  <p className="text-sm font-bold text-[#302F38] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#8BA995]" />
                    <span>Clarity Over Complexity</span>
                  </p>
                  <p className="text-xs text-[#6B6A75] mt-1 leading-relaxed">
                    Clear thinking leads to clean code and easy-to-use interfaces. Simplicity always wins.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#F8F5EF] border border-[#E5E1D8] hover:border-[#C7B8E5] transition-colors">
                  <p className="text-sm font-bold text-[#302F38] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C7B8E5]" />
                    <span>Joy in the Process</span>
                  </p>
                  <p className="text-xs text-[#6B6A75] mt-1 leading-relaxed">
                    Building isn't just about the final output—it's about enjoying every step of the journey.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#F8F5EF] border border-[#E5E1D8] hover:border-[#E9A5BC] transition-colors">
                  <p className="text-sm font-bold text-[#302F38] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E9A5BC]" />
                    <span>Staying Grounded & Active</span>
                  </p>
                  <p className="text-xs text-[#6B6A75] mt-1 leading-relaxed">
                    Balancing focused screen time with sports, fresh air, and meaningful conversations.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
