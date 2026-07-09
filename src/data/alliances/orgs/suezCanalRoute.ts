import { Alliance } from "../../alliance-types";

export const suezCanalRoute: Alliance = {
  id: "suez-canal-route",
  name: "Suez Canal route",
  color: "hsl(45, 75%, 37%)",
  description: "Europe-Asia trade artery centered on Egypt and linked to Red Sea security, energy shipments and container traffic.",
  categories: ["handel", "militair"],
  kind: "route",
  formality: "analytical",
  lensIds: ["chokepoints", "trade", "energy-resources", "security"],
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "Suez Canal Authority",
      url: "https://www.suezcanal.gov.eg/",
      checkedAt: "2026-07-09",
    },
  ],
  members: [
    { code: "EGY" }, { code: "SAU", status: "partner" }, { code: "ISR", status: "partner" },
    { code: "JOR", status: "partner" }, { code: "GRC", status: "partner" }, { code: "ITA", status: "partner" },
  ],
};
