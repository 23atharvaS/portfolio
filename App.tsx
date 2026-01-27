import React from 'react';
import { Card } from './components/Card.tsx';
import { Footer } from './components/Footer.tsx';
import { FadeIn } from './components/FadeIn.tsx';
import { FloatingArtifacts } from './components/FloatingArtifacts.tsx';
import { PROJECTS, EXPERIENCE, EDUCATION, SKILLS, RESEARCH } from './constants.ts';
import { ArrowRight, Sparkles, Binary, Layers, Globe2, ArrowUpRight, FileText } from 'lucide-react';

const App: React.FC = () => {
  const scrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-primary selection:bg-accent selection:text-white relative">
      {/* Floating Artifacts Layer */}
      <FloatingArtifacts />
      
      {/* Hero Section */}
      <section id="about" className="relative h-screen px-6 flex flex-col justify-center items-center text-center overflow-hidden z-20">
        <FadeIn delay={400} className="relative z-30">
          <h1 className="font-display text-[12vw] md:text-[8vw] font-bold tracking-[-0.05em] leading-[0.85] mb-8">
            Atharva <br />
            <span className="text-secondary/20">Sawant.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={600} className="max-w-2xl relative z-30">
          <p className="text-xl md:text-2xl font-light text-secondary leading-relaxed tracking-tight mb-12">
            Applied Artificial Intelligence Engineer at <span className="text-white font-medium">Stevens Institute of Technology</span>. 
            Optimizing high-performance neural networks for real-time impact.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <a 
              href="#work" 
              onClick={scrollToWork}
              className="interactive text-lg font-bold border-b-2 border-white pb-1 hover:text-accent hover:border-accent transition-all"
            >
              Explore Work
            </a>
            <a 
              href="https://drive.google.com/file/d/1b01zONIliSgGfxU9iaIdcp96FJsxWeNk/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="interactive flex items-center gap-2 text-lg font-bold text-accent hover:text-white transition-all"
            >
              <FileText size={20} /> Get Resume
            </a>
          </div>
        </FadeIn>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
            <div className="w-px h-12 bg-white" />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="work" className="relative py-48 px-6 max-w-7xl mx-auto z-10">
        <FadeIn className="mb-32">
          <h2 className="text-[10vw] font-display font-bold tracking-tighter leading-none opacity-10 absolute -left-10 top-0 select-none">PROJECTS</h2>
          <p className="text-6xl md:text-8xl font-display font-bold tracking-tighter relative z-10">Selected <br /> <span className="text-secondary">Artifacts.</span></p>
        </FadeIn>
        
        <div className="space-y-12 md:space-y-16">
          {PROJECTS.map((project, idx) => (
            <FadeIn key={project.id} delay={idx * 100}>
              <Card data={project} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Experience Section - Glassmorphism Style */}
      <section id="experience" className="relative py-48 bg-white/[0.03] backdrop-blur-3xl border border-white/10 text-white rounded-[5rem] z-10 mx-4 md:mx-10 my-20">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="mb-32">
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">Experience <br /> <span className="text-accent">& Impact.</span></h2>
          </FadeIn>

          <div className="space-y-32">
            {EXPERIENCE.map((exp, idx) => (
              <FadeIn key={exp.id} delay={idx * 100}>
                <div className="flex flex-col md:flex-row gap-16 border-t border-white/5 pt-16 group">
                  <div className="w-full md:w-1/3">
                    <span className="text-accent font-display text-6xl font-bold opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                    <h3 className="text-3xl font-display font-bold mt-4 mb-2">{exp.company}</h3>
                    <p className="text-secondary font-medium tracking-widest uppercase text-xs">{exp.period}</p>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h4 className="text-2xl font-bold mb-8 text-white/90">{exp.role}</h4>
                    <ul className="space-y-6">
                      {exp.description.map((point, i) => (
                        <li key={i} className="text-xl text-secondary font-light leading-relaxed flex gap-4">
                          <span className="text-accent font-bold">—</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-48 px-6 max-w-7xl mx-auto z-10">
        <FadeIn className="text-center mb-32">
            <p className="text-accent font-bold uppercase tracking-[0.4em] text-sm mb-6">Capabilities</p>
            <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter">Tools for <br /> Intelligence.</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILLS.map((cat, idx) => (
            <FadeIn key={cat.title} delay={idx * 100}>
              <div className="p-12 h-full rounded-[3rem] bg-surface/50 border border-white/5 hover:border-accent/30 transition-all duration-500 group">
                <div className="mb-8 p-4 rounded-3xl bg-white/5 inline-block group-hover:bg-accent group-hover:text-white transition-all">
                    {idx === 0 && <Binary size={24} />}
                    {idx === 1 && <Layers size={24} />}
                    {idx === 2 && <Globe2 size={24} />}
                    {idx === 3 && <Sparkles size={24} />}
                </div>
                <h3 className="text-2xl font-display font-bold mb-6">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(s => (
                    <span key={s} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-semibold text-secondary uppercase tracking-tight">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Education & Research Section - Glassmorphism Style */}
      <section id="research" className="relative py-48 bg-white/[0.03] backdrop-blur-3xl border border-white/10 text-white rounded-[5rem] z-10 mx-4 md:mx-10 my-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32">
             <FadeIn>
                <h2 className="text-5xl font-display font-bold mb-16 tracking-tighter">Academic <br /> Foundation.</h2>
                <div className="space-y-16">
                    {EDUCATION.map(edu => (
                        <div key={edu.id} className="group">
                            <span className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-4 block">{edu.period}</span>
                            <h3 className="text-3xl font-display font-bold mb-2 group-hover:translate-x-2 transition-transform">{edu.school}</h3>
                            <p className="text-xl text-secondary font-light">{edu.degree}</p>
                        </div>
                    ))}
                </div>
             </FadeIn>
             
             <FadeIn delay={200}>
                <h2 className="text-5xl font-display font-bold mb-16 tracking-tighter">Research.</h2>
                <div className="space-y-12">
                    {RESEARCH.map(res => {
                        const isLink = !!res.link;
                        const Wrapper = isLink ? 'a' : 'div';
                        const wrapperProps = isLink ? { href: res.link, target: "_blank", rel: "noopener noreferrer" } : {};
                        
                        return (
                            <Wrapper 
                                key={res.id} 
                                {...wrapperProps}
                                className={`block relative min-h-[250px] p-10 rounded-[2.5rem] bg-white/[0.05] border border-white/5 transition-all duration-700 group overflow-hidden ${isLink ? 'interactive hover:bg-accent/10 hover:border-accent/40' : ''}`}
                            >
                                <div className={`relative z-10 transition-all duration-500 ease-in-out ${isLink ? 'group-hover:opacity-0 group-hover:scale-95 group-hover:-translate-y-4' : ''}`}>
                                    <h3 className="text-2xl font-display font-bold mb-4">{res.title}</h3>
                                    <p className="text-secondary leading-relaxed font-light">
                                      {res.description}
                                    </p>
                                </div>

                                {isLink && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out z-20 px-8 text-center">
                                        <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mb-6 shadow-2xl">
                                            <ArrowUpRight size={32} />
                                        </div>
                                        <h3 className="text-3xl font-display font-bold text-white tracking-widest uppercase">
                                            Check it out
                                        </h3>
                                        <div className="mt-4 h-1 w-12 bg-accent rounded-full" />
                                    </div>
                                )}

                                {!isLink && (
                                  <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors pointer-events-none" />
                                )}
                            </Wrapper>
                        );
                    })}
                </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-64 px-6 text-center z-10">
        <FadeIn>
          <h2 className="text-[15vw] md:text-[10vw] font-display font-bold tracking-tighter leading-none mb-12">
            LET'S <br /> <span className="text-secondary/20">CONNECT.</span>
          </h2>
          
          <div className="flex flex-col items-center gap-12">
            <a 
              href="mailto:asawant10@stevens.edu"
              className="interactive group flex flex-col md:flex-row items-center gap-6 text-3xl md:text-6xl font-display font-bold transition-all hover:text-accent"
            >
              <span>asawant10@stevens.edu</span>
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight className="w-8 h-8 md:w-12 md:h-12" />
              </div>
            </a>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
};

export default App;