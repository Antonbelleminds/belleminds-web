'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { getContent } from '@/lib/i18n';
import { useLanguage } from '../contexts/LanguageContext';

export function InvestorSection() {
  const { language } = useLanguage();
  const content = getContent(language);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="investors" ref={ref} className="py-20 px-6 bg-gradient-to-br from-slate-100 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-10 md:p-16 border border-blue-100 shadow-xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Quote mark */}
            <div className="absolute -top-4 -left-2 text-blue-600 text-6xl opacity-20 font-serif">"</div>
            
            <p className="text-xl md:text-2xl leading-relaxed pl-8 font-medium" style={{ color: '#000000' }}>
              {content.bellebook.investorPitch}
            </p>
            
            {/* Quote mark end */}
            <div className="absolute -bottom-8 -right-2 text-blue-600 text-6xl opacity-20 font-serif">"</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
