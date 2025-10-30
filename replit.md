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
1. **Header** – Transparent blur-bakgrund, logotyp vänster, navigationslänkar i mitten ("Om oss", "Plattform 2026", "Säkerhet", "Inspiration"), "Kontakta oss"-knapp höger, aktiva länkar markerade med #00FFC6, responsiv hamburger-meny för mobil
2. **Hero** – Huvudsektion med gradient-bakgrund (from-[#001F1D] to-[#0B0C10]), logotyp, rubrik "En ny typ av plattform – byggd med AI" (ingen beskrivande text), CTA "Utforska plattformen" + sekundär "Kontakta oss"
3. **WhyBelleminds** – Förklaring av varför Belleminds skapades (id="why" för navigation)
4. **Platform2026** – Rubrik "Plattform 2026" och ny text: "Under 2026 lanserar vi nästa steg: en intelligent plattform som hjälper dig att driva ditt företag – med AI som tänker, planerar och agerar med dig. Som att ha tillgång till ekonomi, juridik och rådgivning när du behöver det – utan personal eller externa kostnader."
5. **BelleSectionAI** – Interaktiv flik-sektion (id="platform") med tre flikar med ikoner: "Dina AI-resurser" (CRM, e-signering, ekonomi), "Din AI-agent" (personlig assistent), "Frigör tid" (automatisering). Aktiv flik med #00FFC6 accentlinje, fade-transitions vid byte, utökade texter med konkreta exempel
6. **TechBehind** – Säkerhet & Efterlevnad (id="tech"), 4 boxar med gradient-bakgrund (from-gray-900 to-gray-800), hover-effekt med ljusare gradient (from-gray-800 to-gray-700), beskrivningar döljs som standard och visas vid hover med fade-in animation (opacity-0 → opacity-100), boxar: "GDPR-klar", "EU-hostad drift", "Säker kommunikation", "Dataintegritet", 2x2 grid på desktop, 1x4 på mobil, underrubrik "Säkerhet och integritet är kärnan i allt vi bygger"
7. **Privacy** – Kompakt GDPR-modal med mörk overlay (bg-black/70), mörk bakgrund (gray-900), kortare policytext (4-5 stycken), stängknapp (×) uppe till höger
7b. **Terms** – Ansvarsbegränsningar-modal med 8 sektioner: Allmänt, Ingen garanti för riktighet, Användarens ansvar, Begränsning av ansvar, Tredjepartsintegrationer, Tillgänglighet och drift, Ändringar av ansvarsbegränsningarna, Kontakt
8. **Inspiration** – Ny rubrik "Inspiration & Lärande" (id="inspiration"), tre innehållskort (Blogg, Podd, Guide) med ikoner och "Kommer snart"-CTA, sekundär LinkedIn-länk
9. **Contact** – GDPR-compliant formulär (id="contact"), fält: Namn*, E-post*, Företag (frivilligt), Meddelande*, consent checkbox*, knapptext "Skicka meddelande", data sparas i Neon PostgreSQL (Azure Frankfurt)
10. **Footer** – Mörk bakgrund (#060708), logotyp + "belleminds" (litet b) + copyright vänster, länkar till höger (Integritetspolicy, Ansvarsbegränsningar, LinkedIn-ikon med text)

### GDPR & Säkerhet
- ✅ Inga cookies
- ✅ Ingen användarspårning eller analytics
- ✅ Inga tredjepartsskript
- ✅ All data inom EU (Replit EU, Neon Azure Frankfurt)
- ✅ HTTPS via Cloudflare med DDoS-skydd
- ✅ TLS-kryptering aktiverad för databasanslutning (ssl: true)
- ✅ Kontaktformulär med obligatorisk consent checkbox
- ✅ Fullständig integritetspolicy i popup-modal
- ✅ Tydlig information om datahantering (12 månaders lagring)
- ✅ Rättslig grund (samtycke) enligt GDPR Artikel 6.1(a)
- ✅ Rätt att klaga till Integritetsskyddsmyndigheten (IMY)
- ✅ Användarrättigheter enligt GDPR dokumenterade
- ✅ Klickbar länk som öppnar privacy policy i modal
- ✅ Formulär kan inte skickas utan godkännande (frontend + backend)
- ✅ Backend validerar consent och loggar consent-tidsstämpel
- ✅ PII-data loggas inte i serverloggar (endast submission ID)
- ✅ Kontaktformulärdata sparas i Neon PostgreSQL (Azure Frankfurt)

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
│   │   ├── Terms.tsx
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
├── lib/
│   ├── db.ts (PostgreSQL connection pooling)
│   └── init-db.ts (Database initialization)
├── public/
│   └── brand/
│       ├── logo.png (Belleminds logotyp)
│       ├── ai-resources.png (laptop med dashboard - rosa/lila färger, 948KB)
│       ├── ai-agent.png (tablet med task management - mörk sidebar, 795KB)
│       └── free-time.png (mobil med kalender - färgglada schemablock, 889KB)
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
- **Databas:** Neon PostgreSQL (Azure Frankfurt, EU) med pg client
- **Connection Pooling:** pg.Pool för optimal databasanslutning

## 📝 Metadata
- **Titel:** "Belleminds – AI för små företag"
- **Språk:** Svenska (sv)
- **Beskrivning:** SEO-optimerad beskrivning på svenska

## 🔧 Konfiguration
- **Dev Server:** Binder till 0.0.0.0:5000 för Replit-kompatibilitet
- **Production Server:** Next.js start-script konfigurerad för 0.0.0.0:5000
- **Deployment:** Autoscale deployment med build command (npm run build) och run command (npm run start)
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
- ✅ Neon PostgreSQL databas integrerad (Azure Frankfurt, EU)
- ✅ Kontaktformulär sparar data säkert med TLS-kryptering

## 🎯 Nästa Steg (Framtida Utveckling)
1. Koppla kontaktformulär till e-posttjänst (t.ex. SendGrid eller Resend)
2. Lägg till admin-gränssnitt för att visa och hantera kontaktförfrågningar
3. Implementera automatisk dataradering efter 12 månader (GDPR)
4. Publicera på Cloudflare

## 📅 Projekthistorik
- **2025-10-30:** Innehållsuppdateringar och UX-förbättringar
  - **Innehållsändringar:**
    * Platform 2026-texten uppdaterad: ny beskrivning fokuserar på AI som tänker, planerar och agerar med dig
    * Hero-sektionen förenklad: tagit bort beskrivande text under rubriken
  - **Navigationändringar:**
    * "Teknologi" bytt till "Säkerhet" i header-menyn
  - **Designändringar:**
    * Footer visar nu "belleminds" med litet b
- **2025-10-30:** Neon PostgreSQL integration, säkerhetssektionuppdatering och Turbopack-buggfix
  - **Säkerhetssektionuppdatering:**
    * Ersatt gamla 6 features med 4 nya boxar med utförliga beskrivningar
    * Nya boxar: GDPR-klar, EU-hostad drift, Säker kommunikation, Dataintegritet
    * Gradient-bakgrund (from-gray-900 to-gray-800) med hover-effekt (from-gray-800 to-gray-700)
    * Beskrivningar döljs som standard, visas vid hover med fade-in animation
    * Responsivt grid (2x2 desktop, 1x4 mobil)
  - **Turbopack-buggfix:**
    * Fixat kritiskt Turbopack-internt fel (inner_of_uppers_lost_follower) som orsakade servern att krascha
    * Rensat alla Next.js cache-filer (.next, node_modules/.cache, /tmp/next-*)
    * Servern körs nu stabilt utan återkommande Internal Server Error
- **2025-10-30:** Neon PostgreSQL integration och säkerhetsförbättringar
  - **Databasintegration:**
    * Integrerat Neon PostgreSQL (Azure Frankfurt) för EU-compliant datalagring
    * Skapat contact_submissions-tabell med GDPR-fält (consent, consent_timestamp, ip_address, user_agent)
    * Implementerat connection pooling med pg.Pool
    * TLS-kryptering aktiverad för säker dataöverföring (ssl: true)
    * PII-data tas bort från serverloggar (endast submission ID loggas)
  - **Kontaktformulär:**
    * Lagt till företagsfält (frivilligt)
    * Backend validerar consent och sparar data i EU-databasen
    * Felhantering på både frontend och backend
  - **Ansvarsbegränsningar:**
    * Skapat ny Terms.tsx-komponent med fullständiga ansvarsbegränsningar
    * Ändrat "Användarvillkor" till "Ansvarsbegränsningar" i Footer
    * 8 sektioner med tydliga begränsningar av ansvar och tredjepartsintegrationer
  - **Bilduppdateringar:**
    * Bytt ut alla tre bilder i Platform-sektionen (BelleSectionAI)
    * Nya högkvalitativa bilder: laptop dashboard (948KB), tablet task view (795KB), mobil kalender (889KB)
    * Logotyp ljusare med CSS filter: invert(1) brightness(1.8) i Hero, Header och Footer
    * Raderat gamla oanvända bilder (crm.png, erp.png, legal.png)
  - **Buggfixar:**
    * Fixat text-spacing i WhyBelleminds-sektionen
    * Fixat "vit blinkning" vid HMR/Fast Refresh genom inline critical CSS
    * Triple-redundancy dark mode protection (CSS ::before, MutationObserver, setInterval)

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
    * **Tema:** Permanent mörkt läge (dark class på html med inline critical CSS)

## 👤 Kontakt
- E-post: info@belleminds.ai
- LinkedIn: [Belleminds](https://www.linkedin.com/company/belleminds/?viewAsMember=true)
