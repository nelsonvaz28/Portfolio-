import { motion } from 'motion/react';
import { Award, ShieldCheck, GraduationCap, Database, Code, BarChart, AppWindow, PieChart } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { CERTIFICATIONS } from '@/src/constants';

const icons: Record<string, any> = {
  Code,
  Database,
  BarChart,
  AppWindow,
  PieChart
};

export function Certifications() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <SectionHeader label="Growth" title="Certifications & Training" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert, idx) => {
          const Icon = icons[cert.icon] || ShieldCheck;
          return (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 flex items-start gap-5 hover:border-accent/40 transition-colors group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white/30 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                <Icon size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg leading-tight mb-1">{cert.title}</h4>
                <p className="text-sm text-white/40">{cert.org}</p>
                <div className="mt-4 flex items-center gap-1.5 text-[10px] text-accent/60 font-bold uppercase tracking-wider">
                  <Award size={12} />
                  Verified Credential
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
