'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { AboutModal } from './AboutModal';

interface MegaHeroV3Props {
  title: string;
  subtitle: string;
  primaryButton?: string;
  secondaryButton?: string;
}

// Version 3: Scale Pulse - Kraftfull och ren
export function MegaHeroV3({ title, subtitle, primaryButton, secondaryButton }: MegaHeroV3Props) {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="max-w-7xl mx-auto px-6 py-20 w-full relative z-10">
          <div className="text-center mb-16">
            {/* Mega Logo with Scale Pulse */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="mb-12 flex justify-center"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-3xl opacity-20" />
                <Image
                  src="/brand/logo.png"
                  alt="Belleminds logotyp"
                  width={220}
                  height={220}
                  priority
                  className="relative z-10 drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>

            <h1 
              className="text-7xl md:text-9xl font-black mb-6 leading-none text-gray-900"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {title}
            </h1>

            <p className="text-2xl md:text-4xl mb-12 text-blue-600 font-semibold leading-relaxed max-w-5xl mx-auto">
              {subtitle}
            </p>

            {(primaryButton || secondaryButton) && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                {primaryButton && (
                  <button
                    onClick={() => document.getElementById('bellebook')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-14 py-7 bg-blue-600 text-white rounded-full font-black text-xl hover:bg-blue-700 transition-all shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {primaryButton}
                  </button>
                )}
                {secondaryButton && (
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-14 py-7 border-3 border-gray-900 text-gray-900 rounded-full font-black text-xl transition-all hover:bg-gray-900 hover:text-white hover:scale-105"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {secondaryButton}
                  </button>
                )}
              </div>
            )}

            {/* Om oss länk */}
            <button
              onClick={() => setShowAbout(true)}
              className="text-gray-900 hover:text-blue-600 font-bold text-lg hover:underline transition-colors inline-flex items-center gap-2"
            >
              <span>Om oss</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
    </>
  );
}
