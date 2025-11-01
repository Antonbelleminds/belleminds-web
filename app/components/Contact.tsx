'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Privacy } from './Privacy';
import { content } from '@/lib/content';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '', consent: false });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '', consent: false });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const errorData = await response.json();
        console.error('Form submission error:', errorData);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-20 px-6 bg-[#0B0C10]">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-6 text-center"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {content.contact.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-[#EAEAEA] text-center mb-12"
        >
          {content.contact.subtitle}
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
              {content.contact.form.nameLabel}
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              {content.contact.form.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
              {content.contact.form.companyLabel}
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
              {content.contact.form.messageLabel}
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
            />
          </div>

          {/* GDPR Consent */}
          <div className="bg-gray-800/50 rounded-lg p-4 space-y-3 border border-gray-700">
            <div className="flex items-start gap-3">
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
            <p className="text-xs text-[#EAEAEA] pl-8">
              Läs mer i vår{' '}
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="text-[#00FFC6] hover:underline font-medium"
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
            className="w-full px-8 py-4 bg-accent hover:bg-accent/90 disabled:bg-gray-600 disabled:cursor-not-allowed text-dark-bg rounded-full font-semibold text-lg transition-colors shadow-lg"
          >
            {status === 'sending' ? content.contact.form.sendingButton : content.contact.form.submitButton}
          </motion.button>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 dark:text-green-400 text-center"
            >
              {content.contact.form.successMessage}
            </motion.p>
          )}

          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-600 dark:text-red-400 text-center"
            >
              {content.contact.form.errorMessage}
            </motion.p>
          )}
        </motion.form>

        <p className="text-center text-[#EAEAEA] mt-8">
          {content.contact.directContact.label} <a href={`mailto:${content.contact.directContact.email}`} className="text-[#00FFC6] hover:underline">{content.contact.directContact.email}</a>
        </p>
      </div>
    </section>
  );
}
