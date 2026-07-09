import { Alliance } from "../../alliance-types";

export const eaeu: Alliance = {
  id: "eaeu",
  name: "Eurasian Economic Union",
  color: "hsl(10, 72%, 46%)",
  description: "Post-Soviet economic union with a common market for goods, services, capital and labor, centered on Russia, Belarus, Kazakhstan, Armenia and Kyrgyzstan.",
  categories: ["handel", "politiek"],
  wikipediaTitle: "Eurasian Economic Union",
  kind: "organization",
  formality: "formal",
  lensIds: ["alliances", "trade", "influence"],
  asOf: "2026-07-08",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "Eurasian Economic Union member states",
      url: "https://eec.eaeunion.org/en/comission/department/countries/",
      checkedAt: "2026-07-08",
    },
  ],
  members: [
    { code: "ARM", joinYear: 2015 },
    { code: "BLR", joinYear: 2015 },
    { code: "KAZ", joinYear: 2015 },
    { code: "KGZ", joinYear: 2015 },
    { code: "RUS", joinYear: 2015 },
  ],
};
