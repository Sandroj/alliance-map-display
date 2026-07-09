import { Alliance } from "../../alliance-types";

const memberCodes = [
  "AUS", "BRN", "CAN", "CHL", "CHN", "HKG", "IDN", "JPN", "KOR", "MYS",
  "MEX", "NZL", "PNG", "PER", "PHL", "RUS", "SGP", "TWN", "THA", "USA", "VNM",
];

export const apec: Alliance = {
  id: "apec",
  name: "APEC",
  color: "hsl(203, 69%, 39%)",
  description: "Asia-Pacific Economic Cooperation: 21 member economies coordinating trade facilitation, standards and economic integration across the Pacific Rim.",
  categories: ["handel", "politiek"],
  wikipediaTitle: "Asia-Pacific Economic Cooperation",
  kind: "forum",
  formality: "formal",
  lensIds: ["trade", "alliances", "influence"],
  foundedYear: 1989,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "APEC member economies",
      url: "https://www.apec.org/about-us/about-apec/member-economies",
      checkedAt: "2026-07-09",
    },
  ],
  members: memberCodes.map((code) => ({ code })),
};
