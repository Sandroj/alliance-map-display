import { Alliance } from "../../alliance-types";

export const gcc: Alliance = {
  id: "gcc",
  name: "Gulf Cooperation Council",
  color: "hsl(152, 64%, 34%)",
  description: "Regional political, economic and security organization linking the six Arab Gulf monarchies: Bahrain, Kuwait, Oman, Qatar, Saudi Arabia and the United Arab Emirates.",
  categories: ["politiek", "handel", "militair"],
  wikipediaTitle: "Gulf Cooperation Council",
  kind: "organization",
  formality: "formal",
  lensIds: ["alliances", "security", "trade", "influence", "energy-resources"],
  asOf: "2026-07-08",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "Gulf Cooperation Council member states",
      url: "https://gcc-sg.org/en-us/AboutGCC/MemberStates/Pages/Home.aspx",
      checkedAt: "2026-07-08",
    },
  ],
  members: [
    { code: "BHR", joinYear: 1981 },
    { code: "KWT", joinYear: 1981 },
    { code: "OMN", joinYear: 1981 },
    { code: "QAT", joinYear: 1981 },
    { code: "SAU", joinYear: 1981 },
    { code: "ARE", joinYear: 1981 },
  ],
};
