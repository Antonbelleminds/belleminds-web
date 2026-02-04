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

export function AutoShowcaseV2() {
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
    <section className="py-32 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Upplev Bellebook
          </motion.h2>
          <motion.p 
            className="text-xl text-purple-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            En plattform. Oändliga möjligheter.
          </motion.p>
        </div>

        {/* Floating Tab Pills */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              onClick={() => {
                setActiveTab(index);
                setProgress(0);
              }}
              className={`relative px-8 py-4 rounded-2xl font-semibold transition-all overflow-hidden ${
                activeTab === index
                  ? 'text-white scale-105'
                  : 'text-purple-200 hover:text-white bg-white/5 hover:bg-white/10'
              }`}
              whileHover={{ scale: activeTab === index ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {activeTab === index && (
                <>
                  {/* Gradient Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
                    layoutId="activeTabV2"
                    transition={{ type: 'spring', duration: 0.6 }}
                  />
                  {/* Progress Bar */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-white/50"
                    style={{ width: `${progress}%` }}
                  />
                </>
              )}
              <span className="relative z-10">{tab.label}</span>
            </motion.button>
          ))}
          
          {/* Pause Button */}
          <motion.button
            onClick={() => setIsPaused(!isPaused)}
            className="ml-4 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isPaused ? (
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Content with 3D Effect */}
        <div className="relative perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, rotateY: -15, z: -100 }}
              animate={{ opacity: 1, rotateY: 0, z: 0 }}
              exit={{ opacity: 0, rotateY: 15, z: -100 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={tabs[activeTab].image}
                    alt={tabs[activeTab].label}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="p-10 text-center">
                  <h3 className="text-3xl font-bold mb-3 text-white">
                    {tabs[activeTab].label}
                  </h3>
                  <p className="text-xl text-purple-200">
                    {tabs[activeTab].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
