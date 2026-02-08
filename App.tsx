import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Story from './pages/Story';
import ChatBot from './components/ChatBot';
import { TRANSLATIONS } from './constants';
import { Language } from './types';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const t = TRANSLATIONS[lang];

  return (
    <Router>
      <ScrollToTop />
      <div className="antialiased selection:bg-qazan-ruby selection:text-white min-h-screen flex flex-col relative">
        
        {/* Global Ambient Effects */}
        <div className="fixed inset-0 pointer-events-none z-0 bg-pattern-overlay opacity-10"></div>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-radial-gradient from-qazan-ruby/10 to-transparent blur-[120px] pointer-events-none z-0 animate-pulse duration-[10000ms]"></div>
        
        <Navbar lang={lang} setLang={setLang} t={t} />
        
        <main className="flex-grow z-10">
          <Routes>
            <Route path="/" element={<Home t={t} />} />
            <Route path="/menu" element={<Menu t={t} />} />
            <Route path="/story" element={<Story t={t} />} />
          </Routes>
        </main>

        <ChatBot t={t.chatbot} />

        <Footer t={t.footer} />
        
        {/* Cookie Banner Simulation */}
        <CookieBanner />
      </div>
    </Router>
  );
};

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#0a0a0a] border-t border-white/10 p-4 z-[100] flex flex-col md:flex-row justify-between items-center gap-4 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] animate-in slide-in-from-bottom duration-500">
      <p className="text-xs text-gray-400 text-center md:text-left">
        We use cookies to ensure you get the best experience.
      </p>
      <button 
        onClick={() => setVisible(false)}
        className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-qazan-gold transition-colors"
      >
        Accept
      </button>
    </div>
  );
};

export default App;