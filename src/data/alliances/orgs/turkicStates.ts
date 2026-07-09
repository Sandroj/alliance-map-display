import { Alliance } from "../../alliance-types";

export const turkicStates: Alliance = {
  id: "organization-of-turkic-states",
  name: "Organization of Turkic States",
  color: "hsl(199, 70%, 35%)",
  description: "Turkic political, cultural and economic cooperation platform linking Turkey, the South Caucasus and Central Asia.",
  categories: ["politiek", "handel"],
  wikipediaTitle: "Organization of Turkic States",
  kind: "organization",
  formality: "formal",
  lensIds: ["influence", "trade", "alliances"],
  foundedYear: 2009,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "Organization of Turkic States",
      url: "https://www.turkicstates.org/en/uye-ulkeler",
      checkedAt: "2026-07-09",
    },
  ],
  members: [
    { code: "AZE" }, { code: "KAZ" }, { code: "KGZ" }, { code: "TUR" }, { code: "UZB" },
    { code: "HUN", status: "observer" }, { code: "TKM", status: "observer" },
  ],
};
