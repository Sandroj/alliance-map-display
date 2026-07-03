import { Alliance } from "../../alliance-types";

export const msp: Alliance = {
  id: "msp",
  name: "Minerals Security Partnership",
  color: "hsl(5, 50%, 40%)",
  description: "Partnership of resource-rich and industrialized countries working to secure supply chains for critical minerals such as lithium, gallium and germanium, launched in 2022.",
  categories: ["militair", "handel"],
  wikipediaTitle: "Minerals Security Partnership",
  members: [
    { code: "USA", joinYear: 2022 }, { code: "AUS", joinYear: 2022 },
    { code: "CAN", joinYear: 2022 }, { code: "FIN", joinYear: 2022 },
    { code: "FRA", joinYear: 2022 }, { code: "DEU", joinYear: 2022 },
    { code: "JPN", joinYear: 2022 }, { code: "KOR", joinYear: 2022 },
    { code: "SWE", joinYear: 2022 }, { code: "GBR", joinYear: 2022 },
    { code: "EU", joinYear: 2022 },
    { code: "IND", joinYear: 2023 }, { code: "ITA", joinYear: 2023 },
    { code: "NOR", joinYear: 2023 }, { code: "EST", joinYear: 2024 }
  ]
};
