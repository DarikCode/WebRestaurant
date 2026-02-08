import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { Translations } from '../types';
import { Compass, Heart, Award } from 'lucide-react';

interface StoryProps {
    t: Translations;
}

const Story: React.FC<StoryProps> = ({ t }) => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <div className="bg-qazan-black w-full overflow-hidden text-white">

            {/* Hero Section */}
            <header className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
                <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-[120%] z-0 -top-[10%]">
                    <img
                        src="/images/story.jpg"
                        alt="Ancient City Architecture"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#0a0a0a]"></div>
                </motion.div>

                <div className="relative z-10">
                    <Reveal>
                        <h1 className="text-6xl md:text-9xl font-serif text-white mb-8">
                            {t.story_page.hero_title}
                        </h1>
                        <p className="text-qazan-gold text-base md:text-xl uppercase tracking-[0.3em] font-light">
                            {t.story_page.hero_subtitle}
                        </p>
                    </Reveal>
                </div>
            </header>

            {/* Content Section 1: Roots */}
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

            {/* Decorative Divider */}
            <div className="w-full flex justify-center py-12 opacity-30">
                <div className="h-px w-1/2 bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </div>

            {/* Content Section 2: Fusion */}
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

            {/* Values Section */}
            <section className="py-32 bg-[#050505] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-qazan-ruby/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <Reveal>
                            <h2 className="text-5xl md:text-6xl font-serif text-white">{t.story_page.values_title}</h2>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <Reveal delay={0}>
                            <div className="flex flex-col items-center text-center p-12 border border-white/5 bg-white/5 rounded-3xl hover:border-qazan-gold/30 transition-colors duration-500 h-full group hover:bg-white/10">
                                <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center text-qazan-gold mb-10 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                    <Compass size={40} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-3xl font-serif mb-6 text-white">{t.story_page.value1_title}</h3>
                                <p className="text-gray-300 font-light text-lg leading-relaxed">{t.story_page.value1_desc}</p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <div className="flex flex-col items-center text-center p-12 border border-white/5 bg-white/5 rounded-3xl hover:border-qazan-gold/30 transition-colors duration-500 h-full group hover:bg-white/10">
                                <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center text-qazan-gold mb-10 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                    <Heart size={40} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-3xl font-serif mb-6 text-white">{t.story_page.value2_title}</h3>
                                <p className="text-gray-300 font-light text-lg leading-relaxed">{t.story_page.value2_desc}</p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="flex flex-col items-center text-center p-12 border border-white/5 bg-white/5 rounded-3xl hover:border-qazan-gold/30 transition-colors duration-500 h-full group hover:bg-white/10">
                                <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center text-qazan-gold mb-10 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                    <Award size={40} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-3xl font-serif mb-6 text-white">{t.story_page.value3_title}</h3>
                                <p className="text-gray-300 font-light text-lg leading-relaxed">{t.story_page.value3_desc}</p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Story;