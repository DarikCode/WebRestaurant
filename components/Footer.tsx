import React from 'react';
import { Instagram, Facebook, Bike, ShoppingBag } from 'lucide-react';
import { Translations } from '../types';

// Custom TikTok Icon component
const TikTokIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

interface FooterProps {
  t: Translations['footer'];
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-[#020202] text-white/50 pt-24 pb-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 text-center md:text-left">
        
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-serif text-white mb-6 tracking-widest">QAZAN</h2>
          <p className="text-sm md:text-base leading-relaxed max-w-xs mx-auto md:mx-0">{t.desc}</p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white uppercase tracking-widest text-sm mb-8 font-semibold">{t.contact}</h3>
          <div className="space-y-4 text-base font-light">
            <p className="text-gray-200">Lönnrotinkatu 123</p>
            <p className="text-gray-400">00180 Helsinki</p>
            <p className="text-qazan-ruby mt-2 hover:text-white transition-colors cursor-pointer font-medium text-lg">+358 40 123 4567</p>
            <p className="hover:text-white transition-colors cursor-pointer">info@qazan.fi</p>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-white uppercase tracking-widest text-sm mb-8 font-semibold">{t.hours_title}</h3>
          <div className="text-base space-y-4 font-light">
            <div className="flex justify-center md:justify-start gap-6">
              <span className="w-14 text-gray-500 text-left">{t.days_week}</span>
              <span className="text-white">11:00 – 22:00</span>
            </div>
            <div className="flex justify-center md:justify-start gap-6">
              <span className="w-14 text-gray-500 text-left">{t.days_fri}</span>
              <span className="text-white">11:00 – 23:00</span>
            </div>
            <div className="flex justify-center md:justify-start gap-6">
              <span className="w-14 text-gray-500 text-left">{t.days_sun}</span>
              <span className="text-white">12:00 – 21:00</span>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-white uppercase tracking-widest text-sm mb-8 font-semibold">{t.social}</h3>
          
          <div className="flex space-x-8 text-white mb-8">
            <a href="#" className="hover:text-qazan-ruby transition-colors transform hover:scale-110 duration-300">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-qazan-ruby transition-colors transform hover:scale-110 duration-300">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-qazan-ruby transition-colors transform hover:scale-110 duration-300">
              <TikTokIcon size={24} />
            </a>
          </div>

          <div className="flex flex-col gap-4 text-base w-full">
            <a href="#" className="flex items-center justify-center md:justify-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group">
              <Bike size={20} className="text-qazan-ruby group-hover:text-white" />
              <span className="text-gray-400 group-hover:text-white transition-colors">Wolt</span>
            </a>
            <a href="#" className="flex items-center justify-center md:justify-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group">
              <ShoppingBag size={20} className="text-qazan-ruby group-hover:text-white" />
              <span className="text-gray-400 group-hover:text-white transition-colors">Foodora</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-20 text-center text-xs uppercase tracking-widest opacity-40 px-6 font-light">
        &copy; {new Date().getFullYear()} Qazan Restaurant. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;