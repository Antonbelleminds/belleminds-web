'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { AboutModal } from './AboutModal';

interface MegaHeroV1Props {
  title: string;
  subtitle: string;
  primaryButton?: string;
  secondaryButton?: string;
}

// Version 1: Pulsating Glow - Kraftfull energi
export function MegaHeroV1({ title, subtitle, primaryButton, secondaryButton }: MegaHeroV1Props) {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="text-center mb-16">
            {/* Mega Logo with Pulsating Glow */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              className="mb-12 flex justify-center"
            >
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  filter: [
                    'drop-shadow(0 0 40px rgba(0, 184, 143, 0.5))',
                    'drop-shadow(0 0 100px rgba(0, 184, 143, 1))',
                    'drop-shadow(0 0 40px rgba(0, 184, 143, 0.5))',
                  ]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <Image
                  src="/brand/logo.png"
                  alt="Belleminds logotyp"
                  width={350}
                  height={350}
                  priority
                  className="drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>

            <h1 
              className="text-6xl md:text-8xl font-bold mb-6 leading-tight text-gray-900"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {title}
            </h1>

            <p 
              className="text-2xl md:text-3xl mb-12 font-medium leading-relaxed max-w-4xl mx-auto"
              style={{ color: '#000000', textShadow: 'none' }}
            >
              {subtitle}
            </p>

            {(primaryButton || secondaryButton) && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                {primaryButton && (
                  <button
                    onClick={() => document.getElementById('bellebook')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-12 py-6 bg-accent text-white rounded-full font-bold text-xl hover:bg-blue-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                  >
                    {primaryButton}
                  </button>
                )}
                {secondaryButton && (
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-12 py-6 border-2 border-gray-300 hover:border-accent text-gray-700 rounded-full font-bold text-xl transition-all hover:scale-105"
                  >
                    {secondaryButton}
                  </button>
                )}
              </div>
            )}

            {/* Om oss länk */}
            <button
              onClick={() => setShowAbout(true)}
              className="text-gray-900 hover:text-black font-semibold text-lg hover:underline transition-colors"
            >
              Om oss →
            </button>
          </div>
        </div>
      </section>

      <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
    </>
  );
}
