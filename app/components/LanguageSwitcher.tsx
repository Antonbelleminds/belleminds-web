'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('sv')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
          language === 'sv'
            ? 'bg-accent text-white shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        SV
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
          language === 'en'
            ? 'bg-accent text-white shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        EN
      </motion.button>
    </div>
  );
}
