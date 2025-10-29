'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function Inspiration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 px-6 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Läs, lyssna, inspireras
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8"
        >
          Följ oss på LinkedIn för artiklar, guider och poddar om hur icke-mänsklig intelligens 
          förändrar småföretagande i grunden. Vi delar konkreta exempel, verktyg och tankar från verkligheten.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.linkedin.com/company/belleminds/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold text-lg transition-colors shadow-lg"
        >
          Följ oss på LinkedIn
        </motion.a>
      </div>
    </section>
  );
}
