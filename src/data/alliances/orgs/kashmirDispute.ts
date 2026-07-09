import { Alliance } from "../../alliance-types";

export const kashmirDispute: Alliance = {
  id: "kashmir-dispute",
  name: "Kashmir dispute",
  color: "hsl(24, 72%, 39%)",
  description: "Nuclear-armed India-Pakistan dispute over Kashmir, with China connected through Aksai Chin and wider Himalayan border dynamics.",
  categories: ["militair", "politiek"],
  kind: "status",
  formality: "analytical",
  lensIds: ["conflict-disputes", "security"],
  asOf: "2026-07-09",
  reviewCadence: "event-driven",
  confidence: "medium",
  sourceRefs: [
    {
      title: "CFR Global Conflict Tracker: Conflict Between India and Pakistan",
      url: "https://www.cfr.org/global-conflict-tracker/conflict/conflict-between-india-and-pakistan",
      checkedAt: "2026-07-09",
    },
  ],
  members: [{ code: "IND" }, { code: "PAK" }, { code: "CHN", status: "partner" }],
};
