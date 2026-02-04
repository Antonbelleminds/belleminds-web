import { SimpleHero } from '../components/SimpleHero';
import { ProductCards } from '../components/ProductCards';
import { WhyBelleminds } from '../components/WhyBelleminds';
import { BellebookSection } from '../components/BellebookSection';
import { Platform2026 } from '../components/Platform2026';
import { BelleSectionAI } from '../components/BelleSectionAI';
import { TechBehind } from '../components/TechBehind';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { InvestorSection } from '../components/InvestorSection';
import { DesignSwitcher } from '../components/DesignSwitcher';

export default function DesignA() {
  return (
    <main className="min-h-screen">
      <SimpleHero 
        title="Din affärshjärna. Redo."
        primaryButton="Utforska"
        secondaryButton="Kontakta oss"
      />
      <ProductCards />
      <div id="why">
        <WhyBelleminds />
      </div>
      <div id="bellebook">
        <BellebookSection />
      </div>
      <div id="platform">
        <Platform2026 />
        <BelleSectionAI />
      </div>
      <div id="tech">
        <TechBehind />
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
