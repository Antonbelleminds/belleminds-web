'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface SplitHeroV2Props {
  title: string;
  subtitle: string;
  primaryButton?: string;
  secondaryButton?: string;
}

// Version 2: Stagger & Pop - Energetic
export function SplitHeroV2({ title, subtitle, primaryButton, secondaryButton }: SplitHeroV2Props) {
  const titleWords = title.split(' ');
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <div>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="mb-12"
          >
            <Image
              src="/brand/logo.png"
              alt="Belleminds logotyp"
              width={140}
              height={140}
              priority
              className="drop-shadow-2xl"
            />
          </motion.div>

          <h1 
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  delay: 0.3 + i * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="text-xl md:text-2xl mb-10 text-accent font-medium leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {(primaryButton || secondaryButton) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryButton && (
                <motion.button
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.9, rotate: -2 }}
                  onClick={() => document.getElementById('bellebook')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-5 bg-accent text-white rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-2xl"
                >
                  {primaryButton}
                </motion.button>
              )}
              {secondaryButton && (
                <motion.button
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  whileTap={{ scale: 0.9, rotate: 2 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-5 border-2 border-gray-300 hover:border-accent text-gray-700 rounded-full font-semibold text-lg transition-all"
                >
                  {secondaryButton}
                </motion.button>
              )}
            </div>
          )}
        </div>

        {/* Right Visual */}
        <div className="relative perspective-1000">
          <motion.div
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ delay: 0.5, duration: 1, type: "spring" }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 p-16 flex items-center justify-center shadow-2xl transform hover:rotate-2 transition-transform">
              <div className="text-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 360, 0]
                  }}
                  transition={{ duration: 20, repeat: Infinity }}
                  className="text-9xl font-bold text-white mb-6 drop-shadow-2xl"
                >
                  AI
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="text-3xl font-semibold text-white/90"
                >
                  För småföretag
                </motion.div>
              </div>
            </div>
            
            {/* Bouncing cards */}
            {[
              { top: '-8', right: '-8', delay: 1.2, value: '98%', label: 'Auto' },
              { bottom: '-8', left: '-8', delay: 1.4, value: '24/7', label: 'Aktiv' },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, rotate: 180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  delay: card.delay,
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
                style={{ 
                  [card.top ? 'top' : 'bottom']: `${card.top || card.bottom}`,
                  [card.right ? 'right' : 'left']: `${card.right || card.left}`
                }}
                className="absolute bg-white rounded-2xl shadow-2xl p-8 border-2 border-blue-200"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  className="text-5xl font-bold text-accent mb-2"
                >
                  {card.value}
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">{card.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
