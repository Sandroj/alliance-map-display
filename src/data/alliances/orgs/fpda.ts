import { Alliance } from "../../alliance-types";

export const fpda: Alliance = {
  id: "fpda",
  name: "FPDA",
  color: "hsl(177, 70%, 30%)",
  description: "Five Power Defence Arrangements linking Australia, Malaysia, New Zealand, Singapore and the United Kingdom through consultation and recurring defence exercises.",
  categories: ["militair", "politiek"],
  wikipediaTitle: "Five Power Defence Arrangements",
  kind: "treaty",
  formality: "formal",
  lensIds: ["security", "alliances", "influence"],
  foundedYear: 1971,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "Five Power Defence Arrangements",
      url: "https://www.fivepowerdefencearrangements.org/",
      checkedAt: "2026-07-09",
    },
  ],
  members: [
    { code: "AUS" }, { code: "MYS" }, { code: "NZL" }, { code: "SGP" }, { code: "GBR" },
  ],
};
