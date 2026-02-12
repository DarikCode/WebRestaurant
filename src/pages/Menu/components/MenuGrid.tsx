import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from '../../../types';

interface MenuGridProps {
  activeCategory: string;
  filteredItems: MenuItem[];
}

const MenuGrid: React.FC<MenuGridProps> = ({ activeCategory, filteredItems }) => {
  return (
    <div className="w-full">
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`grid grid-cols-1 ${activeCategory === 'drinks' ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-2'} gap-x-16 gap-y-24 justify-items-center`}
      >
        {filteredItems.map((item, index) => (
          <div key={item.id} className="w-full max-w-xl group flex flex-col h-full">
            {/* Image */}
            {activeCategory !== 'drinks' && (
              <div className="relative overflow-hidden rounded-[2.5rem] h-[400px] mb-10 border border-white/5 bg-white/5 w-full shadow-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
              </div>
            )}

            {/* Drink Card */}
            {activeCategory === 'drinks' && (
              <div className="w-full p-12 rounded-4xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors mb-6 grow flex flex-col justify-center items-center text-center aspect-square shadow-xl">
                <div className="w-20 h-20 rounded-full bg-qazan-ruby/20 flex items-center justify-center text-qazan-ruby mb-8">
                  <span className="font-serif italic text-3xl">{item.title.charAt(0)}</span>
                </div>
                <h4 className="text-3xl font-serif text-white mb-4">{item.title}</h4>
                <p className="text-gray-400 text-base mb-8">{item.description}</p>
                <span className="text-qazan-gold font-serif block mt-auto text-2xl">{item.price}</span>
              </div>
            )}

            {/* Food Details */}
            {activeCategory !== 'drinks' && (
              <div className="text-center md:text-left">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-baseline mb-6 gap-4">
                  <div className="flex items-center gap-4 justify-center md:justify-start flex-wrap">
                    <h4 className="text-4xl font-serif text-white group-hover:text-qazan-ruby transition-colors">{item.title}</h4>
                    {item.dietary?.map(tag => (
                      <span key={tag} className="border border-white/20 text-white/50 text-xs px-2 py-1 rounded uppercase tracking-wider font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-qazan-ruby font-serif text-3xl">{item.price}</span>
                </div>
                <div className="w-16 h-px bg-white/10 mx-auto md:mx-0 mb-6"></div>
                <p className="text-gray-300 font-light text-xl leading-relaxed">{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </motion.div>

      {/* Empty State / Fallback */}
      {filteredItems.length === 0 && (
        <div className="text-center text-gray-500 py-24 text-xl">
          <p>No items found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default MenuGrid;
