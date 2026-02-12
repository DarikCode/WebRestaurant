import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Reveal } from '../../../components/Reveal';
import { REVIEWS } from '../../../constants';
import { Translations } from '../../../types';

interface ReviewsSectionProps {
  t: Translations;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ t }) => {
  return (
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
  );
};

export default ReviewsSection;
