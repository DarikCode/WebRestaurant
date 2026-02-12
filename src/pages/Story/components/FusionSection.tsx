import React from 'react';
import { Reveal } from '../../../components/Reveal';
import { Translations } from '../../../types';

interface FusionSectionProps {
  t: Translations;
}

const FusionSection: React.FC<FusionSectionProps> = ({ t }) => {
  return (
    <section className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="order-2 md:order-1">
          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              <img src="https://picsum.photos/600/800?random=22" alt="Nordic Nature" className="w-full h-[450px] object-cover rounded-[2rem] mt-16 opacity-80 hover:opacity-100 transition-opacity duration-500" />
              <img src="https://picsum.photos/600/800?random=23" alt="Spices" className="w-full h-[450px] object-cover rounded-[2rem] opacity-80 hover:opacity-100 transition-opacity duration-500" />
            </div>
          </Reveal>
        </div>

        <div className="order-1 md:order-2 md:pl-12 text-center md:text-left">
          <Reveal>
            <span className="text-qazan-ruby uppercase tracking-widest text-sm font-semibold block mb-6">Helsinki</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-10 leading-tight">
              {t.story_page.section2_title}
            </h2>
            <div className="h-[2px] w-24 bg-white/20 mb-10 mx-auto md:mx-0"></div>
            <p className="text-gray-300 font-light leading-loose text-xl text-justify">
              {t.story_page.section2_text}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default FusionSection;
