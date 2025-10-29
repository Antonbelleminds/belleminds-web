'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface PrivacyProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Privacy({ isOpen, onClose }: PrivacyProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-gray-900 rounded-2xl shadow-2xl border border-gray-700"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            aria-label="Stäng"
          >
            <svg className="w-6 h-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-8">
            <h2
              className="text-3xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Integritetspolicy
            </h2>

            <div className="space-y-4 text-[#EAEAEA]">
              <p>
                Belleminds behandlar dina personuppgifter (namn, e-post, meddelande) baserat på ditt samtycke enligt GDPR Artikel 6.1(a). 
              </p>
              
              <p>
                <strong className="text-white">Vad vi gör:</strong> Vi använder dina uppgifter enbart för att hantera din förfrågan och kommunicera med dig. Data lagras säkert inom EU (Replit EU, Neon EU-Postgres) i max 12 månader.
              </p>
              
              <p>
                <strong className="text-white">Vad vi INTE gör:</strong> Vi använder inga cookies, delar aldrig data med tredje part, och har ingen användarspårning eller analytics.
              </p>
              
              <p>
                <strong className="text-white">Dina rättigheter:</strong> Du kan när som helst begära tillgång, rättelse eller radering av dina uppgifter. Kontakta oss på <a href="mailto:info@belleminds.ai" className="text-[#00FFC6] hover:underline">info@belleminds.ai</a>.
              </p>
              
              <p>
                <strong className="text-white">Klagomål:</strong> Du har rätt att klaga till Integritetsskyddsmyndigheten (IMY) om du anser att vi bryter mot GDPR.
              </p>
              
              <p className="text-sm text-gray-400 mt-6">
                Senast uppdaterad: 29 oktober 2025
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
