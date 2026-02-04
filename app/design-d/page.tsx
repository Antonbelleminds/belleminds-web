import { SimpleHero } from '../components/SimpleHero';
import { TabbedProducts } from '../components/TabbedProducts';
import { WhyBelleminds } from '../components/WhyBelleminds';
import { TechBehind } from '../components/TechBehind';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { DesignSwitcher } from '../components/DesignSwitcher';
import { content } from '@/lib/content';

export default function DesignD() {
  return (
    <main className="min-h-screen">
      <SimpleHero 
        title={content.bellebook.taglines[0]}
        primaryButton="Utforska våra produkter"
      />
      
      <TabbedProducts />
      
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
