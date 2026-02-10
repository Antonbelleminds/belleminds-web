'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { getContent } from '@/lib/i18n';
import { useLanguage } from '../contexts/LanguageContext';

export function RoadmapSection() {
  const { language } = useLanguage();
  const content = getContent(language);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="roadmap" ref={ref} className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 
            className="text-3xl md:text-5xl font-bold mb-4 md:mb-6"
            style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}
          >
            {content.roadmap.title}
          </h2>
          <p 
            className="text-base md:text-xl max-w-2xl mx-auto px-4"
            style={{ fontFamily: 'var(--font-body)', color: '#000000' }}
          >
            {content.roadmap.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 hidden md:block" style={{ background: 'linear-gradient(to bottom, var(--color-accent), #00826F)' }}></div>

          <div className="space-y-8 md:space-y-12">
            {/* Bellebook */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="md:flex md:items-center md:gap-8">
                <div className="md:w-1/2 md:text-right md:pr-12">
                  <div className="bg-white rounded-3xl p-5 md:p-8 border border-blue-100">
                    <div className="inline-block bg-accent text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-2 md:mb-4">
                      {content.roadmap.bellebook.timeline}
                    </div>
                    <h3 
                      className="text-xl md:text-3xl font-bold mb-2 md:mb-4"
                      style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}
                    >
                      {content.roadmap.bellebook.title}
                    </h3>
                    <p className="text-sm md:text-lg" style={{ color: '#000000' }}>
                      {content.roadmap.bellebook.description}
                    </p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className="md:w-1/2"></div>
              </div>
            </motion.div>

            {/* Minds Platform */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="md:flex md:items-center md:gap-8">
                <div className="md:w-1/2"></div>
                
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10" style={{ backgroundColor: '#00826F' }}></div>
                
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white rounded-3xl p-5 md:p-8 border border-teal-100">
                    <div className="inline-block text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-2 md:mb-4" style={{ backgroundColor: '#00826F' }}>
                      {content.roadmap.mindsPlatform.timeline}
                    </div>
                    <h3 
                      className="text-xl md:text-3xl font-bold mb-2 md:mb-4"
                      style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}
                    >
                      {content.roadmap.mindsPlatform.title}
                    </h3>
                    <p className="text-sm md:text-lg" style={{ color: '#000000' }}>
                      {content.roadmap.mindsPlatform.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 md:mt-12 text-center px-4"
        >
          <p 
            className="text-sm md:text-lg italic bg-gradient-to-r from-blue-50 to-purple-50 px-4 md:px-8 py-3 md:py-6 rounded-2xl inline-block border border-gray-200"
            style={{ color: '#000000' }}
          >
            {content.roadmap.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
