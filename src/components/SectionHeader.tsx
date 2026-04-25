import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface SectionHeaderProps {
  label: string;
  title: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ label, title, className, align = 'left' }: SectionHeaderProps) {
  return (
    <div className={cn('mb-16', align === 'center' ? 'text-center' : 'text-left', className)}>
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 0.5, x: 0 }}
        viewport={{ once: true }}
        className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-white mb-2"
      >
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold tracking-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
}
