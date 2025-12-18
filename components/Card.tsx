import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface CardProps {
  data: Project;
}

export const Card: React.FC<CardProps> = ({ data }) => {
  const isLink = !!data.link;
  const Wrapper = isLink ? 'a' : 'div';
  const wrapperProps = isLink ? { href: data.link, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Wrapper 
      {...wrapperProps}
      className={`
        group relative w-full block p-10 md:p-16 rounded-[3rem] transition-all duration-700
        bg-surface/30 border border-white/5 hover:border-accent/40
        ${isLink ? 'interactive cursor-pointer hover:bg-surface/50' : ''}
      `}
    >
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <span className="font-display text-accent font-bold text-xl tracking-tighter">
            {data.year}
          </span>
          <div className="flex flex-wrap gap-2">
            {data.tags.map(t => (
              <span key={t} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-secondary group-hover:text-white transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight group-hover:translate-x-2 transition-transform duration-500">
          {data.title}
        </h3>
        
        <p className="text-secondary text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-3xl group-hover:text-white/80 transition-colors">
          {data.description}
        </p>

        {isLink && (
           <div className="inline-flex items-center gap-3 text-white font-bold group-hover:text-accent transition-all">
                <span className="text-lg">Explore Implementation</span>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <ArrowUpRight size={20} />
                </div>
           </div>
        )}
      </div>

      {/* Decorative Glow */}
      <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </Wrapper>
  );
};