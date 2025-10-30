'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function Platform2026() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 px-6 bg-[#0B0C10]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-6 text-center"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Plattform 2026
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#EAEAEA] text-center max-w-3xl mx-auto leading-relaxed"
        >
          Under 2026 lanserar vi nästa steg: en intelligent plattform som hjälper dig att driva ditt företag – med AI som tänker, planerar och agerar med dig.
          Som att ha tillgång till ekonomi, juridik och rådgivning när du behöver det – utan personal eller externa kostnader.
        </motion.p>
      </div>
    </section>
  );
}
