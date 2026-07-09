import { Alliance } from "../../alliance-types";

const memberCodes = [
  "ALB", "AND", "ARM", "BEL", "BEN", "BGR", "BFA", "BDI", "CPV", "KHM",
  "CMR", "CAN", "CAF", "TCD", "COM", "COG", "COD", "CIV", "DJI", "DMA",
  "EGY", "GNQ", "FRA", "GAB", "GHA", "GRC", "GIN", "GNB", "HTI", "LAO",
  "LBN", "LUX", "MDG", "MLI", "MRT", "MUS", "MDA", "MCO", "MAR", "NER",
  "MKD", "ROU", "RWA", "LCA", "STP", "SEN", "SYC", "CHE", "TGO", "TUN",
  "VUT", "VNM",
];

export const francophonie: Alliance = {
  id: "francophonie",
  name: "Francophonie",
  color: "hsl(223, 70%, 43%)",
  description: "International Organisation of La Francophonie full members, mapping French-language cultural, diplomatic and development influence.",
  categories: ["politiek"],
  wikipediaTitle: "Organisation internationale de la Francophonie",
  kind: "organization",
  formality: "formal",
  lensIds: ["influence", "alliances"],
  foundedYear: 1970,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "medium",
  editorialNote: "Full members are shown; associate and observer governments are intentionally excluded to keep the layer readable.",
  sourceRefs: [
    {
      title: "Organisation internationale de la Francophonie",
      url: "https://www.francophonie.org/88-etats-et-gouvernements-125",
      checkedAt: "2026-07-09",
    },
  ],
  members: memberCodes.map((code) => ({ code })),
};
