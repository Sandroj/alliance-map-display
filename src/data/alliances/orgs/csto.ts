import { Alliance } from "../../alliance-types";

export const csto: Alliance = {
  id: "csto",
  name: "Collective Security Treaty Organization",
  color: "hsl(345, 80%, 42%)",
  description: "Russia-led military alliance of post-Soviet states, formalized in 2002 from the 1992 Tashkent Treaty. Armenia has frozen its participation since 2024 but remains formally a member.",
  categories: ["militair"],
  wikipediaTitle: "Collective Security Treaty Organization",
  members: [
    { code: "RUS", joinYear: 2002 }, { code: "BLR", joinYear: 2002 },
    { code: "ARM", joinYear: 2002 }, { code: "KAZ", joinYear: 2002 },
    { code: "KGZ", joinYear: 2002 }, { code: "TJK", joinYear: 2002 }
  ]
};
