import { Alliance } from "../../alliance-types";

const memberCodes = ["DJI", "ERI", "ETH", "KEN", "SOM", "SSD", "SDN", "UGA"];

export const igad: Alliance = {
  id: "igad",
  name: "IGAD",
  color: "hsl(166, 45%, 32%)",
  description: "Intergovernmental Authority on Development, central to Horn of Africa diplomacy, drought resilience, migration and conflict mediation.",
  categories: ["politiek", "handel"],
  wikipediaTitle: "Intergovernmental Authority on Development",
  kind: "organization",
  formality: "formal",
  lensIds: ["influence", "trade", "security", "alliances"],
  foundedYear: 1996,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "IGAD member states",
      url: "https://igad.int/member-states/",
      checkedAt: "2026-07-09",
    },
  ],
  members: memberCodes.map((code) => ({ code })),
};
