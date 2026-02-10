'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { content } from '@/lib/content';
import type { IconType } from '@/lib/types';

const iconMap: Record<IconType, React.ReactElement> = {
  eye: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  lightning: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  repeat: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  chart: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
};

export function BellebookSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="bellebook" ref={ref} className="py-20 px-6 bg-[#0B0C10]">
      <div className="max-w-6xl mx-auto">
        {/* Headline & Subline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {content.bellebook.headline}
          </h2>
          <p className="text-xl md:text-2xl text-[#00FFC6] font-medium">
            {content.bellebook.subline}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.bellebook.benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50 shadow-lg hover:shadow-xl hover:border-[#00FFC6]/30 transition-all"
            >
              <div className="text-[#00FFC6] mb-4">
                {iconMap[benefit.icon]}
              </div>
              <h3
                className="text-2xl font-bold text-white mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {benefit.title}
              </h3>
              <p className="text-[#EAEAEA] leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-2xl md:text-3xl font-bold text-[#00FFC6]">
            {content.bellebook.taglines[0]}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
