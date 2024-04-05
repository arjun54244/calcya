const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Company",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Us",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Our Story",
        path: "/our-story",
        newTab: false,
      },
      {
        id: 43,
        title: "Our Values",
        path: "/our-values",
        newTab: false,
      },
      {
        id: 44,
        title: "Our Vision",
        path: "/our-vision",
        newTab: false,
      },
      {
        id: 45,
        title: "Leadership",
        path: "/leadership",
        newTab: false,
      },
      {
        id: 46,
        title: "Diversity Inclusion",
        path: "/diversity-inclusion",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Expertise",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Income Tax",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Events",
        path: "/contact",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Events",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "University Chapters",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "School Chapters",
        path: "/contact",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Resources",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Financial Tools",
        path: "/financial-tools",
        newTab: false,
        submenu: [
          {
            id: 33,
            title: "SIP Calculator",
            path: "/sip-calculator",
            newTab: false,
          },
          {
            id: 34,
            title: "EMI Calculator",
            path: "/emi-calculator",
            newTab: false,
          },
        ],
      },
      {
        id: 42,
        title: "Glossary",
        path: "/contact",
        newTab: false,
      },
      {
        id: 42,
        title: "Insights",
        path: "/contact",
        newTab: false,
      },
    ],
  },
  {
    id: 6,
    title: "Career",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
