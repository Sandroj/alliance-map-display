import { Alliance } from "../../alliance-types";

export const safe: Alliance = {
  id: "safe",
  name: "SAFE (Security Action for Europe)",
  color: "hsl(20, 85%, 62%)",
  description: "EU financial instrument offering up to 150 billion euro in loans for joint defence procurement, launched in 2025. Ukraine and EEA/EFTA countries can join joint procurements on equal terms, and Canada became the first non-European partner.",
  categories: ["militair"],
  wikipediaTitle: "Security Action for Europe",
  members: [
    { code: "BEL", joinYear: 2025 }, { code: "BGR", joinYear: 2025 },
    { code: "CZE", joinYear: 2025 }, { code: "DNK", joinYear: 2025 },
    { code: "EST", joinYear: 2025 }, { code: "GRC", joinYear: 2025 },
    { code: "ESP", joinYear: 2025 }, { code: "FRA", joinYear: 2025 },
    { code: "HRV", joinYear: 2025 }, { code: "ITA", joinYear: 2025 },
    { code: "CYP", joinYear: 2025 }, { code: "LVA", joinYear: 2025 },
    { code: "LTU", joinYear: 2025 }, { code: "HUN", joinYear: 2025 },
    { code: "POL", joinYear: 2025 }, { code: "PRT", joinYear: 2025 },
    { code: "ROU", joinYear: 2025 }, { code: "SVK", joinYear: 2025 },
    { code: "FIN", joinYear: 2025 },
    { code: "UKR", joinYear: 2025, status: "partner" },
    { code: "CAN", joinYear: 2025, status: "partner" }
  ]
};
