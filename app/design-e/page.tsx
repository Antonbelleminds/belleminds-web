import { PitchHero } from '../components/PitchHero';
import { PitchSection } from '../components/PitchSection';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { DesignSwitcher } from '../components/DesignSwitcher';
import { content } from '@/lib/content';

export default function DesignE() {
  return (
    <main className="min-h-screen bg-[#1C1917]">
      <PitchHero 
        title="AI-driven affärshjärna för småföretag"
        subtitle={content.bellebook.investorPitch}
      />
      
      <PitchSection
        title="Problemet"
        subtitle="Småföretag som lever på bokningar saknar verktyg för att förstå och agera på kundbeteende."
        metrics={[
          { value: '40%', label: 'Förlorade återbokningar' },
          { value: '5h/dag', label: 'Admin-arbete' },
          { value: '€2K', label: 'Förlorad intäkt/mån' },
          { value: '0%', label: 'Insikt i kunddata' },
        ]}
      />

      <PitchSection
        title="Lösningen"
        subtitle="Bellebook & Minds Platform"
        features={[
          {
            title: 'Bellebook',
            description: 'AI-driven affärshjärna för bokningsföretag. Analyserar kundbeteende, agerar proaktivt, driver retention.',
          },
          {
            title: 'Minds Platform',
            description: 'Fullständig företagsplattform med AI-agent, CRM, ekonomi, juridik och e-signering.',
          },
          {
            title: 'Proaktiv kundvård',
            description: 'Automatiska uppföljningar, personliga erbjudanden och smart timing för maximal retention.',
          },
          {
            title: 'Skalbar AI',
            description: 'Blir smartare med varje kund. Machine learning som lär sig från alla användare.',
          },
        ]}
        highlight
      />

      <PitchSection
        title="Marknad"
        subtitle="Europa-fokus med global potential"
        metrics={[
          { value: '2.4M', label: 'Bokningsföretag i EU' },
          { value: '€50B', label: 'TAM' },
          { value: '€29/mån', label: 'ARPU' },
          { value: '89%', label: 'Gross Margin' },
        ]}
      />

      <PitchSection
        title="Traction"
        subtitle="Vi lanserar 2026 med pilotpartners redo"
        features={[
          {
            title: 'MVP klar Q1 2026',
            description: 'Full Bellebook-funktionalitet med AI-driven kundinsikt och automatisering.',
          },
          {
            title: '50 pilotkunder',
            description: 'Frisörer, PT-coacher och kliniker redo att testa från dag 1.',
          },
          {
            title: 'Minds Platform beta',
            description: 'Integrerad plattform med CRM, ekonomi och juridik klar Q2 2026.',
          },
          {
            title: 'GDPR-först',
            description: 'EU-hostad från grunden. Säkerhet och compliance är kärnvärden.',
          },
        ]}
      />

      <div id="contact">
        <Contact />
      </div>
      
      <Footer />
      <DesignSwitcher />
    </main>
  );
}
