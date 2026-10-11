import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Sparkles, Coffee, BookOpen, Heart, Activity } from 'lucide-react';

interface CuratedCar {
  name: string;
  brand: string;
  image: string;
  aspect: string;
  note: string;
}

// Strictly 3 curated high-quality car photographs for the entire website
const curatedCars: CuratedCar[] = [
  {
    name: "BMW M4 Competition",
    brand: "BMW",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80",
    aspect: "Aggressive aerodynamic stance, precision steering feedback & German engineering",
    note: "that Isle of Man Green & sculpted lines"
  },
  {
    name: "Porsche 911 GT3 RS",
    brand: "Porsche",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1000&q=80",
    aspect: "Downforce mastery, rear-engine balance & timeless silhouette",
    note: "pure track physics meets functional sculpture"
  },
  {
    name: "Lamborghini Revuelto",
    brand: "Lamborghini",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1000&q=80",
    aspect: "Iconic wedge profile, dramatic scissor lines & Italian industrial design",
    note: "dramatic lines that make your jaw drop"
  }
];

export const BeyondWork: React.FC = () => {
  const [activeCarIdx, setActiveCarIdx] = useState<number>(0);

  return (
    <section
      id="beyond"
      aria-label="Things That Get My Attention ✦"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F5EF] border-t border-[#E5E1D8] relative overflow-hidden"
    >
      {/* Background Pastel Ambience */}
      <div className="absolute inset-0 bg-cream-dots opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#C7B8E5]/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-[#FFEAA7]/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-2/3 right-1/4 w-80 h-80 bg-[#E9A5BC]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E1D8] text-[#344C40] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm"
          >
            <span className="text-[#8BA995]">✦</span>
            <span>Beyond the Code • Moodboard</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#302F38] tracking-tight"
          >
            Things That Get My Attention <span className="text-[#8BA995]">✦</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-handwriting text-xl sm:text-2xl text-[#8BA995] mt-1"
          >
            a moodboard of what inspires me—precision in cars, playing cricket, and simple everyday joys 🏎️🏏☕
          </motion.p>
        </div>

        {/* Top Split: Cars Showcase (Left 7 cols) & Playing Cricket (Right 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* 1. Cars Moodboard Polaroid (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white rounded-3xl border border-[#E5E1D8] hover:border-[#8BA995] shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between relative"
          >
            {/* Washi Tape Accent */}
            <div className="w-32 h-5 washi-tape washi-yellow -top-2.5 left-10 -rotate-1" />

            {/* Interactive Car Polaroid Container */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#FAF8F4] border-b border-[#E5E1D8]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={curatedCars[activeCarIdx].image}
                  src={curatedCars[activeCarIdx].image}
                  alt={curatedCars[activeCarIdx].name}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#302F38]/75 via-transparent to-transparent pointer-events-none" />

              {/* Category Pill Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-md text-[#344C40] border border-[#E5E1D8] shadow-sm flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-[#8BA995]" />
                  <span>Automotive Design 🏎️</span>
                </span>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
                <div>
                  <p className="text-white font-editorial text-lg sm:text-xl font-bold drop-shadow-sm">
                    {curatedCars[activeCarIdx].name}
                  </p>
                  <p className="font-handwriting text-base text-[#FFEAA7] mt-0.5 drop-shadow-sm">
                    "{curatedCars[activeCarIdx].note}"
                  </p>
                </div>
              </div>
            </div>

            {/* Content & Curated Switcher */}
            <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3 className="font-editorial text-xl font-bold text-[#302F38]">
                    Appreciation for Industrial Design & Aerodynamics
                  </h3>
                  <span className="font-handwriting text-base text-[#8BA995]">
                    photo 0{activeCarIdx + 1} of 03
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#6B6A75] leading-relaxed mb-4">
                  I love seeing how aerodynamic engineering and sculpted aesthetic lines come together in machines from BMW, Porsche, and Lamborghini. The obsession with mechanical precision inspires how I think about clean architecture and smooth interactions.
                </p>
              </div>

              {/* 3-Car Curated Switcher Pills */}
              <div className="pt-4 border-t border-[#E5E1D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="text-[11px] uppercase font-bold text-[#8BA995] tracking-wider">
                  Select Model:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {curatedCars.map((car, idx) => (
                    <button
                      key={car.name}
                      onClick={() => setActiveCarIdx(idx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        activeCarIdx === idx
                          ? 'bg-[#344C40] text-white shadow-sm'
                          : 'bg-[#F8F5EF] text-[#302F38] hover:bg-[#E8F0EA] border border-[#E5E1D8]'
                      }`}
                    >
                      {car.brand}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Playing Cricket Area (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 bg-white rounded-3xl border border-[#E5E1D8] hover:border-[#8BA995] shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between relative"
          >
            {/* Washi Tape Accent */}
            <div className="w-28 h-5 washi-tape washi-sage -top-2.5 right-10 rotate-1" />

            {/* Cricket Photography Frame */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#FAF8F4] border-b border-[#E5E1D8]">
              <img
                src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&w=800&q=80"
                alt="Cricket leather ball and wooden bat on green turf"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#302F38]/70 via-transparent to-transparent pointer-events-none" />

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-md text-[#344C40] border border-[#E5E1D8] shadow-sm flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#8BA995]" />
                  <span>On the Pitch 🏏</span>
                </span>
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-editorial text-lg font-bold drop-shadow-sm">
                  The Joy of Playing Cricket
                </p>
                <p className="font-handwriting text-base text-[#FFEAA7] mt-0.5 drop-shadow-sm">
                  "nothing beats the crack of bat on ball ✦"
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="font-editorial text-xl font-bold text-[#302F38] mb-2">
                  Weekend Matches, Energy & Focus
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6A75] leading-relaxed mb-4">
                  Whenever I get the chance, I love heading out to the ground for a game of cricket. It’s my ultimate reset—running between wickets, timing the ball, staying sharp under pressure, and enjoying that energetic team camaraderie out under the open sky.
                </p>
              </div>

              {/* Cricket Vibe Tags */}
              <div className="pt-4 border-t border-[#E5E1D8] flex flex-wrap gap-1.5">
                {['Playing Outdoors', 'Weekend Energy', 'Sharp Reflexes', 'Team Spirit', 'Active Reset'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-lg bg-[#F8F5EF] border border-[#E5E1D8] text-[11px] font-semibold text-[#302F38]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* 3. Little Things I Enjoy: Lifestyle Moodboard Row (4 Cards) */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-lg text-[#E9A5BC]">✿</span>
            <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#302F38]">
              Little Things I Enjoy
            </h3>
            <span className="font-handwriting text-base text-[#8BA995] ml-2">
              everyday moments that bring calm & inspiration
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Wildflowers & Natural Light */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl border border-[#E5E1D8] hover:border-[#E9A5BC] shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col relative"
            >
              <div className="w-16 h-4 washi-tape washi-pink -top-2 left-6 -rotate-2" />
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#FAF8F4] relative border-b border-[#E5E1D8]">
                <img
                  src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80"
                  alt="Sunlit wildflowers and gentle florals"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="font-editorial text-base font-bold text-[#302F38]">
                    Sunlight & Florals
                  </h4>
                  <p className="text-xs text-[#6B6A75] mt-1 leading-relaxed">
                    Soft natural tones, blooming florals, and gentle golden light that make any space feel alive.
                  </p>
                </div>
                <p className="font-handwriting text-base text-[#E9A5BC] mt-3">
                  "gentle blooms 🌼"
                </p>
              </div>
            </motion.div>

            {/* Card 2: Fresh Morning Chai */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-3xl border border-[#E5E1D8] hover:border-[#D4AF75] shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col relative"
            >
              <div className="w-16 h-4 washi-tape washi-yellow -top-2 right-6 rotate-2" />
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#FAF8F4] relative border-b border-[#E5E1D8]">
                <img
                  src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80"
                  alt="Warm cup of chai on clean wooden surface"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="font-editorial text-base font-bold text-[#302F38]">
                    Hot Chai Rituals
                  </h4>
                  <p className="text-xs text-[#6B6A75] mt-1 leading-relaxed">
                    Starting the day with a steaming cup of tea, sketching logic flows, and setting intentions.
                  </p>
                </div>
                <p className="font-handwriting text-base text-[#D4AF75] mt-3">
                  "steaming tea & ideas ☕"
                </p>
              </div>
            </motion.div>

            {/* Card 3: Books & Quiet Pages */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-3xl border border-[#E5E1D8] hover:border-[#C7B8E5] shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col relative"
            >
              <div className="w-16 h-4 washi-tape washi-lavender -top-2 left-6 rotate-1" />
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#FAF8F4] relative border-b border-[#E5E1D8]">
                <img
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80"
                  alt="Open book in natural sunlight"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="font-editorial text-base font-bold text-[#302F38]">
                    Curiosity & Books
                  </h4>
                  <p className="text-xs text-[#6B6A75] mt-1 leading-relaxed">
                    Reading essays, habit psychology, and mental models to gain fresh perspectives on life.
                  </p>
                </div>
                <p className="font-handwriting text-base text-[#7A63A5] mt-3">
                  "between open pages 📖"
                </p>
              </div>
            </motion.div>

            {/* Card 4: Botanical Greenery */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white rounded-3xl border border-[#E5E1D8] hover:border-[#8BA995] shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col relative"
            >
              <div className="w-16 h-4 washi-tape washi-sage -top-2 right-6 -rotate-2" />
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#FAF8F4] relative border-b border-[#E5E1D8]">
                <img
                  src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80"
                  alt="Gentle green leaves in morning sunlight"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="font-editorial text-base font-bold text-[#302F38]">
                    Botanical Greenery
                  </h4>
                  <p className="text-xs text-[#6B6A75] mt-1 leading-relaxed">
                    Calming greens and peaceful air that bring natural tranquility while building applications.
                  </p>
                </div>
                <p className="font-handwriting text-base text-[#8BA995] mt-3">
                  "calming greens 🌿"
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Creative Motto Footer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E1D8] max-w-3xl mx-auto text-center shadow-card relative"
        >
          <div className="w-24 h-5 washi-tape washi-pink -top-2.5 left-1/2 -translate-x-1/2" />
          <p className="font-editorial text-lg sm:text-xl text-[#302F38] italic">
            "Beauty in design is not an afterthought—it is the direct manifestation of discipline, attention, and care for what you create."
          </p>
          <p className="font-handwriting text-xl text-[#8BA995] mt-2 flex items-center justify-center gap-1.5">
            <span>✦ Sushma's creative motto ✦</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};
