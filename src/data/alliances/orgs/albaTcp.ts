import { Alliance } from "../../alliance-types";

const memberCodes = ["ATG", "BOL", "CUB", "DMA", "GRD", "NIC", "KNA", "LCA", "VCT", "VEN"];

export const albaTcp: Alliance = {
  id: "alba-tcp",
  name: "ALBA-TCP",
  color: "hsl(348, 69%, 42%)",
  description: "Bolivarian Alliance for the Peoples of Our America, a left-aligned political and economic bloc in Latin America and the Caribbean.",
  categories: ["politiek", "handel"],
  wikipediaTitle: "ALBA",
  kind: "organization",
  formality: "formal",
  lensIds: ["influence", "trade", "alliances"],
  foundedYear: 2004,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "medium",
  sourceRefs: [
    {
      title: "ALBA-TCP",
      url: "https://www.albatcp.org/",
      checkedAt: "2026-07-09",
    },
  ],
  members: memberCodes.map((code) => ({ code })),
};
