import { Alliance } from "../../alliance-types";

const memberCodes = [
  "AUS", "BGD", "COM", "FRA", "IND", "IDN", "IRN", "KEN", "MDG", "MYS",
  "MDV", "MUS", "MOZ", "OMN", "SYC", "SGP", "SOM", "ZAF", "LKA", "TZA",
  "THA", "ARE", "YEM",
];

export const iora: Alliance = {
  id: "iora",
  name: "IORA",
  color: "hsl(207, 66%, 34%)",
  description: "Indian Ocean Rim Association, connecting maritime trade, security, blue economy and diplomatic influence across the Indian Ocean.",
  categories: ["handel", "politiek"],
  wikipediaTitle: "Indian Ocean Rim Association",
  kind: "organization",
  formality: "formal",
  lensIds: ["trade", "chokepoints", "influence", "alliances"],
  foundedYear: 1997,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "IORA member states",
      url: "https://www.iora.int/en/about/member-states",
      checkedAt: "2026-07-09",
    },
  ],
  members: memberCodes.map((code) => ({ code })),
};
