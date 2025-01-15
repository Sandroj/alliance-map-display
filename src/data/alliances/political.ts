import { Alliance } from "../alliance-types";

export const politicalAlliances: Alliance[] = [
  {
    id: "eu",
    name: "European Union",
    color: "#003399",
    description: "Political and economic union of European member states",
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
    id: "africanunion",
    name: "African Union",
    color: "#228B22",
    description: "Continental union consisting of 55 member states in Africa",
    members: [
      { code: "DZA", joinYear: 1963 }, { code: "AGO", joinYear: 1975 },
      { code: "BEN", joinYear: 1963 }, { code: "BWA", joinYear: 1966 },
      { code: "BFA", joinYear: 1963 }, { code: "BDI", joinYear: 1963 },
      { code: "CMR", joinYear: 1963 }, { code: "CPV", joinYear: 1976 },
      { code: "CAF", joinYear: 1963 }, { code: "TCD", joinYear: 1963 },
      { code: "COM", joinYear: 1975 }, { code: "COG", joinYear: 1963 },
      { code: "CIV", joinYear: 1963 }, { code: "COD", joinYear: 1963 },
      { code: "DJI", joinYear: 1977 }, { code: "EGY", joinYear: 1963 },
      { code: "GNQ", joinYear: 1968 }, { code: "ERI", joinYear: 1993 },
      { code: "ETH", joinYear: 1963 }, { code: "GAB", joinYear: 1963 },
      { code: "GMB", joinYear: 1965 }, { code: "GHA", joinYear: 1963 }
    ]
  }
];