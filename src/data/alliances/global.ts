import { Alliance } from "../alliance-types";

export const globalAlliances: Alliance[] = [
  {
    id: "africacorps",
    name: "Africa Corps",
    color: "#8B4513",
    description: "Russian military organization active in several African countries",
    members: [
      { code: "CAF", joinYear: 2023 }, { code: "MLI", joinYear: 2023 },
      { code: "BFA", joinYear: 2023 }, { code: "NER", joinYear: 2023 }
    ]
  },
  {
    id: "africanunion",
    name: "African Union",
    color: "#228B22",
    description: "Continental union consisting of 55 member states in Africa",
    members: [
      { code: "DZA", joinYear: 1963 }, { code: "AGO", joinYear: 1975 },
      { code: "BEN", joinYear: 1963 }, { code: "BWA", joinYear: 1966 },
      { code: "BFA", joinYear: 1963 }, { code: "BDI", joinYear: 1963 },
      { code: "CMR", joinYear: 1963 }, { code: "CPV", joinYear: 1976 },
      { code: "CAF", joinYear: 1963 }, { code: "TCD", joinYear: 1963 },
      { code: "COM", joinYear: 1975 }, { code: "COG", joinYear: 1963 },
      { code: "CIV", joinYear: 1963 }, { code: "COD", joinYear: 1963 },
      { code: "DJI", joinYear: 1977 }, { code: "EGY", joinYear: 1963 },
      { code: "GNQ", joinYear: 1968 }, { code: "ERI", joinYear: 1993 },
      { code: "ETH", joinYear: 1963 }, { code: "GAB", joinYear: 1963 },
      { code: "GMB", joinYear: 1965 }, { code: "GHA", joinYear: 1963 },
      { code: "GIN", joinYear: 1963 }, { code: "GNB", joinYear: 1973 },
      { code: "KEN", joinYear: 1963 }, { code: "LSO", joinYear: 1966 },
      { code: "LBR", joinYear: 1963 }, { code: "LBY", joinYear: 1963 },
      { code: "MDG", joinYear: 1963 }, { code: "MWI", joinYear: 1964 },
      { code: "MLI", joinYear: 1963 }, { code: "MRT", joinYear: 1963 },
      { code: "MUS", joinYear: 1968 }, { code: "MAR", joinYear: 1963 },
      { code: "MOZ", joinYear: 1975 }, { code: "NAM", joinYear: 1990 },
      { code: "NER", joinYear: 1963 }, { code: "NGA", joinYear: 1963 },
      { code: "RWA", joinYear: 1963 }, { code: "STP", joinYear: 1975 },
      { code: "SEN", joinYear: 1963 }, { code: "SYC", joinYear: 1976 },
      { code: "SLE", joinYear: 1963 }, { code: "SOM", joinYear: 1963 },
      { code: "ZAF", joinYear: 1994 }, { code: "SSD", joinYear: 2011 },
      { code: "SDN", joinYear: 1963 }, { code: "SWZ", joinYear: 1968 },
      { code: "TZA", joinYear: 1963 }, { code: "TGO", joinYear: 1963 },
      { code: "TUN", joinYear: 1963 }, { code: "UGA", joinYear: 1963 },
      { code: "ZMB", joinYear: 1964 }, { code: "ZWE", joinYear: 1980 }
    ]
  },
  {
    id: "atlanticpact",
    name: "Atlantic Cooperation Pact",
    color: "#4682B4",
    description: "Strategic partnership between North Atlantic nations",
    members: [
      { code: "USA", joinYear: 2023 }, { code: "CAN", joinYear: 2023 },
      { code: "GBR", joinYear: 2023 }, { code: "NOR", joinYear: 2023 },
      { code: "ISL", joinYear: 2023 }
    ]
  },
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
