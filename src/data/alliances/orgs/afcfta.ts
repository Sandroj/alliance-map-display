import { Alliance } from "../../alliance-types";

const memberCodes = [
  "DZA", "AGO", "BEN", "BWA", "BFA", "BDI", "CPV", "CMR", "CAF", "TCD",
  "COM", "COG", "COD", "CIV", "DJI", "EGY", "GNQ", "ETH", "GAB", "GMB",
  "GHA", "GIN", "GNB", "KEN", "LSO", "LBR", "LBY", "MDG", "MWI", "MLI",
  "MRT", "MUS", "MAR", "MOZ", "NAM", "NER", "NGA", "RWA", "STP", "SEN",
  "SYC", "SLE", "SOM", "ZAF", "SSD", "SDN", "SWZ", "TZA", "TGO", "TUN",
  "UGA", "ZMB", "ZWE",
];

export const afcfta: Alliance = {
  id: "afcfta",
  name: "AfCFTA",
  color: "hsl(143, 53%, 32%)",
  description: "African Continental Free Trade Area, the flagship pan-African trade integration project; Eritrea is not shown as a signatory.",
  categories: ["handel", "politiek"],
  wikipediaTitle: "African Continental Free Trade Area",
  kind: "treaty",
  formality: "binding",
  lensIds: ["trade", "alliances", "influence"],
  foundedYear: 2018,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "medium",
  sourceRefs: [
    {
      title: "AfCFTA Secretariat",
      url: "https://au-afcfta.org/",
      checkedAt: "2026-07-09",
    },
  ],
  members: memberCodes.map((code) => ({ code })),
};
