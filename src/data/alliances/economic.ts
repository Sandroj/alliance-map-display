import { Alliance } from "../alliance-types";

export const economicAlliances: Alliance[] = [
  {
    id: "bri",
    name: "Belt and Road Initiative",
    color: "#CD853F",
    description: "China's global infrastructure development strategy",
    members: [
      { code: "CHN", joinYear: 2013 }, { code: "KAZ", joinYear: 2013 },
      { code: "RUS", joinYear: 2015 }, { code: "PAK", joinYear: 2013 },
      { code: "IRN", joinYear: 2016 }, { code: "TUR", joinYear: 2015 },
      { code: "IDN", joinYear: 2017 }
    ]
  },
  {
    id: "asean",
    name: "ASEAN",
    color: "#FF4500",
    description: "Association of Southeast Asian Nations - promotes economic growth and cultural development",
    members: [
      { code: "BRN", joinYear: 1984 }, { code: "KHM", joinYear: 1999 },
      { code: "IDN", joinYear: 1967 }, { code: "LAO", joinYear: 1997 },
      { code: "MYS", joinYear: 1967 }, { code: "MMR", joinYear: 1997 },
      { code: "PHL", joinYear: 1967 }, { code: "SGP", joinYear: 1967 },
      { code: "THA", joinYear: 1967 }, { code: "VNM", joinYear: 1995 }
    ]
  }
];