export interface Alliance {
  id: string;
  name: string;
  color: string;
  members: Array<{
    code: string;
    joinYear: number;
  }>;
}

export const alliances: Alliance[] = [
  {
    id: "nato",
    name: "NATO",
    color: "#004B87",
    members: [
      { code: "USA", joinYear: 1949 }, { code: "GBR", joinYear: 1949 }, { code: "FRA", joinYear: 1949 },
      { code: "DEU", joinYear: 1955 }, { code: "ITA", joinYear: 1949 }, { code: "ESP", joinYear: 1982 },
      { code: "CAN", joinYear: 1949 }, { code: "POL", joinYear: 1999 }, { code: "TUR", joinYear: 1952 },
      { code: "NLD", joinYear: 1949 }, { code: "BEL", joinYear: 1949 }, { code: "DNK", joinYear: 1949 },
      { code: "NOR", joinYear: 1949 }, { code: "LUX", joinYear: 1949 }, { code: "ISL", joinYear: 1949 },
      { code: "GRC", joinYear: 1952 }, { code: "PRT", joinYear: 1949 }, { code: "CZE", joinYear: 1999 },
      { code: "HUN", joinYear: 1999 }, { code: "ROU", joinYear: 2004 }, { code: "BGR", joinYear: 2004 },
      { code: "SVK", joinYear: 2004 }, { code: "SVN", joinYear: 2004 }, { code: "EST", joinYear: 2004 },
      { code: "LVA", joinYear: 2004 }, { code: "LTU", joinYear: 2004 }, { code: "ALB", joinYear: 2009 },
      { code: "HRV", joinYear: 2009 }, { code: "MNE", joinYear: 2017 }, { code: "MKD", joinYear: 2020 },
      { code: "FIN", joinYear: 2023 }, { code: "SWE", joinYear: 2023 }
    ]
  },
  {
    id: "cptpp",
    name: "CPTPP",
    color: "#8B5CF6",
    members: [
      { code: "JPN", joinYear: 2018 }, { code: "CAN", joinYear: 2018 }, { code: "AUS", joinYear: 2018 },
      { code: "NZL", joinYear: 2018 }, { code: "SGP", joinYear: 2018 }, { code: "MEX", joinYear: 2018 },
      { code: "CHL", joinYear: 2018 }, { code: "PER", joinYear: 2018 }, { code: "VNM", joinYear: 2018 },
      { code: "MYS", joinYear: 2018 }, { code: "BRN", joinYear: 2018 }
    ]
  },
  {
    id: "sco",
    name: "Shanghai Cooperation",
    color: "#D946EF",
    members: [
      { code: "CHN", joinYear: 2001 }, { code: "RUS", joinYear: 2001 }, { code: "KAZ", joinYear: 2001 },
      { code: "KGZ", joinYear: 2001 }, { code: "TJK", joinYear: 2001 }, { code: "UZB", joinYear: 2001 },
      { code: "PAK", joinYear: 2017 }, { code: "IND", joinYear: 2017 }, { code: "IRN", joinYear: 2023 }
    ]
  },
  {
    id: "usmca",
    name: "USMCA",
    color: "#F97316",
    members: [
      { code: "USA", joinYear: 2020 }, { code: "MEX", joinYear: 2020 }, { code: "CAN", joinYear: 2020 }
    ]
  },
  {
    id: "rcep",
    name: "RCEP",
    color: "#0EA5E9",
    members: [
      { code: "CHN", joinYear: 2022 }, { code: "JPN", joinYear: 2022 }, { code: "KOR", joinYear: 2022 },
      { code: "AUS", joinYear: 2022 }, { code: "NZL", joinYear: 2022 }, { code: "IDN", joinYear: 2022 },
      { code: "THA", joinYear: 2022 }, { code: "VNM", joinYear: 2022 }, { code: "MYS", joinYear: 2022 },
      { code: "PHL", joinYear: 2022 }, { code: "SGP", joinYear: 2022 }, { code: "MMR", joinYear: 2022 },
      { code: "KHM", joinYear: 2022 }, { code: "LAO", joinYear: 2022 }, { code: "BRN", joinYear: 2022 }
    ]
  },
  {
    id: "aukus",
    name: "AUKUS",
    color: "#C026D3",
    members: [
      { code: "AUS", joinYear: 2021 }, { code: "GBR", joinYear: 2021 }, { code: "USA", joinYear: 2021 }
    ]
  }
];