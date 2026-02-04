'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface BrutalistSectionProps {
  number?: string;
  title: string;
  body: string;
  align?: 'left' | 'right' | 'center';
}

export function BrutalistSection({ number, title, body, align = 'left' }: BrutalistSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-200px' });

  const alignmentClass = {
    left: 'text-left items-start',
    right: 'text-right items-end',
    center: 'text-center items-center'
  }[align];

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 py-32 bg-white border-t border-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className={`max-w-5xl w-full flex flex-col ${alignmentClass}`}
      >
        {number && (
          <div className="text-8xl md:text-[12rem] font-bold opacity-10 leading-none mb-4">
            {number}
          </div>
        )}
        
        <h2 
          className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {title}
        </h2>
        
        <p className="text-xl md:text-3xl text-gray-800 leading-relaxed max-w-3xl font-light">
          {body}
        </p>
      </motion.div>
    </section>
  );
}
