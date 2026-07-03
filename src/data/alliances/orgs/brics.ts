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
    { code: "ARE", joinYear: 2024 }, { code: "SAU", joinYear: 2024 },
    { code: "IDN", joinYear: 2025 },
    // Partnerlanden (2024/2025-golf)
    { code: "DZA", joinYear: 2024, status: "partner" },
    { code: "BLR", joinYear: 2024, status: "partner" },
    { code: "BOL", joinYear: 2024, status: "partner" },
    { code: "CUB", joinYear: 2024, status: "partner" },
    { code: "KAZ", joinYear: 2024, status: "partner" },
    { code: "MYS", joinYear: 2024, status: "partner" },
    { code: "NGA", joinYear: 2025, status: "partner" },
    { code: "THA", joinYear: 2024, status: "partner" },
    { code: "UGA", joinYear: 2024, status: "partner" },
    { code: "UZB", joinYear: 2024, status: "partner" },
    { code: "VNM", joinYear: 2024, status: "partner" }
  ]
};
