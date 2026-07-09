import { Alliance } from "../../alliance-types";

export const redSeaGulfAden: Alliance = {
  id: "red-sea-gulf-of-aden-risk",
  name: "Red Sea and Gulf of Aden risk",
  color: "hsl(14, 72%, 42%)",
  description: "States directly exposed to Red Sea, Bab el-Mandeb and Gulf of Aden disruption from Yemen, shipping attacks and regional escalation.",
  categories: ["militair", "handel", "politiek"],
  kind: "route",
  formality: "analytical",
  lensIds: ["conflict-disputes", "chokepoints", "trade", "security"],
  asOf: "2026-07-09",
  reviewCadence: "event-driven",
  confidence: "medium",
  sourceRefs: [
    {
      title: "U.S. Energy Information Administration: World oil transit chokepoints",
      url: "https://www.eia.gov/international/analysis/special-topics/World_Oil_Transit_Chokepoints",
      checkedAt: "2026-07-09",
    },
  ],
  members: [
    { code: "YEM" }, { code: "DJI" }, { code: "ERI" }, { code: "EGY" },
    { code: "SAU" }, { code: "SOM" }, { code: "SDN" }, { code: "ISR", status: "partner" },
  ],
};
