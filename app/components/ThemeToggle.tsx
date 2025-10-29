'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-28 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
    );
  }

  const themes = ['light', 'dark', 'system'];
  const currentIndex = themes.indexOf(theme || 'system');
  const nextTheme = themes[(currentIndex + 1) % themes.length];

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(nextTheme)}
      className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium text-sm transition-colors hover:bg-gray-300 dark:hover:bg-gray-600"
    >
      {theme === 'light' && '☀️ Ljus'}
      {theme === 'dark' && '🌙 Mörk'}
      {theme === 'system' && '💻 Auto'}
    </motion.button>
  );
}
