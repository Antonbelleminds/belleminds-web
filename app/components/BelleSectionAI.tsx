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
    description: 'Få tillgång till alla dina AI-verktyg, dokument och resurser i en gemensam plattform. Sömlös integration med dina befintliga system.',
  },
  {
    id: 'agent',
    title: 'Din AI-agent',
    image: '/brand/ai-agent.png',
    heading: 'Din personliga AI-assistent.',
    description: 'En intelligent agent som lär sig ditt företag och hjälper dig med allt från kundfrågor till dataanalys. Alltid tillgänglig, alltid uppdaterad.',
  },
  {
    id: 'time',
    title: 'Frigör tid',
    image: '/brand/free-time.png',
    heading: 'Fokusera på det som verkligen spelar roll.',
    description: 'Automatisera rutinuppgifter och frigör tid för strategiskt arbete. Låt AI hantera schemaläggning, uppföljning och administration.',
  },
];

export function BelleSectionAI() {
  const [activeSection, setActiveSection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const currentSection = sections[activeSection];

  return (
    <section ref={ref} className="py-20 px-6 bg-primary dark:bg-dark-bg">
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
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeSection === index
                  ? 'bg-white text-primary dark:bg-accent dark:text-dark-bg shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {section.title}
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
                <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
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
            <div className="relative bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
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
