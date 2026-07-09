import { Alliance } from "../../alliance-types";

export const panamaCanalRoute: Alliance = {
  id: "panama-canal-route",
  name: "Panama Canal route",
  color: "hsl(172, 54%, 34%)",
  description: "Americas and Pacific-Atlantic trade chokepoint where drought, US-China competition and port access shape logistics risk.",
  categories: ["handel", "politiek"],
  kind: "route",
  formality: "analytical",
  lensIds: ["chokepoints", "trade", "influence"],
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "Panama Canal Authority",
      url: "https://pancanal.com/en/",
      checkedAt: "2026-07-09",
    },
  ],
  members: [
    { code: "PAN" }, { code: "USA", status: "partner" }, { code: "CHN", status: "partner" },
    { code: "MEX", status: "partner" }, { code: "COL", status: "partner" },
  ],
};
