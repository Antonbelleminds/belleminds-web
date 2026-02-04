import { SimpleHero } from '../components/SimpleHero';
import { TabbedProductsV1 } from '../components/TabbedProductsV1';
import { WhyBelleminds } from '../components/WhyBelleminds';
import { TechBehind } from '../components/TechBehind';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { DesignSwitcher } from '../components/DesignSwitcher';

export default function DesignDV1() {
  return (
    <main className="min-h-screen bg-[#1E1B4B]">
      <SimpleHero title="Belleminds – AI för småföretag" />
      <TabbedProductsV1 />
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
