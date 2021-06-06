const mainNavItems = [
  {
    url: "/",
    title: "Klub",
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
    ],
  },
  {
    url: "/",
    title: "Termine",
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
    ],
  },
  { url: "/", title: "Shop" },
  { url: "/", title: "Jobs" },
  { url: "/", title: "Partner" },
];

export default mainNavItems;
