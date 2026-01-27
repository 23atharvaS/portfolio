import React, { useEffect, useState, useCallback, useRef } from 'react';

interface Artifact {
  id: string;
  content: string;
  x: number; // percentage of viewport width
  y: number; // percentage of viewport height
  size: number;
  speed: number;
  rotation: number;
  blur: number;
  opacity: number;
}

const POOL = [
  '{ }', '01', 'λ', 'BERT', '[ ]', 'Σ', 'CNN', '∂', 'RNN', '< >', 
  'ReLU', 'θ', '∇', '∫', 'σ', 'μ', 'Tensor', 'GPT', 'PyTorch', 
  'Node', 'Layer', 'Bias', 'Weight', 'Epoch', 'Loss', 'Grad', 'Adam',
  '⊕', '⊗', 'Ω', 'α', 'β', 'Transformer', 'LLM', 'GAN', 'CV', 'NLP'
];

export const FloatingArtifacts: React.FC = () => {
  const [artifacts, setArtifacts] = useState<Artifact[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const dragOffset = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize random artifacts once on mount
  useEffect(() => {
    const count = 22;
    const generated: Artifact[] = Array.from({ length: count }).map((_, i) => ({
      id: `art-${i}-${Math.random().toString(36).substr(2, 9)}`,
      content: POOL[Math.floor(Math.random() * POOL.length)],
      x: Math.random() * 90 + 5, 
      y: Math.random() * 200 + 5, 
      size: Math.random() * 1.0 + 0.8,
      speed: Math.random() * 0.12 + 0.04,
      rotation: Math.random() * 360,
      blur: Math.random() * 3 + 1,
      opacity: Math.random() * 0.15 + 0.05,
    }));
    setArtifacts(generated);

    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseDown = (e: React.MouseEvent, id: string) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setDraggingId(id);
    dragOffset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    document.body.style.userSelect = 'none';
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!draggingId) return;

    setArtifacts(prev => prev.map(art => {
      if (art.id === draggingId) {
        const currentTranslateY = scrollY * art.speed;
        const newX = ((e.clientX - dragOffset.current.x) / window.innerWidth) * 100;
        const newY = ((e.clientY - dragOffset.current.y + currentTranslateY) / window.innerHeight) * 100;
        return { ...art, x: newX, y: newY };
      }
      return art;
    }));
  }, [draggingId, scrollY]);

  const handleMouseUp = useCallback(() => {
    setDraggingId(null);
    document.body.style.userSelect = '';
  }, []);

  useEffect(() => {
    if (draggingId) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [draggingId, handleMouseMove, handleMouseUp]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      <style>{`
        .artifact-node {
          --hover-scale: 1;
          --hover-glow: 0;
          --hover-blur: inherit;
          --hover-opacity: inherit;
        }
        .artifact-node:hover {
          --hover-scale: 1.4;
          --hover-glow: 1;
          --hover-blur: 0px !important;
          --hover-opacity: 1 !important;
          color: #0071E3 !important;
          z-index: 60;
        }
      `}</style>
      {artifacts.map((art) => {
        const translateY = scrollY * art.speed;
        const isDragging = draggingId === art.id;

        return (
          <div
            key={art.id}
            onMouseDown={(e) => handleMouseDown(e, art.id)}
            className={`
              artifact-node
              absolute font-display font-bold text-white whitespace-nowrap 
              pointer-events-auto cursor-grab active:cursor-grabbing 
              transition-all duration-300 ease-out
              group
              ${isDragging ? 'z-50 duration-0' : 'z-0'}
            `}
            style={{
              left: `${art.x}%`,
              top: `${art.y}%`,
              transform: `translate3d(0, ${-translateY}px, 0) scale(calc(${art.size} * var(--hover-scale, 1))) rotate(${art.rotation}deg)`,
              filter: isDragging ? 'blur(0px)' : `blur(var(--hover-blur, ${art.blur}px))`,
              opacity: isDragging ? 1 : `var(--hover-opacity, ${art.opacity})`,
              textShadow: isDragging 
                ? '0 0 30px rgba(0,113,227,1), 0 0 10px rgba(0,113,227,0.5)' 
                : '0 0 15px rgba(255,255,255,0.1)'
            } as React.CSSProperties}
          >
            {art.content}
            
            {/* Primary Glow Layer */}
            <div className="absolute inset-[-20px] opacity-0 group-hover:opacity-100 blur-2xl bg-accent/40 rounded-full -z-10 transition-opacity duration-300" />
            
            {/* Secondary Sharp Core Glow Layer */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-80 blur-md bg-accent/60 rounded-full -z-10 transition-opacity duration-300 scale-75" />
          </div>
        );
      })}
      
      {/* Subtle Data Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.01] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)',
          backgroundSize: '120px 120px',
          transform: `translate3d(0, ${-scrollY * 0.015}px, 0)`
        }}
      />
    </div>
  );
};