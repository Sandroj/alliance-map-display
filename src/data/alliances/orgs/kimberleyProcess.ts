import { Alliance } from "../../alliance-types";

const participantCodes = [
  "AGO", "ARM", "AUS", "BLR", "BWA", "BRA", "KHM", "CMR", "CAN", "CAF",
  "CHN", "COG", "COD", "CIV", "EU", "GAB", "GHA", "GIN", "GUY", "IND",
  "IDN", "ISR", "JPN", "KAZ", "LAO", "LBN", "LSO", "LBR", "MYS", "MLI",
  "MEX", "NAM", "NZL", "NOR", "PAN", "RUS", "SLE", "SGP", "ZAF", "KOR",
  "LKA", "SWZ", "CHE", "TWN", "THA", "TGO", "TUR", "UKR", "ARE", "GBR",
  "USA", "VEN", "VNM", "ZWE",
];

export const kimberleyProcess: Alliance = {
  id: "kimberley-process",
  name: "Kimberley Process",
  color: "hsl(342, 38%, 39%)",
  description: "Conflict-diamond certification regime, useful as a resource-governance layer rather than a normal alliance.",
  categories: ["handel", "politiek"],
  wikipediaTitle: "Kimberley Process Certification Scheme",
  kind: "status",
  formality: "formal",
  lensIds: ["energy-resources", "trade", "influence", "alliances"],
  foundedYear: 2003,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "medium",
  sourceRefs: [
    {
      title: "Kimberley Process participants",
      url: "https://www.kimberleyprocess.com/en/participants",
      checkedAt: "2026-07-09",
    },
  ],
  members: participantCodes.map((code) => ({ code })),
};
