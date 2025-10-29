# Belleminds – Landing Page

## 🧠 Projektöversikt
Komplett, GDPR-säker lanseringssida för **Belleminds** – en AI-plattform för små företag. Byggd med Next.js 14+, TypeScript, Tailwind CSS och Framer Motion.

## ✅ Implementerade Funktioner

### Design & Tema
- **Färgpalett:**
  - Primär: #004B4F
  - Accent: #5DD0C0
  - Ljus bakgrund: #F9FAFB
  - Mörk bakgrund: #0B0C10
- **Typografi:**
  - Rubriker: Space Grotesk
  - Brödtext: Inter
- **Tema Toggle:** Ljus/Mörk/Auto med smidig övergång (next-themes)

### Animationer
- **Framer Motion:**
  - Fade-in animationer på alla sektioner
  - Parallax-effekt i Hero-sektionen (bakgrund rör sig långsammare vid scroll)
  - AI-glow-effekt runt logotypen
  - Hover- och tap-animationer på knappar
  - Interactive image switching med fade/scale transitions i BelleSectionAI

### Komponenter
1. **Header** – Fast navigation i toppen med rundade kanter, logotyp, navigeringslänkar och "Kontakta oss"-knapp
2. **Hero** – Huvudsektion med vit logotyp, tagline "AI för små företag" och CTA-knappar
3. **WhyBelleminds** – Förklaring av varför Belleminds skapades
4. **Platform2026** – Rubrik och beskrivning av plattformen som lanseras 2026
5. **BelleSectionAI** – Interaktiv sektion med tre klickbara boxar (Dina AI-resurser, Din AI-agent, Frigör tid) som byter bilder med Framer Motion animationer
6. **TechBehind** – GDPR-checkboxar (EU-hostad infrastruktur, HTTPS & Cloudflare, ingen spårning, AI-Act 2026)
7. **Inspiration** – Länk till LinkedIn och resurser
8. **Contact** – GDPR-säkert kontaktformulär
9. **Footer** – Vit logotyp, länkar och tema-toggle

### GDPR & Säkerhet
- ✅ Inga cookies (endast teknisk tema-cookie)
- ✅ Ingen användarspårning
- ✅ Inga tredjepartsskript
- ✅ All data inom EU (Replit EU, Neon EU-Postgres)
- ✅ HTTPS via Cloudflare
- ✅ Kontaktformulär loggar endast till konsol (v1)

### Responsivitet
- Optimerad för mobil (min 360px bredd)
- Flexibla layouter med CSS Grid och Flexbox
- Mobilanpassade navigationsknappar

## 📁 Projektstruktur
```
/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── BelleSectionAI.tsx
│   │   ├── WhyBelleminds.tsx
│   │   ├── Platform2026.tsx
│   │   ├── TechBehind.tsx
│   │   ├── Inspiration.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── ThemeToggle.tsx
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
│   └── brand/
│       ├── logo.png
│       ├── ai-resources.png (dashboard laptop)
│       ├── ai-agent.png (dashboard mobil)
│       └── free-time.png (kalender)
├── next.config.ts
└── package.json
```

## 🚀 Teknisk Stack
- **Framework:** Next.js 16.0.1 (App Router)
- **Språk:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animationer:** Framer Motion
- **Tema:** next-themes
- **Fonts:** Google Fonts (Space Grotesk + Inter)

## 📝 Metadata
- **Titel:** "Belleminds – AI för små företag"
- **Språk:** Svenska (sv)
- **Beskrivning:** SEO-optimerad beskrivning på svenska

## 🔧 Konfiguration
- **Dev Server:** Binder till 0.0.0.0:5000 för Replit-kompatibilitet
- **Cache Control:** Inaktiverad för korrekt hot-reload
- **Allowed Origins:** Konfigurerad för Replit-domäner

## 📊 Status
- ✅ Alla komponenter implementerade
- ✅ Framer Motion animationer med parallax
- ✅ Theme toggle fungerar
- ✅ GDPR-säker
- ✅ Mobiloptimerad
- ✅ Production-ready
- ✅ Produktbilder (Legal, CRM, ERP) integrerade

## 🎯 Nästa Steg (Framtida Utveckling)
1. Koppla kontaktformulär till e-posttjänst
2. Lägg till admin-gränssnitt för innehållsredigering
3. Integrera med Neon EU-databas för formulärdata
4. Publicera på Cloudflare

## 📅 Projekthistorik
- **2025-10-29:** Initial implementation av komplett landing page
  - Alla komponenter skapade
  - Framer Motion parallax och fade-in animationer
  - Theme provider och toggle
  - GDPR-säkert kontaktformulär
  - Responsiv design
  - AI-sektionsbilder integrerade (dashboard laptop, mobil, kalender)
  - Vit logotyp (dark:invert för korrekt färg)
  - Förenklad text (AI istället för "icke-mänsklig intelligens")
  - Fixat kontrastproblem (text-black och text-gray-900 på ljusa bakgrunder)
  - Alla ljusgrå bakgrunder ändrade till ren vit för bättre kontrast
  - BelleSectionAI sektion tillagd med interaktiv bildväxling

## 👤 Kontakt
- E-post: info@belleminds.ai
- LinkedIn: [Belleminds](https://www.linkedin.com/company/belleminds/?viewAsMember=true)
