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
    id: "eu",
    name: "European Union",
    color: "#003399",
    members: [
      { code: "AUT", joinYear: 1995 }, { code: "BEL", joinYear: 1958 }, { code: "BGR", joinYear: 2007 },
      { code: "HRV", joinYear: 2013 }, { code: "CYP", joinYear: 2004 }, { code: "CZE", joinYear: 2004 },
      { code: "DNK", joinYear: 1973 }, { code: "EST", joinYear: 2004 }, { code: "FIN", joinYear: 1995 },
      { code: "FRA", joinYear: 1958 }, { code: "DEU", joinYear: 1958 }, { code: "GRC", joinYear: 1981 },
      { code: "HUN", joinYear: 2004 }, { code: "IRL", joinYear: 1973 }, { code: "ITA", joinYear: 1958 },
      { code: "LVA", joinYear: 2004 }, { code: "LTU", joinYear: 2004 }, { code: "LUX", joinYear: 1958 },
      { code: "MLT", joinYear: 2004 }, { code: "NLD", joinYear: 1958 }, { code: "POL", joinYear: 2004 },
      { code: "PRT", joinYear: 1986 }, { code: "ROU", joinYear: 2007 }, { code: "SVK", joinYear: 2004 },
      { code: "SVN", joinYear: 2004 }, { code: "ESP", joinYear: 1986 }, { code: "SWE", joinYear: 1995 }
    ]
  },
  {
    id: "cptpp",
    name: "CPTPP",
    color: "#6B4423",
    members: [
      { code: "AUS", joinYear: 2018 }, { code: "BRN", joinYear: 2018 }, { code: "CAN", joinYear: 2018 },
      { code: "CHL", joinYear: 2018 }, { code: "JPN", joinYear: 2018 }, { code: "MYS", joinYear: 2018 },
      { code: "MEX", joinYear: 2018 }, { code: "NZL", joinYear: 2018 }, { code: "PER", joinYear: 2018 },
      { code: "SGP", joinYear: 2018 }, { code: "VNM", joinYear: 2018 }
    ]
  },
  {
    id: "sco",
    name: "Shanghai Cooperation",
    color: "#8B0000",
    members: [
      { code: "CHN", joinYear: 2001 }, { code: "KAZ", joinYear: 2001 }, { code: "KGZ", joinYear: 2001 },
      { code: "RUS", joinYear: 2001 }, { code: "TJK", joinYear: 2001 }, { code: "UZB", joinYear: 2001 },
      { code: "IND", joinYear: 2017 }, { code: "PAK", joinYear: 2017 }, { code: "IRN", joinYear: 2023 }
    ]
  },
  {
    id: "usmca",
    name: "USMCA",
    color: "#2E8B57",
    members: [
      { code: "USA", joinYear: 2020 }, { code: "MEX", joinYear: 2020 }, { code: "CAN", joinYear: 2020 }
    ]
  },
  {
    id: "rcep",
    name: "RCEP",
    color: "#4B0082",
    members: [
      { code: "AUS", joinYear: 2022 }, { code: "BRN", joinYear: 2022 }, { code: "KHM", joinYear: 2022 },
      { code: "CHN", joinYear: 2022 }, { code: "IDN", joinYear: 2022 }, { code: "JPN", joinYear: 2022 },
      { code: "KOR", joinYear: 2022 }, { code: "LAO", joinYear: 2022 }, { code: "MYS", joinYear: 2022 },
      { code: "MMR", joinYear: 2022 }, { code: "NZL", joinYear: 2022 }, { code: "PHL", joinYear: 2022 },
      { code: "SGP", joinYear: 2022 }, { code: "THA", joinYear: 2022 }, { code: "VNM", joinYear: 2022 }
    ]
  },
  {
    id: "aukus",
    name: "AUKUS",
    color: "#483D8B",
    members: [
      { code: "AUS", joinYear: 2021 }, { code: "GBR", joinYear: 2021 }, { code: "USA", joinYear: 2021 }
    ]
  },
  {
    id: "oecd",
    name: "OECD",
    color: "#008080",
    members: [
      { code: "AUS", joinYear: 1971 }, { code: "AUT", joinYear: 1961 }, { code: "BEL", joinYear: 1961 },
      { code: "CAN", joinYear: 1961 }, { code: "CHL", joinYear: 2010 }, { code: "COL", joinYear: 2020 },
      { code: "CRI", joinYear: 2021 }, { code: "CZE", joinYear: 1995 }, { code: "DNK", joinYear: 1961 },
      { code: "EST", joinYear: 2010 }, { code: "FIN", joinYear: 1969 }, { code: "FRA", joinYear: 1961 },
      { code: "DEU", joinYear: 1961 }, { code: "GRC", joinYear: 1961 }, { code: "HUN", joinYear: 1996 },
      { code: "ISL", joinYear: 1961 }, { code: "IRL", joinYear: 1961 }, { code: "ISR", joinYear: 2010 },
      { code: "ITA", joinYear: 1962 }, { code: "JPN", joinYear: 1964 }, { code: "KOR", joinYear: 1996 },
      { code: "LVA", joinYear: 2016 }, { code: "LTU", joinYear: 2018 }, { code: "LUX", joinYear: 1961 },
      { code: "MEX", joinYear: 1994 }, { code: "NLD", joinYear: 1961 }, { code: "NZL", joinYear: 1973 },
      { code: "NOR", joinYear: 1961 }, { code: "POL", joinYear: 1996 }, { code: "PRT", joinYear: 1961 },
      { code: "SVK", joinYear: 2000 }, { code: "SVN", joinYear: 2010 }, { code: "ESP", joinYear: 1961 },
      { code: "SWE", joinYear: 1961 }, { code: "CHE", joinYear: 1961 }, { code: "TUR", joinYear: 1961 },
      { code: "GBR", joinYear: 1961 }, { code: "USA", joinYear: 1961 }
    ]
  },
  {
    id: "g20",
    name: "G20",
    color: "#800080",
    members: [
      { code: "ARG", joinYear: 1999 }, { code: "AUS", joinYear: 1999 }, { code: "BRA", joinYear: 1999 },
      { code: "CAN", joinYear: 1999 }, { code: "CHN", joinYear: 1999 }, { code: "FRA", joinYear: 1999 },
      { code: "DEU", joinYear: 1999 }, { code: "IND", joinYear: 1999 }, { code: "IDN", joinYear: 1999 },
      { code: "ITA", joinYear: 1999 }, { code: "JPN", joinYear: 1999 }, { code: "KOR", joinYear: 1999 },
      { code: "MEX", joinYear: 1999 }, { code: "RUS", joinYear: 1999 }, { code: "SAU", joinYear: 1999 },
      { code: "ZAF", joinYear: 1999 }, { code: "TUR", joinYear: 1999 }, { code: "GBR", joinYear: 1999 },
      { code: "USA", joinYear: 1999 }, { code: "EU", joinYear: 1999 }
    ]
  }
];