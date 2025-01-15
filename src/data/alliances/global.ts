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
    name: "G20",
    color: "#800080",
    description: "Group of Twenty - international forum for governments and central banks of 19 countries plus the EU",
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
    ]
  },
  {
    id: "oecd",
    name: "OECD",
    color: "#008080",
    description: "Organisation for Economic Co-operation and Development - forum of countries committed to democracy and market economy",
    members: [
      { code: "AUS", joinYear: 1971 }, { code: "AUT", joinYear: 1961 },
      { code: "BEL", joinYear: 1961 }, { code: "CAN", joinYear: 1961 },
      { code: "CHL", joinYear: 2010 }, { code: "COL", joinYear: 2020 },
      { code: "CRI", joinYear: 2021 }, { code: "CZE", joinYear: 1995 },
      { code: "DNK", joinYear: 1961 }, { code: "EST", joinYear: 2010 },
      { code: "FIN", joinYear: 1969 }, { code: "FRA", joinYear: 1961 },
      { code: "DEU", joinYear: 1961 }, { code: "GRC", joinYear: 1961 },
      { code: "HUN", joinYear: 1996 }, { code: "ISL", joinYear: 1961 },
      { code: "IRL", joinYear: 1961 }, { code: "ISR", joinYear: 2010 },
      { code: "ITA", joinYear: 1962 }, { code: "JPN", joinYear: 1964 },
      { code: "KOR", joinYear: 1996 }, { code: "LVA", joinYear: 2016 },
      { code: "LTU", joinYear: 2018 }, { code: "LUX", joinYear: 1961 },
      { code: "MEX", joinYear: 1994 }, { code: "NLD", joinYear: 1961 },
      { code: "NZL", joinYear: 1973 }, { code: "NOR", joinYear: 1961 },
      { code: "POL", joinYear: 1996 }, { code: "PRT", joinYear: 1961 },
      { code: "SVK", joinYear: 2000 }, { code: "SVN", joinYear: 2010 },
      { code: "ESP", joinYear: 1961 }, { code: "SWE", joinYear: 1961 },
      { code: "CHE", joinYear: 1961 }, { code: "TUR", joinYear: 1961 },
      { code: "GBR", joinYear: 1961 }, { code: "USA", joinYear: 1961 }
    ]
  }
];