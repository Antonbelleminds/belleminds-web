'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { getContent } from '@/lib/i18n';
import { useLanguage } from '../contexts/LanguageContext';

export function WhyBellebookSection() {
  const { language } = useLanguage();
  const content = getContent(language);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="why-bellebook" ref={ref} className="py-8 md:py-24 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-16"
        >
          <h2 
            className="text-2xl md:text-5xl font-bold mb-3 md:mb-6"
            style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}
          >
            {content.whyBellebook.title}
          </h2>
          <p 
            className="text-sm md:text-xl max-w-2xl mx-auto leading-snug"
            style={{ fontFamily: 'var(--font-body)', color: '#000000' }}
          >
            {content.whyBellebook.subtitle}
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-2 gap-px bg-gray-100">
            <div className="bg-gray-100 px-3 md:px-8 py-3 md:py-8">
              <h3 
                className="text-xs sm:text-sm md:text-2xl font-bold text-center"
                style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}
              >
                {content.whyBellebook.traditional}
              </h3>
            </div>
            <div className="bg-gray-100 px-3 md:px-8 py-3 md:py-8">
              <h3 
                className="text-xs sm:text-sm md:text-2xl font-bold text-center"
                style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}
              >
                {content.whyBellebook.bellebook}
              </h3>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-gray-100">
            {content.whyBellebook.comparisons.map((comparison, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="grid grid-cols-2 gap-px bg-gray-100"
              >
                {/* Traditional */}
                <div className="bg-white px-3 sm:px-4 md:px-8 py-3 sm:py-4 md:py-8 flex items-start min-h-[80px] sm:min-h-[100px] md:min-h-[120px]">
                  <div className="flex items-start gap-2 md:gap-4 w-full">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gray-400 flex-shrink-0 mt-1.5 md:mt-2"></div>
                    <span className="text-[10px] sm:text-xs md:text-lg leading-snug md:leading-relaxed" style={{ color: '#000000' }}>{comparison.traditional}</span>
                  </div>
                </div>
                
                {/* Bellebook */}
                <div className="bg-white px-3 sm:px-4 md:px-8 py-3 sm:py-4 md:py-8 flex items-start min-h-[80px] sm:min-h-[100px] md:min-h-[120px]">
                  <div className="flex items-start gap-2 md:gap-4 w-full">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-accent flex-shrink-0 mt-0.5 md:mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[10px] sm:text-xs md:text-lg font-semibold leading-snug md:leading-relaxed" style={{ color: '#000000' }}>{comparison.bellebook}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
