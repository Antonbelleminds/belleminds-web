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
- **Tema:** Fast mörkt tema

### Animationer
- **Framer Motion:**
  - Fade-in animationer på alla sektioner
  - Parallax-effekt i Hero-sektionen (bakgrund rör sig långsammare vid scroll)
  - AI-glow-effekt runt logotypen
  - Hover- och tap-animationer på knappar
  - Interactive image switching med fade/scale transitions i BelleSectionAI

### Komponenter
1. **Header** – Sticky navigation med rundade kanter (glassmorphism), logotyp vänster, nav i mitten, "Kontakta oss"-knapp höger
2. **Hero** – Huvudsektion med parallax-effekt, logotyp, tagline "AI för små företag" och CTA-knappar
3. **WhyBelleminds** – Förklaring av varför Belleminds skapades
4. **Platform2026** – Rubrik och beskrivning av plattformen som lanseras 2026
5. **BelleSectionAI** – Interaktiv sektion med tre klickbara boxar (Dina AI-resurser, Din AI-agent, Frigör tid) som byter bilder med Framer Motion animationer
6. **TechBehind** – Säkerhet & Efterlevnad sektion med 6 GDPR-checkboxar (EU-infrastruktur, HTTPS, ingen spårning, inga cookies, EU-data, AI-Act)
7. **Privacy** – GDPR-modal som öppnas vid klick på "integritetspolicy" i kontaktformuläret, innehåller fullständig information om datahantering, rättigheter och säkerhet
8. **Inspiration** – Länk till LinkedIn och resurser
9. **Contact** – GDPR-compliant kontaktformulär med obligatorisk consent checkbox och privacy notice
10. **Footer** – Logotyp, kontakt-länk och copyright

### GDPR & Säkerhet
- ✅ Inga cookies
- ✅ Ingen användarspårning eller analytics
- ✅ Inga tredjepartsskript
- ✅ All data inom EU (Replit EU, Neon EU-Postgres)
- ✅ HTTPS via Cloudflare med DDoS-skydd
- ✅ Kontaktformulär med obligatorisk consent checkbox
- ✅ Fullständig integritetspolicy i popup-modal
- ✅ Tydlig information om datahantering (12 månaders lagring)
- ✅ Rättslig grund (samtycke) enligt GDPR Artikel 6.1(a)
- ✅ Rätt att klaga till Integritetsskyddsmyndigheten (IMY)
- ✅ Användarrättigheter enligt GDPR dokumenterade
- ✅ Klickbar länk som öppnar privacy policy i modal
- ✅ Formulär kan inte skickas utan godkännande (frontend + backend)
- ✅ Backend validerar consent och loggar consent-tidsstämpel

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
│   │   ├── Privacy.tsx
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
- ✅ Fullständigt GDPR-compliant med consent och privacy policy
- ✅ Mobiloptimerad (min 360px)
- ✅ Production-ready
- ✅ Sticky header med glassmorphism
- ✅ AI-sektionsbilder integrerade (dashboard laptop, mobil, kalender)

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
  - Responsiv design
  - AI-sektionsbilder integrerade (dashboard laptop, mobil, kalender)
  - Vit logotyp (dark:invert för korrekt färg)
  - Förenklad text (AI istället för "icke-mänsklig intelligens")
  - Fixat kontrastproblem (text-black och text-gray-900 på ljusa bakgrunder)
  - Alla ljusgrå bakgrunder ändrade till ren vit för bättre kontrast
  - BelleSectionAI sektion tillagd med interaktiv bildväxling
  - Sticky header med glassmorphism-effekt (logotyp vänster, nav mitten, CTA höger)
  - Header ligger nu ovanpå Hero-sektionens gröna gradient
  - GDPR-compliance implementerad:
    * Privacy-modal med fullständig integritetspolicy
    * Consent checkbox i kontaktformulär (obligatorisk)
    * Privacy notice med klickbar länk som öppnar modal
    * TechBehind uppdaterad med 6 GDPR-features
    * Formulär disabled utan consent (frontend)
    * Backend validerar consent och avvisar utan
    * Consent-tidsstämpel loggas för auditbarhet
    * Rättslig grund (samtycke GDPR 6.1(a)) dokumenterad
    * Rätt att klaga till IMY inkluderad
    * Tydlig information om datalagring (12 mån, EU-endast)

## 👤 Kontakt
- E-post: info@belleminds.ai
- LinkedIn: [Belleminds](https://www.linkedin.com/company/belleminds/?viewAsMember=true)
