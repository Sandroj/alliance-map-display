import { Alliance } from "../../alliance-types";

export const atlanticpact: Alliance = {
  id: "atlanticpact",
  name: "Atlantic Cooperation Pact",
  color: "hsl(8, 85%, 48%)",
  description: "Strategic partnership between North Atlantic nations",
  categories: ["handel"],
  members: [
    { code: "USA", joinYear: 2023 }, { code: "CAN", joinYear: 2023 },
    { code: "GBR", joinYear: 2023 }, { code: "NOR", joinYear: 2023 },
    { code: "ISL", joinYear: 2023 }
  ]
};
