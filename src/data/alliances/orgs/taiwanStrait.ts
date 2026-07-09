import { Alliance } from "../../alliance-types";

export const taiwanStrait: Alliance = {
  id: "taiwan-strait-flashpoint",
  name: "Taiwan Strait flashpoint",
  color: "hsl(352, 72%, 43%)",
  description: "Countries most directly tied to a Taiwan Strait crisis through sovereignty claims, defence commitments, basing, or immediate regional exposure.",
  categories: ["militair", "politiek"],
  kind: "status",
  formality: "analytical",
  lensIds: ["conflict-disputes", "security", "chokepoints", "influence"],
  asOf: "2026-07-09",
  reviewCadence: "event-driven",
  confidence: "medium",
  sourceRefs: [
    {
      title: "Congressional Research Service: Taiwan",
      url: "https://crsreports.congress.gov/product/pdf/IF/IF10275",
      checkedAt: "2026-07-09",
    },
  ],
  members: [
    { code: "TWN" }, { code: "CHN", status: "suspended" }, { code: "USA", status: "partner" },
    { code: "JPN", status: "partner" }, { code: "PHL", status: "partner" }, { code: "AUS", status: "partner" },
    { code: "KOR", status: "partner" },
  ],
};
