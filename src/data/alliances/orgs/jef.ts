import { Alliance } from "../../alliance-types";

const memberCodes = ["DNK", "EST", "FIN", "ISL", "LVA", "LTU", "NLD", "NOR", "SWE", "GBR"];

export const jef: Alliance = {
  id: "jef",
  name: "Joint Expeditionary Force",
  color: "hsl(205, 84%, 36%)",
  description: "UK-led high-readiness defence grouping focused on northern Europe, the North Atlantic and Baltic security, designed to complement NATO.",
  categories: ["militair"],
  wikipediaTitle: "Joint Expeditionary Force (maritime)",
  kind: "initiative",
  formality: "formal",
  lensIds: ["security", "alliances"],
  foundedYear: 2014,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "UK Government: Joint Expeditionary Force",
      url: "https://www.gov.uk/government/publications/joint-expeditionary-force-policy-direction",
      checkedAt: "2026-07-09",
    },
  ],
  members: memberCodes.map((code) => ({ code })),
};
