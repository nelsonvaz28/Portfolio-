import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { EXPERIENCE } from '@/src/constants';

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 bg-gradient-to-b from-transparent to-white/[0.02]">
      <SectionHeader label="History" title="Practical Exposure" />

      <div className="space-y-12 max-w-4xl">
        {EXPERIENCE.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-12 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[1px] before:bg-white/10"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-accent rounded-full shadow-[0_0_10px_#3b82f6]" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">{exp.role}</h3>
                <p className="text-accent font-medium">{exp.company}</p>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-white/40 uppercase tracking-widest">
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                  <Calendar size={14} />
                  {exp.period}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {exp.points.map((point, i) => (
                <div key={i} className="flex items-start gap-4 text-white/60 leading-relaxed font-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2.5 shrink-0" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
            
            {/* Special highlight for Data Analyst focus */}
            <div className="mt-8 p-6 glass border-l-4 border-l-accent rounded-r-xl">
              <p className="text-sm italic text-white/80">
                "Developed an analytical mindset while managing logistics data, transitioning manual stock tracking into automated systems that improved efficiency by estimated 25%."
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
