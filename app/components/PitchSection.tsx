'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface PitchSectionProps {
  title: string;
  subtitle?: string;
  metrics?: Array<{ label: string; value: string }>;
  features?: Array<{ title: string; description: string }>;
  highlight?: boolean;
}

export function PitchSection({ title, subtitle, metrics, features, highlight }: PitchSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      ref={ref} 
      className={`min-h-screen flex items-center justify-center px-6 py-24 ${
        highlight 
          ? 'bg-gradient-to-br from-[#78350F] to-[#1C1917]' 
          : 'bg-[#1C1917]'
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full"
      >
        <h2 
          className="text-4xl md:text-6xl font-bold text-white mb-8"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {title}
        </h2>
        
        {subtitle && (
          <p className="text-xl md:text-2xl text-[#FDE68A] mb-12 max-w-3xl">
            {subtitle}
          </p>
        )}

        {metrics && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {metrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-accent/20"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-[#FDE68A]/70">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        )}

        {features && (
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-accent/20 hover:border-accent/50 transition-colors"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#FDE68A]/80 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}
