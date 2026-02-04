import { SimpleHero } from '../components/SimpleHero';
import { TabbedProductsV2 } from '../components/TabbedProductsV2';
import { WhyBelleminds } from '../components/WhyBelleminds';
import { TechBehind } from '../components/TechBehind';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { DesignSwitcher } from '../components/DesignSwitcher';

export default function DesignDV2() {
  return (
    <main className="min-h-screen bg-[#1E1B4B]">
      <SimpleHero title="Tänker. Agerar. Växer." />
      <TabbedProductsV2 />
      <div id="why">
        <WhyBelleminds />
      </div>
      <div id="tech">
        <TechBehind />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <DesignSwitcher />
    </main>
  );
}
