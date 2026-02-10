'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { AboutModal } from './AboutModal';
import { useLanguage } from '../contexts/LanguageContext';

interface MegaHeroV1Props {
  title: string;
  subtitle: string;
  primaryButton?: string;
  secondaryButton?: string;
}

// Version 1: Pulsating Glow - Kraftfull energi
export function MegaHeroV1({ title, subtitle, primaryButton, secondaryButton }: MegaHeroV1Props) {
  const { language } = useLanguage();
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-20 w-full">
          <div className="text-center mb-8 md:mb-16">
            {/* Mega Logo with Pulsating Glow */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              className="mb-6 md:mb-12 flex justify-center"
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
                className="relative w-[200px] h-[200px] md:w-[350px] md:h-[350px]"
              >
                <Image
                  src="/brand/logo.png"
                  alt="Belleminds logotyp"
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 768px) 200px, 350px"
                  className="drop-shadow-2xl object-contain"
                />
              </motion.div>
            </motion.div>

            <h1 
              className="text-3xl md:text-6xl lg:text-8xl font-bold mb-3 md:mb-6 leading-tight text-accent px-4"
              style={{ fontFamily: 'var(--font-heading)', textShadow: 'none', filter: 'none' }}
            >
              {title}
            </h1>

            <p 
              className="text-base md:text-2xl lg:text-3xl mb-6 md:mb-12 font-medium leading-relaxed max-w-4xl mx-auto px-4"
              style={{ color: '#000000', textShadow: 'none' }}
            >
              {subtitle}
            </p>

            {(primaryButton || secondaryButton) && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
                {primaryButton && (
                  <button
                    onClick={() => document.getElementById('bellebook')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-accent text-white rounded-full font-bold text-lg md:text-xl hover:bg-blue-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                  >
                    {primaryButton}
                  </button>
                )}
                {secondaryButton && (
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 border-2 border-gray-300 hover:border-accent text-gray-700 rounded-full font-bold text-lg md:text-xl transition-all hover:scale-105"
                  >
                    {secondaryButton}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
    </>
  );
}
