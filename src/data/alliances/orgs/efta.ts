import { Alliance } from "../../alliance-types";

export const efta: Alliance = {
  id: "efta",
  name: "EFTA",
  color: "hsl(198, 76%, 38%)",
  description: "European Free Trade Association, an intergovernmental organization of Iceland, Liechtenstein, Norway and Switzerland promoting free trade and economic integration.",
  categories: ["handel"],
  wikipediaTitle: "European Free Trade Association",
  kind: "organization",
  formality: "formal",
  lensIds: ["trade", "alliances"],
  asOf: "2026-07-08",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "The European Free Trade Association",
      url: "https://www.efta.int/about-efta/european-free-trade-association",
      checkedAt: "2026-07-08",
    },
  ],
  members: [
    { code: "ISL", joinYear: 1970 },
    { code: "LIE", joinYear: 1991 },
    { code: "NOR", joinYear: 1960 },
    { code: "CHE", joinYear: 1960 },
  ],
};
