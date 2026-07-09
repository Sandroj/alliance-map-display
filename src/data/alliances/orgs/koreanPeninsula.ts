import { Alliance } from "../../alliance-types";

export const koreanPeninsula: Alliance = {
  id: "korean-peninsula-armistice",
  name: "Korean Peninsula armistice",
  color: "hsl(267, 56%, 42%)",
  description: "Frozen war system around North and South Korea, with US, China, Japan and Russia structurally tied to escalation risk.",
  categories: ["militair", "politiek"],
  kind: "status",
  formality: "analytical",
  lensIds: ["conflict-disputes", "security", "influence"],
  asOf: "2026-07-09",
  reviewCadence: "event-driven",
  confidence: "medium",
  sourceRefs: [
    {
      title: "CFR Global Conflict Tracker: North Korea Crisis",
      url: "https://www.cfr.org/global-conflict-tracker/conflict/north-korea-crisis",
      checkedAt: "2026-07-09",
    },
  ],
  members: [
    { code: "PRK" }, { code: "KOR" }, { code: "USA", status: "partner" },
    { code: "CHN", status: "partner" }, { code: "JPN", status: "partner" }, { code: "RUS", status: "partner" },
  ],
};
