import { Alliance } from "../alliance-types";

export const generalAlliances: Alliance[] = [
  {
    id: "un",
    name: "United Nations",
    color: "#4B92DB",
    description: "International organization promoting peace, security, and cooperation between nations",
    members: [
      { code: "USA", joinYear: 1945 }, { code: "GBR", joinYear: 1945 },
      { code: "FRA", joinYear: 1945 }, { code: "RUS", joinYear: 1945 },
      { code: "CHN", joinYear: 1945 }
      // Note: The UN has 193 member states, this is a simplified list
    ]
  },
  {
    id: "g20",
    name: "G20",
    color: "#800080",
    description: "Forum for international economic cooperation",
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