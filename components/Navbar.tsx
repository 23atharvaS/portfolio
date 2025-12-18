import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-auto">
      <div className={`
        flex items-center gap-1 p-1 px-4 transition-all duration-700 rounded-full glass
        ${scrolled ? 'scale-90 shadow-2xl py-2 opacity-90' : 'scale-100 py-4'}
      `}>
        {NAV_ITEMS.map((item) => (
          <a 
            key={item.href}
            href={item.href}
            className="px-4 py-2 text-[12px] font-bold text-secondary hover:text-white transition-all rounded-full hover:bg-white/10 uppercase tracking-widest"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};