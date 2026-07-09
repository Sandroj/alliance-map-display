import { Alliance } from "../../alliance-types";

export const malaccaChokepoint: Alliance = {
  id: "strait-of-malacca",
  name: "Strait of Malacca",
  color: "hsl(186, 67%, 34%)",
  description: "Critical Indo-Pacific shipping chokepoint linking the Indian Ocean to East Asia, central to China, Japan, Korea and ASEAN energy security.",
  categories: ["handel", "militair"],
  kind: "route",
  formality: "analytical",
  lensIds: ["chokepoints", "trade", "energy-resources", "security"],
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "EIA: Strait of Malacca",
      url: "https://www.eia.gov/international/analysis/special-topics/World_Oil_Transit_Chokepoints",
      checkedAt: "2026-07-09",
    },
  ],
  members: [
    { code: "MYS" }, { code: "SGP" }, { code: "IDN" },
    { code: "CHN", status: "partner" }, { code: "JPN", status: "partner" }, { code: "KOR", status: "partner" },
  ],
};
