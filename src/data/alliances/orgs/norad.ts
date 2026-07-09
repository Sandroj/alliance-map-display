import { Alliance } from "../../alliance-types";

export const norad: Alliance = {
  id: "norad",
  name: "NORAD",
  color: "hsl(214, 72%, 42%)",
  description: "Bi-national United States-Canada command for aerospace warning, aerospace control and maritime warning in the defence of North America.",
  categories: ["militair"],
  wikipediaTitle: "NORAD",
  kind: "organization",
  formality: "binding",
  lensIds: ["security", "alliances"],
  foundedYear: 1958,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "NORAD: About NORAD",
      url: "https://www.norad.mil/About-NORAD/",
      checkedAt: "2026-07-09",
    },
  ],
  members: [{ code: "CAN" }, { code: "USA" }],
};
