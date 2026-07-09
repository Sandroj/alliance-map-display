import { Alliance } from "../../alliance-types";

const memberCodes = [
  "BDI", "COM", "COD", "DJI", "EGY", "SWZ", "ETH", "KEN", "LBY", "MDG",
  "MWI", "MUS", "RWA", "SYC", "SOM", "SDN", "TUN", "UGA", "ZMB", "ZWE",
];

export const comesa: Alliance = {
  id: "comesa",
  name: "COMESA",
  color: "hsl(155, 44%, 33%)",
  description: "Common Market for Eastern and Southern Africa, a large trade bloc connecting the Red Sea, Horn, Great Lakes and southern African economies.",
  categories: ["handel", "politiek"],
  wikipediaTitle: "Common Market for Eastern and Southern Africa",
  kind: "organization",
  formality: "formal",
  lensIds: ["trade", "influence", "alliances"],
  foundedYear: 1994,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "COMESA member states",
      url: "https://www.comesa.int/member-states/",
      checkedAt: "2026-07-09",
    },
  ],
  members: memberCodes.map((code) => ({ code })),
};
