import { Alliance } from './types';

export const globalAlliances: Alliance[] = [
  {
    id: "g7",
    name: "G7",
    color: "#2E5090",
    members: [
      { code: "USA", joinYear: 1976 }, { code: "GBR", joinYear: 1976 },
      { code: "FRA", joinYear: 1976 }, { code: "DEU", joinYear: 1976 },
      { code: "ITA", joinYear: 1976 }, { code: "JPN", joinYear: 1976 },
      { code: "CAN", joinYear: 1976 }
    ]
  },
  {
    id: "g20",
    name: "G20",
    color: "#FF9F1C",
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
  }
];