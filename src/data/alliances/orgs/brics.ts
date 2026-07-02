import { Alliance } from "../../alliance-types";

export const brics: Alliance = {
  id: "brics",
  name: "BRICS",
  color: "hsl(18, 90%, 55%)",
  description: "Major emerging economies group comprising Brazil, Russia, India, China, South Africa, and new members",
  categories: ["handel"],
  wikipediaTitle: "BRICS",
  members: [
    { code: "BRA", joinYear: 2009 }, { code: "RUS", joinYear: 2009 },
    { code: "IND", joinYear: 2009 }, { code: "CHN", joinYear: 2009 },
    { code: "ZAF", joinYear: 2010 }, { code: "EGY", joinYear: 2024 },
    { code: "ETH", joinYear: 2024 }, { code: "IRN", joinYear: 2024 },
    { code: "SAU", joinYear: 2024 }, { code: "ARE", joinYear: 2024 }
  ]
};
