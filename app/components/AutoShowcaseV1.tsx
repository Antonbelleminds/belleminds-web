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

const AUTOPLAY_INTERVAL = 5000; // 5 seconds

export function AutoShowcaseV1() {
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
    <section className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Se Bellebook i aktion
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upptäck hur vårt AI-drivna system hjälper småföretag att växa
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(index);
                setProgress(0);
              }}
              className={`relative px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === index
                  ? 'text-white'
                  : 'text-gray-600 hover:text-gray-900 bg-white hover:bg-gray-50'
              }`}
            >
              {/* Background with progress */}
              {activeTab === index && (
                <>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                    layoutId="activeTab"
                    transition={{ type: 'spring', duration: 0.6 }}
                  />
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-white/30"
                      style={{ width: `${progress}%` }}
                      initial={{ width: 0 }}
                    />
                  </div>
                </>
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
          
          {/* Pause/Play Button */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="ml-4 p-3 rounded-full bg-white hover:bg-gray-50 transition-colors shadow-md"
            aria-label={isPaused ? 'Play' : 'Pause'}
          >
            {isPaused ? (
              <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            )}
          </button>
        </div>

        {/* Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
            >
              <div className="relative aspect-[16/10] bg-gray-100">
                <Image
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].label}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {tabs[activeTab].label}
                </h3>
                <p className="text-lg text-gray-600">
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
