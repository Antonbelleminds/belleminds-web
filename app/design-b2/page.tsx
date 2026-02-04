import { Header } from '../components/Header';
import { MegaHeroV2 } from '../components/MegaHeroV2';
import { BentoGrid } from '../components/BentoGrid';
import { SanaInspiredShowcase } from '../components/SanaInspiredShowcase';
import { InvestorSection } from '../components/InvestorSection';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { DesignSwitcher } from '../components/DesignSwitcher';
import { content } from '@/lib/content';

export default function DesignB2() {
  const bentoItems = [
    {
      title: 'Belleminds',
      description: content.bellebook.companyContext,
      size: 'large' as const,
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Bellebook',
      description: content.bellebook.headline + ' Förstår kundbeteende och driver tillväxt.',
      size: 'large' as const,
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Intelligent analys',
      description: 'AI analyserar kundbeteenden och identifierar mönster som du inte hinner se.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Automatisk kundvård',
      description: 'Påminnelser och uppföljningar som skickas i precis rätt tid.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Säkerhet först',
      description: 'GDPR-klar, EU-hostad och krypterad från början till slut.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <MegaHeroV2 
        title="Tänker. Agerar. Växer."
        subtitle="Belleminds – AI-verktyg för småföretag"
        primaryButton="Kom igång"
        secondaryButton="Läs mer"
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
