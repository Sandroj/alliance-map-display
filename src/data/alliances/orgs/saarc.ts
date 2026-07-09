import { Alliance } from "../../alliance-types";

const memberCodes = ["AFG", "BGD", "BTN", "IND", "MDV", "NPL", "PAK", "LKA"];

export const saarc: Alliance = {
  id: "saarc",
  name: "SAARC",
  color: "hsl(218, 54%, 42%)",
  description: "South Asian Association for Regional Cooperation; politically constrained but still the canonical South Asian regional institution.",
  categories: ["handel", "politiek"],
  wikipediaTitle: "South Asian Association for Regional Cooperation",
  kind: "organization",
  formality: "formal",
  lensIds: ["trade", "influence", "alliances"],
  foundedYear: 1985,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "SAARC Secretariat",
      url: "https://saarc-sec.org/index.php/about-saarc/about-saarc",
      checkedAt: "2026-07-09",
    },
  ],
  members: memberCodes.map((code) => ({ code })),
};
