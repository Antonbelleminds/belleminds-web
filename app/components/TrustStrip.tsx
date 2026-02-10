'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TrustStripProps {
  title: string;
  description: string;
}

export function TrustStrip({ title, description }: TrustStripProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-8 md:py-12 px-4 md:px-6 bg-gradient-to-br from-slate-50 to-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6"
        >
          {/* Icon */}
          <div className="flex-shrink-0">
            <svg className="w-10 h-10 md:w-12 md:h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 
              className="text-base md:text-lg font-semibold mb-2"
              style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}
            >
              {title}
            </h3>
            <p 
              className="text-sm md:text-base leading-relaxed"
              style={{ color: '#000000', opacity: 0.8 }}
            >
              {description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
