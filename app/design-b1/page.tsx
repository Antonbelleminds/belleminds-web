import { Header } from '../components/Header';
import { MegaHeroV1 } from '../components/MegaHeroV1';
import { BentoGrid } from '../components/BentoGrid';
import { SanaInspiredShowcase } from '../components/SanaInspiredShowcase';
import { InvestorSection } from '../components/InvestorSection';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { DesignSwitcher } from '../components/DesignSwitcher';
import { content } from '@/lib/content';

export default function DesignB1() {
  const bentoItems = [
    {
      title: 'Varför vi bygger Belleminds',
      description: 'Små företag står inför samma utmaningar som stora men utan samma resurser. Vi tror att framtiden tillhör de som vågar använda AI för att frigöra tid, energi och kreativitet. Belleminds är en plats för inspiration, vägledning och att våga tänka stort med hjälp av icke mänsklig intelligens. Här gör vi AI begripligt, konkret och roligt, för dig som vill ta nästa steg.\n\nVisionen är enkel: Vi hjälper företagare och framtida entreprenörer att starta, driva och förädla sin verksamhet med AI eller som vi kallar det, icke mänsklig intelligens!',
      size: 'large' as const,
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Ser vad du missar',
      description: 'AI:n analyserar din verksamhet 24/7 och hittar möjligheter du annars skulle missa.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: 'Agerar proaktivt',
      description: 'Tar initiativ och utför uppgifter automatiskt innan problem uppstår.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Bellebook – Första produkten',
      description: 'AI-driven affärshjärna för bokningsföretag som automatiserar administration och ökar intäkterna.',
      size: 'large' as const,
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: 'GDPR-säker',
      description: 'All data lagras inom EU och är krypterad från början till slut. Din integritet är vår prioritet.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <MegaHeroV1 
        title="Belleminds"
        subtitle="AI-verktyg för småföretag. Bellebook är vår första produkt."
        primaryButton="Utforska"
        secondaryButton="Kontakta oss"
      />
      
      <div id="bellebook">
        <BentoGrid items={bentoItems} />
      </div>
      
      <div id="inspiration">
        <SanaInspiredShowcase />
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
