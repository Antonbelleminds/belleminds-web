'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export function DesignSwitcher() {
  const [isOpen, setIsOpen] = useState(false);

  const designs = [
    { 
      id: 'b1', 
      name: 'B1', 
      subtitle: 'Original • Compact Nav', 
      href: '/design-b1', 
      color: '#3B82F6',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    { 
      id: 'b2', 
      name: 'B2', 
      subtitle: 'Dropdown Nav • With Investor', 
      href: '/design-b2', 
      color: '#2563EB',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )
    },
    { 
      id: 'b3', 
      name: 'B3', 
      subtitle: 'Inline Nav • Merged Investor', 
      href: '/design-b3', 
      color: '#1D4ED8',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
        </svg>
      )
    },
    { 
      id: 'b4', 
      name: 'B4', 
      subtitle: 'Mega Menu • No Investor', 
      href: '/design-b4', 
      color: '#7C3AED',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      )
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 bg-gray-900/95 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-gray-700/50 min-w-[280px]"
          >
            <h3 className="text-white font-bold mb-3 px-2 text-sm uppercase tracking-wider">
              Designförslag
            </h3>
            <div className="space-y-2">
              {designs.map((design) => (
                <Link
                  key={design.id}
                  href={design.href}
                  className="block px-4 py-3 rounded-xl hover:bg-[#00FFC6]/10 transition-colors group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" 
                      style={{ backgroundColor: design.color }}
                    >
                      <div className="text-white">
                        {design.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold group-hover:text-[#00FFC6] transition-colors">
                        {design.name}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {design.subtitle}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#00FFC6] text-[#0B0C10] rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow"
        title="Byt designförslag"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      </motion.button>
    </div>
  );
}
