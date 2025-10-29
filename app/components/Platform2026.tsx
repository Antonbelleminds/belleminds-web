'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const products = [
  {
    name: 'Bellebot',
    description: 'Din intelligenta assistent för kommunikation och kundkontakt',
    icon: '🤖',
  },
  {
    name: 'BelleCRM',
    description: 'Relationer och insikter, utan krångel',
    icon: '💼',
  },
  {
    name: 'BelleERP',
    description: 'Företagets motor – från planering till uppföljning',
    icon: '⚙️',
  },
];

export function Platform2026() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          En ny typ av plattform – byggd på icke-mänsklig intelligens
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          Under 2026 lanserar vi nästa steg: en intelligent plattform som hjälper dig att driva 
          ditt företag – inte bara i molnet, utan med intelligens. Det ska kännas som att du har 
          hela teamet på plats: ekonomi, marknad, drift och analys – men utan att behöva anställa någon.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="text-5xl mb-4">{product.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                {product.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
