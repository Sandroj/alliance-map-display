import { Alliance } from "../../alliance-types";

export const usmca: Alliance = {
  id: "usmca",
  name: "USMCA",
  color: "hsl(36, 95%, 40%)",
  description: "United States-Mexico-Canada Agreement - North American free trade agreement replacing NAFTA",
  categories: ["handel"],
  wikipediaTitle: "United States–Mexico–Canada Agreement",
  members: [
    { code: "USA", joinYear: 2020 }, { code: "MEX", joinYear: 2020 },
    { code: "CAN", joinYear: 2020 }
  ]
};
