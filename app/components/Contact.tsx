'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { getContent } from '@/lib/i18n';
import { useLanguage } from '../contexts/LanguageContext';
import { Privacy } from './Privacy';

export function Contact() {
  const { language } = useLanguage();
  const content = getContent(language);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '', consent: false });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('message', formData.message);

    try {
      const response = await fetch('https://formspree.io/f/mwpwwjqg', {
        method: 'POST',
        body: form,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        alert('Tack! Ditt meddelande har skickats.');
        setFormData({ name: '', email: '', message: '', consent: false });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-10 md:py-20 px-4 md:px-6 bg-accent">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-3 md:mb-6 text-center"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {content.contact.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-lg text-[#EAEAEA] text-center mb-6 md:mb-12"
        >
          {content.contact.subtitle}
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="space-y-4 md:space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
              {content.contact.form.nameLabel}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-primary/20 border border-primary/30 text-white placeholder:text-white/60 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              {content.contact.form.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-primary/20 border border-primary/30 text-white placeholder:text-white/60 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
              {content.contact.form.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-primary/20 border border-primary/30 text-white placeholder:text-white/60 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
            />
          </div>

          {/* GDPR Consent */}
          <div className="bg-primary/10 rounded-lg p-3 md:p-4 space-y-2 md:space-y-3 border border-primary/20">
            <div className="flex items-start gap-2 md:gap-3">
              <input
                type="checkbox"
                id="consent"
                required
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1 w-5 h-5 rounded border-gray-600 text-accent focus:ring-accent focus:ring-2"
              />
              <label htmlFor="consent" className="text-sm text-white">
                {content.contact.form.consentLabel}
              </label>
            </div>
            <p className="text-xs text-white pl-8">
              {language === 'sv' ? 'Läs mer i vår' : 'Read more in our'}{' '}
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="text-primary hover:underline font-medium"
              >
                {content.contact.form.privacyLinkText}
              </button>
              . {content.contact.form.consentText}
            </p>
          </div>
          
          <Privacy isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={status === 'sending' || !formData.consent}
            className="w-full px-8 py-4 bg-primary hover:bg-primary/90 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-full font-semibold text-lg transition-colors shadow-lg"
          >
            {status === 'sending' ? content.contact.form.sendingButton : content.contact.form.submitButton}
          </motion.button>

          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-center"
            >
              {content.contact.form.errorMessage}
            </motion.p>
          )}
        </motion.form>

        <p className="text-center text-white mt-6 md:mt-8 text-sm md:text-base">
          {language === 'sv' ? 'Eller maila oss direkt på' : 'Or email us directly at'}{' '}
          <a href="mailto:info@belleminds.ai" className="text-primary hover:underline font-semibold">
            {content.contact.directContact.email}
          </a>
        </p>
      </div>
    </section>
  );
}
