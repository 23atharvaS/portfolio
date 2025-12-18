import React from 'react';
import { SOCIAL_LINKS } from '../constants.ts';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
        <div className="flex gap-10">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="interactive text-secondary hover:text-white text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <link.icon size={18} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};