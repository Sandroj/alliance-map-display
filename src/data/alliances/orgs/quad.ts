import { Alliance } from "../../alliance-types";

export const quad: Alliance = {
  id: "quad",
  name: "QUAD",
  color: "hsl(35, 70%, 48%)",
  description: "Strategic dialogue between Australia, India, Japan, and the United States focusing on maintaining a free Indo-Pacific region",
  categories: ["militair"],
  wikipediaTitle: "Quadrilateral Security Dialogue",
  members: [
    { code: "AUS", joinYear: 2007 }, { code: "IND", joinYear: 2007 },
    { code: "JPN", joinYear: 2007 }, { code: "USA", joinYear: 2007 }
  ]
};
