'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const navItems = [
  { name: 'Om oss', href: '#why' },
  { name: 'Plattform 2026', href: '#platform' },
  { name: 'Teknologi', href: '#tech' },
  { name: 'Inspiration', href: '#inspiration' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
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
        <div
          className={`rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
              : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <div className="w-10 h-10 relative">
                <Image
                  src="/brand/logo.png"
                  alt="Belleminds"
                  fill
                  sizes="40px"
                  className="dark:invert object-contain"
                />
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors font-medium"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            {/* Contact Button */}
            <div className="flex items-center gap-4">
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block bg-primary dark:bg-accent text-white dark:text-dark-bg px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Kontakta oss
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-700 dark:text-gray-300"
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
                className="md:hidden overflow-hidden border-t border-gray-200 dark:border-gray-700"
              >
                <nav className="px-6 py-4 space-y-3">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      className="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors font-medium py-2"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {item.name}
                    </a>
                  ))}
                  <button
                    onClick={scrollToContact}
                    className="w-full bg-primary dark:bg-accent text-white dark:text-dark-bg px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Kontakta oss
                  </button>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
