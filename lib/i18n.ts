// Internationalization (i18n) content for Belleminds
// Flerspråksstöd för svenska (sv) och engelska (en)

export type Language = 'sv' | 'en';

interface Translations {
  header: {
    brandName: string;
    navigation: Array<{ name: string; href: string }>;
    ctaButton: string;
  };
  hero: {
    title: string;
    subtitle: string;
    primaryButton: string;
    secondaryButton: string;
  };
  whyBelleminds: {
    title: string;
    description: string;
  };
  products: {
    title: string;
    subtitle: string;
    bellebook: {
      title: string;
      description: string;
      features: string[];
    };
    mindsPlatform: {
      title: string;
      badge: string;
      description: string;
      capabilities: string[];
    };
  };
  whyBellebook: {
    title: string;
    subtitle: string;
    traditional: string;
    bellebook: string;
    comparisons: Array<{
      traditional: string;
      bellebook: string;
    }>;
  };
  whatsIncluded: {
    title: string;
    subtitle: string;
    framing: string;
    allIncluded: string;
    clusters: Array<{
      title: string;
      subline: string;
      features: string[];
    }>;
  };
  industries: {
    title: string;
    subtitle: string;
    list: string[];
    more: string;
  };
  integrations: {
    title: string;
    subtitle: string;
    calendars: {
      title: string;
      items: string[];
    };
    payments: {
      title: string;
      items: string[];
    };
    business: {
      title: string;
      subtitle: string;
      description: string;
      items: string[];
    };
  };
  roadmap: {
    title: string;
    subtitle: string;
    bellebook: {
      title: string;
      timeline: string;
      description: string;
    };
    mindsPlatform: {
      title: string;
      timeline: string;
      description: string;
    };
    note: string;
  };
  fairTerms: {
    title: string;
    items: string[];
  };
  bentoGrid: {
    visionTitle: string;
    visionDescription: string;
    seeWhatYouMissTitle: string;
    seeWhatYouMissDescription: string;
    actProactivelyTitle: string;
    actProactivelyDescription: string;
    bellebookTitle: string;
    bellebookDescription: string;
    gdprTitle: string;
    gdprDescription: string;
  };
  trustStrip: {
    title: string;
    description: string;
  };
  showcase: {
    title: string;
    subtitle: string;
    tabs: {
      belleAI: { label: string; description: string };
      skala: { label: string; description: string };
      organisera: { label: string; description: string };
      engagera: { label: string; description: string };
      behall: { label: string; description: string };
      agera: { label: string; description: string };
    };
  };
  aboutModal: {
    role: string;
    description1: string;
    description2: string;
    comingSoon: string;
    contactLabel: string;
  };
  bellebook: {
    headline: string;
    subline: string;
    taglines: string[];
    investorPitch: string;
    benefits: Array<{
      title: string;
      description: string;
    }>;
  };
  skala: {
    headline: string;
    subline: string;
    taglines: string[];
    description: string;
    benefits: Array<{
      title: string;
      description: string;
    }>;
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
  platform2026: {
    title: string;
    paragraphs: string[];
  };
  belleSectionAI: {
    tabs: Array<{
      id: string;
      title: string;
      heading: string;
      description: string;
      image: string;
    }>;
  };
  techBehind: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  inspiration: {
    title: string;
    cards: Array<{
      title: string;
      description: string;
    }>;
    comingSoon: string;
    linkedIn: {
      text: string;
      buttonText: string;
      url: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      nameLabel: string;
      emailLabel: string;
      companyLabel: string;
      messageLabel: string;
      consentLabel: string;
      consentText: string;
      privacyLinkText: string;
      submitButton: string;
      sendingButton: string;
      successMessage: string;
      errorMessage: string;
    };
    directContact: {
      label: string;
      email: string;
    };
  };
  footer: {
    brandName: string;
    copyright: string;
    links: {
      privacy: string;
      terms: string;
      linkedIn: {
        text: string;
        url: string;
      };
    };
  };
}

export const translations: Record<Language, Translations> = {
  sv: {
    header: {
      brandName: 'belleminds',
      navigation: [
        { name: 'Bellebook', href: '#products' },
        { name: 'Branscher', href: '#industries' },
        { name: 'Vision', href: '#bellebook' },
        { name: 'Kontakt', href: '#contact' },
      ],
      ctaButton: 'Kontakta oss',
    },
    hero: {
      title: 'AI-plattform för småföretag',
      subtitle: 'Starta, driv och väx – med icke mänsklig intelligens.',
      primaryButton: 'Utforska',
      secondaryButton: 'Kontakta oss',
    },
    products: {
      title: 'Produkter',
      subtitle: 'AI-verktyg som förändrar hur du driver ditt företag',
      bellebook: {
        title: 'Bellebook',
        description: 'AI-driven bokningslösning för moderna företag. Mer än ett bokningssystem – ett komplett verktyg som arbetar 24/7 i bakgrunden.',
        features: [
          'Automatiserar administration',
          'Ökar utnyttjandegraden',
          'Minskar no-shows',
          'Förbättrar intäkt per kund'
        ]
      },
      mindsPlatform: {
        title: 'Minds Platform',
        badge: 'Senare 2026',
        description: 'AI-fundamentet bakom Bellebook. Din affärshjärna för hela verksamheten.',
        capabilities: [
          'Ekonomi & bokföring',
          'HR & personaladministration',
          'Avtalshantering',
          'Lager & inköp',
          'Beslutsunderlag'
        ]
      }
    },
    whyBellebook: {
      title: 'Varför Bellebook',
      subtitle: 'Byggd för dig – inte för bokningsplattformen',
      traditional: 'Traditionella bokningsplattformar',
      bellebook: 'Bellebook',
      comparisons: [
        {
          traditional: 'Fokuserar på att fylla tider – oavsett hos vem',
          bellebook: 'Fokuserar på att dina kunder ska komma tillbaka till dig'
        },
        {
          traditional: 'Dina kunder blandas med konkurrenternas',
          bellebook: 'Dina kunder är dina – ingen konkurrens i systemet'
        },
        {
          traditional: 'Recensioner och omdömen stannar på plattformen',
          bellebook: 'Du äger dina recensioner, din data och dina kundrelationer'
        },
        {
          traditional: 'Ger dig siffror – vad du gör med dem är upp till dig',
          bellebook: 'AI som ser mönster och agerar åt dig automatiskt'
        },
        {
          traditional: 'Du betalar för tillägg, synlighet och uppgraderingar',
          bellebook: 'Allt ingår – inga dolda kostnader eller intern konkurrens'
        },
        {
          traditional: 'Bindningstider och krånglig dataexport',
          bellebook: 'Inga bindningstider – din data, dina villkor'
        }
      ]
    },
    whatsIncluded: {
      title: 'Vad ingår',
      subtitle: 'Bellebook arbetar i bakgrunden – förstår din verksamhet, ser mönster och agerar varje dag.',
      framing: 'Alla funktioner ingår. Inga moduler. Inga tillägg.',
      allIncluded: 'Alla funktioner ingår. Inga moduler. Inga tillägg.',
      clusters: [
        {
          title: 'Daglig drift',
          subline: 'Håller ihop bokningar, personal och intäkter – automatiskt.',
          features: [
            'Bokning & kalender',
            'Försäljningsöversikt',
            'Kassaflöden via integrationer',
            'Personalvy för dagliga operationer'
          ]
        },
        {
          title: 'Kundrelationer',
          subline: 'Förstår vilka kunder som kommer tillbaka – och varför.',
          features: [
            'Kundprofiler & historik',
            'Lojalitet & kundklubb',
            'Recensioner & rykte – ägda av dig'
          ]
        },
        {
          title: 'Personal & resurser',
          subline: 'Matchar rätt kompetens och resurser mot efterfrågan.',
          features: [
            'Tjänster',
            'Resurser',
            'Personal & schemaläggning'
          ]
        },
        {
          title: 'Tillväxt & marknadsföring',
          subline: 'Driver tillväxt utan att offra relationen till dina kunder.',
          features: [
            'Marketing Hub',
            'Playbooks',
            'Webb & kanaler',
            'Hänvisningar & belöningar'
          ]
        },
        {
          title: 'Insikter & beslut',
          subline: 'Siffror som leder till handling – inte bara rapporter.',
          features: [
            'Rapporter & analyser',
            'Inställningar & konfiguration'
          ]
        }
      ]
    },
    industries: {
      title: 'Branscher',
      subtitle: 'Byggd för bokningsdrivna företag',
      list: [
        'Hår & barberare',
        'Skönhet & kliniker',
        'Massage & terapi',
        'PT & studior',
        'Hudvård & spa',
        'Tatuering & piercing',
        'Nagelstudio',
        'Fysioterapi',
        'Yoga & meditation',
        'Coaching',
        'Fotvård',
        'Hundtrimmare'
      ],
      more: 'm.m.'
    },
    integrations: {
      title: 'Integrationer',
      subtitle: 'Öppet, utbyggbart och leverantörsneutralt',
      calendars: {
        title: 'Kalendrar',
        items: ['Apple Calendar', 'Google Calendar', 'Outlook Calendar']
      },
      payments: {
        title: 'Betalningar & Checkout',
        items: ['Stripe', 'Klarna', 'Zettle by PayPal']
      },
      business: {
        title: 'Öppet & framtidssäkert',
        subtitle: 'Din verksamhet, din data – även när du växer',
        description: 'Belleminds/ Bellebook är byggda för att fungera idag och skala imorgon. Du äger alltid din data och kan koppla på nya verktyg när behov uppstår – utan att börja om.',
        items: [
          'Export & ägande av all affärsdata',
          'Integrationer när du behöver dem – inte innan',
          'Ingen inlåsning, inga dolda beroenden'
        ]
      }
    },
    roadmap: {
      title: 'Roadmap',
      subtitle: 'Vår resa framåt',
      bellebook: {
        title: 'Bellebook',
        timeline: 'Q2 2026',
        description: 'Första produkten riktar sig till bokningsdrivna företag.'
      },
      mindsPlatform: {
        title: 'Minds Platform',
        timeline: 'Senare 2026',
        description: 'AI-plattformen som driver Bellebook och framtida produkter.'
      },
      note: 'Vi erbjuder tidig access och pilotprogram med kontinuerlig iteration.'
    },
    fairTerms: {
      title: 'Rättvisa villkor',
      items: [
        'Ingen inlåsning',
        'Inga långa uppsägningstider',
        'Du äger din data',
        'GDPR-kompatibel',
        'Data lagras inom EU'
      ]
    },
    whyBelleminds: {
      title: 'Varför vi bygger Belleminds',
      description:
        'Små företag står inför samma utmaningar som stora men utan samma resurser. Vi tror att framtiden tillhör de som vågar använda AI för att frigöra tid, energi och kreativitet. Belleminds är en plats för inspiration, vägledning och att våga tänka stort med hjälp av icke mänsklig intelligens. Här gör vi AI begripligt, konkret och roligt, för dig som vill ta nästa steg.\n\nVisionen är enkel: Vi hjälper företagare och framtida entreprenörer att starta, driva och förädla sin verksamhet med AI eller som vi kallar det, icke mänsklig intelligens!',
    },
    bentoGrid: {
      visionTitle: 'Varför vi bygger Belleminds',
      visionDescription: 'Små företag möter samma komplexitet som stora bolag – men utan samma tid, system eller resurser. Vi bygger Belleminds för att göra avancerad AI praktiskt användbar i vardagen.\n\nVår ambition är att ge företagare ett intelligent stöd som hjälper dem att fatta bättre beslut, frigöra tid och fokusera på det som faktiskt skapar värde i verksamheten.',
      seeWhatYouMissTitle: 'Ser vad du missar',
      seeWhatYouMissDescription: 'AI:n analyserar din verksamhet 24/7 och hittar möjligheter du annars skulle missa.',
      actProactivelyTitle: 'Agerar proaktivt',
      actProactivelyDescription: 'Tar initiativ och utför uppgifter automatiskt innan problem uppstår.',
      bellebookTitle: 'Bellebook – Din AI-partner',
      bellebookDescription: 'Bellebook är mer än ett bokningssystem. Det är ett intelligent affärsstöd som arbetar i bakgrunden varje dag.\n\nSystemet kopplar samman bokningar, kunder, personal och intäkter – och hjälper dig att förstå vad som händer i verksamheten och vad du bör göra härnäst. Mindre administration, bättre beslut och mer tid för ditt arbete.',
      gdprTitle: 'GDPR-säker',
      gdprDescription: 'All data lagras inom EU och är krypterad från början till slut. Din integritet är vår prioritet.',
    },
    trustStrip: {
      title: 'Trygg & säker hantering av din data',
      description: 'All data lagras inom EU och behandlas enligt GDPR. Du äger alltid din kunddata och din affärsinformation. Vi delar aldrig data med tredje part och bygger Bellebook för långsiktig trygghet – även när din verksamhet växer.',
    },
    aboutModal: {
      role: 'Grundare & VD',
      description1: 'Anton är grundaren bakom Belleminds och driver visionen om att göra AI tillgängligt för småföretag.',
      description2: 'Med passion för teknologi och entreprenörskap bygger Anton verktyg som verkligen gör skillnad för småföretagare.',
      comingSoon: '"Mer information kommer snart..."',
      contactLabel: 'Kontakt:',
    },
    showcase: {
      title: 'Upplev Bellebook',
      subtitle: 'Kraftfulla AI-verktyg som förändrar hur du jobbar',
      tabs: {
        belleAI: {
          label: 'Belle AI',
          description: 'Få proaktiva insikter och smarta rekommendationer. Belle AI analyserar dina bokningar, identifierar risker och föreslår åtgärder för att maximera din verksamhet.'
        },
        skala: {
          label: 'Skala',
          description: 'Nå rätt kunder vid rätt tidpunkt. Automatisera marknadsföring med AI-genererade kampanjer, real-time insights och färdiga playbooks. Från idé till lansering på 10 minuter.'
        },
        organisera: {
          label: 'Organisera',
          description: 'Få fullständig översikt över ditt team och alla bokningar. Hantera resurser, schema och ledighet på ett ställe.'
        },
        engagera: {
          label: 'Engagera',
          description: 'Hantera ditt schema, bokningar och frånvaro. Ge ditt team full kontroll över sin arbetssituation med en smidig mobilapp.'
        },
        behall: {
          label: 'Behåll',
          description: 'Bygg starkare kundrelationer med ett intelligent lojalitetsprogram. Segmentera kunder automatiskt och belöna återkommande besök med personliga förmåner.'
        },
        agera: {
          label: 'Agera',
          description: 'Skapa riktade kampanjer och återvinn förlorade kunder. Skicka personliga erbjudanden via SMS och e-post med AI-genererade texter.'
        },
      },
    },
    bellebook: {
      headline: 'Bellebook – AI-driven affärshjärna',
      subline: 'För bokningsföretag som vill växa smartare',
      taglines: [
        'Din AI-partner för smarta bokningar',
        'Automatiserar det tråkiga, maximerar det viktiga',
        'Se mer, gör mer, väx mer'
      ],
      investorPitch: 'Belleminds hjälper företagare och framtida entreprenörer att starta, driva och förädla sin verksamhet med AI – eller som vi kallar det, icke mänsklig intelligens. Vi gör AI begripligt, konkret och roligt för dig som vill ta nästa steg. Bellebook är vår första produkt – ett intelligent system för bokningsbranschen som automatiserar administration, ökar utnyttjandegraden och maximerar intäkter. Minds Platform är grunden som driver Bellebook och framtida produkter för andra branscher.',
      benefits: [
        {
          title: 'Ser vad du missar',
          description: 'AI:n analyserar din verksamhet 24/7 och hittar möjligheter du annars skulle missa.',
        },
        {
          title: 'Agerar proaktivt',
          description: 'Tar initiativ och utför uppgifter automatiskt innan problem uppstår.',
        },
        {
          title: 'Automatiserar administration',
          description: 'Sköter all pappersarbete så du kan fokusera på det som verkligen betyder något.',
        },
      ],
    },
    skala: {
      headline: 'Skala – AI-driven marknadsföring',
      subline: 'Nå rätt kunder, vid rätt tidpunkt – med AI',
      taglines: [
        'Automatisera din marknadsföring med AI',
        'Från idé till lansering på 10 minuter',
        'Datadrivna beslut, färdiga playbooks'
      ],
      description: 'Automatisera din marknadsföring med AI-genererade kampanjer, datadrivna insights och färdiga playbooks. Från idé till lansering på 10 minuter.',
      benefits: [
        {
          title: 'Real-time insights och AI-förslag',
          description: 'Belle visar vilka kunder du bör kontakta och varför – med konkreta inlåtberäkningar.',
        },
        {
          title: 'Snabbutskick',
          description: 'SMS eller e-post på 60 sekunder direkt från hubben.',
        },
        {
          title: 'Prestanda-rapporter och analytics',
          description: 'Se öppningsgrad, konvertering och ROI för alla dina kampanjer samlat.',
        },
        {
          title: 'Målgruppshantering',
          description: 'Översikt av alla målgrupper och aktiva kampanjer på ett ställe.',
        },
      ],
      stats: [
        {
          value: '1,247',
          label: 'Totalt kunder',
        },
        {
          value: '~67k',
          label: 'kr potential',
        },
        {
          value: '12',
          label: 'Aktiva kampanjer',
        },
      ],
    },
    platform2026: {
      title: 'Plattform 2026 – en ny sorts företagsstöd',
      paragraphs: [
        'Under 2026 lanserar vi nästa steg - en intelligent plattform som hjälper dig att driva ditt företag med AI som tänker, planerar och agerar tillsammans med dig.',
        'Tänk dig att ha tillgång till rådgivning, ekonomi, kundinsikt och juridik när du behöver det, utan kostnader för personal eller konsulter.',
        'Belleminds blir din vardagspartner; alltid tillgänglig, alltid uppdaterad.',
      ],
    },
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
    footer: {
      brandName: 'belleminds',
      copyright: '© 2026 Alla rättigheter förbehållna',
      links: {
        privacy: 'Integritetspolicy',
        terms: 'Ansvarsbegränsningar',
        linkedIn: {
          text: 'LinkedIn',
          url: 'https://www.linkedin.com/company/belleminds/?viewAsMember=true',
        },
      },
    },
  },
  en: {
    header: {
      brandName: 'belleminds',
      navigation: [
        { name: 'Bellebook', href: '#products' },
        { name: 'Industries', href: '#industries' },
        { name: 'Vision', href: '#bellebook' },
        { name: 'Contact', href: '#contact' },
      ],
      ctaButton: 'Contact us',
    },
    hero: {
      title: 'AI platform for small businesses',
      subtitle: 'Start, run and grow – with non-human intelligence.',
      primaryButton: 'Explore',
      secondaryButton: 'Contact us',
    },
    products: {
      title: 'Products',
      subtitle: 'AI tools that transform how you run your business',
      bellebook: {
        title: 'Bellebook',
        description: 'AI-powered business brain for booking companies. More than a booking system – a complete tool working 24/7 in the background.',
        features: [
          'Automates administration',
          'Increases utilization',
          'Reduces no-shows',
          'Improves revenue per customer'
        ]
      },
      mindsPlatform: {
        title: 'Minds Platform',
        badge: 'Later 2026',
        description: 'The AI foundation behind Bellebook. Your business brain for the entire operation.',
        capabilities: [
          'Finance & bookkeeping',
          'HR & people operations',
          'Contract management',
          'Inventory & purchasing',
          'Decision support'
        ]
      }
    },
    whyBellebook: {
      title: 'Why Bellebook',
      subtitle: 'Built for you – not for the booking platform',
      traditional: 'Traditional booking platforms',
      bellebook: 'Bellebook',
      comparisons: [
        {
          traditional: 'Focused on filling slots – regardless of whose',
          bellebook: 'Focused on bringing your customers back to you'
        },
        {
          traditional: 'Your customers are mixed with your competitors\'',
          bellebook: 'Your customers are yours – no competition in the system'
        },
        {
          traditional: 'Reviews and ratings stay on the platform',
          bellebook: 'You own your reviews, your data and your customer relationships'
        },
        {
          traditional: 'Gives you numbers – what you do with them is up to you',
          bellebook: 'AI that spots patterns and acts on them for you'
        },
        {
          traditional: 'You pay for add-ons, visibility and upgrades',
          bellebook: 'Everything included – no hidden costs or internal competition'
        },
        {
          traditional: 'Lock-in periods and complicated data export',
          bellebook: 'No lock-in – your data, your terms'
        }
      ]
    },
    whatsIncluded: {
      title: "What's included",
      subtitle: "Bellebook works in the background – understands your business, sees patterns and acts every day.",
      framing: 'All features included. No modules. No add-ons.',
      allIncluded: 'All features included. No modules. No add-ons.',
      clusters: [
        {
          title: 'Daily operations',
          subline: 'Keeps bookings, staff and revenue in sync – automatically.',
          features: [
            'Booking & calendar',
            'Sales overview',
            'Checkout flows via integrations',
            'Staff view for daily operations'
          ]
        },
        {
          title: 'Customer relationships',
          subline: 'Understands which customers come back – and why.',
          features: [
            'Customer profiles & history',
            'Loyalty & customer club',
            'Reviews & reputation – owned by you'
          ]
        },
        {
          title: 'Staff & resources',
          subline: 'Matches the right skills and resources to demand.',
          features: [
            'Services',
            'Resources',
            'Staff & scheduling'
          ]
        },
        {
          title: 'Growth & marketing',
          subline: 'Drives growth without sacrificing your customer relationships.',
          features: [
            'Marketing Hub',
            'Playbooks',
            'Web & channels',
            'Referrals & rewards'
          ]
        },
        {
          title: 'Insights & decisions',
          subline: 'Numbers that lead to action – not just reports.',
          features: [
            'Reports & analytics',
            'Settings & configuration'
          ]
        }
      ]
    },
    industries: {
      title: 'Industries',
      subtitle: 'Built for booking-driven businesses',
      list: [
        'Hair & barber',
        'Beauty & clinics',
        'Massage & therapy',
        'PT & studios',
        'Skincare & spa',
        'Tattoo & piercing',
        'Nail salon',
        'Physiotherapy',
        'Yoga & meditation',
        'Coaching',
        'Podiatry',
        'Dog grooming'
      ],
      more: 'and more'
    },
    integrations: {
      title: 'Integrations',
      subtitle: 'Open, extensible and vendor-neutral',
      calendars: {
        title: 'Calendars',
        items: ['Apple Calendar', 'Google Calendar', 'Outlook Calendar']
      },
      payments: {
        title: 'Payments & Checkout',
        items: ['Stripe', 'Klarna', 'Zettle by PayPal']
      },
      business: {
        title: 'Open & future-proof',
        subtitle: 'Your business, your data – even as you grow',
        description: 'Belleminds/ Bellebook are built to work today and scale tomorrow. You always own your data and can connect new tools as needs arise – without starting over.',
        items: [
          'Export & ownership of all business data',
          'Integrations when you need them – not before',
          'No lock-in, no hidden dependencies'
        ]
      }
    },
    roadmap: {
      title: 'Roadmap',
      subtitle: 'Our journey forward',
      bellebook: {
        title: 'Bellebook',
        timeline: 'Q2 2026',
        description: 'First product targeting booking-driven businesses.'
      },
      mindsPlatform: {
        title: 'Minds Platform',
        timeline: 'Later 2026',
        description: 'The AI platform powering Bellebook and future products.'
      },
      note: 'We offer early access and pilot programs with continuous iteration.'
    },
    fairTerms: {
      title: 'Fair terms',
      items: [
        'No lock-in',
        'No long termination periods',
        'You own your data',
        'GDPR compliant',
        'Data stored within the EU'
      ]
    },
    whyBelleminds: {
      title: 'Why we build Belleminds',
      description:
        'Small businesses face the same challenges as large ones but without the same resources. We believe the future belongs to those who dare to use AI to free up time, energy and creativity. Belleminds is a place for inspiration, guidance and daring to think big with non-human intelligence. Here we make AI understandable, concrete and fun for those who want to take the next step.\n\nThe vision is simple: We help entrepreneurs and future business owners to start, run and refine their business with AI or as we call it, non-human intelligence!',
    },
    bentoGrid: {
      visionTitle: 'Why we build Belleminds',
      visionDescription: 'Small businesses face the same complexity as large corporations – but without the same time, systems or resources. We build Belleminds to make advanced AI practically useful in everyday operations.\n\nOur ambition is to provide business owners with intelligent support that helps them make better decisions, free up time and focus on what actually creates value in their business.',
      seeWhatYouMissTitle: 'Sees what you miss',
      seeWhatYouMissDescription: 'The AI analyzes your business 24/7 and finds opportunities you would otherwise miss.',
      actProactivelyTitle: 'Acts proactively',
      actProactivelyDescription: 'Takes initiative and performs tasks automatically before problems arise.',
      bellebookTitle: 'Bellebook – Your AI Partner',
      bellebookDescription: 'Bellebook is more than a booking system. It\'s an intelligent business support tool working in the background every day.\n\nThe system connects bookings, customers, staff and revenue – and helps you understand what\'s happening in your business and what you should do next. Less administration, better decisions and more time for your work.',
      gdprTitle: 'GDPR-compliant',
      gdprDescription: 'All data is stored within the EU and encrypted end-to-end. Your privacy is our priority.',
    },
    trustStrip: {
      title: 'Secure & safe data handling',
      description: 'All data is stored within the EU and processed according to GDPR. You always own your customer data and business information. We never share data with third parties and build Bellebook for long-term security – even as your business grows.',
    },
    aboutModal: {
      role: 'Founder & CEO',
      description1: 'Anton is the founder behind Belleminds and drives the vision of making AI accessible for small businesses.',
      description2: 'With a passion for technology and entrepreneurship, Anton builds tools that truly make a difference for small business owners.',
      comingSoon: '"More information coming soon..."',
      contactLabel: 'Contact:',
    },
    showcase: {
      title: 'Experience Bellebook',
      subtitle: 'Powerful AI tools that transform how you work',
      tabs: {
        belleAI: {
          label: 'Belle AI',
          description: 'Get proactive insights and smart recommendations. Belle AI analyzes your bookings, identifies risks and suggests actions to maximize your business.'
        },
        skala: {
          label: 'Scale',
          description: 'Reach the right customers at the right time. Automate marketing with AI-generated campaigns, real-time insights and ready playbooks. From idea to launch in 10 minutes.'
        },
        organisera: {
          label: 'Organize',
          description: 'Get complete overview of your team and all bookings. Manage resources, schedules and time off in one place.'
        },
        engagera: {
          label: 'Engage',
          description: 'Manage your schedule, bookings and absences. Give your team full control over their work situation with a smooth mobile app.'
        },
        behall: {
          label: 'Retain',
          description: 'Build stronger customer relationships with an intelligent loyalty program. Automatically segment customers and reward repeat visits with personalized benefits.'
        },
        agera: {
          label: 'Act',
          description: 'Create targeted campaigns and win back lost customers. Send personal offers via SMS and email with AI-generated texts.'
        },
      },
    },
    bellebook: {
      headline: 'Bellebook – AI-powered business brain',
      subline: 'For booking companies that want to grow smarter',
      taglines: [
        'Your AI partner for smart bookings',
        'Automates the boring, maximizes the important',
        'See more, do more, grow more'
      ],
      investorPitch: 'Belleminds helps business owners and future entrepreneurs start, run and grow their business with AI – or as we call it, non-human intelligence. We make AI understandable, practical and fun for those who want to take the next step. Bellebook is our first product – an intelligent system for the booking industry that automates administration, increases utilization and maximizes revenue. Minds Platform is the foundation powering Bellebook and future products for other industries.',
      benefits: [
        {
          title: 'Sees what you miss',
          description: 'The AI analyzes your business 24/7 and finds opportunities you would otherwise miss.',
        },
        {
          title: 'Acts proactively',
          description: 'Takes initiative and performs tasks automatically before problems arise.',
        },
        {
          title: 'Automates administration',
          description: 'Handles all paperwork so you can focus on what really matters.',
        },
      ],
    },
    skala: {
      headline: 'Skala – AI-powered marketing',
      subline: 'Reach the right customers, at the right time – with AI',
      taglines: [
        'Automate your marketing with AI',
        'From idea to launch in 10 minutes',
        'Data-driven decisions, ready playbooks'
      ],
      description: 'Automate your marketing with AI-generated campaigns, data-driven insights and ready playbooks. From idea to launch in 10 minutes.',
      benefits: [
        {
          title: 'Real-time insights and AI suggestions',
          description: 'Belle shows which customers you should contact and why – with concrete calculations.',
        },
        {
          title: 'Quick dispatch',
          description: 'SMS or email in 60 seconds directly from the hub.',
        },
        {
          title: 'Performance reports and analytics',
          description: 'See open rate, conversion and ROI for all your campaigns in one place.',
        },
        {
          title: 'Audience management',
          description: 'Overview of all audiences and active campaigns in one place.',
        },
      ],
      stats: [
        {
          value: '1,247',
          label: 'Total customers',
        },
        {
          value: '~67k',
          label: 'SEK potential',
        },
        {
          value: '12',
          label: 'Active campaigns',
        },
      ],
    },
    platform2026: {
      title: 'Platform 2026 – a new kind of business support',
      paragraphs: [
        'In 2026 we launch the next step - an intelligent platform that helps you run your business with AI that thinks, plans and acts together with you.',
        'Imagine having access to advice, finance, customer insights and legal when you need it, without costs for staff or consultants.',
        'Belleminds becomes your everyday partner; always available, always updated.',
      ],
    },
    belleSectionAI: {
      tabs: [
        {
          id: 'resources',
          title: 'Your AI resources',
          heading: 'Everything you need, in one place.',
          description:
            'Get access to all your AI tools and resources in a common platform. CRM to keep track of your customers, e-signing for quick agreements, as well as finance and analytics tools that give you full overview. Seamless integration with your existing systems.',
          image: '/brand/ai-resources.png',
        },
        {
          id: 'agent',
          title: 'Your AI agent',
          heading: 'Your personal assistant working for you.',
          description:
            'An intelligent agent that functions as your personal assistant. Automates routine tasks, compiles reports, answers customer questions and analyzes data. Continuously learns from your company and adapts to your needs. Always available, always updated.',
          image: '/brand/ai-agent.png',
        },
        {
          id: 'time',
          title: 'Free up time',
          heading: 'Focus on what really matters.',
          description:
            'Automate routine tasks like scheduling, email management and customer follow-up. AI handles administration, invoicing and reminders for you. Free up valuable time for strategic work, business development and the decisions that drive your company forward.',
          image: '/brand/free-time.png',
        },
      ],
    },
    techBehind: {
      title: 'Security & Compliance',
      subtitle: 'Security and privacy are at the core of everything we build.',
      items: [
        {
          title: 'GDPR compliant',
          description:
            'We design all services to comply with EU data protection regulations. The user always owns their own data.',
        },
        {
          title: 'EU-hosted operations',
          description:
            'All storage and operations take place on servers within the EU. We use certified cloud services with the highest security level.',
        },
        {
          title: 'Secure communication',
          description:
            'All data traffic is encrypted end-to-end. OAuth 2.0 and modern authentication protocols protect every connection.',
        },
        {
          title: 'Data integrity',
          description:
            'We guarantee that your information is accurate, protected and unchanged. Only authorized systems and users have access to your resources.',
        },
      ],
    },
    inspiration: {
      title: 'Inspiration & Learning',
      cards: [
        {
          title: 'Blog',
          description: 'Deep dives into AI technology, business strategies and practical guides.',
        },
        {
          title: 'Podcast',
          description: 'Conversations with entrepreneurs who use AI in everyday life.',
        },
        {
          title: 'Guide',
          description: 'Step-by-step instructions to get started with AI.',
        },
      ],
      comingSoon: 'Coming soon',
      linkedIn: {
        text: 'Follow us on LinkedIn for regular updates',
        buttonText: 'LinkedIn',
        url: 'https://www.linkedin.com/company/belleminds/?viewAsMember=true',
      },
    },
    contact: {
      title: 'Get in touch!',
      subtitle:
        'Want to know more, collaborate or become a pilot customer? Send a message and we will get back to you shortly.',
      form: {
        nameLabel: 'Name *',
        emailLabel: 'Email address *',
        companyLabel: 'Company',
        messageLabel: 'Message *',
        consentLabel: 'I agree that my information is processed according to GDPR. *',
        consentText: 'We never share your data with third parties.',
        privacyLinkText: 'privacy policy',
        submitButton: 'Send message',
        sendingButton: 'Sending...',
        successMessage: 'Thank you for your message! We will get back to you soon.',
        errorMessage: 'Something went wrong. Please try again or email us directly at info@belleminds.ai',
      },
      directContact: {
        label: 'Email:',
        email: 'info@belleminds.ai',
      },
    },
    footer: {
      brandName: 'belleminds',
      copyright: '© 2026 All rights reserved',
      links: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        linkedIn: {
          text: 'LinkedIn',
          url: 'https://www.linkedin.com/company/belleminds/?viewAsMember=true',
        },
      },
    },
  },
};

// Helper function to get translations for current language
export function getContent(language: Language): Translations {
  return translations[language];
}
