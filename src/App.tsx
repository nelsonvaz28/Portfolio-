import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { NELSON_INFO } from './constants';

export default function App() {
  return (
    <div className="relative selection:bg-accent/40">
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent mb-4 block">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              A hybrid approach to <span className="text-white/40 italic">problem-solving.</span>
            </h2>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <p className="text-xl text-white/60 font-light leading-relaxed">
              I specialize in bridging the gap between raw, complex data and functional, user-centric web applications. My background in data analytics allows me to understand the "why" before I build the "how".
            </p>
            <p className="text-lg text-white/40 font-light leading-relaxed">
              With a strong foundation in Python, SQL, and modern web technologies, I focus on creating tools that aren't just visually appealing, but are fundamentally built on accurate data insights.
            </p>
          </div>
        </section>

        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
             <a href="#" className="text-xl font-bold tracking-tighter flex items-center gap-2">
              <span className="w-6 h-6 bg-white text-black flex items-center justify-center rounded-sm font-mono text-xs">N</span>
              Vaz.
            </a>
            <p className="text-white/30 text-xs mt-2 uppercase tracking-widest leading-loose">
              © {new Date().getFullYear()} Nelson Vaz Portfolio.<br/>
              Handcrafted with Precision & Data.
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href={NELSON_INFO.linkedin} className="text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold">LinkedIn</a>
            <a href={NELSON_INFO.github} className="text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold">GitHub</a>
            <a href={`mailto:${NELSON_INFO.email}`} className="text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
