const mainNavItems = [
  {
    url: "/verein",
    title: "Klub",
    submenuItems: [
      {
        url: "/verein/events",
        title: "Termine",
      },
      {
        url: "/verein/vorstand",
        title: "Vorstandschaft",
      },
      {
        url: "/verein/anfahrt",
        title: "Anfahrt",
      },
      {
        url: "/verein/kontakt",
        title: "Kontakt",
      },
    ],
  },
  {
    url: "/",
    title: "Abteilungen",
    submenuItems: [
      {
        url: "/",
        title: "Fußball",
        links: [
          { url: "/", title: "1. Mannschaft" },
          { url: "/", title: "2. Mannschaft" },
          { url: "/", title: "U15-Junioren" },
          { url: "/", title: "U13-Junioren" },
          { url: "/", title: "U11-Junioren" },
          { url: "/", title: "U9-Junioren" },
          { url: "/", title: "U9-Junioren II" },
        ],
      },
      {
        url: "/",
        title: "Tennis",
        links: [
          { url: "/", title: "1. Mannschaft" },
          { url: "/", title: "2. Mannschaft" },
          { url: "/", title: "U15-Junioren" },
          { url: "/", title: "U13-Junioren" },
        ],
      },
      {
        url: "/",
        title: "Gymnastik",
        links: [],
      },
      {
        url: "/",
        title: "Theatergruppe",
        links: [],
      },
      {
        url: "/",
        title: "Stockschützen",
        links: [],
      },
    ],
  },
  { url: "/", title: "Partner", submenuItems: [] },
  { url: "/", title: "Kontakt", submenuItems: [] },
];

export default mainNavItems;
