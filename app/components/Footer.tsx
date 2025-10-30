'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Privacy } from './Privacy';
import { Terms } from './Terms';

export function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <footer className="bg-[#060708] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <Image
              src="/brand/logo.png"
              alt="Belleminds"
              width={40}
              height={40}
              style={{ filter: 'invert(1) brightness(1.8)' }}
            />
            <div>
              <span className="text-lg font-bold text-white block" style={{ fontFamily: 'var(--font-heading)' }}>
                Belleminds
              </span>
              <span className="text-sm text-gray-400">© 2025 Alla rättigheter förbehållna</span>
            </div>
          </motion.div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <button
              onClick={() => setPrivacyOpen(true)}
              className="text-gray-300 hover:text-[#00FFC6] transition-colors"
            >
              Integritetspolicy
            </button>
            <button
              onClick={() => setTermsOpen(true)}
              className="text-gray-300 hover:text-[#00FFC6] transition-colors"
            >
              Ansvarsbegränsningar
            </button>
            <a
              href="https://www.linkedin.com/company/belleminds/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#00FFC6] transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <Privacy isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <Terms isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
    </footer>
  );
}
