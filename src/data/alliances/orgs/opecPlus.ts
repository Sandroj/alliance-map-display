import { Alliance } from "../../alliance-types";

const opecCodes = ["DZA", "COG", "GNQ", "GAB", "IRN", "IRQ", "KWT", "LBY", "NGA", "SAU", "ARE", "VEN"];
const partnerCodes = ["AZE", "BHR", "BRN", "KAZ", "MYS", "MEX", "OMN", "RUS", "SSD", "SDN"];

export const opecPlus: Alliance = {
  id: "opec-plus",
  name: "OPEC+",
  color: "hsl(28, 73%, 36%)",
  description: "OPEC members plus non-OPEC producers coordinating oil supply through the Declaration of Cooperation framework.",
  categories: ["handel", "politiek"],
  wikipediaTitle: "OPEC+",
  kind: "forum",
  formality: "formal",
  lensIds: ["energy-resources", "trade", "influence", "alliances"],
  foundedYear: 2016,
  asOf: "2026-07-09",
  reviewCadence: "event-driven",
  confidence: "medium",
  sourceRefs: [
    {
      title: "OPEC: Declaration of Cooperation",
      url: "https://www.opec.org/opec_web/en/about_us/6339.htm",
      checkedAt: "2026-07-09",
    },
  ],
  members: [
    ...opecCodes.map((code) => ({ code })),
    ...partnerCodes.map((code) => ({ code, status: "partner" as const })),
  ],
};
