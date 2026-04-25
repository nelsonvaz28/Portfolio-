import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Terminal, CheckCircle2 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { SectionHeader } from './SectionHeader';
import { PROJECTS } from '@/src/constants';

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <SectionHeader label="Portfolio" title="Featured Projects" />

      <div className="space-y-32">
        {PROJECTS.map((project, idx) => (
          <div key={project.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
            {/* Visual Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 glass-card overflow-hidden group"
            >
              {project.chartData ? (
                <div className="h-[350px] w-full p-8 bg-black/40">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] uppercase font-mono text-white/30 tracking-widest flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      Live Data Analysis Simulation
                    </span>
                  </div>
                  <ResponsiveContainer width="100%" height="85%">
                    <AreaChart data={project.chartData}>
                      <defs>
                        <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                      <XAxis dataKey="month" stroke="#ffffff30" fontSize={10} />
                      <YAxis stroke="#ffffff30" fontSize={10} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #ffffff20', color: '#fff', fontSize: '12px' }}
                        itemStyle={{ color: '#3b82f6' }}
                      />
                      <Area type="monotone" dataKey="sales" stroke="#3b82f6" fillOpacity={1} fill="url(#colorSales)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.mockupImage} 
                    alt={project.title} 
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                    <div className="glass px-4 py-2 rounded-full text-xs flex items-center gap-2">
                      <Terminal size={14} /> Modern Web App
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Info Side */}
            <motion.div 
              initial={{ opacity: 0, x: idx % 2 === 0 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <h3 className="text-3xl font-bold mb-4 tracking-tight">{project.title}</h3>
              <p className="text-white/50 text-lg font-light leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tools.map(tool => (
                  <span key={tool} className="text-[10px] px-3 py-1 bg-white/5 rounded-full border border-white/5 text-white/60 uppercase font-semibold">
                    {tool}
                  </span>
                ))}
              </div>

              <div className="space-y-3 mb-8">
                {(project.insights || project.features || []).map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-white/70">{point}</span>
                  </div>
                ))}
              </div>

              <motion.button 
                whileHover={{ gap: '1rem' }}
                className="flex items-center gap-2 text-sm font-semibold tracking-wide group"
              >
                Explore Project
                <ExternalLink size={16} className="text-accent group-hover:rotate-45 transition-transform" />
                <div className="h-[1px] w-12 bg-white/20" />
              </motion.button>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
