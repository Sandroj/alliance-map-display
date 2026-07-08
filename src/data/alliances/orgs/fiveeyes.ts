import { Alliance } from "../../alliance-types";

export const fiveeyes: Alliance = {
  id: "fiveeyes",
  name: "Five Eyes",
  color: "hsl(214, 84%, 42%)",
  description: "Intelligence-sharing network between Australia, Canada, New Zealand, the United Kingdom and the United States, rooted in the UKUSA signals intelligence arrangements.",
  categories: ["militair", "politiek"],
  wikipediaTitle: "Five Eyes",
  kind: "treaty",
  formality: "formal",
  lensIds: ["security", "influence"],
  asOf: "2026-07-08",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "UKUSA Agreement release, UK National Archives",
      url: "https://www.nationalarchives.gov.uk/ukusa/",
      checkedAt: "2026-07-08",
    },
  ],
  members: [
    { code: "AUS", joinYear: 1956 },
    { code: "CAN", joinYear: 1956 },
    { code: "NZL", joinYear: 1956 },
    { code: "GBR", joinYear: 1946 },
    { code: "USA", joinYear: 1946 },
  ],
};
