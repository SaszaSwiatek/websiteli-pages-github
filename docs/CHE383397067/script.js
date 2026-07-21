const translations = {
  en: {
    skip: "Skip to content",
    navProfile: "Profile",
    navFocus: "Focus",
    navLeadership: "Governance",
    navContact: "Contact",
    heroEyebrow: "Swiss holding company",
    heroLead:
      "Disciplined participation management, corporate governance and long-term stewardship from Zürich.",
    heroPrimary: "Contact details",
    heroSecondary: "Investment focus",
    factLocationLabel: "Location",
    factFormLabel: "Legal form",
    factFormValue: "Aktiengesellschaft",
    factScopeLabel: "Scope",
    factScopeValue: "International participations",
    profileKicker: "Company profile",
    profileTitle: "A Zurich-based platform for holdings and stewardship.",
    profileBodyOne:
      "Schulbrecht Group AG is a Swiss company established as an Aktiengesellschaft. Its corporate purpose centers on acquiring, holding, managing and divesting participations in companies in Switzerland and abroad.",
    profileBodyTwo:
      "The company may hold majority or minority interests, particularly in asset-management companies and operating entities, while also administering its own assets, securities and other financial instruments.",
    focusKicker: "Focus areas",
    focusTitle:
      "Built around participation ownership, capital discipline and corporate flexibility.",
    focusOneTitle: "Participations",
    focusOneBody:
      "Majority and minority holdings in Swiss and international companies, including asset-management and operating entities.",
    focusTwoTitle: "Own assets",
    focusTwoBody:
      "Administration of proprietary assets, including securities and other financial instruments.",
    focusThreeTitle: "Corporate transactions",
    focusThreeBody:
      "Branches, representations, guarantees, financing arrangements and transactions aligned with the company's purpose.",
    focusFourTitle: "Real assets",
    focusFourBody:
      "Ability to acquire, lease, rent, encumber and dispose of real estate in Switzerland and abroad.",
    leadershipKicker: "Governance",
    leadershipTitle:
      "Board oversight with financial reporting and compliance experience.",
    leadershipRole: "Member of the Board of Directors",
    leadershipBody:
      "Finance professional with experience in Swiss financial reporting, Swiss GAAP FER, the Swiss Code of Obligations and regulatory compliance for Swiss and international client entities.",
    leadershipLink: "View LinkedIn profile",
    contactKicker: "Contact",
    contactTitle: "Registered in Zürich.",
    contactNote:
      "Schulbrecht Group AG can be reached through its registered address in Zürich. No public email or telephone details are listed here.",
    mapsLink: "Open address in maps",
    footerLegal: "Aktiengesellschaft · UID CHE-383.397.067",
    finePrint:
      "This website provides corporate profile information only and does not constitute financial, investment, legal or tax advice."
  },
  de: {
    skip: "Zum Inhalt springen",
    navProfile: "Profil",
    navFocus: "Fokus",
    navLeadership: "Governance",
    navContact: "Kontakt",
    heroEyebrow: "Schweizer Holdinggesellschaft",
    heroLead:
      "Disziplinierte Beteiligungsverwaltung, Corporate Governance und langfristige Vermögensstrukturierung aus Zürich.",
    heroPrimary: "Kontaktdaten",
    heroSecondary: "Investitionsfokus",
    factLocationLabel: "Standort",
    factFormLabel: "Rechtsform",
    factFormValue: "Aktiengesellschaft",
    factScopeLabel: "Ausrichtung",
    factScopeValue: "Internationale Beteiligungen",
    profileKicker: "Unternehmensprofil",
    profileTitle:
      "Eine Zürcher Plattform für Beteiligungen und langfristige Verwaltung.",
    profileBodyOne:
      "Die Schulbrecht Group AG ist eine Schweizer Aktiengesellschaft. Ihr Zweck umfasst den Erwerb, das Halten, die Verwaltung und die Veräusserung von Beteiligungen an Unternehmen im In- und Ausland.",
    profileBodyTwo:
      "Die Gesellschaft kann Mehrheits- oder Minderheitsbeteiligungen halten, insbesondere an Vermögensverwaltungsgesellschaften und operativen Einheiten, und verwaltet zugleich ihr eigenes Vermögen einschliesslich Wertpapieren und anderen Finanzinstrumenten.",
    focusKicker: "Fokusbereiche",
    focusTitle:
      "Ausgerichtet auf Beteiligungsbesitz, Kapitaldisziplin und unternehmerische Flexibilität.",
    focusOneTitle: "Beteiligungen",
    focusOneBody:
      "Mehrheits- und Minderheitsbeteiligungen an Schweizer und internationalen Unternehmen, einschliesslich Vermögensverwaltungs- und operativen Gesellschaften.",
    focusTwoTitle: "Eigenes Vermögen",
    focusTwoBody:
      "Verwaltung eigener Vermögenswerte, einschliesslich Wertpapieren und anderen Finanzinstrumenten.",
    focusThreeTitle: "Unternehmensgeschäfte",
    focusThreeBody:
      "Zweigniederlassungen, Vertretungen, Garantien, Finanzierungen und weitere Geschäfte im Rahmen des Gesellschaftszwecks.",
    focusFourTitle: "Immobilien",
    focusFourBody:
      "Möglichkeit zum Erwerb, zur Vermietung, Verpachtung, Belastung und Veräusserung von Immobilien im In- und Ausland.",
    leadershipKicker: "Governance",
    leadershipTitle:
      "Verwaltungsratsaufsicht mit Erfahrung in Rechnungslegung und Compliance.",
    leadershipRole: "Mitglied des Verwaltungsrates",
    leadershipBody:
      "Finance Professional mit Erfahrung in Schweizer Finanzberichterstattung, Swiss GAAP FER, Obligationenrecht und regulatorischer Compliance für Schweizer und internationale Gesellschaften.",
    leadershipLink: "LinkedIn-Profil ansehen",
    contactKicker: "Kontakt",
    contactTitle: "Eingetragen in Zürich.",
    contactNote:
      "Die Schulbrecht Group AG ist über ihre eingetragene Adresse in Zürich erreichbar. Öffentliche E-Mail- oder Telefondaten sind hier nicht aufgeführt.",
    mapsLink: "Adresse in Karten öffnen",
    footerLegal: "Aktiengesellschaft · UID CHE-383.397.067",
    finePrint:
      "Diese Website dient ausschliesslich der Unternehmensinformation und stellt keine Finanz-, Anlage-, Rechts- oder Steuerberatung dar."
  }
};

const buttons = document.querySelectorAll("[data-lang]");
const translatableElements = document.querySelectorAll("[data-i18n]");
const storedLanguage = window.localStorage.getItem("schulbrecht-language");
const initialLanguage = storedLanguage && translations[storedLanguage] ? storedLanguage : "en";

function setLanguage(language) {
  const dictionary = translations[language];

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.documentElement.lang = language;
  window.localStorage.setItem("schulbrecht-language", language);

  buttons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

setLanguage(initialLanguage);
