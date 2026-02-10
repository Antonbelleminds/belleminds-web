'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { getContent } from '@/lib/i18n';
import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';

export function ProductsSection() {
  const { language } = useLanguage();
  const content = getContent(language);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      {/* Header Section */}
      <div className="py-8 md:py-16 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 
              className="text-3xl md:text-6xl font-bold mb-3 md:mb-4"
              style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}
            >
              {content.products.title}
            </h2>
            <p 
              className="text-base md:text-2xl max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-body)', color: '#000000' }}
            >
              {content.products.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* MOBILE VERSION - Clean stacked layout */}
      <section className="md:hidden bg-white">
        {/* Product Cards - Normal Flow */}
        <div className="px-4 sm:px-6 py-6 sm:py-8 space-y-5 sm:space-y-6 max-w-2xl mx-auto">
          {/* Bellebook Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 
                className="text-xl sm:text-2xl font-bold"
                style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}
              >
                {content.products.bellebook.title}
              </h3>
              <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ml-2">
                Q2 2026
              </span>
            </div>
            
            <p className="text-xs sm:text-sm mb-4 leading-relaxed" style={{ color: '#333333' }}>
              {content.products.bellebook.description}
            </p>
            
            <ul className="space-y-2.5">
              {content.products.bellebook.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm" style={{ color: '#000000' }}>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Minds Platform Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 
                className="text-xl sm:text-2xl font-bold"
                style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}
              >
                {content.products.mindsPlatform.title}
              </h3>
              <span className="px-3 py-1 rounded-full text-xs font-bold text-white whitespace-nowrap ml-2" style={{ backgroundColor: '#00826F' }}>
                {content.products.mindsPlatform.badge}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm mb-4 leading-relaxed" style={{ color: '#333333' }}>
              {content.products.mindsPlatform.description}
            </p>
            
            <ul className="space-y-2.5">
              {content.products.mindsPlatform.capabilities.map((capability, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm" style={{ color: '#000000' }}>{capability}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* DESKTOP VERSION - Split image with overlay cards */}
      <section id="products" ref={ref} className="hidden md:block relative py-32 overflow-hidden min-h-[800px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/salon-booking-new.png"
            alt="Salon booking background"
            fill
            className="object-contain"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
            priority
            quality={95}
            sizes="100vw"
          />
          <div className="absolute inset-0 -z-10 bg-white"></div>
        </div>

        {/* Overlay Cards */}
        <div className="relative z-10 flex w-full justify-center items-center min-h-[800px]">
          <div className="relative w-full max-w-[1200px] mx-auto px-4">
            <div className="relative w-full h-[280px] flex items-center justify-between gap-8">
              {/* Bellebook Card - Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative bg-white rounded-2xl p-5 border border-gray-200 transition-all hover:shadow-xl w-[350px] h-[280px] flex-shrink-0"
              >
                <div className="absolute top-3 right-3">
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold">
                    Q2 2026
                  </span>
                </div>
                
                <div className="flex items-start gap-2 mb-3">
                  <div className="text-accent">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 
                      className="text-xl font-bold mb-1"
                      style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}
                    >
                      {content.products.bellebook.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-sm mb-4 font-semibold leading-relaxed" style={{ color: '#000000' }}>
                  {content.products.bellebook.description}
                </p>
                
                <ul className="space-y-1.5">
                  {content.products.bellebook.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs font-semibold" style={{ color: '#000000' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Minds Platform Card - Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative bg-white rounded-2xl p-5 border border-gray-200 transition-all hover:shadow-xl w-[350px] h-[280px] flex-shrink-0"
              >
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: '#00826F' }}>
                    {content.products.mindsPlatform.badge}
                  </span>
                </div>

                <div className="flex items-start gap-2 mb-3">
                  <div className="text-accent">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 
                      className="text-xl font-bold mb-1"
                      style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}
                    >
                      {content.products.mindsPlatform.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-sm mb-4 font-semibold leading-relaxed" style={{ color: '#000000' }}>
                  {content.products.mindsPlatform.description}
                </p>
                
                <ul className="space-y-1.5">
                  {content.products.mindsPlatform.capabilities.map((capability, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-xs font-semibold" style={{ color: '#000000' }}>{capability}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
