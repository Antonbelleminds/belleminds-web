'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getContent } from '@/lib/i18n';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const { language } = useLanguage();
  const t = getContent(language);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="bg-white rounded-3xl shadow-2xl max-h-[95vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-10 right-10 p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
              >
                <X className="w-10 h-10 text-gray-600" />
              </button>

              {/* Content */}
              <div className="p-12 md:p-20">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src="/assets/anton.png"
                        alt="Anton Nilsson"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="flex-1 pt-0">
                    <h2 
                      className="text-5xl md:text-6xl font-bold mb-4"
                      style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}
                    >
                      Anton Nilsson
                    </h2>
                    <p 
                      className="text-3xl font-semibold mb-10"
                      style={{ color: '#000000' }}
                    >
                      {t.aboutModal.role}
                    </p>

                    <div className="space-y-6">
                      <p 
                        className="text-xl leading-relaxed"
                        style={{ color: '#000000' }}
                      >
                        {t.aboutModal.description1}
                      </p>
                      
                      <p 
                        className="text-xl leading-relaxed"
                        style={{ color: '#000000' }}
                      >
                        {t.aboutModal.description2}
                      </p>

                      <p 
                        className="italic text-lg"
                        style={{ color: '#666666' }}
                      >
                        {t.aboutModal.comingSoon}
                      </p>
                    </div>

                    {/* Placeholder for more content */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                      <p 
                        className="text-lg"
                        style={{ color: '#000000' }}
                      >
                        {t.aboutModal.contactLabel} <a href="mailto:anton@belleminds.ai" className="text-blue-600 hover:underline font-semibold">anton@belleminds.ai</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
