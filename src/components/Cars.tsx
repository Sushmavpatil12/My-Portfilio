import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Gauge, Zap, X, Eye, Compass } from 'lucide-react';
import { carCollection } from '../data/portfolioData';
import { CarItem } from '../types';

export const Cars: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [activeCarModal, setActiveCarModal] = useState<CarItem | null>(null);

  const brands = ['All', 'BMW', 'Porsche', 'Lamborghini'];

  const filteredCars = selectedBrand === 'All'
    ? carCollection
    : carCollection.filter(car => car.brand === selectedBrand);

  return (
    <section
      id="cars"
      aria-label="My Passion for Cars and Automotive Engineering"
      className="py-28 px-4 sm:px-6 lg:px-8 bg-[#22332B] text-[#F8F5EF] relative overflow-hidden"
    >
      {/* Luxury Ambient Green & Gold Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[#8BA995]/15 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-[#D4AF75]/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8BA995]/20 border border-[#8BA995]/40 text-[#A4C0AE] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <span className="text-[#D4AF75]">✦</span>
              <span>Automotive Passion</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8F5EF] tracking-tight">
              Sculpted for Speed, <br className="hidden sm:inline" />
              <span className="text-[#D4AF75] italic font-normal">Engineered for Precision.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#F8F5EF]/85 mt-3 max-w-2xl leading-relaxed">
              A dedicated tribute to automotive sculpture, mechanical poise, and aerodynamic engineering from BMW, Porsche, and Lamborghini.
            </p>
          </div>

          {/* Brand Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 bg-[#2D4238] border border-[#446253] rounded-2xl self-start md:self-auto overflow-x-auto max-w-full shadow-lg">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  selectedBrand === brand
                    ? 'bg-[#D4AF75] text-[#22332B] shadow-md'
                    : 'text-[#F8F5EF]/80 hover:text-white hover:bg-[#344C40]'
                }`}
                aria-pressed={selectedBrand === brand}
              >
                {brand === 'All' ? 'All Admirations' : brand}
              </button>
            ))}
          </div>
        </div>

        {/* Cinematic Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCars.map((car, index) => (
              <motion.article
                key={car.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-[#2D4238]/90 rounded-3xl border border-[#446253] hover:border-[#D4AF75]/70 shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
              >
                {/* Car High-Resolution Photography */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1E2D25]">
                  <img
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D4238] via-transparent to-transparent opacity-90 pointer-events-none" />
                  
                  {/* Brand & Category Floating Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-[#1E2D25]/90 backdrop-blur-md text-[#D4AF75] border border-[#D4AF75]/40 shadow-md">
                      {car.brand}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#2D4238]/90 backdrop-blur-md text-[#F8F5EF] border border-[#446253]">
                      {car.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <h3 className="font-editorial text-2xl font-bold text-[#F8F5EF] group-hover:text-[#D4AF75] transition-colors">
                      {car.model}
                    </h3>
                    <p className="text-xs text-[#A4C0AE] mt-1 font-semibold line-clamp-1">
                      {car.tagline}
                    </p>

                    {/* Quick Specs Chips Grid */}
                    <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-[#446253]">
                      <div className="p-2.5 rounded-2xl bg-[#1E2D25] border border-[#446253]/80">
                        <p className="text-[10px] uppercase font-bold text-[#D4AF75] flex items-center gap-1">
                          <Gauge className="w-3 h-3 text-[#D4AF75]" />
                          <span>Power</span>
                        </p>
                        <p className="text-xs font-bold text-[#F8F5EF] mt-0.5">{car.specs.power}</p>
                      </div>

                      <div className="p-2.5 rounded-2xl bg-[#1E2D25] border border-[#446253]/80">
                        <p className="text-[10px] uppercase font-bold text-[#A4C0AE] flex items-center gap-1">
                          <Zap className="w-3 h-3 text-[#8BA995]" />
                          <span>0–100 km/h</span>
                        </p>
                        <p className="text-xs font-bold text-[#F8F5EF] mt-0.5">{car.specs.acceleration}</p>
                      </div>
                    </div>
                  </div>

                  {/* Why I Admire It Snippet */}
                  <div className="pt-3 border-t border-[#446253] flex items-center justify-between">
                    <p className="text-[11px] text-[#F8F5EF]/80 italic line-clamp-1 pr-2">
                      "{car.whyILoveIt}"
                    </p>
                    <button
                      onClick={() => setActiveCarModal(car)}
                      className="p-2 rounded-xl bg-[#344C40] text-[#D4AF75] hover:bg-[#D4AF75] hover:text-[#22332B] transition-colors flex-shrink-0"
                      aria-label={`View detailed specs for ${car.model}`}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Editorial Footnote */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-[#2D4238] border border-[#446253] text-center max-w-3xl mx-auto shadow-2xl">
          <p className="font-editorial text-base sm:text-lg text-[#F8F5EF] italic">
            "Automotive engineering is where aerodynamics, propulsion physics, and sculpture harmonize. That same standard of craft drives my passion for building software."
          </p>
          <p className="text-xs font-bold text-[#D4AF75] uppercase tracking-wider mt-3 flex items-center justify-center gap-1.5">
            <span>✦</span>
            <span>Sushma's Engineering Admiration</span>
            <span>✦</span>
          </p>
        </div>

      </div>

      {/* Car Lightbox Modal */}
      <AnimatePresence>
        {activeCarModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1A2620]/85 backdrop-blur-md overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) setActiveCarModal(null);
            }}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-[#22332B] border border-[#D4AF75]/50 rounded-3xl shadow-2xl overflow-hidden my-auto text-[#F8F5EF]"
            >
              <div className="relative aspect-[16/9] w-full">
                <img
                  src={activeCarModal.image}
                  alt={activeCarModal.model}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#22332B] via-transparent to-transparent" />
                
                <button
                  onClick={() => setActiveCarModal(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-[#1E2D25]/80 text-[#F8F5EF] hover:bg-[#D4AF75] hover:text-[#22332B] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase bg-[#D4AF75] text-[#22332B]">
                    {activeCarModal.brand}
                  </span>
                  <h3 className="font-editorial text-3xl font-bold text-[#F8F5EF] mt-2">
                    {activeCarModal.model}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-sm text-[#F8F5EF]/90 leading-relaxed">
                  {activeCarModal.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#2D4238] border border-[#446253]">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF75]">Powertrain</p>
                    <p className="text-sm font-semibold text-[#F8F5EF] mt-1">{activeCarModal.specs.engine}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#2D4238] border border-[#446253]">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#8BA995]">Performance</p>
                    <p className="text-sm font-semibold text-[#F8F5EF] mt-1">{activeCarModal.specs.power} • {activeCarModal.specs.acceleration}</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#2D4238] border border-[#D4AF75]/40">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF75]">Why It Inspires Me</p>
                  <p className="text-xs sm:text-sm text-[#F8F5EF] mt-1 italic">
                    "{activeCarModal.whyILoveIt}"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
