'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface PitchHeroProps {
  title: string;
  subtitle: string;
}

export function PitchHero({ title, subtitle }: PitchHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1C1917] via-[#292524] to-[#1C1917]" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Image
            src="/brand/logo.png"
            alt="Belleminds logotyp"
            width={100}
            height={100}
            priority
            className="mx-auto filter invert brightness-200"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-block px-6 py-2 bg-accent/20 border border-accent/50 rounded-full text-accent font-semibold mb-8">
            För investerare
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-[#FDE68A] max-w-4xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto"
        >
          {[
            { value: '€50M', label: 'Marknadspotential' },
            { value: '2026', label: 'Launch' },
            { value: '10K+', label: 'Target Users' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-sm text-[#FDE68A]/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
