import { Alliance } from "../../alliance-types";

const memberCodes = [
  "ATG", "BHS", "BRB", "BLZ", "DMA", "GRD", "GUY", "HTI", "JAM",
  "MSR", "KNA", "LCA", "VCT", "SUR", "TTO",
];

export const caricom: Alliance = {
  id: "caricom",
  name: "CARICOM",
  color: "hsl(190, 64%, 34%)",
  description: "Caribbean Community and Common Market, central to Caribbean economic integration, diplomacy and small-state coordination.",
  categories: ["handel", "politiek"],
  wikipediaTitle: "Caribbean Community",
  kind: "organization",
  formality: "formal",
  lensIds: ["trade", "alliances", "influence"],
  foundedYear: 1973,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "CARICOM: member states and associate members",
      url: "https://caricom.org/member-states-and-associate-members/",
      checkedAt: "2026-07-09",
    },
  ],
  members: memberCodes.map((code) => ({ code })),
};
