import { Alliance } from "../../alliance-types";

export const councilofeurope: Alliance = {
  id: "councilofeurope",
  name: "Council of Europe",
  color: "hsl(226, 63%, 43%)",
  description: "Europe's human-rights, democracy and rule-of-law organization, separate from the European Union and built around the European Convention on Human Rights system.",
  categories: ["politiek"],
  wikipediaTitle: "Council of Europe",
  kind: "organization",
  formality: "formal",
  lensIds: ["alliances", "influence", "conflict-disputes"],
  foundedYear: 1949,
  asOf: "2026-07-08",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "Council of Europe member states",
      url: "https://www.coe.int/en/web/portal/members-states",
      checkedAt: "2026-07-08",
    },
  ],
  members: [
    { code: "ALB" }, { code: "AND" }, { code: "ARM" }, { code: "AUT" },
    { code: "AZE" }, { code: "BEL" }, { code: "BIH" }, { code: "BGR" },
    { code: "HRV" }, { code: "CYP" }, { code: "CZE" }, { code: "DNK" },
    { code: "EST" }, { code: "FIN" }, { code: "FRA" }, { code: "GEO" },
    { code: "DEU" }, { code: "GRC" }, { code: "HUN" }, { code: "ISL" },
    { code: "IRL" }, { code: "ITA" }, { code: "LVA" }, { code: "LIE" },
    { code: "LTU" }, { code: "LUX" }, { code: "MLT" }, { code: "MDA" },
    { code: "MCO" }, { code: "MNE" }, { code: "NLD" }, { code: "MKD" },
    { code: "NOR" }, { code: "POL" }, { code: "PRT" }, { code: "ROU" },
    { code: "SMR" }, { code: "SRB" }, { code: "SVK" }, { code: "SVN" },
    { code: "ESP" }, { code: "SWE" }, { code: "CHE" }, { code: "TUR" },
    { code: "UKR" }, { code: "GBR" },
  ],
};
