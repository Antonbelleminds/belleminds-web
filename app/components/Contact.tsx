'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Privacy } from './Privacy';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '', consent: false });
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
        setFormData({ name: '', email: '', message: '', consent: false });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6 text-center"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Hör av dig!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-900 dark:text-gray-100 text-center mb-12"
        >
          Vill du veta mer, samarbeta eller bli pilotkund? Skicka ett meddelande så återkommer vi snabbt.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              Namn
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              E-postadress
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              Meddelande
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
            />
          </div>

          {/* GDPR Consent */}
          <div className="bg-accent/10 dark:bg-accent/5 rounded-lg p-4 space-y-3">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                required
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1 w-5 h-5 rounded border-gray-300 text-accent focus:ring-accent focus:ring-2"
              />
              <label htmlFor="consent" className="text-sm text-gray-900 dark:text-gray-100">
                Jag godkänner att Belleminds behandlar mina personuppgifter (namn, e-post och meddelande) för att hantera min förfrågan. Data lagras säkert inom EU i max 12 månader. Du kan när som helst begära radering genom att kontakta oss.
              </label>
            </div>
            <p className="text-xs text-gray-700 dark:text-gray-300 pl-8">
              Läs mer i vår{' '}
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="text-accent hover:underline font-medium"
              >
                integritetspolicy
              </button>
              . Vi delar aldrig din data med tredje part.
            </p>
          </div>
          
          <Privacy isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={status === 'sending' || !formData.consent}
            className="w-full px-8 py-4 bg-primary hover:bg-primary/90 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-full font-semibold text-lg transition-colors shadow-lg"
          >
            {status === 'sending' ? 'Skickar...' : 'Skicka meddelande'}
          </motion.button>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 dark:text-green-400 text-center"
            >
              Tack för ditt meddelande! Vi återkommer snart.
            </motion.p>
          )}

          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-600 dark:text-red-400 text-center"
            >
              Något gick fel. Försök igen eller maila oss direkt på info@belleminds.ai
            </motion.p>
          )}
        </motion.form>

        <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
          E-post: <a href="mailto:info@belleminds.ai" className="text-accent hover:underline">info@belleminds.ai</a>
        </p>
      </div>
    </section>
  );
}
