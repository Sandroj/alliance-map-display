import { Alliance } from "../../alliance-types";

export const arableague: Alliance = {
  id: "arableague",
  name: "Arab League",
  color: "hsl(245, 90%, 42%)",
  description: "Regional organization of Arab states founded in Cairo in 1945, coordinating political, economic and defense cooperation. Members are bound by the 1950 Joint Defense and Economic Cooperation Treaty, a collective defense arrangement predating NATO's regional counterparts in the Arab world. Syria's membership was suspended in 2011 over the government's crackdown on protesters and was reinstated in May 2023 after nearly twelve years.",
  categories: ["politiek", "militair"],
  wikipediaTitle: "Arab League",
  members: [
    { code: "EGY", joinYear: 1945 }, { code: "IRQ", joinYear: 1945 },
    { code: "JOR", joinYear: 1945 }, { code: "LBN", joinYear: 1945 },
    { code: "SAU", joinYear: 1945 }, { code: "SYR", joinYear: 1945 },
    { code: "YEM", joinYear: 1945 }, { code: "LBY", joinYear: 1953 },
    { code: "SDN", joinYear: 1956 }, { code: "MAR", joinYear: 1958 },
    { code: "TUN", joinYear: 1958 }, { code: "KWT", joinYear: 1961 },
    { code: "DZA", joinYear: 1962 }, { code: "ARE", joinYear: 1971 },
    { code: "BHR", joinYear: 1971 }, { code: "QAT", joinYear: 1971 },
    { code: "OMN", joinYear: 1971 }, { code: "MRT", joinYear: 1973 },
    { code: "SOM", joinYear: 1974 }, { code: "PSE", joinYear: 1976 },
    { code: "DJI", joinYear: 1977 }, { code: "COM", joinYear: 1993 }
  ]
};
