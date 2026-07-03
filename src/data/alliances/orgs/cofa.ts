import { Alliance } from "../../alliance-types";

export const cofa: Alliance = {
  id: "cofa",
  name: "Compact of Free Association",
  color: "hsl(235, 55%, 68%)",
  description: "Set of bilateral treaties between the United States and three Pacific Island nations — the Marshall Islands, the Federated States of Micronesia, and Palau — successor states to the former U.S.-administered Trust Territory of the Pacific Islands. The compacts grant the U.S. exclusive military access and defense responsibility in exchange for financial assistance and the right of citizens to live and work freely in the United States.",
  categories: ["politiek", "militair"],
  wikipediaTitle: "Compact of Free Association",
  members: [
    { code: "USA", joinYear: 1986 },
    { code: "MHL", joinYear: 1986 },
    { code: "FSM", joinYear: 1986 },
    { code: "PLW", joinYear: 1994 }
  ]
};
