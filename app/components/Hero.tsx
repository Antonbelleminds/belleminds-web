'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 dark:from-primary/20 dark:via-accent/10 dark:to-primary/20" 
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative inline-block mb-8"
        >
          <div className="absolute inset-0 bg-accent/30 blur-3xl rounded-full animate-pulse" />
          <Image
            src="/brand/logo.png"
            alt="Belleminds logotyp"
            width={200}
            height={200}
            priority
            style={{ width: 'auto', height: 'auto' }}
            className="relative z-10 drop-shadow-2xl dark:invert"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          AI för små företag.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-900 dark:text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Vi vill skapa en mötesplats för entreprenörer och företagare som vill bli mer effektiva, 
          vidga sina gränser för vad som är möjligt och våga drömma stort! 
          Detta genom att inspirera, utmana och visa hur AI kan ge just ditt företag nytt värde.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold text-lg transition-colors shadow-lg"
          >
            Kontakta oss
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/company/belleminds/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-accent hover:bg-accent/90 text-gray-900 rounded-full font-semibold text-lg transition-colors shadow-lg"
          >
            Följ oss på LinkedIn
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
