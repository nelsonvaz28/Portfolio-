import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, BarChart3, Database, Globe } from 'lucide-react';
import { NELSON_INFO } from '@/src/constants';

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = NELSON_INFO.roles;
  const period = 2000;
  const delta = 100;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [currentText, isDeleting]);

  const tick = () => {
    let i = roleIndex % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting
      ? fullText.substring(0, currentText.length - 1)
      : fullText.substring(0, currentText.length + 1);

    setCurrentText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      // Wait before deleting
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setRoleIndex(roleIndex + 1);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 glass rounded-full text-[10px] uppercase tracking-widest text-white/50 mb-6">
            Available for New Opportunities
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
            {NELSON_INFO.name}.
          </h1>
          <div className="h-12 md:h-16 flex items-center justify-center">
            <p className="text-xl md:text-3xl font-light text-white/60 tracking-tight">
              {currentText}
              <span className="w-[3px] h-8 md:h-10 bg-accent inline-block ml-1 animate-pulse" />
            </p>
          </div>
          <p className="max-w-xl mx-auto mt-8 text-white/40 text-lg md:text-xl font-light leading-relaxed">
            {NELSON_INFO.tagline}. I build data-driven applications that bridge the gap between analysis and execution.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-4 bg-white text-black rounded-full font-medium flex items-center gap-2 group transition-shadow hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={NELSON_INFO.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass text-white rounded-full font-medium flex items-center gap-2 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Download size={18} />
              Download CV
            </motion.a>
          </div>
        </motion.div>

        {/* Feature grid tags */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { icon: <BarChart3 />, label: "Data Visualization" },
            { icon: <Database />, label: "SQL Management" },
            { icon: <Code className="rotate-0" />, label: "Python/Django" },
            { icon: <Globe />, label: "Web Development" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              className="glass-card p-4 flex flex-col items-center justify-center gap-3 group hover:border-accent/40 transition-colors"
            >
              <div className="text-white/40 group-hover:text-accent transition-colors">
                {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
              </div>
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Code({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
