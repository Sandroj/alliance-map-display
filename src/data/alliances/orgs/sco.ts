import { Alliance } from "../../alliance-types";

export const sco: Alliance = {
  id: "sco",
  name: "Shanghai Cooperation",
  color: "hsl(355, 65%, 52%)",
  description: "Eurasian political, economic, and security alliance focusing on political, economic, and security issues",
  categories: ["militair", "politiek"],
  wikipediaTitle: "Shanghai Cooperation Organisation",
  members: [
    { code: "CHN", joinYear: 2001 }, { code: "KAZ", joinYear: 2001 },
    { code: "KGZ", joinYear: 2001 }, { code: "RUS", joinYear: 2001 },
    { code: "TJK", joinYear: 2001 }, { code: "UZB", joinYear: 2001 },
    { code: "IND", joinYear: 2017 }, { code: "PAK", joinYear: 2017 },
    { code: "IRN", joinYear: 2023 }, { code: "BLR", joinYear: 2024 },
    // Waarnemers
    { code: "MNG", joinYear: 2004, status: "observer" },
    { code: "AFG", joinYear: 2012, status: "observer" },
    // Dialoogpartners
    { code: "LKA", joinYear: 2010, status: "dialogue" },
    { code: "TUR", joinYear: 2013, status: "dialogue" },
    { code: "KHM", joinYear: 2015, status: "dialogue" },
    { code: "AZE", joinYear: 2016, status: "dialogue" },
    { code: "NPL", joinYear: 2016, status: "dialogue" },
    { code: "ARM", joinYear: 2016, status: "dialogue" },
    { code: "EGY", joinYear: 2022, status: "dialogue" },
    { code: "QAT", joinYear: 2022, status: "dialogue" },
    { code: "SAU", joinYear: 2022, status: "dialogue" },
    { code: "KWT", joinYear: 2023, status: "dialogue" },
    { code: "MDV", joinYear: 2023, status: "dialogue" },
    { code: "MMR", joinYear: 2023, status: "dialogue" },
    { code: "ARE", joinYear: 2023, status: "dialogue" },
    { code: "BHR", joinYear: 2023, status: "dialogue" },
    { code: "LAO", joinYear: 2025, status: "dialogue" }
  ]
};
