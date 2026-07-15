const translations = {
  de: {
    title: "IO Foundation | Integrative Onkologie",
    description:
      "IO Foundation, Stiftung mit Sitz in Zürich, fördert Integrative Onkologie durch Forschung, Bildung, Vernetzung und Information.",
    navMission: "Mission",
    navGovernance: "Gremien",
    navContact: "Kontakt",
    heroEyebrow: "Stiftung mit Sitz in Zürich",
    heroCopy:
      "Förderung der Integrativen Onkologie durch Forschung, Aus- und Weiterbildung, Vernetzung von Angeboten und verständliche Information für Patientinnen, Patienten und Öffentlichkeit.",
    heroPrimary: "Mission ansehen",
    heroSecondary: "Kontakt",
    missionKicker: "Zweck der Stiftung",
    missionTitle:
      "Forschung, Bildung und Orientierung in der Integrativen Onkologie.",
    missionLead:
      "Die IO Foundation unterstützt das öffentliche Gesundheitswesen in der Schweiz und im Ausland. Im Zentrum stehen klinische und experimentelle Forschung, Aus- und Weiterbildung sowie Angebote, die Krebspatientinnen und Krebspatienten zugutekommen.",
    missionNote:
      "Die Stiftung verfolgt weder Erwerbs- noch Selbsthilfezwecke. Eine Förderung industrieller Forschung ist gemäss Registerzweck ausgeschlossen.",
    fieldResearchTitle: "Forschung & Bildung",
    fieldResearchBody:
      "Ideelle und finanzielle Förderung klinischer und experimenteller Forschung sowie Aus- und Weiterbildung im Bereich Integrative Onkologie.",
    fieldNetworkTitle: "Vernetzung von Angeboten",
    fieldNetworkBody:
      "Förderung und Verbindung von Angeboten, Programmen, Institutionen und Projekten, die Patientinnen und Patienten konkret nutzen.",
    fieldInfoTitle: "Information & Öffentlichkeit",
    fieldInfoBody:
      "Verständliche Information über Möglichkeiten und Grenzen der Integrativen Onkologie für Betroffene, Angehörige und die interessierte Öffentlichkeit.",
    fieldsLabel: "Kernfelder",
    governanceKicker: "Organisation",
    governanceTitle: "Stiftungsrat und Revision",
    personBorisMeta: "deutscher Staatsangehöriger, in Richterswil",
    personMichaelMeta: "von Zürich, in Zürich",
    personValeriaMeta: "von Lonay, in Zürich",
    boardRole:
      "Mitglied des Stiftungsrates · Kollektivunterschrift zu zweien",
    auditorRole: "Revisionsstelle",
    contactKicker: "Adresse",
    contactTitle: "IO Foundation in Zürich",
    countryLabel: "Schweiz",
    mapLink: "Adresse auf Karte öffnen",
    legalNotice:
      "Dieses Profil stellt die IO Foundation in kompakter Form für internationale und deutschsprachige Besucherinnen und Besucher vor.",
    footerSource:
      "Entwurf einer zweisprachigen Website für eine schweizerische Stiftung."
  },
  en: {
    title: "IO Foundation | Integrative Oncology",
    description:
      "IO Foundation, a Zurich-based foundation, supports integrative oncology through research, education, networks and patient-oriented information.",
    navMission: "Mission",
    navGovernance: "Governance",
    navContact: "Contact",
    heroEyebrow: "Foundation based in Zurich",
    heroCopy:
      "Supporting integrative oncology through research, education and training, connected services, and clear information for patients, families and the public.",
    heroPrimary: "View mission",
    heroSecondary: "Contact",
    missionKicker: "Foundation purpose",
    missionTitle: "Research, education and orientation in integrative oncology.",
    missionLead:
      "IO Foundation supports public health in Switzerland and abroad. Its focus includes clinical and experimental research, education and training, and services that benefit people affected by cancer.",
    missionNote:
      "The foundation does not pursue commercial or self-help purposes. The registry purpose excludes the promotion of industrial research.",
    fieldResearchTitle: "Research & Education",
    fieldResearchBody:
      "Non-material and financial support for clinical and experimental research, plus education and training in integrative oncology.",
    fieldNetworkTitle: "Connected services",
    fieldNetworkBody:
      "Support and networking for services, programs, institutions and projects that provide practical benefit to patients.",
    fieldInfoTitle: "Information & Public",
    fieldInfoBody:
      "Clear information on the possibilities and limits of integrative oncology for patients, relatives and the interested public.",
    fieldsLabel: "Core fields",
    governanceKicker: "Organization",
    governanceTitle: "Foundation board and auditor",
    personBorisMeta: "German national, in Richterswil",
    personMichaelMeta: "of Zurich, in Zurich",
    personValeriaMeta: "of Lonay, in Zurich",
    boardRole: "Member of the foundation board · joint signing authority",
    auditorRole: "Auditor",
    contactKicker: "Address",
    contactTitle: "IO Foundation in Zurich",
    countryLabel: "Switzerland",
    mapLink: "Open address on map",
    legalNotice:
      "This profile presents IO Foundation in a compact format for international and German-speaking visitors.",
    footerSource:
      "Draft bilingual website for a Swiss foundation."
  }
};

const languageButtons = document.querySelectorAll("[data-lang]");
const translatable = document.querySelectorAll("[data-i18n]");
const metaDescription = document.querySelector('meta[name="description"]');
const year = document.querySelector("#year");

function setLanguage(language) {
  const dictionary = translations[language] || translations.de;
  document.documentElement.lang = language;
  document.title = dictionary.title;
  metaDescription?.setAttribute("content", dictionary.description);

  translatable.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (key && dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === language;
    button.setAttribute("aria-pressed", String(active));
  });

  window.localStorage.setItem("io-foundation-language", language);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

year.textContent = new Date().getFullYear();

const initialLanguage =
  window.localStorage.getItem("io-foundation-language") || "de";

setLanguage(initialLanguage);
