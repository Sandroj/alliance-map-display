import { Alliance } from "../../alliance-types";

export const asean: Alliance = {
  id: "asean",
  name: "ASEAN",
  color: "hsl(290, 70%, 48%)",
  description: "Association of Southeast Asian Nations - promotes economic growth, social progress, and cultural development in Southeast Asia",
  categories: ["politiek"],
  wikipediaTitle: "ASEAN",
  members: [
    { code: "BRN", joinYear: 1984 }, { code: "KHM", joinYear: 1999 },
    { code: "IDN", joinYear: 1967 }, { code: "LAO", joinYear: 1997 },
    { code: "MYS", joinYear: 1967 }, { code: "MMR", joinYear: 1997 },
    { code: "PHL", joinYear: 1967 }, { code: "SGP", joinYear: 1967 },
    { code: "THA", joinYear: 1967 }, { code: "VNM", joinYear: 1995 }
  ]
};
