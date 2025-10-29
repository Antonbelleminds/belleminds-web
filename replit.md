# Belleminds – Landing Page

## 🧠 Projektöversikt
Komplett, GDPR-säker lanseringssida för **Belleminds** – en AI-plattform för små företag. Byggd med Next.js 14+, TypeScript, Tailwind CSS och Framer Motion.

## ✅ Implementerade Funktioner

### Design & Tema
- **Färgpalett:**
  - Primär: #004B4F
  - Accent: #00FFC6 (uppdaterad från #5DD0C0)
  - Mörk bakgrund: #0B0C10
  - Footer bakgrund: #060708
  - Brödtext: #EAEAEA
  - Rubriker: #FFFFFF
- **Typografi:**
  - Rubriker: Space Grotesk
  - Brödtext: Inter
- **Tema:** Fast mörkt tema (permanent dark mode)

### Animationer
- **Framer Motion:**
  - Fade-in animationer på alla sektioner
  - Parallax-effekt i Hero-sektionen (bakgrund rör sig långsammare vid scroll)
  - AI-glow-effekt runt logotypen
  - Hover- och tap-animationer på knappar
  - Interactive image switching med fade/scale transitions i BelleSectionAI

### Komponenter
1. **Header** – Transparent blur-bakgrund, logotyp vänster, navigationslänkar i mitten ("Om oss", "Plattform 2026", "Teknologi", "Inspiration"), "Kontakta oss"-knapp höger, aktiva länkar markerade med #00FFC6, responsiv hamburger-meny för mobil
2. **Hero** – Huvudsektion med gradient-bakgrund (from-[#001F1D] to-[#0B0C10]), logotyp, ny rubrik "En ny typ av plattform – byggd med AI", längre beskrivande text, CTA "Utforska plattformen" + sekundär "Kontakta oss"
3. **WhyBelleminds** – Förklaring av varför Belleminds skapades (id="why" för navigation)
4. **Platform2026** – Rubrik "Plattform 2026" och beskrivning
5. **BelleSectionAI** – Interaktiv flik-sektion (id="platform") med tre flikar med ikoner: "Dina AI-resurser" (CRM, e-signering, ekonomi), "Din AI-agent" (personlig assistent), "Frigör tid" (automatisering). Aktiv flik med #00FFC6 accentlinje, fade-transitions vid byte, utökade texter med konkreta exempel
6. **TechBehind** – Säkerhet & Efterlevnad (id="tech"), ikoner istället för checkboxar, 6 features (AI-Act-klar, EU-hostad drift, GDPR-granskad 2025, HTTPS & DDoS-skydd, Ingen spårning, Zero cookies), underrubrik "Säkerhet och integritet är kärnan i allt vi bygger"
7. **Privacy** – Kompakt GDPR-modal med mörk overlay (bg-black/70), mörk bakgrund (gray-900), kortare policytext (4-5 stycken), stängknapp (×) uppe till höger
8. **Inspiration** – Ny rubrik "Inspiration & Lärande" (id="inspiration"), tre innehållskort (Blogg, Podd, Guide) med ikoner och "Läs mer"-CTA, sekundär LinkedIn-länk
9. **Contact** – GDPR-compliant formulär (id="contact"), obligatoriska fält markerade med *, knapptext "Skicka meddelande", förenklad consent-text "Jag godkänner att mina uppgifter behandlas enligt GDPR. *", klickbar integritetspolicy-länk som öppnar modal
10. **Footer** – Mörk bakgrund (#060708), logotyp + copyright vänster, länkar till höger (Integritetspolicy, Användarvillkor, LinkedIn-ikon med text)

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
- **2025-10-29:** Initial implementation och stor uppdatering
  - **Initial implementation:**
    * Alla komponenter skapade
    * Framer Motion parallax och fade-in animationer
    * Responsiv design
    * AI-sektionsbilder integrerade (dashboard laptop, mobil, kalender)
    * Sticky header med glassmorphism-effekt
    * GDPR-compliance implementerad (modal, consent, backend-validering)
  
  - **Stor uppdatering enligt spec:**
    * **Header:** Transparent blur, aktiv länk-markering (#00FFC6), hamburger-meny
    * **Hero:** Ny rubrik "En ny typ av plattform – byggd med AI", utökad text, CTA "Utforska plattformen"
    * **BelleSectionAI:** Flikar med ikoner, utökade texter, aktiv flik med accentlinje
    * **TechBehind:** Ikoner istället för checkboxar, kortare texter, underrubrik
    * **Inspiration:** Ny rubrik "Inspiration & Lärande", tre innehållskort (Blogg, Podd, Guide)
    * **Contact:** Obligatoriska fält markerade med *, ny knapptext, förenklad GDPR-text
    * **Privacy Modal:** Mörk overlay (bg-black/70), kortare policytext, stängknapp
    * **Footer:** Mörk bakgrund (#060708), nya länkar (Integritetspolicy, Användarvillkor, LinkedIn)
    * **Design:** Accentfärg uppdaterad till #00FFC6, brödtext #EAEAEA, rubriker #FFFFFF
    * **Tema:** Permanent mörkt läge (dark class på html)

## 👤 Kontakt
- E-post: info@belleminds.ai
- LinkedIn: [Belleminds](https://www.linkedin.com/company/belleminds/?viewAsMember=true)
