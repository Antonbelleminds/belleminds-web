'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { content } from '@/lib/content';

// Version 1: Slide transitions - Smooth
export function TabbedProductsV1() {
  const [activeTab, setActiveTab] = useState<'bellebook' | 'minds'>('bellebook');

  const tabs = [
    { 
      id: 'bellebook' as const, 
      name: 'Bellebook',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    { 
      id: 'minds' as const, 
      name: 'Minds Platform',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ];

  const tabContent = {
    bellebook: {
      title: 'Bellebook',
      subtitle: 'Belleminds första produkt',
      description: content.bellebook.headline,
      details: content.bellebook.subline,
      features: content.bellebook.benefits.slice(0, 3),
    },
    minds: {
      title: 'Minds Platform',
      subtitle: 'Fullständig företagsplattform',
      description: content.mindsplatform.title,
      details: content.mindsplatform.paragraphs[0],
      features: [
        { title: 'AI-agent', description: 'Din personliga AI-assistent för företaget', icon: 'agent' },
        { title: 'Integrerade verktyg', description: 'CRM, ekonomi, juridik och e-signering på ett ställe', icon: 'tools' },
        { title: 'Alltid uppdaterad', description: 'Plattformen växer med dina behov', icon: 'update' },
      ],
    },
  };

  const currentContent = tabContent[activeTab];

  return (
    <section id="products" className="py-32 px-6 bg-[#1E1B4B] relative overflow-hidden">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center mb-16"
      >
        <Image
          src="/brand/logo.png"
          alt="Belleminds logotyp"
          width={120}
          height={120}
          className="filter invert brightness-200 drop-shadow-2xl"
        />
      </motion.div>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="flex gap-4 justify-center">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-10 py-5 rounded-2xl font-bold text-xl transition-all flex items-center gap-4 ${
                activeTab === tab.id
                  ? 'bg-[#A855F7] text-[#1E1B4B] shadow-2xl shadow-[#A855F7]/50'
                  : 'bg-[#312E81] text-[#DDD6FE] hover:bg-[#3B378B]'
              }`}
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {tab.icon}
              {tab.name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm uppercase tracking-widest text-[#A855F7] mb-4 font-semibold"
            >
              {currentContent.subtitle}
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold text-[#F5F3FF] mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {currentContent.title}
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl text-[#DDD6FE] mb-4"
            >
              {currentContent.description}
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-[#DDD6FE]/80 max-w-3xl mx-auto"
            >
              {currentContent.details}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="bg-[#312E81]/50 backdrop-blur-sm rounded-3xl p-8 border border-[#A855F7]/30 hover:border-[#A855F7] transition-all hover:shadow-xl hover:shadow-[#A855F7]/20"
              >
                <h3 className="text-2xl font-bold text-[#F5F3FF] mb-4">{feature.title}</h3>
                <p className="text-[#DDD6FE]/80 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
