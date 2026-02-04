'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { content } from '@/lib/content';

export function ProductCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const products = [
    {
      title: content.bellebook.title,
      description: content.bellebook.shortDescription,
      href: '#bellebook',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      title: 'Minds Platform',
      description: 'AI-driven företagsstöd med integrerade verktyg för ekonomi, juridik, CRM och mer. Din vardagspartner för att driva verksamheten smartare.',
      href: '#platform',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-[#0B0C10]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.a
              key={product.title}
              href={product.href}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gray-800/50 rounded-2xl p-10 border border-gray-700/50 shadow-xl hover:shadow-2xl hover:border-[#00FFC6]/30 transition-all cursor-pointer group"
            >
              <div className="text-[#00FFC6] mb-6 group-hover:scale-110 transition-transform">
                {product.icon}
              </div>
              
              <h3
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {product.title}
              </h3>
              
              <p className="text-lg text-[#EAEAEA] leading-relaxed mb-6">
                {product.description}
              </p>
              
              <div className="inline-flex items-center gap-2 text-[#00FFC6] font-medium group-hover:gap-4 transition-all">
                Utforska
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
