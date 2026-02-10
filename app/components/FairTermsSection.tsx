'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { getContent } from '@/lib/i18n';
import { useLanguage } from '../contexts/LanguageContext';

export function FairTermsSection() {
  const { language } = useLanguage();
  const content = getContent(language);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 px-6 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-10 md:p-16 border border-green-100 shadow-xl"
        >
          <h3 
            className="text-3xl font-bold mb-8 text-center"
            style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}
          >
            {content.fairTerms.title}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {content.fairTerms.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-center gap-4 bg-gradient-to-r from-green-50 to-white px-6 py-4 rounded-2xl border border-green-100"
              >
                <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-lg font-medium" style={{ color: '#000000' }}>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
