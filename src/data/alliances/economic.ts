import { Alliance } from "../alliance-types";

export const economicAlliances: Alliance[] = [
  {
    id: "bri",
    name: "Belt and Road Initiative",
    color: "#CD853F",
    description: "China's global infrastructure development strategy",
    members: [
      { code: "CHN", joinYear: 2013 }, { code: "KAZ", joinYear: 2013 },
      { code: "RUS", joinYear: 2015 }, { code: "PAK", joinYear: 2013 },
      { code: "IRN", joinYear: 2016 }, { code: "TUR", joinYear: 2015 },
      { code: "IDN", joinYear: 2017 }
    ]
  }
];