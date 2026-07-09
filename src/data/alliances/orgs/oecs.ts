import { Alliance } from "../../alliance-types";

const memberCodes = ["ATG", "DMA", "GRD", "MSR", "KNA", "LCA", "VCT"];

export const oecs: Alliance = {
  id: "oecs",
  name: "OECS",
  color: "hsl(178, 58%, 31%)",
  description: "Organisation of Eastern Caribbean States, a compact integration body with shared institutions and deep policy coordination among small island states.",
  categories: ["handel", "politiek"],
  wikipediaTitle: "Organisation of Eastern Caribbean States",
  kind: "organization",
  formality: "formal",
  lensIds: ["trade", "alliances", "influence"],
  foundedYear: 1981,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "OECS member states",
      url: "https://www.oecs.org/en/who-we-are/member-states",
      checkedAt: "2026-07-09",
    },
  ],
  members: memberCodes.map((code) => ({ code })),
};
