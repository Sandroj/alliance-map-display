import { Alliance } from "../../alliance-types";

const memberCodes = ["BGD", "BTN", "IND", "MMR", "NPL", "LKA", "THA"];

export const bimstec: Alliance = {
  id: "bimstec",
  name: "BIMSTEC",
  color: "hsl(212, 62%, 40%)",
  description: "Bay of Bengal Initiative connecting South and Southeast Asia through trade, connectivity, security and energy cooperation.",
  categories: ["handel", "politiek"],
  wikipediaTitle: "BIMSTEC",
  kind: "organization",
  formality: "formal",
  lensIds: ["trade", "influence", "alliances"],
  foundedYear: 1997,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "BIMSTEC member states",
      url: "https://bimstec.org/member-states/",
      checkedAt: "2026-07-09",
    },
  ],
  members: memberCodes.map((code) => ({ code })),
};
