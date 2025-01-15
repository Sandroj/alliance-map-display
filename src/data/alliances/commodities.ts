import { Alliance } from "../alliance-types";

export const commoditiesAlliances: Alliance[] = [
  {
    id: "msp",
    name: "Mineral Security Partnership",
    color: "#B8860B",
    description: "Partnership to secure critical mineral supply chains",
    members: [
      { code: "USA", joinYear: 2022 }, { code: "AUS", joinYear: 2022 },
      { code: "CAN", joinYear: 2022 }, { code: "FIN", joinYear: 2022 },
      { code: "FRA", joinYear: 2022 }, { code: "DEU", joinYear: 2022 },
      { code: "JPN", joinYear: 2022 }, { code: "KOR", joinYear: 2022 },
      { code: "SWE", joinYear: 2022 }, { code: "GBR", joinYear: 2022 }
    ]
  },
  {
    id: "opec",
    name: "OPEC",
    color: "#006400",
    description: "Organization of Petroleum Exporting Countries",
    members: [
      { code: "DZA", joinYear: 1969 }, { code: "AGO", joinYear: 2007 },
      { code: "COG", joinYear: 2018 }, { code: "GNQ", joinYear: 2017 },
      { code: "GAB", joinYear: 1975 }, { code: "IRN", joinYear: 1960 },
      { code: "IRQ", joinYear: 1960 }, { code: "KWT", joinYear: 1960 },
      { code: "LBY", joinYear: 1962 }, { code: "NGA", joinYear: 1971 },
      { code: "SAU", joinYear: 1960 }, { code: "ARE", joinYear: 1967 },
      { code: "VEN", joinYear: 1960 }
    ]
  }
];