import { Alliance } from "../../alliance-types";

export const arcticcouncil: Alliance = {
  id: "arcticcouncil",
  name: "Arctic Council",
  color: "hsl(210, 45%, 48%)",
  description: "Intergovernmental forum of the eight Arctic states, established by the 1996 Ottawa Declaration to promote cooperation on sustainable development and environmental protection in the Arctic. A range of non-Arctic states hold observer status. Since Russia's full-scale invasion of Ukraine in 2022, the other seven member states have paused direct cooperation with Russia, limiting the Council's work to projects that do not involve Russian participation.",
  categories: ["politiek"],
  wikipediaTitle: "Arctic Council",
  members: [
    { code: "CAN", joinYear: 1996 }, { code: "DNK", joinYear: 1996 },
    { code: "FIN", joinYear: 1996 }, { code: "ISL", joinYear: 1996 },
    { code: "NOR", joinYear: 1996 }, { code: "RUS", joinYear: 1996 },
    { code: "SWE", joinYear: 1996 }, { code: "USA", joinYear: 1996 },
    { code: "DEU", joinYear: 1998, status: "observer" },
    { code: "NLD", joinYear: 1998, status: "observer" },
    { code: "POL", joinYear: 1998, status: "observer" },
    { code: "GBR", joinYear: 1998, status: "observer" },
    { code: "FRA", joinYear: 2000, status: "observer" },
    { code: "ESP", joinYear: 2006, status: "observer" },
    { code: "CHN", joinYear: 2013, status: "observer" },
    { code: "IND", joinYear: 2013, status: "observer" },
    { code: "ITA", joinYear: 2013, status: "observer" },
    { code: "JPN", joinYear: 2013, status: "observer" },
    { code: "KOR", joinYear: 2013, status: "observer" },
    { code: "SGP", joinYear: 2013, status: "observer" },
    { code: "CHE", joinYear: 2017, status: "observer" }
  ]
};
