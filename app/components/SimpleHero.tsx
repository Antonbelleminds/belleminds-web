'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface SimpleHeroProps {
  title: string;
  primaryButton?: string;
  secondaryButton?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function SimpleHero({ 
  title, 
  primaryButton, 
  secondaryButton,
  onPrimaryClick,
  onSecondaryClick 
}: SimpleHeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const defaultPrimaryClick = () => {
    document.getElementById('bellebook')?.scrollIntoView({ behavior: 'smooth' });
  };

  const defaultSecondaryClick = () => {
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
        className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 text-center"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative inline-block mb-12"
        >
          <div className="absolute inset-0 bg-accent/30 blur-3xl rounded-full animate-pulse" />
          <Image
            src="/brand/logo.png"
            alt="Belleminds logotyp"
            width={150}
            height={150}
            priority
            style={{ width: 'auto', height: 'auto', filter: 'invert(1) brightness(1.8)' }}
            className="relative z-10 drop-shadow-2xl"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold text-white mb-16 leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {title}
        </motion.h1>

        {(primaryButton || secondaryButton) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {primaryButton && (
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgb(0 255 198 / 0.9)' }}
                whileTap={{ scale: 0.95 }}
                onClick={onPrimaryClick || defaultPrimaryClick}
                className="px-8 py-4 bg-accent text-dark-bg rounded-full font-semibold text-lg transition-colors shadow-lg"
              >
                {primaryButton}
              </motion.button>
            )}
            {secondaryButton && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onSecondaryClick || defaultSecondaryClick}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold text-lg transition-colors shadow-lg border border-white/20"
              >
                {secondaryButton}
              </motion.button>
            )}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
