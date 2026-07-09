import { Alliance } from "../../alliance-types";

const consultativePartyCodes = [
  "ARG", "AUS", "BEL", "BRA", "BGR", "CHL", "CHN", "CZE", "ECU", "FIN",
  "FRA", "DEU", "IND", "ITA", "JPN", "KOR", "NLD", "NZL", "NOR", "PER",
  "POL", "RUS", "ZAF", "ESP", "SWE", "UKR", "GBR", "USA", "URY",
];

export const antarcticTreaty: Alliance = {
  id: "antarctic-treaty-system",
  name: "Antarctic Treaty System",
  color: "hsl(188, 35%, 37%)",
  description: "Consultative parties of the Antarctic Treaty System, governing the world's largest demilitarized scientific commons and future resource questions.",
  categories: ["politiek", "militair"],
  wikipediaTitle: "Antarctic Treaty System",
  kind: "treaty",
  formality: "binding",
  lensIds: ["energy-resources", "influence", "conflict-disputes", "alliances"],
  foundedYear: 1959,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "Antarctic Treaty Secretariat: parties",
      url: "https://www.ats.aq/devAS/Parties?lang=e",
      checkedAt: "2026-07-09",
    },
  ],
  members: consultativePartyCodes.map((code) => ({ code })),
};
