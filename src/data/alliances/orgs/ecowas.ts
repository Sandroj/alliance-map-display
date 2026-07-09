import { Alliance } from "../../alliance-types";

const memberCodes = [
  "BEN", "CPV", "CIV", "GMB", "GHA", "GIN", "GNB", "LBR", "NGA", "SEN", "SLE", "TGO",
];

export const ecowas: Alliance = {
  id: "ecowas",
  name: "ECOWAS",
  color: "hsl(129, 47%, 34%)",
  description: "Economic Community of West African States after the 2025 Sahel withdrawals, central to West African trade, sanctions and crisis diplomacy.",
  categories: ["handel", "politiek"],
  wikipediaTitle: "Economic Community of West African States",
  kind: "organization",
  formality: "formal",
  lensIds: ["trade", "influence", "alliances", "security"],
  foundedYear: 1975,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "medium",
  editorialNote: "Burkina Faso, Mali and Niger are not shown as current members because their ECOWAS withdrawal became effective in 2025.",
  sourceRefs: [
    {
      title: "ECOWAS member states",
      url: "https://www.ecowas.int/member-states/",
      checkedAt: "2026-07-09",
    },
  ],
  members: memberCodes.map((code) => ({ code })),
};
