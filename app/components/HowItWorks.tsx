'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '1',
    title: 'Utforska',
    description: 'Lär dig grunderna, hitta inspiration och förstå möjligheterna.',
    icon: '🔍',
  },
  {
    number: '2',
    title: 'Bygg',
    description: 'Använd våra guider och verktyg för att ta nästa steg.',
    icon: '🔨',
  },
  {
    number: '3',
    title: 'Automatisera',
    description: 'Låt icke-mänsklig intelligens ta hand om rutinerna, så du kan fokusera på din kärnverksamhet.',
    icon: '⚡',
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 px-6 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-16 text-center"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Tre steg till en smartare vardag
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-6xl mb-4">{step.icon}</div>
              <div className="text-5xl font-bold text-accent mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
