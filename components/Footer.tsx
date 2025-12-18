import React from 'react';
import { SOCIAL_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-secondary text-sm font-medium tracking-tight">
          © 2025 Atharva Sawant. Designed with precision.
        </p>
        <div className="flex gap-10">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="interactive text-secondary hover:text-white text-sm font-bold uppercase tracking-widest transition-colors"
              aria-label={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};