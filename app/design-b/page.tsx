import { SplitHero } from '../components/SplitHero';
import { BentoGrid } from '../components/BentoGrid';
import { SanaInspiredShowcase } from '../components/SanaInspiredShowcase';
import { InvestorSection } from '../components/InvestorSection';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { DesignSwitcher } from '../components/DesignSwitcher';
import { content } from '@/lib/content';

export default function DesignB() {
  const bentoItems = [
    {
      title: 'Bellebook',
      description: content.bellebook.headline + ' ' + content.bellebook.subline,
      size: 'large' as const,
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: 'Ser vad du missar',
      description: 'AI:n analyserar kundbeteenden och identifierar mönster som du inte hinner upptäcka.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: 'Agerar proaktivt',
      description: 'Automatiska påminnelser och uppföljningar skickas i rätt tid till rätt kund.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Minds Platform',
      description: 'AI-driven företagsstöd med integrerade verktyg för ekonomi, juridik, CRM och mer.',
      size: 'large' as const,
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'GDPR-säker',
      description: 'All data lagras inom EU och är krypterad från början till slut.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <SplitHero 
        title={content.bellebook.taglines[0]}
        subtitle={content.bellebook.headline}
        primaryButton="Utforska"
        secondaryButton="Kontakta oss"
      />
      
      <div id="bellebook">
        <BentoGrid items={bentoItems} />
      </div>
      
      <SanaInspiredShowcase />
      
      <InvestorSection />
      
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <DesignSwitcher />
    </main>
  );
}
