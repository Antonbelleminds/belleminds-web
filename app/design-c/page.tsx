import { BrutalistHero } from '../components/BrutalistHero';
import { BrutalistSection } from '../components/BrutalistSection';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { DesignSwitcher } from '../components/DesignSwitcher';
import { content } from '@/lib/content';

export default function DesignC() {
  return (
    <main className="min-h-screen bg-white">
      <BrutalistHero title={content.bellebook.taglines[0]} />
      
      <BrutalistSection
        number="01"
        title="Bellebook"
        body={content.bellebook.headline}
        align="left"
      />

      <BrutalistSection
        number="02"
        title="Minds Platform"
        body="AI-driven företagsstöd med integrerade verktyg. Ekonomi. Juridik. CRM. Allt på ett ställe."
        align="right"
      />

      <BrutalistSection
        number="03"
        title="Säkerhet"
        body="GDPR-klar. EU-hostad. Krypterad. Din data är skyddad från början till slut."
        align="center"
      />

      <BrutalistSection
        title="För investerare"
        body={content.bellebook.investorPitch}
        align="left"
      />

      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <DesignSwitcher />
    </main>
  );
}
