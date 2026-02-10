'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { getContent } from '@/lib/i18n';
import { useLanguage } from '../contexts/LanguageContext';

// Brand logos as inline SVGs for recognition
function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill="#000000"/>
    </svg>
  );
}

function OutlookLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/logos/outlook.png"
      alt="Outlook"
      width={40}
      height={40}
      className={className}
    />
  );
}

function ZettleLogo({ className }: { className?: string }) {
  // PayPal double-P logo
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M15.607 4.653H8.941L6.645 19.251H1.82L4.862 0h7.995c3.754 0 6.375 2.294 6.473 5.513-.648-.478-2.105-.86-3.722-.86m6.57 5.546c0 3.41-3.01 6.853-6.958 6.853h-2.493L11.595 24H6.74l1.845-11.538h3.592c4.208 0 7.346-3.634 7.153-6.949a5.24 5.24 0 0 1 2.848 4.686M9.653 5.546h6.408c.907 0 1.942.222 2.363.541-.195 2.741-2.655 5.483-6.441 5.483H8.714Z" fill="#002991"/>
    </svg>
  );
}

function StripeLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#635BFF"/>
      <path d="M11.1 9.23c0-.67.55-1.03 1.46-1.03 1.3 0 2.94.4 4.24 1.1V5.72a11.33 11.33 0 00-4.24-.78c-3.47 0-5.77 1.81-5.77 4.84 0 4.72 6.5 3.97 6.5 6 0 .8-.69 1.05-1.66 1.05-1.44 0-3.28-.59-4.73-1.39v3.63a12.01 12.01 0 004.73 1c3.55 0 5.99-1.76 5.99-4.83.01-5.1-6.52-4.2-6.52-6.01z" fill="white"/>
    </svg>
  );
}

function KlarnaLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#FFB3C7"/>
      {/* Official Klarna path from simple-icons, scaled to fit with padding */}
      <g transform="translate(3, 3) scale(0.75)">
        <path d="M4.592 2v20H0V2h4.592zm11.46 0c0 4.194-1.583 8.105-4.415 11.068l-.278.283L17.702 22h-5.668l-6.893-9.4 1.779-1.332c2.858-2.14 4.535-5.378 4.637-8.924L11.562 2h4.49zM21.5 17a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill="#0A0B09"/>
      </g>
    </svg>
  );
}

// Map integration names to their logo components
const logoMap: Record<string, React.ReactNode> = {
  'Google Calendar': <GoogleLogo className="w-10 h-10" />,
  'Apple Calendar': <AppleLogo className="w-10 h-10" />,
  'Outlook Calendar': <OutlookLogo className="w-10 h-10" />,
  'Zettle by PayPal': <ZettleLogo className="w-10 h-10" />,
  'Stripe': <StripeLogo className="w-10 h-10" />,
  'Klarna': <KlarnaLogo className="w-10 h-10" />,
};

export function IntegrationsSection() {
  const { language } = useLanguage();
  const content = getContent(language);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="integrations" ref={ref} className="py-12 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 
            className="text-3xl md:text-5xl font-bold mb-3 md:mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}
          >
            {content.integrations.title}
          </h2>
          <p 
            className="text-base md:text-xl max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-body)', color: '#000000' }}
          >
            {content.integrations.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Calendars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-6 md:p-8 border border-blue-100 min-h-[320px]"
          >
            <h3 
              className="text-xl md:text-2xl font-bold mb-6 md:mb-8"
              style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}
            >
              {content.integrations.calendars.title}
            </h3>
            
            <div className="space-y-4 md:space-y-5">
              {content.integrations.calendars.items.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    {logoMap[item] || null}
                  </div>
                  <span className="text-base font-medium" style={{ color: '#000000' }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Payments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-6 md:p-8 border border-green-100 min-h-[320px]"
          >
            <h3 
              className="text-xl md:text-2xl font-bold mb-6 md:mb-8"
              style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}
            >
              {content.integrations.payments.title}
            </h3>
            
            <div className="space-y-4 md:space-y-5">
              {content.integrations.payments.items.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    {logoMap[item] || null}
                  </div>
                  <span className="text-base font-medium" style={{ color: '#000000' }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Business Systems / Open & Future-proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-6 md:p-8 border border-purple-100 min-h-[320px] flex flex-col"
          >
            <h3 
              className="text-xl md:text-2xl font-bold mb-2"
              style={{ fontFamily: 'var(--font-heading)', color: '#000000' }}
            >
              {content.integrations.business.title}
            </h3>
            
            <p className="text-sm md:text-base font-semibold mb-3 md:mb-4" style={{ color: '#000000' }}>
              {content.integrations.business.subtitle}
            </p>
            
            <p className="leading-relaxed mb-4 md:mb-5 text-sm md:text-base" style={{ color: '#000000' }}>
              {content.integrations.business.description}
            </p>

            <ul className="space-y-2 md:space-y-3">
              {content.integrations.business.items.map((item, index) => (
                <li key={index} className="flex items-start gap-2 md:gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">•</span>
                  <span className="text-sm md:text-base leading-snug" style={{ color: '#000000' }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
