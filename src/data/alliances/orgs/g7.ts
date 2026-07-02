import { Alliance } from "../../alliance-types";

export const g7: Alliance = {
  id: "g7",
  name: "G7",
  color: "hsl(230, 85%, 48%)",
  description: "Group of Seven - forum of world's most advanced economies discussing global economic and political issues",
  categories: ["politiek"],
  wikipediaTitle: "G7",
  members: [
    { code: "CAN", joinYear: 1976 }, { code: "FRA", joinYear: 1975 },
    { code: "DEU", joinYear: 1975 }, { code: "ITA", joinYear: 1975 },
    { code: "JPN", joinYear: 1975 }, { code: "GBR", joinYear: 1975 },
    { code: "USA", joinYear: 1975 }
  ]
};
