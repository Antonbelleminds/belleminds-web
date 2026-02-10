'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { getContent } from '@/lib/i18n';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { AboutModal } from './AboutModal';

export function HeaderInline() {
  const { language } = useLanguage();
  const content = getContent(language);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (href: string) => {
    if (href === '#why') {
      setShowAbout(true);
      setMobileMenuOpen(false);
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-3'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="rounded-full bg-white/90 backdrop-blur-md shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <Image
                src="/brand/logo.png"
                alt="Belleminds"
                width={28}
                height={28}
                className="object-contain"
              />
              <span className="text-lg font-black text-black" style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, color: '#000000' }}>
                {content.header.brandName}
              </span>
            </motion.a>

            {/* Desktop Navigation - Compact */}
            <nav className="hidden md:flex items-center gap-4">
              {content.header.navigation.map((item) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.05 }}
                  className="text-sm font-medium text-black hover:text-accent transition-colors whitespace-nowrap"
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                <svg className="w-7 h-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 md:hidden shadow-2xl"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <Image
                    src="/brand/logo.png"
                    alt="Belleminds"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                  <span className="text-lg font-black text-black" style={{ fontFamily: 'var(--font-heading)', fontWeight: 900 }}>
                    {content.header.brandName}
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu Links */}
              <nav className="p-6 space-y-2">
                {content.header.navigation.map((item, index) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-4 text-lg font-semibold text-black hover:bg-gray-50 hover:text-accent rounded-xl transition-all"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </nav>

              {/* Language Switcher in Menu */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-2">{language === 'sv' ? 'Språk' : 'Language'}</p>
                  <LanguageSwitcher />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
    </motion.header>
  );
}
