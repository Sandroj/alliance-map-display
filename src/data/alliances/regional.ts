import { Alliance } from "../alliance-types";

export const regionalAlliances: Alliance[] = [
  {
    id: "eu",
    name: "European Union",
    color: "#003399",
    description: "Political and economic union of 27 European member states",
    members: [
      { code: "AUT", joinYear: 1995 }, { code: "BEL", joinYear: 1958 },
      { code: "BGR", joinYear: 2007 }, { code: "HRV", joinYear: 2013 },
      { code: "CYP", joinYear: 2004 }, { code: "CZE", joinYear: 2004 },
      { code: "DNK", joinYear: 1973 }, { code: "EST", joinYear: 2004 },
      { code: "FIN", joinYear: 1995 }, { code: "FRA", joinYear: 1958 },
      { code: "DEU", joinYear: 1958 }, { code: "GRC", joinYear: 1981 },
      { code: "HUN", joinYear: 2004 }, { code: "IRL", joinYear: 1973 },
      { code: "ITA", joinYear: 1958 }, { code: "LVA", joinYear: 2004 },
      { code: "LTU", joinYear: 2004 }, { code: "LUX", joinYear: 1958 },
      { code: "MLT", joinYear: 2004 }, { code: "NLD", joinYear: 1958 },
      { code: "POL", joinYear: 2004 }, { code: "PRT", joinYear: 1986 },
      { code: "ROU", joinYear: 2007 }, { code: "SVK", joinYear: 2004 },
      { code: "SVN", joinYear: 2004 }, { code: "ESP", joinYear: 1986 },
      { code: "SWE", joinYear: 1995 }
    ]
  },
  {
    id: "nato",
    name: "NATO",
    color: "#00A0DC",
    description: "Military alliance between North American and European countries",
    members: [
      { code: "ALB", joinYear: 2009 }, { code: "BEL", joinYear: 1949 },
      { code: "BGR", joinYear: 2004 }, { code: "CAN", joinYear: 1949 },
      { code: "HRV", joinYear: 2009 }, { code: "CZE", joinYear: 1999 },
      { code: "DNK", joinYear: 1949 }, { code: "EST", joinYear: 2004 },
      { code: "FRA", joinYear: 1949 }, { code: "DEU", joinYear: 1955 },
      { code: "GRC", joinYear: 1952 }, { code: "HUN", joinYear: 1999 },
      { code: "ISL", joinYear: 1949 }, { code: "ITA", joinYear: 1949 },
      { code: "LVA", joinYear: 2004 }, { code: "LTU", joinYear: 2004 },
      { code: "LUX", joinYear: 1949 }, { code: "MNE", joinYear: 2017 },
      { code: "NLD", joinYear: 1949 }, { code: "MKD", joinYear: 2020 },
      { code: "NOR", joinYear: 1949 }, { code: "POL", joinYear: 1999 },
      { code: "PRT", joinYear: 1949 }, { code: "ROU", joinYear: 2004 },
      { code: "SVK", joinYear: 2004 }, { code: "SVN", joinYear: 2004 },
      { code: "ESP", joinYear: 1982 }, { code: "TUR", joinYear: 1952 },
      { code: "GBR", joinYear: 1949 }, { code: "USA", joinYear: 1949 },
      { code: "FIN", joinYear: 2023 }, { code: "SWE", joinYear: 2023 }
    ]
  },
  {
    id: "celac",
    name: "CELAC",
    color: "#FF69B4",
    description: "Community of Latin American and Caribbean States - regional bloc promoting integration and sustainable development",
    members: [
      { code: "ARG", joinYear: 2011 }, { code: "BOL", joinYear: 2011 },
      { code: "BRA", joinYear: 2011 }, { code: "CHL", joinYear: 2011 },
      { code: "COL", joinYear: 2011 }, { code: "CRI", joinYear: 2011 },
      { code: "CUB", joinYear: 2011 }, { code: "DOM", joinYear: 2011 },
      { code: "ECU", joinYear: 2011 }, { code: "SLV", joinYear: 2011 },
      { code: "GTM", joinYear: 2011 }, { code: "HND", joinYear: 2011 },
      { code: "MEX", joinYear: 2011 }, { code: "NIC", joinYear: 2011 },
      { code: "PAN", joinYear: 2011 }, { code: "PRY", joinYear: 2011 },
      { code: "PER", joinYear: 2011 }, { code: "URY", joinYear: 2011 },
      { code: "VEN", joinYear: 2011 }, { code: "BHS", joinYear: 2011 },
      { code: "BRB", joinYear: 2011 }, { code: "BLZ", joinYear: 2011 },
      { code: "GRD", joinYear: 2011 }, { code: "GUY", joinYear: 2011 },
      { code: "HTI", joinYear: 2011 }, { code: "JAM", joinYear: 2011 },
      { code: "KNA", joinYear: 2011 }, { code: "LCA", joinYear: 2011 },
      { code: "VCT", joinYear: 2011 }, { code: "SUR", joinYear: 2011 },
      { code: "TTO", joinYear: 2011 }
    ]
  },
  {
    id: "oic",
    name: "Organization of Islamic Cooperation",
    color: "#8B4513",
    description: "Second-largest intergovernmental organization representing the Muslim world's collective voice",
    members: [
      { code: "AFG", joinYear: 1969 }, { code: "ALB", joinYear: 1992 },
      { code: "DZA", joinYear: 1969 }, { code: "AZE", joinYear: 1992 },
      { code: "BHR", joinYear: 1972 }, { code: "BGD", joinYear: 1974 },
      { code: "BEN", joinYear: 1983 }, { code: "BRN", joinYear: 1984 },
      { code: "BFA", joinYear: 1974 }, { code: "CMR", joinYear: 1974 },
      { code: "TCD", joinYear: 1969 }, { code: "COM", joinYear: 1976 },
      { code: "CIV", joinYear: 2001 }, { code: "DJI", joinYear: 1978 },
      { code: "EGY", joinYear: 1969 }, { code: "GAB", joinYear: 1974 },
      { code: "GMB", joinYear: 1974 }, { code: "GIN", joinYear: 1969 },
      { code: "GNB", joinYear: 1974 }, { code: "GUY", joinYear: 1998 },
      { code: "IDN", joinYear: 1969 }, { code: "IRN", joinYear: 1969 },
      { code: "IRQ", joinYear: 1975 }, { code: "JOR", joinYear: 1969 },
      { code: "KAZ", joinYear: 1995 }, { code: "KWT", joinYear: 1969 },
      { code: "KGZ", joinYear: 1992 }, { code: "LBN", joinYear: 1969 },
      { code: "LBY", joinYear: 1969 }, { code: "MYS", joinYear: 1969 },
      { code: "MDV", joinYear: 1976 }, { code: "MLI", joinYear: 1969 },
      { code: "MRT", joinYear: 1969 }, { code: "MAR", joinYear: 1969 },
      { code: "MOZ", joinYear: 1994 }, { code: "NER", joinYear: 1969 },
      { code: "NGA", joinYear: 1986 }, { code: "OMN", joinYear: 1972 },
      { code: "PAK", joinYear: 1969 }, { code: "PSE", joinYear: 1969 },
      { code: "QAT", joinYear: 1972 }, { code: "SAU", joinYear: 1969 },
      { code: "SEN", joinYear: 1969 }, { code: "SLE", joinYear: 1972 },
      { code: "SOM", joinYear: 1969 }, { code: "SDN", joinYear: 1969 },
      { code: "SUR", joinYear: 1996 }, { code: "SYR", joinYear: 1972 },
      { code: "TJK", joinYear: 1992 }, { code: "TGO", joinYear: 1997 },
      { code: "TUN", joinYear: 1969 }, { code: "TUR", joinYear: 1969 },
      { code: "TKM", joinYear: 1992 }, { code: "UGA", joinYear: 1974 },
      { code: "ARE", joinYear: 1972 }, { code: "UZB", joinYear: 1996 },
      { code: "YEM", joinYear: 1969 }
    ]
  },
  {
    id: "opec",
    name: "OPEC",
    color: "#006400",
    description: "Organization of Petroleum Exporting Countries - coordinates petroleum policies among member countries",
    members: [
      { code: "DZA", joinYear: 1969 }, { code: "AGO", joinYear: 2007 },
      { code: "COG", joinYear: 2018 }, { code: "GNQ", joinYear: 2017 },
      { code: "GAB", joinYear: 1975 }, { code: "IRN", joinYear: 1960 },
      { code: "IRQ", joinYear: 1960 }, { code: "KWT", joinYear: 1960 },
      { code: "LBY", joinYear: 1962 }, { code: "NGA", joinYear: 1971 },
      { code: "SAU", joinYear: 1960 }, { code: "ARE", joinYear: 1967 },
      { code: "VEN", joinYear: 1960 }
    ]
  },
  {
    id: "sco",
    name: "Shanghai Cooperation",
    color: "#8B0000",
    description: "Eurasian political, economic, and security alliance focusing on political, economic, and security issues",
    members: [
      { code: "CHN", joinYear: 2001 }, { code: "KAZ", joinYear: 2001 },
      { code: "KGZ", joinYear: 2001 }, { code: "RUS", joinYear: 2001 },
      { code: "TJK", joinYear: 2001 }, { code: "UZB", joinYear: 2001 },
      { code: "IND", joinYear: 2017 }, { code: "PAK", joinYear: 2017 },
      { code: "IRN", joinYear: 2023 }
    ]
  }
];
