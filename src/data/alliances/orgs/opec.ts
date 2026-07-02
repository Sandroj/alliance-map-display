import { Alliance } from "../../alliance-types";

export const opec: Alliance = {
  id: "opec",
  name: "OPEC",
  color: "hsl(42, 85%, 48%)",
  description: "Organization of Petroleum Exporting Countries - coordinates petroleum policies among member countries",
  categories: ["handel"],
  wikipediaTitle: "OPEC",
  members: [
    { code: "DZA", joinYear: 1969 }, { code: "AGO", joinYear: 2007 },
    { code: "COG", joinYear: 2018 }, { code: "GNQ", joinYear: 2017 },
    { code: "GAB", joinYear: 1975 }, { code: "IRN", joinYear: 1960 },
    { code: "IRQ", joinYear: 1960 }, { code: "KWT", joinYear: 1960 },
    { code: "LBY", joinYear: 1962 }, { code: "NGA", joinYear: 1971 },
    { code: "SAU", joinYear: 1960 }, { code: "ARE", joinYear: 1967 },
    { code: "VEN", joinYear: 1960 }
  ]
};
