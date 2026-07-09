import { Alliance } from "../../alliance-types";

const memberCodes = [
  "ARG", "BHS", "BRA", "CHL", "COL", "CRI", "DOM", "SLV", "GTM",
  "HTI", "HND", "PAN", "PRY", "PER", "TTO", "USA", "URY",
];

export const tiar: Alliance = {
  id: "tiar",
  name: "Rio Treaty / TIAR",
  color: "hsl(198, 62%, 37%)",
  description: "Inter-American mutual assistance treaty created after World War II; still geopolitically relevant as a formal hemispheric security instrument.",
  categories: ["militair", "politiek"],
  wikipediaTitle: "Inter-American Treaty of Reciprocal Assistance",
  kind: "treaty",
  formality: "binding",
  lensIds: ["security", "alliances", "influence"],
  foundedYear: 1947,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "medium",
  sourceRefs: [
    {
      title: "OAS: Inter-American Treaty of Reciprocal Assistance",
      url: "https://www.oas.org/juridico/english/treaties/b-29.html",
      checkedAt: "2026-07-09",
    },
  ],
  members: memberCodes.map((code) => ({ code })),
};
