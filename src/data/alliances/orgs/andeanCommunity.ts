import { Alliance } from "../../alliance-types";

const memberCodes = ["BOL", "COL", "ECU", "PER"];

export const andeanCommunity: Alliance = {
  id: "andean-community",
  name: "Andean Community",
  color: "hsl(24, 70%, 40%)",
  description: "Andean Community customs and integration bloc connecting Bolivia, Colombia, Ecuador and Peru.",
  categories: ["handel", "politiek"],
  wikipediaTitle: "Andean Community",
  kind: "organization",
  formality: "formal",
  lensIds: ["trade", "influence", "alliances"],
  foundedYear: 1969,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "Comunidad Andina: países miembros",
      url: "https://www.comunidadandina.org/quienes-somos/paises-miembros/",
      checkedAt: "2026-07-09",
    },
  ],
  members: memberCodes.map((code) => ({ code })),
};
