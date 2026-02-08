import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Quote, ChevronDown, Calendar, Users, Phone, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { MENU_ITEMS, REVIEWS } from '../constants';
import { Translations } from '../types';

interface HomeProps {
  t: Translations;
}

const Home: React.FC<HomeProps> = ({ t }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const location = useLocation();

  // Parallax Logic for About Section
  const aboutRef = useRef(null);
  const { scrollYProgress: aboutScrollY } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });
  const aboutImgY = useTransform(aboutScrollY, [0, 1], ["5%", "-5%"]);
  const aboutTextY = useTransform(aboutScrollY, [0, 1], ["20%", "-20%"]);

  // Carousel State
  const featuredItems = MENU_ITEMS.slice(0, 3);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
  };

  // Handle hash scrolling
  useEffect(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="bg-qazan-black w-full overflow-hidden">

      {/* Hero Section */}
      <header className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center px-4">
        <motion.div style={{ y: y1, scale }} className="absolute -top-[10%] left-0 w-full h-[120%] z-0">
          <img
            src="/images/7.png"
            alt="Mosque Dome Architecture"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050505]"></div>
          <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
        </motion.div>

        <motion.div style={{ opacity }} className="relative z-10">
          <p className="text-white text-shadow-strong text-base md:text-lg uppercase tracking-[0.4em] mb-6 animate-pulse">
            {t.hero.subtitle}
          </p>
          <h1 className="text-6xl md:text-9xl font-serif font-medium text-white mb-8 leading-none">
            {t.hero.title_main}<br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-qazan-gold to-qazan-ruby">
              {t.hero.title_sub}
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-100 font-light text-base md:text-xl leading-relaxed mix-blend-screen px-4">
            {t.hero.desc}
          </p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
        >
          <ChevronDown size={40} />
        </motion.div>
      </header>

      {/* About / Story Section - Redesigned "Cool" Concept */}
      <section id="about" ref={aboutRef} className="py-32 px-6 relative max-w-7xl mx-auto overflow-visible mb-20">

        {/* Background Decorative Lines */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white/5"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/5"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

          {/* Images - Parallaxed */}
          <div className="lg:col-span-7 relative order-2 lg:order-1 perspective-1000">
            <motion.div style={{ y: aboutImgY }} className="relative z-10">
              <Reveal delay={0.2} width="100%">
                <div className="relative group">
                  {/* Main Image */}
                  <div className="overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl relative">
                    <img
                      src="/images/9.jpg"
                      alt="Interior"
                      className="w-full h-[400px] md:h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
                  </div>

                  {/* Repeating Text - "COOL" element */}
                  <div className="absolute -left-6 md:-left-10 top-1/4 -rotate-90 origin-center text-white/10 text-6xl md:text-8xl font-serif whitespace-nowrap pointer-events-none select-none mix-blend-overlay">
                    HERITAGE FLAVORS
                  </div>

                  {/* Floating Rotating Badge */}
                  <div className="absolute -bottom-10 -right-4 md:-bottom-16 md:-right-16 z-30 w-32 h-32 md:w-48 md:h-48 pointer-events-none block">
                    <div className="relative w-full h-full animate-[spin_12s_linear_infinite] bg-black rounded-full border border-qazan-gold/30 p-2">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                        <text className="text-[12px] font-bold uppercase tracking-[0.25em] fill-qazan-gold">
                          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                            • Est. 2024 • Taste of Heritage •
                          </textPath>
                        </text>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Star size={24} className="text-qazan-ruby fill-current" />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </motion.div>
          </div>

          {/* Text - Parallaxed Inverse */}
          <div className="lg:col-span-5 order-1 lg:order-2 z-20">
            <motion.div style={{ y: aboutTextY }}>
              <Reveal>
                <div className="glass-panel p-10 md:p-14 rounded-[3rem] border border-white/5 bg-black/40 backdrop-blur-md shadow-2xl relative overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-qazan-ruby/20 rounded-full blur-[80px]"></div>

                  <span className="text-qazan-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block border-l-2 border-qazan-gold pl-4">
                    {t.about.tag}
                  </span>

                  <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-[1.1]">
                    {t.about.title_main} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">{t.about.title_sub}</span> <br />
                    <span className="italic text-qazan-ruby font-medium">{t.about.title_end}</span>
                  </h2>

                  <p className="text-gray-300 font-light leading-relaxed mb-8 text-lg">
                    {t.about.p1}
                  </p>

                  <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                    <Link to="/story" className="text-white hover:text-qazan-gold transition-colors uppercase tracking-widest text-sm font-bold flex items-center gap-2 group">
                      {t.about.read_more}
                      <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Featured Menu Carousel */}
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
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // smooth ease
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
                  transition={{ duration: 5, ease: "linear", repeat: Infinity }} // Auto-play simulation visually
                  key={currentIndex} // Reset on slide change
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

      {/* Chef Section */}
      <section id="chef" className="py-32 px-6 bg-black relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/5 blur-[120px]"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-6 border border-qazan-gold/30 rounded-full animate-[spin_12s_linear_infinite]"></div>
                <img src="/images/chef.png" alt="Chef" className="w-full h-[500px] md:h-[600px] object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700 filter contrast-125" />
              </div>
            </Reveal>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <Reveal delay={0.2}>
              <h4 className="text-qazan-ruby uppercase tracking-widest text-sm mb-8 font-semibold">{t.chef.tag}</h4>
              <blockquote className="text-4xl md:text-6xl font-serif leading-tight mb-10 text-white relative">
                {t.chef.quote}
              </blockquote>
              <p className="font-sans text-gray-400 text-xl leading-relaxed mb-10">
                {t.chef.desc}
              </p>
              <div className="font-serif italic text-white/40 text-3xl">Chef Alim</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-32 relative overflow-hidden bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <Reveal width="100%">
              <span className="text-qazan-ruby uppercase tracking-widest text-sm block mb-4 font-semibold">{t.reviews.subtitle}</span>
              <h2 className="text-5xl md:text-7xl font-serif text-white">{t.reviews.title}</h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {REVIEWS.map((review, i) => (
              <Reveal key={review.id} delay={i * 0.1} fullHeight>
                <div className="glass-panel p-10 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  <div className="text-qazan-gold mb-8"><Quote size={40} className="opacity-50" /></div>
                  <p className="text-gray-200 font-light italic mb-10 leading-relaxed text-lg flex-grow">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-5 border-t border-white/10 pt-8">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white font-serif text-xl">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-serif text-base">{review.author}</h4>
                      <div className="flex text-qazan-gold text-xs gap-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation - Centered & Larger */}
      <section id="reservation" className="py-32 relative flex flex-col items-center justify-center">
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-qazan-ruby/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
          <Reveal width="100%">
            <div className="glass-panel p-10 md:p-20 rounded-[4rem] border border-white/10 text-center bg-black/60 backdrop-blur-xl shadow-2xl">
              <h2 className="text-5xl md:text-7xl font-serif mb-6 text-white">{t.reservation.title}</h2>
              <p className="text-qazan-ruby text-sm md:text-base uppercase tracking-widest mb-16 font-semibold">{t.reservation.subtitle}</p>

              {formStatus === 'success' ? (
                <div className="p-12 bg-qazan-ruby/10 border border-qazan-ruby text-qazan-ruby rounded-2xl animate-in fade-in zoom-in duration-500">
                  <p className="font-serif italic text-3xl mb-4">{t.reservation.success_title}</p>
                  <p className="text-lg text-white/60">We will call you shortly to confirm.</p>
                  <button onClick={() => setFormStatus('idle')} className="mt-8 text-sm uppercase tracking-widest text-white underline font-bold">New Booking</button>
                </div>
              ) : (
                <form onSubmit={handleReservation} className="space-y-12 text-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="group relative">
                      <input type="text" id="name" required className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg focus:outline-none focus:border-qazan-ruby transition-colors placeholder-transparent peer text-center" placeholder="Name" />
                      <label htmlFor="name" className="absolute left-1/2 -translate-x-1/2 -top-4 text-white/50 text-xs uppercase tracking-wider transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:-top-4 peer-focus:text-xs peer-focus:text-qazan-ruby whitespace-nowrap">
                        {t.reservation.label_name}
                      </label>
                    </div>
                    <div className="group relative">
                      <input type="tel" id="phone" required className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg focus:outline-none focus:border-qazan-ruby transition-colors placeholder-transparent peer text-center" placeholder="Phone" />
                      <label htmlFor="phone" className="absolute left-1/2 -translate-x-1/2 -top-4 text-white/50 text-xs uppercase tracking-wider transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:-top-4 peer-focus:text-xs peer-focus:text-qazan-ruby whitespace-nowrap">
                        {t.reservation.label_phone}
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="group relative">
                      <input type="date" id="date" required className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg focus:outline-none focus:border-qazan-ruby transition-colors color-white text-center" />
                    </div>
                    <div className="group relative">
                      <select id="guests" className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg focus:outline-none focus:border-qazan-ruby transition-colors appearance-none cursor-pointer text-center">
                        <option value="1" className="bg-qazan-black text-gray-400">1 {t.reservation.label_guests}</option>
                        <option value="2" className="bg-qazan-black text-gray-400">2 {t.reservation.label_guests}</option>
                        <option value="3" className="bg-qazan-black text-gray-400">3 {t.reservation.label_guests}</option>
                        <option value="4" className="bg-qazan-black text-gray-400">4+ {t.reservation.label_guests}</option>
                      </select>
                      <ChevronDown size={18} className="absolute right-0 top-5 text-white/30 pointer-events-none" />
                    </div>
                  </div>

                  <div className="pt-10 text-center">
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="bg-qazan-gold hover:bg-white text-black px-16 py-5 rounded-full uppercase tracking-[0.2em] font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-qazan-gold/50"
                    >
                      {formStatus === 'submitting' ? 'Processing...' : t.reservation.btn_submit}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;