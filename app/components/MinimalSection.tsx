'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface MinimalSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  body?: string;
  align?: 'left' | 'center' | 'right';
  size?: 'large' | 'xlarge';
}

export function MinimalSection({ 
  id, 
  title, 
  subtitle, 
  body, 
  align = 'center',
  size = 'xlarge'
}: MinimalSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  const titleSize = size === 'xlarge' ? 'text-6xl md:text-8xl' : 'text-5xl md:text-7xl';

  return (
    <section id={id} ref={ref} className="py-32 md:py-40 px-6 bg-[#0B0C10]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`${titleSize} font-bold text-white mb-8 leading-tight ${alignmentClass}`}
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-2xl md:text-3xl text-[#00FFC6] mb-8 font-medium ${alignmentClass}`}
          >
            {subtitle}
          </motion.p>
        )}

        {body && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-lg md:text-xl text-[#EAEAEA] leading-relaxed max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${alignmentClass}`}
          >
            {body}
          </motion.p>
        )}
      </div>
    </section>
  );
}
