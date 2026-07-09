import { Alliance } from "../../alliance-types";

const memberCodes = ["DZA", "BOL", "EGY", "GNQ", "IRN", "LBY", "NGA", "QAT", "RUS", "TTO", "ARE", "VEN"];
const observerCodes = ["AGO", "AZE", "IRQ", "KAZ", "MYS", "MRT", "MOZ", "PER", "SEN"];

export const gecf: Alliance = {
  id: "gecf",
  name: "Gas Exporting Countries Forum",
  color: "hsl(196, 56%, 33%)",
  description: "Gas producer forum linking major natural gas exporters and observers, relevant for LNG, pipeline politics and energy security.",
  categories: ["handel", "politiek"],
  wikipediaTitle: "Gas Exporting Countries Forum",
  kind: "forum",
  formality: "formal",
  lensIds: ["energy-resources", "trade", "influence", "alliances"],
  foundedYear: 2001,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "GECF members",
      url: "https://www.gecf.org/about/members",
      checkedAt: "2026-07-09",
    },
  ],
  members: [
    ...memberCodes.map((code) => ({ code })),
    ...observerCodes.map((code) => ({ code, status: "observer" as const })),
  ],
};
