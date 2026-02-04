'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { content } from '@/lib/content';

export function TaglineCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const selectedTaglines = [
    { 
      text: content.bellebook.taglines[0],
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      text: content.bellebook.taglines[2],
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      text: content.bellebook.taglines[3],
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
  ];

  return (
    <section id="bellebook-details" ref={ref} className="py-20 px-6 bg-[#0B0C10]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {selectedTaglines.map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-2xl p-8 border border-[#00FFC6]/20 shadow-xl hover:shadow-2xl hover:border-[#00FFC6]/50 transition-all text-center"
            >
              <div className="text-[#00FFC6] mb-6 flex justify-center">{item.icon}</div>
              <p
                className="text-2xl font-bold text-white leading-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
