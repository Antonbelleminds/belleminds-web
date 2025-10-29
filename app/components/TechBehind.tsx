'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  'EU-hostad infrastruktur',
  'HTTPS & Cloudflare skydd',
  'Ingen användarspårning',
  'Redo för AI-Act 2026',
];

export function TechBehind() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Trygg teknik. Nordisk enkelhet.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Belleminds byggs helt inom EU – säkert, snabbt och utan beroende av tredjepartsdata.
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            All hosting sker via <strong>Replit (EU)</strong> och <strong>Neon (EU-Postgres)</strong>.
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Inga cookies, ingen spårning, inga dolda API-nycklar i koden. Endast transparens, säkerhet och prestanda.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
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
