import { Alliance } from "../alliance-types";

export const asiaPacificAlliances: Alliance[] = [
  {
    id: "asean",
    name: "ASEAN",
    color: "#FF4500",
    description: "Association of Southeast Asian Nations - promotes economic growth, social progress, and cultural development in Southeast Asia",
    members: [
      { code: "BRN", joinYear: 1984 }, { code: "KHM", joinYear: 1999 },
      { code: "IDN", joinYear: 1967 }, { code: "LAO", joinYear: 1997 },
      { code: "MYS", joinYear: 1967 }, { code: "MMR", joinYear: 1997 },
      { code: "PHL", joinYear: 1967 }, { code: "SGP", joinYear: 1967 },
      { code: "THA", joinYear: 1967 }, { code: "VNM", joinYear: 1995 }
    ]
  },
  {
    id: "aukus",
    name: "AUKUS",
    color: "#483D8B",
    description: "Trilateral security pact between Australia, the UK, and the US focusing on military capability and technology sharing",
    members: [
      { code: "AUS", joinYear: 2021 }, { code: "GBR", joinYear: 2021 },
      { code: "USA", joinYear: 2021 }
    ]
  },
  {
    id: "quad",
    name: "QUAD",
    color: "#20B2AA",
    description: "Strategic dialogue between Australia, India, Japan, and the United States focusing on maintaining a free Indo-Pacific region",
    members: [
      { code: "AUS", joinYear: 2007 }, { code: "IND", joinYear: 2007 },
      { code: "JPN", joinYear: 2007 }, { code: "USA", joinYear: 2007 }
    ]
  },
  {
    id: "rcep",
    name: "RCEP",
    color: "#4B0082",
    description: "Regional Comprehensive Economic Partnership - world's largest trade bloc, promoting economic integration in the Asia-Pacific region",
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
  }
];