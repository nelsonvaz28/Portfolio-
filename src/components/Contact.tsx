import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { NELSON_INFO } from '@/src/constants';

export function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    const message = `Hello Nelson, I am ${data.name}. \n\n${data.subject}\n\n${data.message}\n\nMy email: ${data.email}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${NELSON_INFO.whatsapp}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <SectionHeader label="Contact" title="Start a Conversation" />

      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <p className="text-xl text-white/50 font-light leading-relaxed mb-12 max-w-md">
            Whether you're looking for a Data Analyst to solve complex problems or a Web Developer to build scalable solutions, I'm just a message away.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-white/30 group-hover:text-accent group-hover:bg-accent/10 transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs uppercase font-mono text-white/30 tracking-widest mb-1">Email Me</p>
                <a href={`mailto:${NELSON_INFO.email}`} className="text-lg font-medium hover:text-accent transition-colors">{NELSON_INFO.email}</a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-white/30 group-hover:text-accent group-hover:bg-accent/10 transition-all">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs uppercase font-mono text-white/30 tracking-widest mb-1">Call Me</p>
                <a href={`tel:${NELSON_INFO.phone}`} className="text-lg font-medium hover:text-accent transition-colors">{NELSON_INFO.phone}</a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-white/30 group-hover:text-accent group-hover:bg-accent/10 transition-all">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="text-xs uppercase font-mono text-white/30 tracking-widest mb-1">LinkedIn</p>
                <a href={NELSON_INFO.linkedin} className="text-lg font-medium hover:text-accent transition-colors">Nelson Vaz</a>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-white/40 ml-1">Your Name</label>
                <input 
                  {...register('name', { required: true })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent/50 outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                <input 
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent/50 outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-white/40 ml-1">Subject</label>
              <input 
                {...register('subject', { required: true })}
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent/50 outline-none transition-colors"
                placeholder="Collaboration Inquiry"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-white/40 ml-1">Message</label>
              <textarea 
                {...register('message', { required: true })}
                rows={5}
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white focus:border-accent/50 outline-none transition-colors resize-none"
                placeholder="How can I help you today?"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-accent hover:text-white transition-all transform active:scale-[0.98]"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
