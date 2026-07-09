import { Alliance } from "../../alliance-types";

const memberCodes = [
  "USA",
  "ALB", "BEL", "BGR", "CAN", "HRV", "CZE", "DNK", "EST", "FIN", "FRA",
  "DEU", "GRC", "HUN", "ISL", "ITA", "LVA", "LTU", "LUX", "MNE", "NLD",
  "MKD", "NOR", "POL", "PRT", "ROU", "SVK", "SVN", "ESP", "SWE", "TUR", "GBR",
  "AUS", "NZL", "JPN", "KOR", "PHL", "THA",
];

export const usTreatyAllies: Alliance = {
  id: "us-treaty-allies",
  name: "US treaty allies",
  color: "hsl(352, 73%, 43%)",
  description: "Countries covered by formal United States collective-defence treaty relationships, shown as a strategic US security layer rather than a single institution.",
  categories: ["militair", "politiek"],
  kind: "status",
  formality: "binding",
  lensIds: ["security", "alliances", "influence"],
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "medium",
  editorialNote: "Analytical layer combining NATO allies and major bilateral or trilateral US mutual defence treaty allies in the Indo-Pacific.",
  sourceRefs: [
    {
      title: "U.S. State Department: security cooperation with allies and partners",
      url: "https://www.state.gov/u-s-security-cooperation-with-allies-and-partners/",
      checkedAt: "2026-07-09",
    },
  ],
  members: memberCodes.map((code) => ({ code })),
};
