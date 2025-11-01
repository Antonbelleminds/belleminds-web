# Belleminds – Landing Page

## Overview
Belleminds is a GDPR-compliant landing page for an AI platform designed for small businesses. The project aims to showcase Belleminds' capabilities, focusing on AI as a partner for everyday business needs, including advice, finance, customer insights, and legal support. The platform emphasizes security, data privacy, and a modern, user-friendly interface.

## User Preferences
I prefer clear, concise summaries. Focus on high-level features and architectural decisions. Avoid granular implementation details unless they represent a core technological choice. Ensure all GDPR and security aspects are highlighted as they are central to this project. I prefer to maintain a consistent dark theme across the application.

## System Architecture

### UI/UX Decisions
- **Color Palette:** Primary: `#004B4F`, Accent: `#00FFC6`, Dark Background: `#0B0C10`, Footer: `#060708`, Body Text: `#EAEAEA`, Headings: `#FFFFFF`.
- **Typography:** Headings: Space Grotesk, Body: Inter.
- **Theme:** Permanent dark mode.
- **Animations:** Framer Motion for fade-in effects, parallax in Hero, AI-glow for logo, interactive image switching, and button animations.
- **Responsiveness:** Optimized for mobile (min 360px) using CSS Grid and Flexbox.

### Technical Implementations
- **Framework:** Next.js 16.0.1 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Content Management:** Centralized content in `lib/content.ts` for easy editing and structured organization, supporting TypeScript.
- **GDPR & Security:**
    - No cookies, user tracking, or third-party scripts.
    - All data hosted within EU (Replit EU, Neon Azure Frankfurt).
    - HTTPS via Cloudflare with DDoS protection.
    - TLS encryption for database connection.
    - Contact form requires explicit consent, with backend validation and timestamp logging.
    - PII data is not logged in server logs.
    - Full privacy policy and terms of service available in modals.
- **Components:**
    - **Header:** Transparent blur, logo, navigation links, "Kontakta oss" button, responsive hamburger menu.
    - **Hero:** Gradient background, main heading, CTAs.
    - **WhyBelleminds, Platform2026, Inspiration:** Sections explaining the platform's value, future vision, and content offerings.
    - **BelleSectionAI:** Interactive tabbed section with icons and detailed descriptions for "Dina AI-resurser," "Din AI-agent," and "Frigör tid."
    - **TechBehind:** Four gradient-backed boxes detailing "GDPR-klar," "EU-hostad drift," "Säker kommunikation," and "Dataintegritet" with hover-revealed descriptions.
    - **Privacy/Terms Modals:** Compact modals for GDPR policy and terms of service.
    - **Contact:** Simple client-side form with name, email, and message fields. Submissions are sent directly to Formspree (https://formspree.io/f/mwpwwjqg) which delivers emails to info@belleminds.ai. No backend routes or database storage required.
    - **Footer:** Dark background, logo, copyright, and links.

### System Design Choices
- **Development Server:** Binds to `0.0.0.0:5000` for Replit compatibility.
- **Production Deployment:** Configured for autoscale deployment on Replit with custom domain (www.belleminds.ai).
- **Email Delivery:** Contact form uses Formspree (client-side) to send emails to info@belleminds.ai, no backend email infrastructure required.

## External Dependencies
- **Next.js:** Web framework.
- **TypeScript:** Programming language.
- **Tailwind CSS:** Utility-first CSS framework.
- **Framer Motion:** Animation library.
- **Google Fonts:** For Space Grotesk and Inter fonts.
- **Formspree:** Client-side email service for contact form submissions to info@belleminds.ai.
- **Cloudflare:** For HTTPS and DDoS protection.