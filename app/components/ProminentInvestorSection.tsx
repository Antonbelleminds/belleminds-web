'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { content } from '@/lib/content';

export function ProminentInvestorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="investors" ref={ref} className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-br from-[#003330] via-[#001F1D] to-[#0B0C10] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-[#00FFC6] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#00FFC6] rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2
            className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            För investerare
          </h2>
          <div className="w-16 md:w-24 h-1 bg-[#00FFC6] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 border border-[#00FFC6]/30 shadow-2xl"
        >
          <div className="relative">
            {/* Large quote mark */}
            <div className="absolute -top-4 md:-top-8 -left-2 md:-left-4 text-[#00FFC6] text-5xl md:text-8xl opacity-40 font-serif select-none">"</div>
            
            <p className="text-lg md:text-2xl lg:text-3xl text-white leading-relaxed pl-6 md:pl-8 font-medium">
              {content.bellebook.investorPitch}
            </p>
            
            {/* Quote mark end */}
            <div className="absolute -bottom-6 md:-bottom-12 -right-2 md:-right-4 text-[#00FFC6] text-5xl md:text-8xl opacity-40 font-serif select-none">"</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8 md:mt-12"
        >
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-[#00FFC6] text-[#0B0C10] rounded-full font-bold text-base md:text-lg hover:bg-[#00FFC6]/90 transition-colors shadow-lg"
          >
            Kontakta oss
          </button>
        </motion.div>
      </div>
    </section>
  );
}
