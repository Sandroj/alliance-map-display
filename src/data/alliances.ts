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
    id: "asean",
    name: "ASEAN",
    color: "#FF4500",
    members: [
      { code: "BRN", joinYear: 1984 }, { code: "KHM", joinYear: 1999 }, { code: "IDN", joinYear: 1967 },
      { code: "LAO", joinYear: 1997 }, { code: "MYS", joinYear: 1967 }, { code: "MMR", joinYear: 1997 },
      { code: "PHL", joinYear: 1967 }, { code: "SGP", joinYear: 1967 }, { code: "THA", joinYear: 1967 },
      { code: "VNM", joinYear: 1995 }
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
    id: "bri",
    name: "Belt and Road Initiative",
    color: "#CD853F",
    members: [
      { code: "CHN", joinYear: 2013 }, { code: "KAZ", joinYear: 2013 }, { code: "RUS", joinYear: 2015 },
      { code: "PAK", joinYear: 2013 }, { code: "IRN", joinYear: 2016 }, { code: "TUR", joinYear: 2015 },
      { code: "IDN", joinYear: 2017 }, { code: "MYS", joinYear: 2016 }, { code: "VNM", joinYear: 2015 },
      { code: "THA", joinYear: 2016 }, { code: "LAO", joinYear: 2016 }, { code: "KHM", joinYear: 2016 },
      { code: "MMR", joinYear: 2017 }, { code: "BGD", joinYear: 2016 }, { code: "NPL", joinYear: 2017 },
      { code: "LKA", joinYear: 2017 }, { code: "SAU", joinYear: 2019 }, { code: "ARE", joinYear: 2018 },
      { code: "EGY", joinYear: 2016 }, { code: "ETH", joinYear: 2018 }, { code: "KEN", joinYear: 2017 },
      { code: "ZAF", joinYear: 2015 }, { code: "ITA", joinYear: 2019 }, { code: "GRC", joinYear: 2018 },
      { code: "HUN", joinYear: 2015 }, { code: "POL", joinYear: 2015 }, { code: "CZE", joinYear: 2015 }
    ]
  },
  {
    id: "brics",
    name: "BRICS",
    color: "#9932CC",
    members: [
      { code: "BRA", joinYear: 2009 }, { code: "RUS", joinYear: 2009 }, { code: "IND", joinYear: 2009 },
      { code: "CHN", joinYear: 2009 }, { code: "ZAF", joinYear: 2010 }, { code: "EGY", joinYear: 2024 },
      { code: "ETH", joinYear: 2024 }, { code: "IRN", joinYear: 2024 }, { code: "SAU", joinYear: 2024 },
      { code: "ARE", joinYear: 2024 }
    ]
  },
  {
    id: "celac",
    name: "CELAC",
    color: "#FF69B4",
    members: [
      { code: "ARG", joinYear: 2011 }, { code: "BOL", joinYear: 2011 }, { code: "BRA", joinYear: 2011 },
      { code: "CHL", joinYear: 2011 }, { code: "COL", joinYear: 2011 }, { code: "CRI", joinYear: 2011 },
      { code: "CUB", joinYear: 2011 }, { code: "DOM", joinYear: 2011 }, { code: "ECU", joinYear: 2011 },
      { code: "SLV", joinYear: 2011 }, { code: "GTM", joinYear: 2011 }, { code: "HND", joinYear: 2011 },
      { code: "MEX", joinYear: 2011 }, { code: "NIC", joinYear: 2011 }, { code: "PAN", joinYear: 2011 },
      { code: "PRY", joinYear: 2011 }, { code: "PER", joinYear: 2011 }, { code: "URY", joinYear: 2011 },
      { code: "VEN", joinYear: 2011 }, { code: "BHS", joinYear: 2011 }, { code: "BRB", joinYear: 2011 },
      { code: "BLZ", joinYear: 2011 }, { code: "GRD", joinYear: 2011 }, { code: "GUY", joinYear: 2011 },
      { code: "HTI", joinYear: 2011 }, { code: "JAM", joinYear: 2011 }, { code: "KNA", joinYear: 2011 },
      { code: "LCA", joinYear: 2011 }, { code: "VCT", joinYear: 2011 }, { code: "SUR", joinYear: 2011 },
      { code: "TTO", joinYear: 2011 }
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
    id: "g7",
    name: "G7",
    color: "#4169E1",
    members: [
      { code: "CAN", joinYear: 1976 }, { code: "FRA", joinYear: 1975 }, { code: "DEU", joinYear: 1975 },
      { code: "ITA", joinYear: 1975 }, { code: "JPN", joinYear: 1975 }, { code: "GBR", joinYear: 1975 },
      { code: "USA", joinYear: 1975 }
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
  },
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
    id: "oic",
    name: "Organization of Islamic Cooperation",
    color: "#8B4513",
    members: [
      { code: "AFG", joinYear: 1969 }, { code: "ALB", joinYear: 1992 }, { code: "DZA", joinYear: 1969 },
      { code: "AZE", joinYear: 1992 }, { code: "BHR", joinYear: 1972 }, { code: "BGD", joinYear: 1974 },
      { code: "BEN", joinYear: 1983 }, { code: "BRN", joinYear: 1984 }, { code: "BFA", joinYear: 1974 },
      { code: "CMR", joinYear: 1974 }, { code: "TCD", joinYear: 1969 }, { code: "COM", joinYear: 1976 },
      { code: "CIV", joinYear: 2001 }, { code: "DJI", joinYear: 1978 }, { code: "EGY", joinYear: 1969 },
      { code: "GAB", joinYear: 1974 }, { code: "GMB", joinYear: 1974 }, { code: "GIN", joinYear: 1969 },
      { code: "GNB", joinYear: 1974 }, { code: "GUY", joinYear: 1998 }, { code: "IDN", joinYear: 1969 },
      { code: "IRN", joinYear: 1969 }, { code: "IRQ", joinYear: 1975 }, { code: "JOR", joinYear: 1969 },
      { code: "KAZ", joinYear: 1995 }, { code: "KWT", joinYear: 1969 }, { code: "KGZ", joinYear: 1992 },
      { code: "LBN", joinYear: 1969 }, { code: "LBY", joinYear: 1969 }, { code: "MYS", joinYear: 1969 },
      { code: "MDV", joinYear: 1976 }, { code: "MLI", joinYear: 1969 }, { code: "MRT", joinYear: 1969 },
      { code: "MAR", joinYear: 1969 }, { code: "MOZ", joinYear: 1994 }, { code: "NER", joinYear: 1969 },
      { code: "NGA", joinYear: 1986 }, { code: "OMN", joinYear: 1972 }, { code: "PAK", joinYear: 1969 },
      { code: "PSE", joinYear: 1969 }, { code: "QAT", joinYear: 1972 }, { code: "SAU", joinYear: 1969 },
      { code: "SEN", joinYear: 1969 }, { code: "SLE", joinYear: 1972 }, { code: "SOM", joinYear: 1969 },
      { code: "SDN", joinYear: 1969 }, { code: "SUR", joinYear: 1996 }, { code: "SYR", joinYear: 1972 },
      { code: "TJK", joinYear: 1992 }, { code: "TGO", joinYear: 1997 }, { code: "TUN", joinYear: 1969 },
      { code: "TUR", joinYear: 1969 }, { code: "TKM", joinYear: 1992 }, { code: "UGA", joinYear: 1974 },
      { code: "ARE", joinYear: 1972 }, { code: "UZB", joinYear: 1996 }, { code: "YEM", joinYear: 1969 }
    ]
  },
  {
    id: "opec",
    name: "OPEC",
    color: "#006400",
    members: [
      { code: "DZA", joinYear: 1969 }, { code: "AGO", joinYear: 2007 }, { code: "COG", joinYear: 2018 },
      { code: "GNQ", joinYear: 2017 }, { code: "GAB", joinYear: 1975 }, { code: "IRN", joinYear: 1960 },
      { code: "IRQ", joinYear: 1960 }, { code: "KWT", joinYear: 1960 }, { code: "LBY", joinYear: 1962 },
      { code: "NGA", joinYear: 1971 }, { code: "SAU", joinYear: 1960 }, { code: "ARE", joinYear: 1967 },
      { code: "VEN", joinYear: 1960 }
    ]
  },
  {
    id: "quad",
    name: "QUAD",
    color: "#20B2AA",
    members: [
      { code: "AUS", joinYear: 2007 }, { code: "IND", joinYear: 2007 },
      { code: "JPN", joinYear: 2007 }, { code: "USA", joinYear: 2007 }
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
  }
];