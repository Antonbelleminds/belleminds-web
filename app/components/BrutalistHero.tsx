'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface BrutalistHeroProps {
  title: string;
}

export function BrutalistHero({ title }: BrutalistHeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <Image
          src="/brand/logo.png"
          alt="Belleminds logotyp"
          width={60}
          height={60}
          priority
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-6xl md:text-9xl font-bold text-center leading-none tracking-tight max-w-6xl"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {title}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-0 right-0 flex justify-center"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
          className="text-black opacity-50 hover:opacity-100 transition-opacity"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
}
