'use client';

import { HeaderInline } from '../components/HeaderInline';
import { MegaHeroV1 } from '../components/MegaHeroV1';
import { ProductsSection } from '../components/ProductsSection';
import { WhyBellebookSection } from '../components/WhyBellebookSection';
import { WhatsIncludedSection } from '../components/WhatsIncludedSection';
import { IndustriesSection } from '../components/IndustriesSection';
import { IntegrationsSection } from '../components/IntegrationsSection';
import { RoadmapSection } from '../components/RoadmapSection';
import { BentoGrid } from '../components/BentoGrid';
import { TrustStrip } from '../components/TrustStrip';
import { SanaInspiredShowcase } from '../components/SanaInspiredShowcase';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { getContent } from '@/lib/i18n';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function DesignB3() {
  const { language } = useLanguage();
  const t = getContent(language);

  const bentoItems = [
    {
      title: t.bentoGrid.visionTitle,
      description: t.bentoGrid.visionDescription,
      size: 'large' as const,
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: t.bentoGrid.bellebookTitle,
      description: t.bentoGrid.bellebookDescription,
      size: 'large' as const,
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
  ];

  // Merged Investor Section Component
  function MergedInvestorSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
      <section ref={ref} className="py-20 px-6 bg-gradient-to-br from-slate-100 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-10 md:p-16 border border-blue-100 shadow-xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Quote mark */}
              <div className="absolute -top-4 -left-2 text-blue-600 text-6xl opacity-20 font-serif">"</div>
              
              <p className="text-xl md:text-2xl leading-relaxed pl-8 font-medium" style={{ color: '#000000' }}>
                {t.bellebook.investorPitch}
              </p>
              
              {/* Quote mark end */}
              <div className="absolute -bottom-8 -right-2 text-blue-600 text-6xl opacity-20 font-serif">"</div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <HeaderInline />
      <MegaHeroV1 
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        primaryButton={t.hero.primaryButton}
        secondaryButton={t.hero.secondaryButton}
      />
      
      <ProductsSection />
      
      <div id="inspiration">
        <SanaInspiredShowcase />
      </div>
      
      <WhyBellebookSection />
      <WhatsIncludedSection />
      <IndustriesSection />
      <IntegrationsSection />
      <RoadmapSection />
      
      <div id="bellebook">
        <BentoGrid items={bentoItems} />
      </div>
      
      <TrustStrip 
        title={t.trustStrip.title}
        description={t.trustStrip.description}
      />
      
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
