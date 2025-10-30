'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const securityItems = [
  {
    title: 'GDPR-klar',
    description: 'Vi designar alla tjänster för att uppfylla EU:s dataskyddsförordning. Användaren äger alltid sitt eget data.',
  },
  {
    title: 'EU-hostad drift',
    description: 'All lagring och drift sker på servrar inom EU. Vi använder certifierade molntjänster med högsta säkerhetsnivå.',
  },
  {
    title: 'Säker kommunikation',
    description: 'All datatrafik är krypterad från början till slut. OAuth 2.0 och moderna autentiseringsprotokoll skyddar varje anslutning.',
  },
  {
    title: 'Dataintegritet',
    description: 'Vi garanterar att din information är korrekt, skyddad och oförändrad. Endast auktoriserade system och användare har åtkomst till dina resurser.',
  },
];

export function TechBehind() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="tech" ref={ref} className="py-20 px-6 bg-[#0B0C10]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-4 text-center"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Säkerhet & Efterlevnad
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#EAEAEA] text-center mb-12 text-lg"
        >
          Säkerhet och integritet är kärnan i allt vi bygger.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {securityItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="group p-8 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-all duration-300 hover:from-gray-800 hover:to-gray-700 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {item.title}
              </h3>
              <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
