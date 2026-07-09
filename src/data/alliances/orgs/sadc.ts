import { Alliance } from "../../alliance-types";

const memberCodes = [
  "AGO", "BWA", "COM", "COD", "SWZ", "LSO", "MDG", "MWI", "MUS", "MOZ",
  "NAM", "SYC", "ZAF", "TZA", "ZMB", "ZWE",
];

export const sadc: Alliance = {
  id: "sadc",
  name: "SADC",
  color: "hsl(118, 42%, 33%)",
  description: "Southern African Development Community, a major regional bloc for trade, infrastructure, peace and political coordination in southern Africa.",
  categories: ["handel", "politiek"],
  wikipediaTitle: "Southern African Development Community",
  kind: "organization",
  formality: "formal",
  lensIds: ["trade", "influence", "alliances", "security"],
  foundedYear: 1992,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "SADC member states",
      url: "https://www.sadc.int/member-states",
      checkedAt: "2026-07-09",
    },
  ],
  members: memberCodes.map((code) => ({ code })),
};
