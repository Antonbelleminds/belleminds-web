'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

export function Footer() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-light-bg dark:bg-dark-bg py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <Image
              src="/brand/logo.png"
              alt="Belleminds"
              width={40}
              height={40}
              className="invert"
            />
            <span className="text-lg font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              Belleminds
            </span>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button
              onClick={scrollToContact}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors"
            >
              Kontakt
            </button>
            <ThemeToggle />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
          <p>© 2025 Belleminds. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
}
