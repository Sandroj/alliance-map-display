import { Alliance } from "../../alliance-types";

export const hormuzChokepoint: Alliance = {
  id: "strait-of-hormuz",
  name: "Strait of Hormuz",
  color: "hsl(32, 74%, 36%)",
  description: "Oil and LNG chokepoint between Iran, Oman and the Gulf monarchies; a small waterway with global energy-price leverage.",
  categories: ["handel", "militair", "politiek"],
  kind: "route",
  formality: "analytical",
  lensIds: ["chokepoints", "energy-resources", "security", "trade"],
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "EIA: Strait of Hormuz",
      url: "https://www.eia.gov/international/analysis/special-topics/World_Oil_Transit_Chokepoints",
      checkedAt: "2026-07-09",
    },
  ],
  members: [
    { code: "IRN" }, { code: "OMN" }, { code: "ARE" }, { code: "QAT", status: "partner" },
    { code: "KWT", status: "partner" }, { code: "SAU", status: "partner" },
  ],
};
