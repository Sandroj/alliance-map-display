import { Alliance } from "../../alliance-types";

const memberCodes = ["AGO", "BRA", "CPV", "GNQ", "GNB", "MOZ", "PRT", "STP", "TLS"];

export const cplp: Alliance = {
  id: "cplp",
  name: "CPLP",
  color: "hsl(151, 48%, 31%)",
  description: "Community of Portuguese Language Countries, a Lusophone diplomatic and cultural network spanning the Atlantic, Africa and Timor-Leste.",
  categories: ["politiek"],
  wikipediaTitle: "Community of Portuguese Language Countries",
  kind: "organization",
  formality: "formal",
  lensIds: ["influence", "alliances"],
  foundedYear: 1996,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "CPLP",
      url: "https://www.cplp.org/",
      checkedAt: "2026-07-09",
    },
  ],
  members: memberCodes.map((code) => ({ code })),
};
