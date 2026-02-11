import React from 'react';
import { Reveal } from '../../../components/Reveal';
import { Translations } from '../../../types';

interface RootsSectionProps {
  t: Translations;
}

const RootsSection: React.FC<RootsSectionProps> = ({ t }) => {
  return (
    <section className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <Reveal>
          <div className="md:pr-12 text-center md:text-left">
            <span className="text-qazan-ruby uppercase tracking-widest text-sm font-semibold block mb-6">1925 - Present</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-10 leading-tight">
              {t.story_page.section1_title}
            </h2>
            <div className="h-[2px] w-24 bg-white/20 mb-10 mx-auto md:mx-0"></div>
            <p className="text-gray-300 font-light leading-loose text-xl text-justify">
              {t.story_page.section1_text}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative group">
            <div className="absolute -inset-4 bg-qazan-gold/10 rounded-full blur-2xl group-hover:bg-qazan-gold/20 transition-all duration-700"></div>
            <img
              src="https://picsum.photos/800/1000?random=21"
              alt="Cooking Tradition"
              className="w-full h-[600px] object-cover rounded-t-[10rem] rounded-b-[2rem] border border-white/10 filter sepia-[0.3] grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default RootsSection;
