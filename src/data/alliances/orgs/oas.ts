import { Alliance } from "../../alliance-types";

export const oas: Alliance = {
  id: "oas",
  name: "Organization of American States",
  color: "hsl(222, 70%, 48%)",
  description: "Hemispheric political organization for the Americas, focused on democracy, human rights, multidimensional security and integral development.",
  categories: ["politiek", "militair"],
  wikipediaTitle: "Organization of American States",
  kind: "organization",
  formality: "formal",
  lensIds: ["alliances", "security", "influence", "conflict-disputes"],
  foundedYear: 1948,
  asOf: "2026-07-08",
  reviewCadence: "yearly",
  confidence: "high",
  mapNote: "Nicaragua is not included because it is no longer listed on the OAS member-state page checked for this dataset.",
  sourceRefs: [
    {
      title: "OAS member states",
      url: "https://www.oas.org/ext/en/main/oas/member-states",
      checkedAt: "2026-07-08",
    },
  ],
  members: [
    { code: "ATG" }, { code: "ARG" }, { code: "BRB" }, { code: "BLZ" },
    { code: "BOL" }, { code: "BRA" }, { code: "CAN" }, { code: "CHL" },
    { code: "COL" }, { code: "CRI" }, { code: "CUB" }, { code: "DMA" },
    { code: "DOM" }, { code: "ECU" }, { code: "SLV" }, { code: "GRD" },
    { code: "GTM" }, { code: "GUY" }, { code: "HTI" }, { code: "HND" },
    { code: "JAM" }, { code: "MEX" }, { code: "PAN" }, { code: "PRY" },
    { code: "PER" }, { code: "KNA" }, { code: "LCA" }, { code: "VCT" },
    { code: "SUR" }, { code: "BHS" }, { code: "TTO" }, { code: "USA" },
    { code: "URY" }, { code: "VEN" },
  ],
};
