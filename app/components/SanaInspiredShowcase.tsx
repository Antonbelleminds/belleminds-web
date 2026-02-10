'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import { getContent } from '@/lib/i18n';

interface Tab {
  id: string;
  label: string;
  image?: string;
  images?: string[];
  description: string;
  type?: 'single' | 'multi';
}

const employeeImages = [
  '/assets/image-b77298f6-f834-411e-9d09-ccbc6aff3754.png',
  '/assets/PNG-bild-eff6394f-74f1-4646-885c-111a8d55c2c4.png',
  '/assets/PNG-bild-839dc183-7935-4ba7-a187-d1a6018593c5.png'
];

const AUTOPLAY_INTERVAL = 5000; // 5 seconds per slide

export function SanaInspiredShowcase() {
  const { language } = useLanguage();
  const t = getContent(language);
  
  const tabs: Tab[] = [
    {
      id: 'belle-ai',
      label: t.showcase.tabs.belleAI.label,
      image: '/assets/Ska_rmavbild_2026-02-04_kl._15.09.38-3df3f880-0821-4e22-8d8f-82807f033820.png',
      type: 'single',
      description: t.showcase.tabs.belleAI.description
    },
    {
      id: 'skala',
      label: t.showcase.tabs.skala.label,
      image: '/assets/Ska_rmavbild_2026-02-04_kl._15.18.02-9a79b264-a78f-40e2-8ba1-27158463202c.png',
      type: 'single',
      description: t.showcase.tabs.skala.description
    },
    {
      id: 'organisera',
      label: t.showcase.tabs.organisera.label,
      image: '/assets/Ska_rmavbild_2026-02-03_kl._16.09.13-e8d1a107-89d4-4ab9-b5d3-341129070e8e.png',
      type: 'single',
      description: t.showcase.tabs.organisera.description
    },
    {
      id: 'engagera',
      label: t.showcase.tabs.engagera.label,
      images: employeeImages,
      type: 'multi',
      description: t.showcase.tabs.engagera.description
    },
    {
      id: 'behall',
      label: t.showcase.tabs.behall.label,
      image: '/assets/Ska_rmavbild_2026-02-04_kl._15.15.34-0a56132a-11cf-4191-a3a4-65fad8ba232f.png',
      type: 'single',
      description: t.showcase.tabs.behall.description
    },
    {
      id: 'agera',
      label: t.showcase.tabs.agera.label,
      image: '/assets/Ska_rmavbild_2026-02-04_kl._15.11.21-22747ef9-d461-42e1-9c64-ce03f41f94e9.png',
      type: 'single',
      description: t.showcase.tabs.agera.description
    }
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (100 / (AUTOPLAY_INTERVAL / 50));
        if (newProgress >= 100) {
          return 100;
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [isPaused]);

  // Separate effect for tab switching
  useEffect(() => {
    if (isPaused || progress < 100) {
      return;
    }

    const timer = setTimeout(() => {
      setActiveTab((current) => (current + 1) % tabs.length);
      setProgress(0);
    }, 100);

    return () => clearTimeout(timer);
  }, [progress, isPaused]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setProgress(0);
  };

  // Touch handlers for mobile swipe
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // minimum swipe distance
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe left - next slide
        setActiveTab((current) => (current + 1) % tabs.length);
      } else {
        // Swipe right - previous slide
        setActiveTab((current) => (current - 1 + tabs.length) % tabs.length);
      }
      setProgress(0);
    }
  };

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 
            className="text-3xl md:text-5xl font-bold mb-4 md:mb-6"
            style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}
          >
            {t.showcase.title}
          </h2>
          <p 
            className="text-base md:text-xl max-w-2xl mx-auto px-4"
            style={{ fontFamily: 'var(--font-body)', color: '#000000' }}
          >
            {t.showcase.subtitle}
          </p>
        </div>

        {/* Tab Navigation - Animated Pills */}
        <div className="flex items-center justify-start md:justify-center gap-1.5 sm:gap-2 md:gap-3 mb-6 md:mb-12 overflow-x-auto px-3 sm:px-4 md:px-0 pb-2 md:pb-0 scrollbar-hide -mx-3 sm:-mx-4 md:mx-0 flex-wrap">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              onClick={() => handleTabClick(index)}
              className={`relative overflow-hidden rounded-full font-semibold bg-white text-[10px] xs:text-xs sm:text-sm md:text-base flex-shrink-0 ${
                activeTab === index
                  ? 'shadow-lg scale-105'
                  : 'shadow-md hover:shadow-lg'
              }`}
              style={{ transition: 'transform 0.3s, box-shadow 0.3s' }}
            >
              {/* Green Progress Fill - horizontal from left to right */}
              {activeTab === index && (
                <div
                  className="absolute bg-accent rounded-full"
                  style={{ 
                    top: 0,
                    bottom: 0,
                    left: 0,
                    width: `${progress}%`,
                    zIndex: 0,
                    transition: 'none',
                    willChange: 'width'
                  }}
                />
              )}
              
              {/* Content wrapper with padding */}
              <div className="relative px-2.5 xs:px-3 sm:px-4 md:px-6 py-1.5 xs:py-2 md:py-3" style={{ zIndex: 10 }}>
                {/* Black text (default) */}
                <span 
                  className="block text-[10px] xs:text-xs sm:text-sm md:text-base whitespace-nowrap"
                  style={{ color: '#000000' }}
                >
                  {tab.label}
                </span>
                
                {/* White text container - only as wide as green fill */}
                {activeTab === index && (
                  <div 
                    className="absolute top-0 bottom-0 left-0 overflow-hidden"
                    style={{ 
                      width: `${progress}%`,
                      zIndex: 11,
                    }}
                  >
                    <div className="px-2.5 xs:px-3 sm:px-4 md:px-6 py-1.5 xs:py-2 md:py-3 text-[10px] xs:text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap" style={{ color: '#FFFFFF' }}>
                      {tab.label}
                    </div>
                  </div>
                )}
              </div>
            </motion.button>
          ))}
          
          {/* Pause/Play Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.4, 
              delay: tabs.length * 0.1,
              ease: "easeOut"
            }}
            onClick={() => setIsPaused(!isPaused)}
            className="p-2 xs:p-2.5 sm:p-3 md:p-3.5 rounded-full bg-white hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg group flex-shrink-0"
            aria-label={isPaused ? 'Play' : 'Pause'}
          >
            {isPaused ? (
              <svg className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-gray-700 group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-gray-700 group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            )}
          </motion.button>
        </div>

        {/* MOBILE: Swipeable slider */}
        <div className="md:hidden">
          <div 
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                {tabs[activeTab].type === 'multi' ? (
                  // Show all 3 phones side by side on mobile
                  <div className="w-full px-4">
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {tabs[activeTab].images?.map((img, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className="relative w-full bg-white rounded-xl sm:rounded-2xl shadow-lg p-1.5 sm:p-2 border-4 sm:border-6 border-gray-800">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 sm:w-12 h-2 sm:h-3 bg-gray-800 rounded-b-lg sm:rounded-b-xl z-10"></div>
                            <div className="relative w-full aspect-[9/19.5] bg-white rounded-lg sm:rounded-xl overflow-hidden">
                              <Image
                                src={img}
                                alt={`${tabs[activeTab].label} ${index + 1}`}
                                fill
                                className="object-cover"
                                quality={85}
                                sizes="(max-width: 640px) 30vw, 200px"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Single image slide - larger on mobile
                  <div className="w-full px-3 sm:px-4">
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
                      <div className="relative aspect-[16/10] sm:aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100">
                        <Image
                          src={tabs[activeTab].image!}
                          alt={tabs[activeTab].label}
                          fill
                          className="object-contain"
                          quality={90}
                          sizes="(max-width: 768px) 95vw, 600px"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Description card below image */}
                <div className="px-4 sm:px-6 py-4 sm:py-6 mt-3 sm:mt-4 mx-3 sm:mx-4 bg-white rounded-xl sm:rounded-2xl shadow-lg">
                  <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}>
                    {tabs[activeTab].label}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: '#333333' }}>
                    {tabs[activeTab].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* DESKTOP: Original layout (unchanged) */}
        <div className="hidden md:block relative">
          <AnimatePresence mode="wait">
            {tabs[activeTab] && tabs[activeTab].type === 'multi' ? (
            // Multiple Phone Screens Side by Side
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {tabs[activeTab].images?.map((img, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {/* Phone Frame */}
                    <div className="relative w-full max-w-[320px] bg-white rounded-[3rem] shadow-2xl p-3 border-8 border-gray-800">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-800 rounded-b-2xl z-10"></div>
                      
                      {/* Screen */}
                      <div className="relative w-full aspect-[9/19.5] bg-white rounded-[2.5rem] overflow-hidden">
                        <Image
                          src={img}
                          alt={`${tabs[activeTab].label} ${index + 1}`}
                          fill
                          className="object-cover"
                          quality={95}
                          sizes="(max-width: 768px) 100vw, 320px"
                          loading="lazy"
                          style={{ imageRendering: '-webkit-optimize-contrast' }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Description Section */}
              <div className="p-10 text-center bg-gradient-to-br from-white to-gray-50 mt-8 rounded-3xl">
                <h3 
                  className="text-3xl font-bold mb-3"
                  style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}
                >
                  {tabs[activeTab].label}
                </h3>
                <p 
                  className="text-xl max-w-xl mx-auto"
                  style={{ fontFamily: 'var(--font-body)', color: '#000000' }}
                >
                  {tabs[activeTab].description}
                </p>
              </div>
            </motion.div>
          ) : (
            // Single Large Display
            tabs[activeTab] && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200/80"
              >
                <div className="relative aspect-[16/9] bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src={tabs[activeTab].image!}
                    alt={tabs[activeTab].label}
                    fill
                    className="object-contain"
                    quality={95}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    loading="lazy"
                    style={{ imageRendering: '-webkit-optimize-contrast' }}
                  />
                </div>
                <div className="p-10 text-center bg-gradient-to-br from-white to-gray-50">
                  <h3 
                    className="text-3xl font-bold mb-3"
                    style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}
                  >
                    {tabs[activeTab].label}
                  </h3>
                  <p 
                    className="text-xl max-w-xl mx-auto"
                    style={{ fontFamily: 'var(--font-body)', color: '#000000' }}
                  >
                    {tabs[activeTab].description}
                  </p>
                </div>
              </motion.div>
            )
          )}
          </AnimatePresence>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {tabs.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className="group"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeTab === index 
                  ? 'bg-gradient-to-r from-accent to-primary w-8' 
                  : 'bg-gray-300 group-hover:bg-gray-400'
              }`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
