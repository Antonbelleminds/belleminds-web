'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface TermsProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Terms({ isOpen, onClose }: TermsProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-gray-900 rounded-2xl shadow-2xl border border-gray-700"
        >
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
              Ansvarsbegränsningar för Belleminds
            </h2>

            <div className="space-y-6 text-[#EAEAEA]">
              <p className="text-sm text-gray-400">
                Senast uppdaterad: 30 oktober 2025
              </p>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">1. Allmänt</h3>
                <p>
                  Belleminds tillhandahåller digitala verktyg, applikationer och AI-baserade funktioner för att underlätta företagsdrift, kommunikation och beslutsstöd. Informationen som genereras av plattformen är automatisk och vägledande, inte juridiskt bindande.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">2. Ingen garanti för riktighet</h3>
                <p>
                  Vi strävar efter högsta möjliga kvalitet, men vi kan inte garantera att allt innehåll, data eller analyser alltid är korrekta, fullständiga eller aktuella. Våra modeller utvecklas kontinuerligt och kan påverkas av externa datakällor.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">3. Användarens ansvar</h3>
                <p>
                  Användaren ansvarar för att granska och bedöma informationens relevans innan beslut fattas. Belleminds ersätter inte mänsklig bedömning eller professionell rådgivning.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">4. Begränsning av ansvar</h3>
                <p className="mb-2">Belleminds ansvarar inte för:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Ekonomiska förluster eller uteblivna intäkter</li>
                  <li>Förlust av data eller avbrott i verksamheten</li>
                  <li>Direkta, indirekta eller följdskador som uppstår genom användning eller oförmåga att använda tjänsten</li>
                  <li>Eventuella beslut som fattas baserat på genererat innehåll</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">5. Tredjepartsintegrationer</h3>
                <p>
                  Om tjänsten integreras med tredjepartssystem (t.ex. Google, GitHub, OpenAI, SMHI eller andra) ansvarar Belleminds inte för dessa leverantörers drift, säkerhet eller tillgänglighet.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">6. Tillgänglighet och drift</h3>
                <p>
                  Belleminds strävar efter hög driftsäkerhet men garanterar inte oavbruten tillgång till tjänsterna. Planerat underhåll och tekniska störningar kan förekomma.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">7. Ändringar av ansvarsbegränsningarna</h3>
                <p>
                  Belleminds förbehåller sig rätten att uppdatera denna text när tjänsten utvecklas eller nya lagkrav tillkommer. Den senaste versionen finns alltid på denna sida.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">8. Kontakt</h3>
                <p>
                  För frågor kring ansvarsbegränsningar eller GDPR:<br />
                  📧 <a href="mailto:info@belleminds.ai" className="text-[#00FFC6] hover:underline">info@belleminds.ai</a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
