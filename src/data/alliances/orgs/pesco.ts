import { Alliance } from "../../alliance-types";

const memberCodes = [
  "AUT", "BEL", "BGR", "HRV", "CYP", "CZE", "DNK", "EST", "FIN", "FRA",
  "DEU", "GRC", "HUN", "IRL", "ITA", "LVA", "LTU", "LUX", "NLD", "POL",
  "PRT", "ROU", "SVK", "SVN", "ESP", "SWE",
];

export const pesco: Alliance = {
  id: "pesco",
  name: "PESCO",
  color: "hsl(225, 74%, 45%)",
  description: "EU Permanent Structured Cooperation in defence, covering 26 participating EU member states and joint capability projects.",
  categories: ["militair", "politiek"],
  wikipediaTitle: "Permanent Structured Cooperation",
  kind: "initiative",
  formality: "formal",
  lensIds: ["security", "alliances"],
  foundedYear: 2017,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "PESCO: participating member states",
      url: "https://www.pesco.europa.eu/",
      checkedAt: "2026-07-09",
    },
  ],
  members: memberCodes.map((code) => ({ code })),
};
