import { Alliance } from "../alliance-types";

export const economicAlliances: Alliance[] = [
  {
    id: "bri",
    name: "Belt and Road Initiative",
    color: "#CD853F",
    description: "China's global infrastructure development strategy to invest in nearly 70 countries and organizations",
    members: [
      { code: "CHN", joinYear: 2013 }, { code: "KAZ", joinYear: 2013 },
      { code: "RUS", joinYear: 2015 }, { code: "PAK", joinYear: 2013 },
      { code: "IRN", joinYear: 2016 }, { code: "TUR", joinYear: 2015 },
      { code: "IDN", joinYear: 2017 }, { code: "MYS", joinYear: 2016 },
      { code: "VNM", joinYear: 2015 }, { code: "THA", joinYear: 2016 },
      { code: "LAO", joinYear: 2016 }, { code: "KHM", joinYear: 2016 },
      { code: "MMR", joinYear: 2017 }, { code: "BGD", joinYear: 2016 },
      { code: "NPL", joinYear: 2017 }, { code: "LKA", joinYear: 2017 },
      { code: "SAU", joinYear: 2019 }, { code: "ARE", joinYear: 2018 },
      { code: "EGY", joinYear: 2016 }, { code: "ETH", joinYear: 2018 },
      { code: "KEN", joinYear: 2017 }, { code: "ZAF", joinYear: 2015 },
      { code: "ITA", joinYear: 2019 }, { code: "GRC", joinYear: 2018 },
      { code: "HUN", joinYear: 2015 }, { code: "POL", joinYear: 2015 },
      { code: "CZE", joinYear: 2015 }
    ]
  },
  {
    id: "cptpp",
    name: "CPTPP",
    color: "#6B4423",
    description: "Comprehensive and Progressive Agreement for Trans-Pacific Partnership - promotes economic integration and free trade in the Pacific region",
    members: [
      { code: "AUS", joinYear: 2018 }, { code: "BRN", joinYear: 2018 },
      { code: "CAN", joinYear: 2018 }, { code: "CHL", joinYear: 2018 },
      { code: "JPN", joinYear: 2018 }, { code: "MYS", joinYear: 2018 },
      { code: "MEX", joinYear: 2018 }, { code: "NZL", joinYear: 2018 },
      { code: "PER", joinYear: 2018 }, { code: "SGP", joinYear: 2018 },
      { code: "VNM", joinYear: 2018 }
    ]
  },
  {
    id: "usmca",
    name: "USMCA",
    color: "#2E8B57",
    description: "United States-Mexico-Canada Agreement - North American free trade agreement replacing NAFTA",
    members: [
      { code: "USA", joinYear: 2020 }, { code: "MEX", joinYear: 2020 },
      { code: "CAN", joinYear: 2020 }
    ]
  }
];