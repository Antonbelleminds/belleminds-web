'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  'EU-hostad infrastruktur (GDPR)',
  'HTTPS & Cloudflare skydd',
  'Ingen användarspårning',
  'Inga tredjepartscookies',
  'Data lagras endast inom EU',
  'Redo för AI-Act 2026',
];

export function TechBehind() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 px-6 bg-white dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-12 text-center"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Säkerhet & Efterlevnad
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md"
            >
              <span className="text-2xl">✅</span>
              <span className="text-gray-900 dark:text-white font-medium">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
