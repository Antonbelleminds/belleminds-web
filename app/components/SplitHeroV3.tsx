'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface SplitHeroV3Props {
  title: string;
  subtitle: string;
  primaryButton?: string;
  secondaryButton?: string;
}

// Version 3: Parallax & Morphing - Modern
export function SplitHeroV3({ title, subtitle, primaryButton, secondaryButton }: SplitHeroV3Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated mesh gradient background */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div style={{ y }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="mb-12"
          >
            <motion.div
              animate={{
                filter: [
                  'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))',
                  'drop-shadow(0 0 40px rgba(59, 130, 246, 0.6))',
                  'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Image
                src="/brand/logo.png"
                alt="Belleminds logotyp"
                width={140}
                height={140}
                priority
              />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="text-xl md:text-2xl mb-10 text-accent font-medium leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {(primaryButton || secondaryButton) && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {primaryButton && (
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 20px 60px rgba(59, 130, 246, 0.4)',
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('bellebook')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-semibold text-lg transition-all shadow-lg"
                >
                  {primaryButton}
                </motion.button>
              )}
              {secondaryButton && (
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-5 bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-accent text-gray-700 rounded-full font-semibold text-lg transition-all shadow-md"
                >
                  {secondaryButton}
                </motion.button>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Right Visual - Morphing shape */}
        <motion.div style={{ scale }} className="relative">
          <motion.div
            animate={{
              borderRadius: ['25% 75% 70% 30% / 30% 30% 70% 70%', '75% 25% 30% 70% / 70% 70% 30% 30%', '25% 75% 70% 30% / 30% 30% 70% 70%'],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="aspect-square bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 p-16 flex items-center justify-center shadow-2xl relative overflow-hidden"
          >
            {/* Animated gradient overlay */}
            <motion.div
              animate={{
                background: [
                  'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 50% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                ]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute inset-0"
            />

            <div className="text-center relative z-10">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  y: [0, -8, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-9xl font-bold text-white mb-6 drop-shadow-2xl"
                style={{ textShadow: '0 0 40px rgba(0,0,0,0.3)' }}
              >
                AI
              </motion.div>
              <div className="text-3xl font-semibold text-white/95">
                För småföretag
              </div>
            </div>
          </motion.div>
          
          {/* Orbiting stat cards */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            {[
              { angle: 0, value: '98%', label: 'Automatisering' },
              { angle: 180, value: '24/7', label: 'Alltid aktiv' },
            ].map((card, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${card.angle}deg) translateY(-200px)`,
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, zIndex: 50 }}
                  className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
                >
                  <div className="text-4xl font-bold text-accent mb-2">{card.value}</div>
                  <div className="text-sm text-gray-600 font-medium whitespace-nowrap">{card.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
