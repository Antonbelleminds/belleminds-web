'use client';

import { HeaderWithDropdown } from '../components/HeaderWithDropdown';
import { MegaHeroV1 } from '../components/MegaHeroV1';
import { ProductsSection } from '../components/ProductsSection';
import { WhyBellebookSection } from '../components/WhyBellebookSection';
import { WhatsIncludedSection } from '../components/WhatsIncludedSection';
import { IndustriesSection } from '../components/IndustriesSection';
import { IntegrationsSection } from '../components/IntegrationsSection';
import { RoadmapSection } from '../components/RoadmapSection';
import { BentoGrid } from '../components/BentoGrid';
import { SanaInspiredShowcase } from '../components/SanaInspiredShowcase';
import { InvestorSection } from '../components/InvestorSection';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { DesignSwitcher } from '../components/DesignSwitcher';
import { useLanguage } from '../contexts/LanguageContext';
import { getContent } from '@/lib/i18n';

export default function DesignB2() {
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
      title: t.bentoGrid.seeWhatYouMissTitle,
      description: t.bentoGrid.seeWhatYouMissDescription,
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: t.bentoGrid.actProactivelyTitle,
      description: t.bentoGrid.actProactivelyDescription,
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
    {
      title: t.bentoGrid.gdprTitle,
      description: t.bentoGrid.gdprDescription,
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <HeaderWithDropdown />
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
      
      <InvestorSection />
      
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <DesignSwitcher />
    </main>
  );
}
