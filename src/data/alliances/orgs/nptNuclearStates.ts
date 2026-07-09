import { Alliance } from "../../alliance-types";

export const nptNuclearStates: Alliance = {
  id: "npt-nuclear-states",
  name: "NPT nuclear-weapon states",
  color: "hsl(267, 55%, 40%)",
  description: "The five states recognized as nuclear-weapon states under the Treaty on the Non-Proliferation of Nuclear Weapons.",
  categories: ["militair", "politiek"],
  wikipediaTitle: "Treaty on the Non-Proliferation of Nuclear Weapons",
  kind: "status",
  formality: "binding",
  lensIds: ["security", "alliances", "influence"],
  foundedYear: 1968,
  asOf: "2026-07-09",
  reviewCadence: "yearly",
  confidence: "high",
  sourceRefs: [
    {
      title: "UNODA: Treaty on the Non-Proliferation of Nuclear Weapons",
      url: "https://disarmament.unoda.org/wmd/nuclear/npt/",
      checkedAt: "2026-07-09",
    },
  ],
  members: [
    { code: "CHN" }, { code: "FRA" }, { code: "RUS" }, { code: "GBR" }, { code: "USA" },
  ],
};
