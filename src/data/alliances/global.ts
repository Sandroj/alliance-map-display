import { Alliance } from "../alliance-types";

export const globalAlliances: Alliance[] = [
  {
    id: "brics",
    name: "BRICS",
    color: "#9932CC",
    description: "Major emerging economies group comprising Brazil, Russia, India, China, South Africa, and new members",
    members: [
      { code: "BRA", joinYear: 2009 }, { code: "RUS", joinYear: 2009 },
      { code: "IND", joinYear: 2009 }, { code: "CHN", joinYear: 2009 },
      { code: "ZAF", joinYear: 2010 }, { code: "EGY", joinYear: 2024 },
      { code: "ETH", joinYear: 2024 }, { code: "IRN", joinYear: 2024 },
      { code: "SAU", joinYear: 2024 }, { code: "ARE", joinYear: 2024 }
    ]
  },
  {
    id: "g7",
    name: "G7",
    color: "#4169E1",
    description: "Group of Seven - forum of world's most advanced economies discussing global economic and political issues",
    members: [
      { code: "CAN", joinYear: 1976 }, { code: "FRA", joinYear: 1975 },
      { code: "DEU", joinYear: 1975 }, { code: "ITA", joinYear: 1975 },
      { code: "JPN", joinYear: 1975 }, { code: "GBR", joinYear: 1975 },
      { code: "USA", joinYear: 1975 }
    ]
  },
  {
    id: "g20",
    name: "G20 + AU",
    color: "#800080",
    description: "Group of Twenty plus African Union - international forum for governments and central banks",
    members: [
      { code: "ARG", joinYear: 1999 }, { code: "AUS", joinYear: 1999 },
      { code: "BRA", joinYear: 1999 }, { code: "CAN", joinYear: 1999 },
      { code: "CHN", joinYear: 1999 }, { code: "FRA", joinYear: 1999 },
      { code: "DEU", joinYear: 1999 }, { code: "IND", joinYear: 1999 },
      { code: "IDN", joinYear: 1999 }, { code: "ITA", joinYear: 1999 },
      { code: "JPN", joinYear: 1999 }, { code: "KOR", joinYear: 1999 },
      { code: "MEX", joinYear: 1999 }, { code: "RUS", joinYear: 1999 },
      { code: "SAU", joinYear: 1999 }, { code: "ZAF", joinYear: 1999 },
      { code: "TUR", joinYear: 1999 }, { code: "GBR", joinYear: 1999 },
      { code: "USA", joinYear: 1999 }, { code: "EU", joinYear: 1999 }
    ],
    dialoguePartners: [
      { code: "DZA", since: 2024 }, { code: "AGO", since: 2024 },
      { code: "BEN", since: 2024 }, { code: "BWA", since: 2024 },
      { code: "BFA", since: 2024 }, { code: "BDI", since: 2024 },
      { code: "CMR", since: 2024 }, { code: "CPV", since: 2024 }
      // Add more African Union countries as needed
    ]
  },
  {
    id: "un",
    name: "United Nations",
    color: "#4682B4",
    description: "International organization promoting international peace, security, and cooperation",
    members: [
      // Add all UN member countries here
      { code: "USA", joinYear: 1945 }, { code: "GBR", joinYear: 1945 },
      { code: "FRA", joinYear: 1945 }, { code: "CHN", joinYear: 1945 },
      { code: "RUS", joinYear: 1945 }
      // ... Add more members
    ]
  }
];
