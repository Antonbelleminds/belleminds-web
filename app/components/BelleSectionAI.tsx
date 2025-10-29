'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';

const sections = [
  {
    id: 'resources',
    title: 'Dina AI-resurser',
    image: '/brand/ai-resources.png',
    heading: 'Allt du behöver, samlat på ett ställe.',
    description: 'Få tillgång till alla dina AI-verktyg och resurser i en gemensam plattform. CRM för att hålla koll på dina kunder, e-signering för snabba avtal, samt ekonomi- och analysverktyg som ger dig full översikt. Sömlös integration med dina befintliga system.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: 'agent',
    title: 'Din AI-agent',
    image: '/brand/ai-agent.png',
    heading: 'Din personliga assistent som jobbar för dig.',
    description: 'En intelligent agent som fungerar som din personliga assistent. Automatiserar rutinuppgifter, sammanställer rapporter, svarar på kundfrågor och analyserar data. Lär sig kontinuerligt från ditt företag och anpassar sig efter dina behov. Alltid tillgänglig, alltid uppdaterad.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'time',
    title: 'Frigör tid',
    image: '/brand/free-time.png',
    heading: 'Fokusera på det som verkligen spelar roll.',
    description: 'Automatisera rutinuppgifter som schemaläggning, e-posthantering och kunduppföljning. AI:n hanterar administration, fakturering och påminnelser åt dig. Frigör värdefull tid för strategiskt arbete, affärsutveckling och de beslut som driver ditt företag framåt.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function BelleSectionAI() {
  const [activeSection, setActiveSection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const currentSection = sections[activeSection];

  return (
    <section id="platform" ref={ref} className="py-20 px-6 bg-[#0B0C10]">
      <div className="max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              onClick={() => setActiveSection(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                activeSection === index
                  ? 'bg-white/10 text-[#00FFC6] shadow-lg'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {section.icon}
              {section.title}
              {activeSection === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#00FFC6] rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Content Area */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSection.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h2
                  className="text-4xl md:text-5xl font-bold text-white mb-6"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {currentSection.heading}
                </h2>
                <p className="text-lg md:text-xl text-[#EAEAEA] leading-relaxed">
                  {currentSection.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right: Image with Animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 md:order-2"
          >
            <div className="relative bg-gray-800/50 rounded-2xl p-8 shadow-2xl border border-gray-700/50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSection.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-80 md:h-96"
                >
                  <Image
                    src={currentSection.image}
                    alt={currentSection.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain rounded-lg"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
