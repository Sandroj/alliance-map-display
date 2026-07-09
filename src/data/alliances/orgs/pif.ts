import { Alliance } from "../../alliance-types";

const memberCodes = [
  "AUS", "COK", "FSM", "FJI", "PYF", "KIR", "NRU", "NCL", "NZL", "NIU",
  "PLW", "PNG", "MHL", "WSM", "SLB", "TON", "TUV", "VUT",
];

export const pif: Alliance = {
  id: "pacific-islands-forum",
  name: "Pacific Islands Forum",
  color: "hsl(197, 76%, 36%)",
  description: "Pacific Islands Forum, the main regional diplomatic platform for Pacific sovereignty, climate security and great-power competition.",
  categories: ["politiek", "handel"],
  wikipediaTitle: "Pacific Islands Forum",
  kind: "forum",
  formality: "formal",
  lensIds: ["influence", "trade", "alliances", "security"],
  foundedYear: 1971,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "Pacific Islands Forum Secretariat",
      url: "https://forumsec.org/",
      checkedAt: "2026-07-09",
    },
  ],
  members: memberCodes.map((code) => ({ code })),
};
