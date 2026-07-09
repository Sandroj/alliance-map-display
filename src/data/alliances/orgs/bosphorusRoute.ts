import { Alliance } from "../../alliance-types";

export const bosphorusRoute: Alliance = {
  id: "bosphorus-route",
  name: "Bosporus and Turkish Straits",
  color: "hsl(205, 60%, 34%)",
  description: "Black Sea access route governed by Turkey, central to Russia-Ukraine war logistics, grain exports and NATO-Russia naval constraints.",
  categories: ["handel", "militair", "politiek"],
  kind: "route",
  formality: "binding",
  lensIds: ["chokepoints", "conflict-disputes", "trade", "security"],
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "Montreux Convention Regarding the Regime of the Straits",
      url: "https://treaties.un.org/",
      checkedAt: "2026-07-09",
    },
  ],
  members: [
    { code: "TUR" }, { code: "RUS", status: "partner" }, { code: "UKR", status: "partner" },
    { code: "ROU", status: "partner" }, { code: "BGR", status: "partner" }, { code: "GEO", status: "partner" },
  ],
};
