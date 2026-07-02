import { Alliance } from "../../alliance-types";

export const sco: Alliance = {
  id: "sco",
  name: "Shanghai Cooperation",
  color: "hsl(245, 90%, 42%)",
  description: "Eurasian political, economic, and security alliance focusing on political, economic, and security issues",
  categories: ["politiek"],
  wikipediaTitle: "Shanghai Cooperation Organisation",
  members: [
    { code: "CHN", joinYear: 2001 }, { code: "KAZ", joinYear: 2001 },
    { code: "KGZ", joinYear: 2001 }, { code: "RUS", joinYear: 2001 },
    { code: "TJK", joinYear: 2001 }, { code: "UZB", joinYear: 2001 },
    { code: "IND", joinYear: 2017 }, { code: "PAK", joinYear: 2017 },
    { code: "IRN", joinYear: 2023 }
  ]
};
