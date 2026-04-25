import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { SKILLS } from '@/src/constants';

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <SectionHeader label="Specializations" title="Technical Proficiency" />
      
      <div className="grid md:grid-cols-2 gap-12">
        {SKILLS.map((category, idx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8 group hover:border-accent/30 transition-all"
          >
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-3">
              <span className="text-accent">0{idx + 1}.</span>
              {category.category}
            </h3>
            
            <div className="space-y-8">
              {category.items.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2 items-end">
                    <div>
                      <span className="text-sm font-medium tracking-tight">{skill.name}</span>
                      {skill.keywords && (
                        <p className="text-[10px] text-white/30 uppercase tracking-widest mt-1">
                          {skill.keywords.join(' • ')}
                        </p>
                      )}
                    </div>
                    <span className="text-xs font-mono text-white/40">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="h-full bg-accent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skills highlight bar */}
      <div className="mt-16 overflow-hidden glass py-4 -mx-6 px-6">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 text-sm font-mono text-white/20 uppercase tracking-widest"
        >
          {Array(10).fill(0).map((_, i) => (
            <span key={i}>
              Data Architecture • Cloud Automation • UI/UX Design • SQL Optimization • Python Scripting • REST APIs • Pandas • Power BI
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
