'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { getContent } from '@/lib/i18n';
import { useLanguage } from '../contexts/LanguageContext';

export function IndustriesSection() {
  const { language } = useLanguage();
  const content = getContent(language);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="industries" ref={ref} className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 
            className="text-3xl md:text-5xl font-bold mb-3 md:mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}
          >
            {content.industries.title}
          </h2>
          <p 
            className="text-base md:text-xl max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-body)', color: '#000000' }}
          >
            {content.industries.subtitle}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 md:gap-2">
            {content.industries.list.map((industry, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.03 * index }}
                className="bg-gradient-to-br from-gray-50 to-white md:bg-white border border-gray-200 md:border-gray-300 rounded-2xl md:rounded-full px-4 md:px-4 py-2 md:py-2 text-xs font-semibold hover:border-gray-300 transition-all shadow-sm md:shadow-none"
                style={{ color: '#00826F' }}
              >
                {industry}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.03 * content.industries.list.length }}
              className="bg-gradient-to-br from-gray-50 to-white md:bg-white border border-gray-200 md:border-gray-300 rounded-2xl md:rounded-full px-4 md:px-4 py-2 md:py-2 text-xs font-semibold hover:border-gray-300 transition-all shadow-sm md:shadow-none"
              style={{ color: '#00826F' }}
            >
              {content.industries.more}
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
}
