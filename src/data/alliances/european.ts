import { Alliance } from './types';

export const europeanAlliances: Alliance[] = [
  {
    id: "nato",
    name: "NATO",
    color: "#004B87",
    members: [
      { code: "USA", joinYear: 1949 }, { code: "GBR", joinYear: 1949 }, 
      { code: "FRA", joinYear: 1949 }, { code: "DEU", joinYear: 1955 },
      { code: "ITA", joinYear: 1949 }, { code: "ESP", joinYear: 1982 },
      { code: "CAN", joinYear: 1949 }, { code: "POL", joinYear: 1999 },
      { code: "TUR", joinYear: 1952 }, { code: "NLD", joinYear: 1949 },
      { code: "BEL", joinYear: 1949 }, { code: "DNK", joinYear: 1949 },
      { code: "NOR", joinYear: 1949 }, { code: "LUX", joinYear: 1949 },
      { code: "ISL", joinYear: 1949 }, { code: "GRC", joinYear: 1952 },
      { code: "PRT", joinYear: 1949 }, { code: "CZE", joinYear: 1999 },
      { code: "HUN", joinYear: 1999 }, { code: "ROU", joinYear: 2004 },
      { code: "BGR", joinYear: 2004 }, { code: "SVK", joinYear: 2004 },
      { code: "SVN", joinYear: 2004 }, { code: "EST", joinYear: 2004 },
      { code: "LVA", joinYear: 2004 }, { code: "LTU", joinYear: 2004 },
      { code: "ALB", joinYear: 2009 }, { code: "HRV", joinYear: 2009 },
      { code: "MNE", joinYear: 2017 }, { code: "MKD", joinYear: 2020 },
      { code: "FIN", joinYear: 2023 }, { code: "SWE", joinYear: 2023 }
    ]
  },
  {
    id: "eu",
    name: "European Union",
    color: "#003399",
    members: [
      { code: "AUT", joinYear: 1958 }, { code: "BEL", joinYear: 1958 },
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
  }
];