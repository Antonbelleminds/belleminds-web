import { Hero } from './components/Hero';
import { BelleSectionAI } from './components/BelleSectionAI';
import { WhyBelleminds } from './components/WhyBelleminds';
import { Platform2026 } from './components/Platform2026';
import { TechBehind } from './components/TechBehind';
import { Inspiration } from './components/Inspiration';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyBelleminds />
      <Platform2026 />
      <BelleSectionAI />
      <TechBehind />
      <Inspiration />
      <Contact />
      <Footer />
    </main>
  );
}
