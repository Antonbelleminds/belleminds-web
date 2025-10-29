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
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="sticky top-4 right-4 float-right z-10 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Stäng"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-8 md:p-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-8"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Integritet & GDPR
            </h2>

            <div className="space-y-8">
              <div className="bg-accent/10 dark:bg-accent/5 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                  Din integritet är vår prioritet
                </h3>
                <p className="text-gray-900 dark:text-gray-100">
                  Vi på Belleminds tar din integritet på största allvar. Vår plattform är byggd från grunden med GDPR-efterlevnad i fokus.
                </p>
              </div>

              <div className="space-y-6">
            <div className="border-l-4 border-accent pl-6">
              <h4 className="text-xl font-bold text-black dark:text-white mb-2">
                Hur vi behandlar dina uppgifter
              </h4>
              <ul className="space-y-2 text-gray-900 dark:text-gray-100">
                <li><strong>Personuppgiftsansvarig:</strong> Belleminds AB</li>
                <li><strong>Kontaktinformation:</strong> info@belleminds.ai</li>
                <li><strong>Rättslig grund:</strong> Samtycke (Artikel 6.1(a) GDPR)</li>
                <li><strong>Ändamål:</strong> Hantera och besvara dina förfrågningar</li>
                <li><strong>Mottagare:</strong> Inga tredje parter - data delas aldrig</li>
                <li><strong>Datalagring:</strong> EU-hostad infrastruktur (Replit EU, Neon EU-Postgres)</li>
                <li><strong>Lagringstid:</strong> Kontaktförfrågningar sparas i 12 månader, därefter raderas automatiskt</li>
              </ul>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h4 className="text-xl font-bold text-black dark:text-white mb-2">
                Vilka uppgifter samlar vi in?
              </h4>
              <ul className="space-y-2 text-gray-900 dark:text-gray-100">
                <li>✓ Namn och e-postadress (via kontaktformuläret)</li>
                <li>✓ Meddelanden du skickar till oss</li>
              </ul>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h4 className="text-xl font-bold text-black dark:text-white mb-2">
                Vad vi INTE gör
              </h4>
              <ul className="space-y-2 text-gray-900 dark:text-gray-100">
                <li>✗ Använder spårningscookies</li>
                <li>✗ Delar din data med tredje part</li>
                <li>✗ Säljer din information</li>
                <li>✗ Använder analysverktyg som spårar dig</li>
              </ul>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h4 className="text-xl font-bold text-black dark:text-white mb-2">
                Dina rättigheter enligt GDPR
              </h4>
              <ul className="space-y-2 text-gray-900 dark:text-gray-100">
                <li>✓ Rätt till tillgång – få en kopia av dina uppgifter</li>
                <li>✓ Rätt till rättelse – korrigera felaktig information</li>
                <li>✓ Rätt till radering – "rätten att bli glömd"</li>
                <li>✓ Rätt till dataportabilitet – få dina data i maskinläsbart format</li>
                <li>✓ Rätt att invända – neka viss behandling av dina uppgifter</li>
                <li>✓ Rätt att återkalla samtycke – när som helst utan att påverka tidigare behandling</li>
              </ul>
              <p className="mt-4 text-sm text-gray-900 dark:text-gray-100">
                För att utöva dina rättigheter, kontakta oss på info@belleminds.ai
              </p>
              <p className="mt-3 text-sm text-gray-900 dark:text-gray-100">
                <strong>Klagomål:</strong> Du har rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY) om du anser att behandlingen av dina personuppgifter bryter mot GDPR.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h4 className="text-xl font-bold text-black dark:text-white mb-2">
                Säkerhet
              </h4>
              <ul className="space-y-2 text-gray-900 dark:text-gray-100">
                <li>✓ All kommunikation krypterad med HTTPS</li>
                <li>✓ Cloudflare säkerhet och DDoS-skydd</li>
                <li>✓ Data lagras endast inom EU</li>
                <li>✓ Regelbundna säkerhetsuppdateringar</li>
                <li>✓ Redo för EU AI Act 2026</li>
              </ul>
            </div>
              </div>

              <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-6 text-center">
                <p className="text-sm text-gray-900 dark:text-gray-100">
                  Senast uppdaterad: 29 oktober 2025
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
