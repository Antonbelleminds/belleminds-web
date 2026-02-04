'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  size?: 'small' | 'large';
}

interface BentoGridProps {
  items: BentoItem[];
}

export function BentoGrid({ items }: BentoGridProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group
                ${item.size === 'large' ? 'md:col-span-2' : ''}
                ${index === 0 ? 'md:row-span-2' : ''}
              `}
            >
              <motion.div 
                className="text-accent mb-6"
                whileHover={{ 
                  scale: 1.15,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { 
                    duration: 0.6,
                    ease: "easeInOut"
                  }
                }}
              >
                {item.icon}
              </motion.div>
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}
              >
                {item.title}
              </h3>
              <p className="leading-relaxed" style={{ color: '#000000' }}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
