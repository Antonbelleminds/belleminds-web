'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { getContent } from '@/lib/i18n';
import { useLanguage } from '../contexts/LanguageContext';

export function WhatsIncludedSection() {
  const { language } = useLanguage();
  const content = getContent(language);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const icons = [
    // Operational intelligence
    <svg key="ops" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>,
    // Customer intelligence
    <svg key="customer" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>,
    // Resource & staffing intelligence
    <svg key="resource" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>,
    // Growth intelligence
    <svg key="growth" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>,
    // Decision intelligence
    <svg key="decision" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ];

  return (
    <section id="whats-included" ref={ref} className="py-12 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 
            className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 px-4"
            style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}
          >
            {content.whatsIncluded.title}
          </h2>
          <p 
            className="text-base md:text-xl max-w-3xl mx-auto mb-6 md:mb-10 leading-relaxed px-4"
            style={{ fontFamily: 'var(--font-body)', color: '#000000' }}
          >
            {content.whatsIncluded.subtitle}
          </p>
          
          <div className="inline-block bg-accent text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold">
            {content.whatsIncluded.allIncluded}
          </div>
        </motion.div>

        {/* First two cards – larger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          {content.whatsIncluded.clusters.slice(0, 2).map((cluster, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 md:p-10 border border-gray-200 hover:border-gray-300 transition-all"
            >
              <div className="text-accent mb-3 md:mb-4">
                {icons[index]}
              </div>
              
              <h3 
                className="text-xl md:text-2xl font-bold mb-2 md:mb-3"
                style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}
              >
                {cluster.title}
              </h3>

              <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed" style={{ color: '#555555' }}>
                {cluster.subline}
              </p>
              
              <ul className="space-y-1.5">
                {cluster.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-xs md:text-sm" style={{ color: '#888888' }}>
                    <div className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Last three cards – smaller */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {content.whatsIncluded.clusters.slice(2).map((cluster, index) => (
            <motion.div
              key={index + 2}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 md:p-8 border border-gray-200 hover:border-gray-300 transition-all"
            >
              <div className="text-accent mb-3 md:mb-4">
                {icons[index + 2]}
              </div>
              
              <h3 
                className="text-lg md:text-xl font-bold mb-2 md:mb-3"
                style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}
              >
                {cluster.title}
              </h3>

              <p className="text-sm md:text-base mb-5 md:mb-6 leading-relaxed" style={{ color: '#555555' }}>
                {cluster.subline}
              </p>
              
              <ul className="space-y-1.5">
                {cluster.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-xs md:text-sm" style={{ color: '#888888' }}>
                    <div className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
