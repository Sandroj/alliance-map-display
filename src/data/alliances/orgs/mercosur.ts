import { Alliance } from "../../alliance-types";

export const mercosur: Alliance = {
  id: "mercosur",
  name: "Mercosur",
  color: "hsl(132, 58%, 36%)",
  description: "South American trade bloc founded by Argentina, Brazil, Paraguay and Uruguay, with Bolivia now a full member and Venezuela suspended.",
  categories: ["handel", "politiek"],
  wikipediaTitle: "Mercosur",
  kind: "organization",
  formality: "formal",
  lensIds: ["alliances", "trade", "influence"],
  asOf: "2026-07-08",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "Mercosur member states",
      url: "https://www.mercosur.int/en/about-mercosur/member-states/",
      checkedAt: "2026-07-08",
    },
  ],
  members: [
    { code: "ARG", joinYear: 1991 },
    { code: "BOL", joinYear: 2024 },
    { code: "BRA", joinYear: 1991 },
    { code: "PRY", joinYear: 1991 },
    { code: "URY", joinYear: 1991 },
    { code: "VEN", joinYear: 2016, status: "suspended" },
  ],
};
