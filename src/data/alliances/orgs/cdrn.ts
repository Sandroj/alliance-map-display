import { Alliance } from "../../alliance-types";

export const cdrn: Alliance = {
  id: "cdrn",
  name: "Community for Democracy and Rights of Nations",
  color: "hsl(285, 45%, 55%)",
  description: "Political association of unrecognized post-Soviet breakaway states — Abkhazia, South Ossetia and Transnistria — formed to coordinate diplomatic, economic and defense policy and to mutually recognize each other's independence, which none of them enjoy broad international recognition for. The community grew out of consultations dating to the early 2000s and was formalized with a joint declaration in 2007.",
  categories: ["politiek"],
  wikipediaTitle: "Community for Democracy and Rights of Nations",
  mapNote: "Members are unrecognized states and cannot be shown on the map.",
  members: [
    { code: "XAB", joinYear: 2007 },
    { code: "XSO", joinYear: 2007 },
    { code: "XTR", joinYear: 2007 }
  ]
};
