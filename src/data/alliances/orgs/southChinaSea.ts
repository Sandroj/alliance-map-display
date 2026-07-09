import { Alliance } from "../../alliance-types";

export const southChinaSea: Alliance = {
  id: "south-china-sea-dispute",
  name: "South China Sea dispute",
  color: "hsl(190, 70%, 34%)",
  description: "Claimants and directly exposed states in the South China Sea, where maritime law, energy, fisheries and naval access collide.",
  categories: ["politiek", "militair", "handel"],
  kind: "status",
  formality: "analytical",
  lensIds: ["conflict-disputes", "chokepoints", "energy-resources", "security"],
  asOf: "2026-07-09",
  reviewCadence: "event-driven",
  confidence: "medium",
  sourceRefs: [
    {
      title: "Asia Maritime Transparency Initiative: South China Sea",
      url: "https://amti.csis.org/",
      checkedAt: "2026-07-09",
    },
  ],
  members: [
    { code: "CHN" }, { code: "TWN" }, { code: "BRN" }, { code: "MYS" },
    { code: "PHL" }, { code: "VNM" }, { code: "IDN", status: "partner" },
  ],
};
