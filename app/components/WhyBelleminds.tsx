'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function WhyBelleminds() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 px-6 bg-white dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-8 text-center"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Varför vi bygger Belleminds
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-lg md:text-xl text-gray-900 dark:text-gray-100 leading-relaxed mb-6">
            Små företag står inför samma utmaningar som stora – men utan samma resurser.
          </p>
          <p className="text-lg md:text-xl text-gray-900 dark:text-gray-100 leading-relaxed mb-6">
            Vi tror att framtiden tillhör de som vågar använda AI för att 
            frigöra tid, energi och kreativitet.
          </p>
          <p className="text-lg md:text-xl text-gray-900 dark:text-gray-100 leading-relaxed">
            Belleminds är en plats för inspiration, vägledning och mod. Här gör vi AI begripligt, 
            konkret och roligt – för dig som vill ta nästa steg.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <div className="w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full blur-2xl opacity-30" />
        </motion.div>
      </div>
    </section>
  );
}
