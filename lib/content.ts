// Centraliserad innehållsfil för Belleminds
// Här kan du enkelt redigera alla texter på webbplatsen

export const content = {
  // HEADER - Navigation
  header: {
    brandName: 'belleminds',
    navigation: [
      { name: 'Om oss', href: '#why' },
      { name: 'Plattform 2026', href: '#platform' },
      { name: 'Säkerhet', href: '#tech' },
      { name: 'Inspiration', href: '#inspiration' },
    ],
    ctaButton: 'Kontakta oss',
  },

  // HERO - Huvudsektion
  hero: {
    title: 'En ny typ av plattform – byggd med AI',
    primaryButton: 'Utforska plattformen',
    secondaryButton: 'Kontakta oss',
  },

  // WHY BELLEMINDS - Om oss sektion
  whyBelleminds: {
    title: 'Varför vi bygger Belleminds',
    description:
      'Små företag står inför samma utmaningar som stora men utan samma resurser. Vi tror att framtiden tillhör de som vågar använda AI för att frigöra tid, energi och kreativitet. Belleminds är en plats för inspiration, vägledning och att våga tänka stort med hjälp av icke mänsklig intelligens. Här gör vi AI begripligt, konkret och roligt, för dig som vill ta nästa steg.\n\nVisionen är enkel: Vi hjälper företagare och framtida entreprenörer att starta, driva och förädla sin verksamhet med AI eller som vi kallar det, icke mänsklig intelligens!',
  },

  // PLATFORM 2026 - Plattformsbeskrivning
  platform2026: {
    title: 'Plattform 2026 – en ny sorts företagsstöd',
    paragraphs: [
      'Under 2026 lanserar vi nästa steg - en intelligent plattform som hjälper dig att driva ditt företag med AI som tänker, planerar och agerar tillsammans med dig.',
      'Tänk dig att ha tillgång till rådgivning, ekonomi, kundinsikt och juridik när du behöver det, utan kostnader för personal eller konsulter.',
      'Belleminds blir din vardagspartner; alltid tillgänglig, alltid uppdaterad.',
    ],
  },

  // BELLE SECTION AI - Plattformsfunktioner med flikar
  belleSectionAI: {
    tabs: [
      {
        id: 'resources',
        title: 'Dina AI-resurser',
        heading: 'Allt du behöver, samlat på ett ställe.',
        description:
          'Få tillgång till alla dina AI-verktyg och resurser i en gemensam plattform. CRM för att hålla koll på dina kunder, e-signering för snabba avtal, samt ekonomi och analysverktyg som ger dig full översikt. Sömlös integration med dina befintliga system.',
        image: '/brand/ai-resources.png',
      },
      {
        id: 'agent',
        title: 'Din AI-agent',
        heading: 'Din personliga assistent som jobbar för dig.',
        description:
          'En intelligent agent som fungerar som din personliga assistent. Automatiserar rutinuppgifter, sammanställer rapporter, svarar på kundfrågor och analyserar data. Lär sig kontinuerligt från ditt företag och anpassar sig efter dina behov. Alltid tillgänglig, alltid uppdaterad.',
        image: '/brand/ai-agent.png',
      },
      {
        id: 'time',
        title: 'Frigör tid',
        heading: 'Fokusera på det som verkligen spelar roll.',
        description:
          'Automatisera rutinuppgifter som schemaläggning, e-posthantering och kunduppföljning. AI:n hanterar administration, fakturering och påminnelser åt dig. Frigör värdefull tid för strategiskt arbete, affärsutveckling och de beslut som driver ditt företag framåt.',
        image: '/brand/free-time.png',
      },
    ],
  },

  // TECH BEHIND - Säkerhet & Efterlevnad
  techBehind: {
    title: 'Säkerhet & Efterlevnad',
    subtitle: 'Säkerhet och integritet är kärnan i allt vi bygger.',
    items: [
      {
        title: 'GDPR-klar',
        description:
          'Vi designar alla tjänster för att uppfylla EU:s dataskyddsförordning. Användaren äger alltid sitt eget data.',
      },
      {
        title: 'EU-hostad drift',
        description:
          'All lagring och drift sker på servrar inom EU. Vi använder certifierade molntjänster med högsta säkerhetsnivå.',
      },
      {
        title: 'Säker kommunikation',
        description:
          'All datatrafik är krypterad från början till slut. OAuth 2.0 och moderna autentiseringsprotokoll skyddar varje anslutning.',
      },
      {
        title: 'Dataintegritet',
        description:
          'Vi garanterar att din information är korrekt, skyddad och oförändrad. Endast auktoriserade system och användare har åtkomst till dina resurser.',
      },
    ],
  },

  // INSPIRATION - Lärande och innehåll
  inspiration: {
    title: 'Inspiration & Lärande',
    cards: [
      {
        title: 'Blogg',
        description: 'Djupdykningar i AI-teknik, affärsstrategier och praktiska guider.',
      },
      {
        title: 'Podd',
        description: 'Samtal med företagare som använder AI i vardagen.',
      },
      {
        title: 'Guide',
        description: 'Steg-för-steg-instruktioner för att komma igång med AI.',
      },
    ],
    comingSoon: 'Kommer snart',
    linkedIn: {
      text: 'Följ oss på LinkedIn för regelbundna uppdateringar',
      buttonText: 'LinkedIn',
      url: 'https://www.linkedin.com/company/belleminds/?viewAsMember=true',
    },
  },

  // CONTACT - Kontaktformulär
  contact: {
    title: 'Hör av dig!',
    subtitle:
      'Vill du veta mer, samarbeta eller bli pilotkund? Skicka ett meddelande så återkommer vi inom kort.',
    form: {
      nameLabel: 'Namn *',
      emailLabel: 'E-postadress *',
      companyLabel: 'Företag',
      messageLabel: 'Meddelande *',
      consentLabel: 'Jag godkänner att mina uppgifter behandlas enligt GDPR. *',
      consentText: 'Vi delar aldrig din data med tredje part.',
      privacyLinkText: 'integritetspolicy',
      submitButton: 'Skicka meddelande',
      sendingButton: 'Skickar...',
      successMessage: 'Tack för ditt meddelande! Vi återkommer snart.',
      errorMessage: 'Något gick fel. Försök igen eller maila oss direkt på info@belleminds.ai',
    },
    directContact: {
      label: 'E-post:',
      email: 'info@belleminds.ai',
    },
  },

  // FOOTER
  footer: {
    brandName: 'belleminds',
    copyright: '© 2025 Alla rättigheter förbehållna',
    links: {
      privacy: 'Integritetspolicy',
      terms: 'Ansvarsbegränsningar',
      linkedIn: {
        text: 'LinkedIn',
        url: 'https://www.linkedin.com/company/belleminds/?viewAsMember=true',
      },
    },
  },
};
