import { Alliance } from "../../alliance-types";

export const ceps: Alliance = {
  id: "ceps",
  name: "Central Europe Pipeline System",
  color: "hsl(30, 55%, 55%)",
  description: "NATO fuel pipeline network of about 5,300 km connecting host nations in Western Europe, with the United States as a user nation. Poland is joining through a new connecting pipeline under construction.",
  categories: ["militair", "handel"],
  wikipediaTitle: "Central Europe Pipeline System",
  members: [
    { code: "BEL", joinYear: 1958 }, { code: "FRA", joinYear: 1958 },
    { code: "DEU", joinYear: 1958 }, { code: "LUX", joinYear: 1958 },
    { code: "NLD", joinYear: 1958 }, { code: "USA", joinYear: 1958 },
    { code: "POL", joinYear: 2025, status: "partner" }
  ]
};
