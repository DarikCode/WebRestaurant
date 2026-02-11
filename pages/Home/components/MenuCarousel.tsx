import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../../../components/Reveal';
import { MENU_ITEMS } from '../../../constants';
import { Translations } from '../../../types';

interface MenuCarouselProps {
  t: Translations;
}

const MenuCarousel: React.FC<MenuCarouselProps> = ({ t }) => {
  const featuredItems = MENU_ITEMS.slice(0, 3);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-[#050505] to-[#0a1014] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <Reveal>
          <span className="text-qazan-ruby uppercase tracking-widest text-sm block mb-4 font-semibold">{t.menu.tag}</span>
          <h2 className="text-5xl md:text-7xl font-serif text-white">{t.menu.title}</h2>
        </Reveal>
        <div className="flex items-center gap-4">
          <button onClick={prevSlide} className="p-4 border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="p-4 border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all">
            <ChevronRight size={24} />
          </button>
          <Link to="/menu" className="ml-10 hidden md:flex items-center gap-2 text-qazan-gold hover:text-white transition-colors uppercase tracking-widest text-sm font-bold group">
            <span>{t.menu.full_menu}</span>
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 min-h-[700px] h-auto relative pb-20 md:pb-0">
        {/* Background Ambient Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-qazan-gold/10 rounded-full blur-[100px] pointer-events-none"></div>

        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full relative grid grid-cols-1 md:grid-cols-12 items-center gap-10 md:gap-0"
          >
            {/* Text Section */}
            <div className="md:col-span-5 relative z-10 pl-0 md:pl-12 order-2 md:order-1 flex flex-col justify-center h-full pt-10 md:pt-0 text-center md:text-left">
              {/* Large Index Number */}
              <span className="absolute -top-10 md:-top-20 left-1/2 md:-left-10 -translate-x-1/2 md:translate-x-0 text-[8rem] md:text-[12rem] font-serif leading-none text-white/[0.03] select-none pointer-events-none">
                0{currentIndex + 1}
              </span>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative z-10"
              >
                <h3 className="text-4xl md:text-8xl font-serif text-white mb-6 md:mb-8 leading-none">
                  {featuredItems[currentIndex].title.split(' ')[0]} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-qazan-gold to-qazan-ruby italic">
                    {featuredItems[currentIndex].title.split(' ').slice(1).join(' ')}
                  </span>
                </h3>

                <p className="text-gray-400 text-base md:text-xl font-light leading-relaxed mb-8 md:mb-10 max-w-md mx-auto md:mx-0 border-l-0 md:border-l-2 border-qazan-gold/30 pl-0 md:pl-6">
                  {featuredItems[currentIndex].description}
                </p>

                <div className="flex items-center justify-center md:justify-start gap-8">
                  <span className="text-3xl md:text-4xl text-white font-serif">{featuredItems[currentIndex].price}</span>
                  <Link to="/menu" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-qazan-gold hover:border-qazan-gold hover:text-black transition-all">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Image Section */}
            <div className="md:col-span-7 h-[300px] md:h-full relative order-1 md:order-2 w-full">
              <motion.div
                initial={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)", opacity: 0 }}
                animate={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)", opacity: 1 }}
                exit={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full"
              >
                <div className="relative w-full h-full rounded-[2rem] md:rounded-l-[5rem] overflow-hidden shadow-2xl border border-white/10 md:border-r-0">
                  <img
                    src={featuredItems[currentIndex].image}
                    alt={featuredItems[currentIndex].title}
                    className="w-full h-full object-cover transform scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent via-transparent to-black/50"></div>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Progress Bar & Controls */}
        <div className="absolute bottom-10 left-6 md:left-12 right-6 md:right-12 flex items-center justify-between z-20">
          <div className="flex gap-4">
            {/* Number Progress */}
            <span className="text-white font-serif text-lg">0{currentIndex + 1}</span>
            <div className="w-32 h-[2px] bg-white/20 self-center relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-qazan-gold"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                key={currentIndex}
              />
            </div>
            <span className="text-white/30 font-serif text-lg">0{featuredItems.length}</span>
          </div>

          <div className="flex gap-4">
            <button onClick={prevSlide} className="p-4 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all hover:scale-110">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextSlide} className="p-4 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all hover:scale-110">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="text-center md:hidden pt-12">
        <Link to="/menu" className="inline-block border border-white/20 px-10 py-4 rounded-full text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          {t.menu.full_menu}
        </Link>
      </div>
    </section>
  );
};

export default MenuCarousel;
