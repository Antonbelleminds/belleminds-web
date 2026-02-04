'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Tab {
  id: string;
  label: string;
  image: string;
  description: string;
}

const tabs: Tab[] = [
  {
    id: 'kalender',
    label: 'Kalender',
    image: '/assets/Ska_rmavbild_2026-02-03_kl._16.31.08-ad64aaff-35cf-46bf-bd5a-5001074761e1.png',
    description: 'Smart schemaläggning med AI-assistent'
  },
  {
    id: 'rapporter',
    label: 'Rapporter',
    image: '/assets/Ska_rmavbild_2026-02-03_kl._16.35.11-8b40bb5e-f407-4838-b02b-281659f2b52d.png',
    description: 'Insikter och analys i realtid'
  },
  {
    id: 'kundklubb',
    label: 'Kundklubb',
    image: '/assets/Ska_rmavbild_2026-02-03_kl._16.33.25-6645671f-09e0-41fe-9ef2-6ab98e650cee.png',
    description: 'Lojalitetsprogram som automatiserar sig självt'
  },
  {
    id: 'marketing',
    label: 'Marketing Hub',
    image: '/assets/Ska_rmavbild_2026-02-03_kl._16.35.59-92cf2928-74c9-471b-91d8-bcc1b616d792.png',
    description: 'AI-driven marknadsföring'
  },
  {
    id: 'oversikt',
    label: 'Översikt',
    image: '/assets/Ska_rmavbild_2026-02-03_kl._16.09.13-e8d1a107-89d4-4ab9-b5d3-341129070e8e.png',
    description: 'Din verksamhet på ett ställe'
  }
];

const AUTOPLAY_INTERVAL = 5000;

export function AutoShowcaseV3() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isPaused) {
      setProgress(0);
      return;
    }

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTab((current) => (current + 1) % tabs.length);
          return 0;
        }
        return prev + (100 / (AUTOPLAY_INTERVAL / 100));
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [isPaused, activeTab]);

  return (
    <section className="py-24 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-6xl font-black mb-6 tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            BELLEBOOK
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-white mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            // DIN AFFÄRSHJÄRNA
          </motion.p>
        </div>

        {/* Minimalist Tabs */}
        <div className="flex items-center justify-center gap-1 mb-12 flex-wrap border-b border-white/20 pb-2">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(index);
                setProgress(0);
              }}
              className={`relative px-6 py-3 font-mono text-sm transition-all ${
                activeTab === index
                  ? 'text-white'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <span className="relative z-10">{tab.label.toUpperCase()}</span>
              
              {/* Bottom Progress Line */}
              {activeTab === index && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: progress / 100 }}
                  style={{ transformOrigin: 'left' }}
                />
              )}
            </button>
          ))}
          
          {/* Pause Button - Minimal */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="ml-6 p-2 border border-white/20 hover:border-white/40 transition-colors"
            aria-label={isPaused ? 'Play' : 'Pause'}
          >
            {isPaused ? (
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            )}
          </button>
        </div>

        {/* Content - Brutalist Style */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="border-4 border-white"
            >
              <div className="relative aspect-[16/10] bg-white">
                <Image
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].label}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-8 bg-black border-t-4 border-white">
                <h3 className="text-3xl font-black mb-2 tracking-tight">
                  {tabs[activeTab].label.toUpperCase()}
                </h3>
                <p className="text-lg text-gray-400 font-mono">
                  {tabs[activeTab].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
