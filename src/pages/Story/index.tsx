import React from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { Translations } from '../../types';
import StoryHero from './components/StoryHero';
import RootsSection from './components/RootsSection';
import FusionSection from './components/FusionSection';
import ValuesSection from './components/ValuesSection';

interface StoryProps {
    t: Translations;
}

const Story: React.FC<StoryProps> = ({ t }) => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <div className="bg-qazan-black w-full overflow-hidden text-white">
            <StoryHero t={t} y1={y1} />
            <RootsSection t={t} />

            {/* Decorative Divider */}
            <div className="w-full flex justify-center py-12 opacity-30">
                <div className="h-px w-1/2 bg-linear-to-r from-transparent via-white to-transparent"></div>
            </div>

            <FusionSection t={t} />
            <ValuesSection t={t} />
        </div>
    );
};

export default Story;
