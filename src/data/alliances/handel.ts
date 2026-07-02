import { Alliance } from "../alliance-types";

export const handelAlliances: Alliance[] = [
  {
    id: "atlanticpact",
    name: "Atlantic Cooperation Pact",
    color: "#4682B4",
    description: "Strategic partnership between North Atlantic nations",
    category: "handel",
    members: [
      { code: "USA", joinYear: 2023 }, { code: "CAN", joinYear: 2023 },
      { code: "GBR", joinYear: 2023 }, { code: "NOR", joinYear: 2023 },
      { code: "ISL", joinYear: 2023 }
    ]
  },
  {
    id: "bri",
    name: "Belt and Road Initiative",
    color: "#CD853F",
    description: "China's global infrastructure development strategy to invest in nearly 70 countries and organizations",
    category: "handel",
    members: [
      { code: "CHN", joinYear: 2013 }, { code: "KAZ", joinYear: 2013 },
      { code: "RUS", joinYear: 2015 }, { code: "PAK", joinYear: 2013 },
      { code: "IRN", joinYear: 2016 }, { code: "TUR", joinYear: 2015 },
      { code: "IDN", joinYear: 2017 }, { code: "MYS", joinYear: 2016 },
      { code: "VNM", joinYear: 2015 }, { code: "THA", joinYear: 2016 },
      { code: "LAO", joinYear: 2016 }, { code: "KHM", joinYear: 2016 },
      { code: "MMR", joinYear: 2017 }, { code: "BGD", joinYear: 2016 },
      { code: "NPL", joinYear: 2017 }, { code: "LKA", joinYear: 2017 },
      { code: "SAU", joinYear: 2019 }, { code: "ARE", joinYear: 2018 },
      { code: "EGY", joinYear: 2016 }, { code: "ETH", joinYear: 2018 },
      { code: "KEN", joinYear: 2017 }, { code: "ZAF", joinYear: 2015 },
      { code: "ITA", joinYear: 2019 }, { code: "GRC", joinYear: 2018 },
      { code: "HUN", joinYear: 2015 }, { code: "POL", joinYear: 2015 },
      { code: "CZE", joinYear: 2015 }
    ]
  },
  {
    id: "brics",
    name: "BRICS",
    color: "#9932CC",
    description: "Major emerging economies group comprising Brazil, Russia, India, China, South Africa, and new members",
    category: "handel",
    members: [
      { code: "BRA", joinYear: 2009 }, { code: "RUS", joinYear: 2009 },
      { code: "IND", joinYear: 2009 }, { code: "CHN", joinYear: 2009 },
      { code: "ZAF", joinYear: 2010 }, { code: "EGY", joinYear: 2024 },
      { code: "ETH", joinYear: 2024 }, { code: "IRN", joinYear: 2024 },
      { code: "SAU", joinYear: 2024 }, { code: "ARE", joinYear: 2024 }
    ]
  },
  {
    id: "cptpp",
    name: "CPTPP",
    color: "#6B4423",
    description: "Comprehensive and Progressive Agreement for Trans-Pacific Partnership - promotes economic integration and free trade in the Pacific region",
    category: "handel",
    members: [
      { code: "AUS", joinYear: 2018 }, { code: "BRN", joinYear: 2018 },
      { code: "CAN", joinYear: 2018 }, { code: "CHL", joinYear: 2018 },
      { code: "JPN", joinYear: 2018 }, { code: "MYS", joinYear: 2018 },
      { code: "MEX", joinYear: 2018 }, { code: "NZL", joinYear: 2018 },
      { code: "PER", joinYear: 2018 }, { code: "SGP", joinYear: 2018 },
      { code: "VNM", joinYear: 2018 }
    ]
  },
  {
    id: "oecd",
    name: "OECD",
    color: "#008080",
    description: "Organisation for Economic Co-operation and Development - forum of countries committed to democracy and market economy",
    category: "handel",
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
  },
  {
    id: "opec",
    name: "OPEC",
    color: "#006400",
    description: "Organization of Petroleum Exporting Countries - coordinates petroleum policies among member countries",
    category: "handel",
    members: [
      { code: "DZA", joinYear: 1969 }, { code: "AGO", joinYear: 2007 },
      { code: "COG", joinYear: 2018 }, { code: "GNQ", joinYear: 2017 },
      { code: "GAB", joinYear: 1975 }, { code: "IRN", joinYear: 1960 },
      { code: "IRQ", joinYear: 1960 }, { code: "KWT", joinYear: 1960 },
      { code: "LBY", joinYear: 1962 }, { code: "NGA", joinYear: 1971 },
      { code: "SAU", joinYear: 1960 }, { code: "ARE", joinYear: 1967 },
      { code: "VEN", joinYear: 1960 }
    ]
  },
  {
    id: "rcep",
    name: "RCEP",
    color: "#4B0082",
    description: "Regional Comprehensive Economic Partnership - world's largest trade bloc, promoting economic integration in the Asia-Pacific region",
    category: "handel",
    members: [
      { code: "AUS", joinYear: 2022 }, { code: "BRN", joinYear: 2022 },
      { code: "KHM", joinYear: 2022 }, { code: "CHN", joinYear: 2022 },
      { code: "IDN", joinYear: 2022 }, { code: "JPN", joinYear: 2022 },
      { code: "KOR", joinYear: 2022 }, { code: "LAO", joinYear: 2022 },
      { code: "MYS", joinYear: 2022 }, { code: "MMR", joinYear: 2022 },
      { code: "NZL", joinYear: 2022 }, { code: "PHL", joinYear: 2022 },
      { code: "SGP", joinYear: 2022 }, { code: "THA", joinYear: 2022 },
      { code: "VNM", joinYear: 2022 }
    ]
  },
  {
    id: "usmca",
    name: "USMCA",
    color: "#2E8B57",
    description: "United States-Mexico-Canada Agreement - North American free trade agreement replacing NAFTA",
    category: "handel",
    members: [
      { code: "USA", joinYear: 2020 }, { code: "MEX", joinYear: 2020 },
      { code: "CAN", joinYear: 2020 }
    ]
  }
];
