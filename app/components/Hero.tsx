'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { content } from '@/lib/content';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-br from-[#001F1D] to-[#0B0C10]" 
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20 text-center"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative inline-block mb-8"
        >
          <div className="absolute inset-0 bg-accent/30 blur-3xl rounded-full animate-pulse" />
          <Image
            src="/brand/logo.png"
            alt="Belleminds logotyp"
            width={200}
            height={200}
            priority
            style={{ width: 'auto', height: 'auto', filter: 'invert(1) brightness(1.8)' }}
            className="relative z-10 drop-shadow-2xl"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold text-white mb-12"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {content.hero.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgb(0 255 198 / 0.9)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-accent text-dark-bg rounded-full font-semibold text-lg transition-colors shadow-lg"
          >
            {content.hero.primaryButton}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold text-lg transition-colors shadow-lg border border-white/20"
          >
            {content.hero.secondaryButton}
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
