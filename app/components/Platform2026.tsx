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
          Plattform 2026 – en ny sorts företagsstöd
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#EAEAEA] text-center max-w-3xl mx-auto leading-relaxed space-y-4"
        >
          <p>
            Under 2026 lanserar vi nästa steg: en intelligent plattform som hjälper dig att driva ditt företag – med AI som tänker, planerar och agerar tillsammans med dig.
          </p>
          <p>
            Tänk dig att ha tillgång till rådgivning, ekonomi, kundinsikt och juridik när du behöver det – utan kostnader för personal eller konsulter.
          </p>
          <p>
            Belleminds blir din vardagsparter — alltid tillgänglig, alltid uppdaterad.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
