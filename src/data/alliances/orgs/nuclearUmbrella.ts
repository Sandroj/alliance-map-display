import { Alliance } from "../../alliance-types";

const recipientCodes = [
  "ALB", "BEL", "BGR", "CAN", "HRV", "CZE", "DNK", "EST", "FIN", "DEU",
  "GRC", "HUN", "ISL", "ITA", "LVA", "LTU", "LUX", "MNE", "NLD", "MKD",
  "NOR", "POL", "PRT", "ROU", "SVK", "SVN", "ESP", "SWE", "TUR",
  "AUS", "JPN", "KOR",
];

export const nuclearUmbrella: Alliance = {
  id: "nuclear-umbrella",
  name: "Nuclear umbrella",
  color: "hsl(294, 48%, 39%)",
  description: "Analytical layer for countries covered by explicit extended nuclear deterrence arrangements, mainly NATO and key US Indo-Pacific allies.",
  categories: ["militair", "politiek"],
  kind: "status",
  formality: "analytical",
  lensIds: ["security", "influence"],
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "medium",
  editorialNote: "France, the United Kingdom and the United States are shown as provider states; other highlighted countries are umbrella recipients.",
  sourceRefs: [
    {
      title: "NATO: nuclear deterrence",
      url: "https://www.nato.int/cps/en/natohq/topics_50068.htm",
      checkedAt: "2026-07-09",
    },
    {
      title: "U.S. Department of Defense: extended deterrence",
      url: "https://www.defense.gov/",
      checkedAt: "2026-07-09",
    },
  ],
  members: [
    { code: "USA", status: "partner" },
    { code: "GBR", status: "partner" },
    { code: "FRA", status: "partner" },
    ...recipientCodes.map((code) => ({ code })),
  ],
};
