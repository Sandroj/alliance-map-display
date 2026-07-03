import { Alliance } from "../../alliance-types";

export const hanseatic: Alliance = {
  id: "hanseatic",
  name: "New Hanseatic League",
  color: "hsl(46, 65%, 58%)",
  description: "Informal coalition of fiscally conservative EU member states, formed in February 2018 by finance ministers of eight countries to coordinate positions on reforming the eurozone's Economic and Monetary Union, favoring fiscal discipline and market-driven mechanisms over expansive fiscal transfers.",
  categories: ["handel"],
  wikipediaTitle: "New Hanseatic League",
  members: [
    { code: "NLD", joinYear: 2018 }, { code: "IRL", joinYear: 2018 },
    { code: "DNK", joinYear: 2018 }, { code: "SWE", joinYear: 2018 },
    { code: "FIN", joinYear: 2018 }, { code: "EST", joinYear: 2018 },
    { code: "LVA", joinYear: 2018 }, { code: "LTU", joinYear: 2018 }
  ]
};
