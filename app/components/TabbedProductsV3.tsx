'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { content } from '@/lib/content';

// Version 3: Morphing shapes - Futuristic
export function TabbedProductsV3() {
  const [activeTab, setActiveTab] = useState<'bellebook' | 'minds'>('bellebook');

  const tabs = [
    { 
      id: 'bellebook' as const, 
      name: 'Bellebook',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    { 
      id: 'minds' as const, 
      name: 'Minds Platform',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
  ];

  const tabContent = {
    bellebook: {
      tag: 'FÖRSTA PRODUKTEN',
      title: 'Bellebook',
      from: 'Belleminds',
      description: content.bellebook.headline,
      features: content.bellebook.benefits.slice(0, 3),
    },
    minds: {
      tag: 'KOMMANDE',
      title: 'Minds Platform',
      from: 'Belleminds',
      description: 'AI-driven företagsplattform med alla verktyg du behöver för att driva din verksamhet smartare.',
      features: [
        { title: 'AI-driven automation', description: 'Låt AI hantera det repetitiva arbetet', icon: 'automation' },
        { title: 'Integrerad plattform', description: 'CRM, ekonomi, juridik – allt på ett ställe', icon: 'platform' },
        { title: 'Växer med dig', description: 'Från start till skalning', icon: 'growth' },
      ],
    },
  };

  const currentContent = tabContent[activeTab];

  return (
    <section id="products" className="py-32 px-6 bg-[#1E1B4B] relative overflow-hidden">
      {/* Morphing background shapes */}
      <motion.div
        animate={{
          borderRadius: ['50% 50% 50% 50%', '40% 60% 60% 40%', '60% 40% 40% 60%', '50% 50% 50% 50%'],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-[#A855F7]/20 to-transparent blur-3xl"
      />
      <motion.div
        animate={{
          borderRadius: ['50% 50% 50% 50%', '60% 40% 40% 60%', '40% 60% 60% 40%', '50% 50% 50% 50%'],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-[#8B5CF6]/20 to-transparent blur-3xl"
      />

      {/* Logo with glow pulse */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="flex justify-center mb-16 relative z-10"
      >
        <motion.div
          animate={{
            filter: [
              'drop-shadow(0 0 30px rgba(168, 85, 247, 0.5))',
              'drop-shadow(0 0 60px rgba(168, 85, 247, 0.8))',
              'drop-shadow(0 0 30px rgba(168, 85, 247, 0.5))',
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Image
            src="/brand/logo.png"
            alt="Belleminds logotyp"
            width={120}
            height={120}
            className="filter invert brightness-200"
          />
        </motion.div>
      </motion.div>

      {/* Morphing tabs */}
      <div className="max-w-5xl mx-auto mb-20 relative z-10">
        <div className="flex gap-6 justify-center">
          {tabs.map((tab, i) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={activeTab === tab.id ? {
                borderRadius: ['20px', '30px 10px 30px 10px', '10px 30px 10px 30px', '20px'],
              } : {}}
              transition={{ duration: 2, repeat: activeTab === tab.id ? Infinity : 0 }}
              className={`relative px-12 py-6 font-bold text-xl transition-all flex items-center gap-4 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#A855F7] to-[#8B5CF6] text-white shadow-2xl shadow-[#A855F7]/60'
                  : 'bg-[#312E81]/50 backdrop-blur-sm text-[#DDD6FE] hover:bg-[#312E81] border border-[#A855F7]/20'
              }`}
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {tab.icon}
              {tab.name}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-[#A855F7] to-[#8B5CF6] rounded-[20px]"
                  style={{ zIndex: -1 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Content with liquid morph */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="max-w-6xl mx-auto relative z-10"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <span className="text-xs font-bold tracking-widest text-[#A855F7] px-4 py-2 bg-[#A855F7]/10 rounded-full border border-[#A855F7]/30">
                {currentContent.tag}
              </span>
              <span className="text-sm text-[#DDD6FE]/60">från</span>
              <span className="text-sm font-bold text-white">{currentContent.from}</span>
            </motion.div>
            
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
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
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                whileHover={{
                  scale: 1.05,
                  borderRadius: ['24px', '30px 15px 30px 15px', '15px 30px 15px 30px', '24px'],
                  transition: { borderRadius: { duration: 1, repeat: Infinity } }
                }}
                className="bg-gradient-to-br from-[#312E81]/80 to-[#2D2465]/80 backdrop-blur-sm rounded-3xl p-10 border border-[#A855F7]/30 hover:border-[#A855F7] transition-all hover:shadow-2xl hover:shadow-[#A855F7]/30"
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
