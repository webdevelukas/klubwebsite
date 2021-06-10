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
    url: "/abteilungen",
    title: "Abteilungen",
    submenuItems: [
      {
        url: "/abteilungen/fussball",
        title: "Fußball",
        slug: "fussball",
        links: [
          {
            url: "/abteilungen/fussball/1-mannschaft",
            title: "1. Mannschaft",
            slug: "1-mannschaft",
          },
          {
            url: "/abteilungen/fussball/2-mannschaft",
            title: "2. Mannschaft",
            slug: "2-mannschaft",
          },
          {
            url: "/abteilungen/fussball/u15-junioren",
            title: "U15-Junioren",
            slug: "u15-junioren",
          },
          {
            url: "/abteilungen/fussball/u13-junioren",
            title: "U13-Junioren",
            slug: "u13-junioren",
          },
          {
            url: "/abteilungen/fussball/u11-junioren",
            title: "U11-Junioren",
            slug: "u11-junioren",
          },
          {
            url: "/abteilungen/fussball/u9-junioren",
            title: "U9-Junioren",
            slug: "u9-junioren",
          },
          {
            url: "/abteilungen/fussball/u9-junioren-2",
            title: "U9-Junioren II",
            slug: "u9-junioren-2",
          },
        ],
      },
      {
        url: "/abteilungen/tennis",
        title: "Tennis",
        slug: "tennis",
        links: [
          {
            url: "/abteilungen/tennis/1-mannschaft",
            title: "1. Mannschaft",
            slug: "1-mannschaft",
          },
          {
            url: "/abteilungen/tennis/2-mannschaft",
            title: "2. Mannschaft",
            slug: "2-mannschaft",
          },
          {
            url: "/abteilungen/tennis/u15-junioren",
            title: "U15-Junioren",
            slug: "u15-junioren",
          },
          {
            url: "/abteilungen/tennis/u13-junioren",
            title: "U13-Junioren",
            slug: "u13-junioren",
          },
        ],
      },
      {
        url: "/abteilungen/gymnastik",
        title: "Gymnastik",
        slug: "gymnastik",
        links: [],
      },
      {
        url: "/abteilungen/theatergruppe",
        title: "Theatergruppe",
        slug: "theatergruppe",
        links: [],
      },
      {
        url: "/abteilungen/stockschiessen",
        title: "Stockschiessen",
        slug: "stockschiessen",
        links: [],
      },
    ],
  },
  { url: "/", title: "Partner", submenuItems: [] },
  { url: "/verein/kontakt", title: "Kontakt", submenuItems: [] },
];

export default mainNavItems;
