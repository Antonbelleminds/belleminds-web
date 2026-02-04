'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { content } from '@/lib/content';

export function ProminentInvestorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="investors" ref={ref} className="py-32 px-6 bg-gradient-to-br from-[#003330] via-[#001F1D] to-[#0B0C10] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#00FFC6] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00FFC6] rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            För investerare
          </h2>
          <div className="w-24 h-1 bg-[#00FFC6] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-[#00FFC6]/30 shadow-2xl"
        >
          <div className="relative">
            {/* Large quote mark */}
            <div className="absolute -top-8 -left-4 text-[#00FFC6] text-8xl opacity-40 font-serif select-none">"</div>
            
            <p className="text-2xl md:text-3xl text-white leading-relaxed pl-8 font-medium">
              {content.bellebook.investorPitch}
            </p>
            
            {/* Quote mark end */}
            <div className="absolute -bottom-12 -right-4 text-[#00FFC6] text-8xl opacity-40 font-serif select-none">"</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-[#00FFC6] text-[#0B0C10] rounded-full font-bold text-lg hover:bg-[#00FFC6]/90 transition-colors shadow-lg"
          >
            Kontakta oss
          </button>
        </motion.div>
      </div>
    </section>
  );
}
