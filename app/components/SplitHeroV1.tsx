'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface SplitHeroV1Props {
  title: string;
  subtitle: string;
  primaryButton?: string;
  secondaryButton?: string;
}

// Version 1: Smooth fade & float - Elegant
export function SplitHeroV1({ title, subtitle, primaryButton, secondaryButton }: SplitHeroV1Props) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <div>
          <div className="mb-12">
            <Image
              src="/brand/logo.png"
              alt="Belleminds logotyp"
              width={140}
              height={140}
              priority
              className="drop-shadow-lg"
            />
          </div>

          <h1 
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-gray-900"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {title}
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-accent font-medium leading-relaxed">
            {subtitle}
          </p>

          {(primaryButton || secondaryButton) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryButton && (
                <button
                  onClick={() => document.getElementById('bellebook')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-5 bg-accent text-white rounded-full font-semibold text-lg hover:bg-blue-600 transition-colors shadow-lg"
                >
                  {primaryButton}
                </button>
              )}
              {secondaryButton && (
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-5 border-2 border-gray-300 hover:border-accent text-gray-700 rounded-full font-semibold text-lg transition-colors"
                >
                  {secondaryButton}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Right Visual */}
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-100 via-blue-50 to-white p-16 flex items-center justify-center shadow-2xl border border-blue-100">
            <div className="text-center">
              <div className="text-9xl font-bold text-accent mb-6">
                AI
              </div>
              <div className="text-3xl font-semibold text-gray-700">För småföretag</div>
            </div>
          </div>
          
          {/* Stat cards */}
          <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="text-5xl font-bold text-accent mb-2">98%</div>
            <div className="text-sm text-gray-600 font-medium">Automatisering</div>
          </div>

          <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="text-5xl font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-gray-600 font-medium">Alltid aktiv</div>
          </div>
        </div>
      </div>
    </section>
  );
}
