import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, ChevronLeft, Calendar, Bike, ShoppingBag, HelpCircle, Phone, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Translations } from '../types';

interface ChatBotProps {
  t: Translations['chatbot'];
}

type ChatView = 'main' | 'order' | 'faq' | 'contact';

const ChatBot: React.FC<ChatBotProps> = ({ t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<ChatView>('main');

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setView('main'), 300); // Reset view after animation
  };

  const scrollToReservation = () => {
    setIsOpen(false);
    const elem = document.getElementById('reservation');
    if (elem) {
        // Need to wait for route change if we weren't on home, but keeping it simple for now assuming single page scroll or router handling elsewhere.
        // For this implementation, we assume we are on a page where we can navigate.
        // If on another page, window.location would handle it, but here we just try to scroll.
        if (window.location.hash !== '#reservation') {
            window.location.hash = '#reservation';
        }
        elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: 20 }
  };

  const viewVariants = {
      enter: { x: 50, opacity: 0 },
      center: { x: 0, opacity: 1 },
      exit: { x: -50, opacity: 0 }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute bottom-20 right-0 w-[350px] bg-qazan-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{ maxHeight: '600px', height: 'auto' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-qazan-ruby to-rose-900 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                 {view !== 'main' && (
                     <button onClick={() => setView('main')} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                         <ChevronLeft size={20} />
                     </button>
                 )}
                 <h3 className="font-serif font-bold tracking-wider">QAZAN Concierge</h3>
              </div>
              <button onClick={handleClose} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto max-h-[450px]">
                <AnimatePresence mode="wait">
                    
                    {/* Main Menu View */}
                    {view === 'main' && (
                        <motion.div 
                            key="main"
                            variants={viewVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="space-y-4"
                        >
                            {/* Bot Message */}
                            <div className="flex gap-3 mb-6">
                                <div className="w-8 h-8 rounded-full bg-qazan-gold flex items-center justify-center text-black font-serif font-bold flex-shrink-0">
                                    Q
                                </div>
                                <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none text-sm text-gray-200 leading-relaxed">
                                    {t.greeting}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-3">
                                <button onClick={scrollToReservation} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-qazan-gold/50 hover:bg-white/10 transition-all text-left group">
                                    <div className="bg-black p-2 rounded-full text-qazan-gold"><Calendar size={18} /></div>
                                    <span className="text-white text-sm font-medium group-hover:text-qazan-gold transition-colors">{t.btn_book}</span>
                                </button>

                                <button onClick={() => setView('order')} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-qazan-gold/50 hover:bg-white/10 transition-all text-left group">
                                    <div className="bg-black p-2 rounded-full text-qazan-gold"><Bike size={18} /></div>
                                    <span className="text-white text-sm font-medium group-hover:text-qazan-gold transition-colors">{t.btn_order}</span>
                                </button>

                                <button onClick={() => setView('faq')} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-qazan-gold/50 hover:bg-white/10 transition-all text-left group">
                                    <div className="bg-black p-2 rounded-full text-qazan-gold"><HelpCircle size={18} /></div>
                                    <span className="text-white text-sm font-medium group-hover:text-qazan-gold transition-colors">{t.btn_faq}</span>
                                </button>

                                <button onClick={() => setView('contact')} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-qazan-gold/50 hover:bg-white/10 transition-all text-left group">
                                    <div className="bg-black p-2 rounded-full text-qazan-gold"><Phone size={18} /></div>
                                    <span className="text-white text-sm font-medium group-hover:text-qazan-gold transition-colors">{t.btn_contact}</span>
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Order View */}
                    {view === 'order' && (
                        <motion.div 
                            key="order"
                            variants={viewVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                        >
                             <div className="mb-4 text-sm text-gray-400">{t.order_title}</div>
                             <div className="space-y-3">
                                <a href="#" target="_blank" className="flex items-center justify-between p-4 rounded-xl bg-[#009de0]/10 border border-[#009de0]/30 hover:bg-[#009de0]/20 transition-all group">
                                    <div className="flex items-center gap-3">
                                        <Bike size={20} className="text-[#009de0]" />
                                        <span className="text-white font-medium">Wolt</span>
                                    </div>
                                    <ArrowUpRight size={16} className="text-gray-400 group-hover:text-white" />
                                </a>
                                <a href="#" target="_blank" className="flex items-center justify-between p-4 rounded-xl bg-[#d6006e]/10 border border-[#d6006e]/30 hover:bg-[#d6006e]/20 transition-all group">
                                    <div className="flex items-center gap-3">
                                        <ShoppingBag size={20} className="text-[#d6006e]" />
                                        <span className="text-white font-medium">Foodora</span>
                                    </div>
                                    <ArrowUpRight size={16} className="text-gray-400 group-hover:text-white" />
                                </a>
                             </div>
                        </motion.div>
                    )}

                    {/* FAQ View */}
                    {view === 'faq' && (
                        <motion.div 
                            key="faq"
                            variants={viewVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="space-y-4"
                        >
                            <div className="text-sm text-qazan-gold mb-2 font-serif">{t.faq_title}</div>
                            
                            {[1, 2, 3].map((num) => (
                                <div key={num} className="bg-white/5 rounded-xl p-4 border border-white/5">
                                    {/* @ts-ignore dynamic key access */}
                                    <p className="text-white text-sm font-medium mb-2">{t[`q${num}`]}</p>
                                    {/* @ts-ignore dynamic key access */}
                                    <p className="text-gray-400 text-xs leading-relaxed">{t[`a${num}`]}</p>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* Contact View */}
                    {view === 'contact' && (
                        <motion.div 
                            key="contact"
                            variants={viewVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="space-y-4"
                        >
                           <div className="bg-white/5 rounded-xl p-6 border border-white/5 text-center">
                               <p className="text-qazan-gold font-serif text-lg mb-1">QAZAN Helsinki</p>
                               <p className="text-gray-300 text-sm mb-4">Lönnrotinkatu 123</p>
                               <a href="tel:+358401234567" className="block bg-white/10 py-3 rounded-lg text-white text-sm font-bold mb-3 hover:bg-qazan-ruby transition-colors">+358 40 123 4567</a>
                               <a href="mailto:info@qazan.fi" className="block text-gray-400 text-sm hover:text-white underline">info@qazan.fi</a>
                           </div>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
            
            {/* Footer / Branding */}
            <div className="p-3 bg-black/40 text-center border-t border-white/5">
                <p className="text-[10px] text-gray-600 uppercase tracking-widest">Qazan Guest Service</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={isOpen ? handleClose : handleOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-white text-black' : 'bg-qazan-ruby text-white'}`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default ChatBot;