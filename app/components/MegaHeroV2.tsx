'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { AboutModal } from './AboutModal';

interface MegaHeroV2Props {
  title: string;
  subtitle: string;
  primaryButton?: string;
  secondaryButton?: string;
}

// Version 2: Floating & Rotating - Lekfull och modern
export function MegaHeroV2({ title, subtitle, primaryButton, secondaryButton }: MegaHeroV2Props) {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="text-center mb-16">
            {/* Mega Logo with Float & Subtle Rotation */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-12 flex justify-center"
            >
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [-3, 3, -3],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 20px 60px rgba(59, 130, 246, 0.3)',
                      '0 30px 80px rgba(99, 102, 241, 0.5)',
                      '0 20px 60px rgba(59, 130, 246, 0.3)',
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="rounded-full bg-white p-8"
                >
                  <Image
                    src="/brand/logo.png"
                    alt="Belleminds logotyp"
                    width={180}
                    height={180}
                    priority
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            <h1 
              className="text-6xl md:text-8xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {title}
            </h1>

            <p className="text-2xl md:text-3xl mb-12 text-gray-700 font-medium leading-relaxed max-w-4xl mx-auto">
              {subtitle}
            </p>

            {(primaryButton || secondaryButton) && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                {primaryButton && (
                  <button
                    onClick={() => document.getElementById('bellebook')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-12 py-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-bold text-xl hover:from-blue-600 hover:to-indigo-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                  >
                    {primaryButton}
                  </button>
                )}
                {secondaryButton && (
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-12 py-6 bg-white border-2 border-blue-200 hover:border-blue-400 text-gray-700 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-lg"
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
