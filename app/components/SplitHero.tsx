'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface SplitHeroProps {
  title: string;
  subtitle: string;
  primaryButton?: string;
  secondaryButton?: string;
}

export function SplitHero({ title, subtitle, primaryButton, secondaryButton }: SplitHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Image
              src="/brand/logo.png"
              alt="Belleminds logotyp"
              width={80}
              height={80}
              priority
              className="mb-8"
            />
          </motion.div>

          <h1 
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-accent font-medium">
            {subtitle}
          </p>

          {(primaryButton || secondaryButton) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryButton && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('bellebook')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-accent text-white rounded-full font-semibold text-lg transition-colors shadow-lg"
                >
                  {primaryButton}
                </motion.button>
              )}
              {secondaryButton && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 border-2 border-gray-300 hover:border-accent text-gray-700 rounded-full font-semibold text-lg transition-colors"
                >
                  {secondaryButton}
                </motion.button>
              )}
            </div>
          )}
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-100 to-blue-50 p-12 flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl font-bold text-accent mb-4">AI</div>
              <div className="text-2xl font-semibold text-gray-700">För småföretag</div>
            </div>
          </div>
          
          {/* Floating cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
          >
            <div className="text-4xl font-bold text-accent">98%</div>
            <div className="text-sm text-gray-600">Automatisering</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
          >
            <div className="text-4xl font-bold text-accent">24/7</div>
            <div className="text-sm text-gray-600">Alltid aktiv</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
