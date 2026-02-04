'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { content } from '@/lib/content';
import { BellebookSection } from './BellebookSection';
import { Platform2026 } from './Platform2026';
import { BelleSectionAI } from './BelleSectionAI';

export function TabbedProducts() {
  const [activeTab, setActiveTab] = useState<'bellebook' | 'minds'>('bellebook');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const tabs = [
    { 
      id: 'bellebook' as const, 
      name: 'Bellebook',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    { 
      id: 'minds' as const, 
      name: 'Minds Platform',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ];

  return (
    <section id="products" ref={ref} className="py-20 px-6 bg-[#0B0C10]">
      <div className="max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-3 ${
                activeTab === tab.id
                  ? 'bg-[#00FFC6] text-[#0B0C10] shadow-lg shadow-[#00FFC6]/30'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800/70 border border-gray-700/50'
              }`}
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {tab.icon}
              {tab.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeTab === 'bellebook' ? (
            <motion.div
              key="bellebook"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
            >
              <BellebookSection />
              
              {/* Investor pitch for Bellebook */}
              <div className="max-w-4xl mx-auto mt-12 px-6">
                <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700/50">
                  <h3
                    className="text-2xl font-bold text-[#00FFC6] mb-4 text-center"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    För investerare
                  </h3>
                  <p className="text-lg text-[#EAEAEA] leading-relaxed text-center">
                    {content.bellebook.investorPitch}
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="minds"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              <Platform2026 />
              <BelleSectionAI />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
