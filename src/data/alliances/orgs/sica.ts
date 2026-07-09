import { Alliance } from "../../alliance-types";

const memberCodes = ["BLZ", "CRI", "DOM", "SLV", "GTM", "HND", "NIC", "PAN"];

export const sica: Alliance = {
  id: "sica",
  name: "SICA",
  color: "hsl(185, 62%, 34%)",
  description: "Central American Integration System, the key regional institution for Central America and the Dominican Republic.",
  categories: ["politiek", "handel"],
  wikipediaTitle: "Central American Integration System",
  kind: "organization",
  formality: "formal",
  lensIds: ["influence", "trade", "alliances"],
  foundedYear: 1991,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "SICA member states",
      url: "https://www.sica.int/miembros",
      checkedAt: "2026-07-09",
    },
  ],
  members: memberCodes.map((code) => ({ code })),
};
