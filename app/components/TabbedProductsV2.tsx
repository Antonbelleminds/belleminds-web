'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { content } from '@/lib/content';

// Version 2: 3D Flip - Playful
export function TabbedProductsV2() {
  const [activeTab, setActiveTab] = useState<'bellebook' | 'minds'>('bellebook');

  const tabs = [
    { 
      id: 'bellebook' as const, 
      name: 'Bellebook',
      icon: '📖',
      color: '#A855F7'
    },
    { 
      id: 'minds' as const, 
      name: 'Minds Platform',
      icon: '🧠',
      color: '#8B5CF6'
    },
  ];

  const tabContent = {
    bellebook: {
      title: 'Bellebook',
      subtitle: 'Vår första produkt från Belleminds',
      description: content.bellebook.headline,
      features: content.bellebook.benefits.slice(0, 3),
    },
    minds: {
      title: 'Minds Platform',
      subtitle: 'Fullständig AI-driven företagsplattform',
      description: content.mindsplatform.paragraphs[0],
      features: [
        { title: 'AI-agent', description: 'Din virtuella medarbetare som jobbar 24/7', icon: 'agent' },
        { title: 'Alla verktyg', description: 'CRM, ekonomi, juridik – allt integrerat', icon: 'tools' },
        { title: 'Smart & lär sig', description: 'Blir bättre för varje dag', icon: 'learn' },
      ],
    },
  };

  const currentContent = tabContent[activeTab];

  return (
    <section id="products" className="py-32 px-6 bg-gradient-to-br from-[#1E1B4B] via-[#2D2465] to-[#1E1B4B] relative overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 bg-[#A855F7]/10 rounded-full blur-3xl"
      />

      {/* Logo with bounce */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="flex justify-center mb-16"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Image
            src="/brand/logo.png"
            alt="Belleminds logotyp"
            width={120}
            height={120}
            className="filter invert brightness-200 drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>

      {/* Tabs with 3D effect */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="flex gap-6 justify-center">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.1, rotateY: 10 }}
              whileTap={{ scale: 0.9 }}
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                fontFamily: 'var(--font-heading)'
              }}
              className={`relative px-12 py-6 rounded-3xl font-bold text-2xl transition-all ${
                activeTab === tab.id
                  ? 'bg-[#A855F7] text-[#1E1B4B] shadow-2xl shadow-[#A855F7]/60'
                  : 'bg-[#312E81] text-[#DDD6FE] hover:bg-[#3B378B]'
              }`}
            >
              <motion.span
                animate={activeTab === tab.id ? { rotate: [0, 360] } : {}}
                transition={{ duration: 0.6 }}
                className="text-4xl mr-3 inline-block"
              >
                {tab.icon}
              </motion.span>
              {tab.name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Content with 3D flip */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -90, opacity: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          style={{ transformStyle: 'preserve-3d' }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="text-sm uppercase tracking-widest text-[#A855F7] mb-4 font-semibold"
            >
              {currentContent.subtitle}
            </motion.div>
            <motion.h2
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="text-6xl md:text-7xl font-bold text-[#F5F3FF] mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {currentContent.title}
            </motion.h2>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl text-[#DDD6FE] max-w-4xl mx-auto leading-relaxed"
            >
              {currentContent.description}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ rotateX: 90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.15, type: "spring" }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: '0 25px 50px rgba(168, 85, 247, 0.3)'
                }}
                style={{ transformStyle: 'preserve-3d' }}
                className="bg-gradient-to-br from-[#312E81] to-[#2D2465] rounded-3xl p-10 border-2 border-[#A855F7]/40 hover:border-[#A855F7] transition-all"
              >
                <h3 className="text-3xl font-bold text-[#F5F3FF] mb-4">{feature.title}</h3>
                <p className="text-[#DDD6FE]/80 leading-relaxed text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
