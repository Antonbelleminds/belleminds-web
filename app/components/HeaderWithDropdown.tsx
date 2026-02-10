'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { getContent } from '@/lib/i18n';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { AboutModal } from './AboutModal';

export function HeaderWithDropdown() {
  const { language } = useLanguage();
  const content = getContent(language);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === '#why') {
      setShowAbout(true);
      setMobileMenuOpen(false);
      setDropdownOpen(false);
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
      setDropdownOpen(false);
    }
  };

  const productsItems = [
    { name: language === 'sv' ? 'Produkter' : 'Products', href: '#products' },
    { name: language === 'sv' ? 'Varför Bellebook' : 'Why Bellebook', href: '#why-bellebook' },
    { name: language === 'sv' ? 'Vad ingår' : "What's included", href: '#whats-included' },
  ];

  const otherItems = content.header.navigation.filter(item => 
    !['#products', '#why-bellebook', '#whats-included'].includes(item.href)
  );

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
            <nav className="hidden lg:flex items-center gap-6">
              {/* Products Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 text-base font-medium text-black hover:text-accent transition-colors"
                >
                  {language === 'sv' ? 'Produkter' : 'Products'}
                  <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 left-0 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 min-w-[200px]"
                    >
                      {productsItems.map((item) => (
                        <button
                          key={item.href}
                          onClick={() => scrollToSection(item.href)}
                          className="block w-full text-left px-6 py-3 text-base font-medium text-black hover:bg-gray-50 hover:text-accent transition-colors"
                        >
                          {item.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other Nav Items */}
              {otherItems.map((item) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.05 }}
                  className="text-base font-medium text-black hover:text-accent transition-colors"
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="lg:hidden border-t border-gray-200 overflow-hidden"
              >
                <div className="px-6 py-4 space-y-3">
                  {productsItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left py-2 text-base font-medium text-black hover:text-accent"
                    >
                      {item.name}
                    </button>
                  ))}
                  {otherItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left py-2 text-base font-medium text-black hover:text-accent"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
    </motion.header>
  );
}
