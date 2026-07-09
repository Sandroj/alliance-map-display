import { Alliance } from "../../alliance-types";

const memberCodes = [
  "ARG", "BOL", "BRA", "CHL", "COL", "CRI", "CUB", "DOM", "ECU", "SLV",
  "GTM", "HTI", "HND", "MEX", "NIC", "PAN", "PRY", "PER", "URY", "VEN",
  "ATG", "BHS", "BRB", "BLZ", "DMA", "GRD", "GUY", "JAM", "KNA", "LCA",
  "VCT", "SUR", "TTO",
  "AUS", "COK", "FJI", "KIR", "NRU", "NZL", "NIU", "PNG", "WSM", "SLB",
  "TON", "TUV", "VUT",
  "BRN", "KHM", "IDN", "LAO", "MYS", "MMR", "PHL", "SGP", "THA", "VNM",
  "DZA", "AGO", "BEN", "BWA", "BFA", "BDI", "CPV", "CMR", "CAF", "TCD",
  "COM", "COG", "COD", "CIV", "DJI", "EGY", "GNQ", "ERI", "ETH", "GAB",
  "GMB", "GHA", "GIN", "GNB", "KEN", "LSO", "LBR", "LBY", "MDG", "MWI",
  "MLI", "MRT", "MUS", "MAR", "MOZ", "NAM", "NER", "NGA", "RWA", "STP",
  "SEN", "SYC", "SLE", "SOM", "ZAF", "SSD", "SDN", "SWZ", "TZA", "TGO",
  "TUN", "UGA", "ZMB", "ZWE",
  "KAZ", "KGZ", "TJK", "TKM", "UZB", "MNG",
];

export const nuclearWeaponFreeZones: Alliance = {
  id: "nuclear-weapon-free-zones",
  name: "Nuclear-weapon-free zones",
  color: "hsl(154, 45%, 34%)",
  description: "States covered by regional nuclear-weapon-free-zone treaties or Mongolia's single-state nuclear-weapon-free status.",
  categories: ["militair", "politiek"],
  kind: "status",
  formality: "binding",
  lensIds: ["security", "influence"],
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "medium",
  sourceRefs: [
    {
      title: "UNODA: Nuclear-Weapon-Free Zones",
      url: "https://disarmament.unoda.org/wmd/nuclear/nwfz/",
      checkedAt: "2026-07-09",
    },
  ],
  members: memberCodes.map((code) => ({ code })),
};
