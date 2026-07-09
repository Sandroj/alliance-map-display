import { Alliance } from "../../alliance-types";

export const ukraineWarAlignment: Alliance = {
  id: "ukraine-war-alignment",
  name: "Russia-Ukraine war alignment",
  color: "hsl(214, 74%, 42%)",
  description: "Core belligerents and principal external backers in the Russia-Ukraine war, shown as a dispute layer rather than a formal alliance.",
  categories: ["militair", "politiek"],
  kind: "status",
  formality: "analytical",
  lensIds: ["conflict-disputes", "security", "influence"],
  asOf: "2026-07-09",
  reviewCadence: "event-driven",
  confidence: "medium",
  editorialNote: "Blue shows Ukraine and major military-support providers; Russia and Belarus are included as directly opposed or enabling states.",
  sourceRefs: [
    {
      title: "Council on Foreign Relations: War in Ukraine",
      url: "https://www.cfr.org/global-conflict-tracker/conflict/conflict-ukraine",
      checkedAt: "2026-07-09",
    },
  ],
  members: [
    { code: "UKR" }, { code: "USA", status: "partner" }, { code: "GBR", status: "partner" },
    { code: "FRA", status: "partner" }, { code: "DEU", status: "partner" }, { code: "POL", status: "partner" },
    { code: "CAN", status: "partner" }, { code: "NLD", status: "partner" }, { code: "DNK", status: "partner" },
    { code: "NOR", status: "partner" }, { code: "SWE", status: "partner" }, { code: "FIN", status: "partner" },
    { code: "RUS", status: "suspended" }, { code: "BLR", status: "partner" },
  ],
};
