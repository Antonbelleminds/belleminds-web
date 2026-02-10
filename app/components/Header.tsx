'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { getContent } from '@/lib/i18n';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { AboutModal } from './AboutModal';

export function Header() {
  const { language } = useLanguage();
  const content = getContent(language);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Detect active section
      const sections = content.header.navigation.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string, itemName: string) => {
    // Om det är "Om oss" / "About us" (baserat på href #why), öppna modal istället
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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
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
        isScrolled ? 'py-3' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-full bg-white/90 backdrop-blur-md shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between px-6 py-4">
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
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-xl font-black text-black" style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, color: '#000000' }}>
                {content.header.brandName}
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {content.header.navigation.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href, item.name);
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: '0 0 20px rgba(0, 184, 143, 0.8), 0 0 40px rgba(0, 184, 143, 0.4)'
                  }}
                  className={`font-medium transition-all ${
                    activeSection === item.href
                      ? 'text-[#00B88F]'
                      : 'text-gray-700 hover:text-[#00B88F]'
                  }`}
                  style={{ 
                    fontFamily: 'var(--font-body)',
                    textShadow: activeSection === item.href ? '0 0 20px rgba(0, 184, 143, 0.8), 0 0 40px rgba(0, 184, 143, 0.4)' : 'none'
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            {/* Language Switcher and Contact Button */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <LanguageSwitcher />
              </div>
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block bg-accent text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {content.header.ctaButton}
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-700"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden border-t border-gray-200"
              >
                <nav className="px-6 py-4 space-y-3">
                  {content.header.navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href, item.name);
                      }}
                      className={`block font-medium py-2 transition-all ${
                        activeSection === item.href
                          ? 'text-[#00B88F]'
                          : 'text-gray-700 hover:text-[#00B88F]'
                      }`}
                      style={{ 
                        fontFamily: 'var(--font-body)',
                        textShadow: activeSection === item.href ? '0 0 20px rgba(0, 184, 143, 0.8), 0 0 40px rgba(0, 184, 143, 0.4)' : 'none'
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="pt-2 pb-1 flex justify-center">
                    <LanguageSwitcher />
                  </div>
                  <button
                    onClick={scrollToContact}
                    className="w-full bg-accent text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {content.header.ctaButton}
                  </button>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
    </motion.header>
  );
}
