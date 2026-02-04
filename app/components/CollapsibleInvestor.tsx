'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { content } from '@/lib/content';

export function CollapsibleInvestor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section ref={ref} className="py-20 px-6 bg-[#0B0C10]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full text-center mb-6 group"
          >
            <h3
              className="text-2xl md:text-3xl font-bold text-[#00FFC6] mb-4 group-hover:text-[#00FFC6]/80 transition-colors"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              För investerare
            </h3>
            <div className="flex items-center justify-center gap-2 text-[#EAEAEA] group-hover:text-white transition-colors">
              <span className="text-sm uppercase tracking-wider">
                {isOpen ? 'Dölj' : 'Läs mer'}
              </span>
              <motion.svg
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </div>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700/50">
                  <p className="text-lg text-[#EAEAEA] leading-relaxed">
                    {content.bellebook.investorPitch}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
