import { Hero } from './components/Hero';
import { BelleSectionAI } from './components/BelleSectionAI';
import { WhyBelleminds } from './components/WhyBelleminds';
import { Platform2026 } from './components/Platform2026';
import { TechBehind } from './components/TechBehind';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div id="why">
        <WhyBelleminds />
      </div>
      <div id="platform">
        <Platform2026 />
        <BelleSectionAI />
      </div>
      <div id="tech">
        <TechBehind />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
