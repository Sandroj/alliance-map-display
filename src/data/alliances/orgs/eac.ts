import { Alliance } from "../../alliance-types";

const memberCodes = ["BDI", "COD", "KEN", "RWA", "SOM", "SSD", "TZA", "UGA"];

export const eac: Alliance = {
  id: "eac",
  name: "East African Community",
  color: "hsl(135, 50%, 35%)",
  description: "East African Community, a deep integration project spanning customs union, common market ambitions and security-sensitive regional politics.",
  categories: ["handel", "politiek"],
  wikipediaTitle: "East African Community",
  kind: "organization",
  formality: "formal",
  lensIds: ["trade", "influence", "alliances", "security"],
  foundedYear: 2000,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "EAC partner states",
      url: "https://www.eac.int/eac-partner-states",
      checkedAt: "2026-07-09",
    },
  ],
  members: memberCodes.map((code) => ({ code })),
};
