import React from 'react';
import { Reveal } from '../../../components/Reveal';
import { Translations } from '../../../types';

interface ChefSectionProps {
  t: Translations;
}

const ChefSection: React.FC<ChefSectionProps> = ({ t }) => {
  return (
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
  );
};

export default ChefSection;
