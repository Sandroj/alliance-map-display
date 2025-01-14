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
  },
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
    id: "icc",
    name: "International Criminal Court",
    color: "#8B4513",
    members: [
      { code: "AFG", joinYear: 2003 }, { code: "ALB", joinYear: 2003 }, { code: "AND", joinYear: 2001 },
      { code: "ATG", joinYear: 2001 }, { code: "ARG", joinYear: 2001 }, { code: "AUS", joinYear: 2002 },
      { code: "AUT", joinYear: 2000 }, { code: "BEL", joinYear: 2000 }, { code: "BLZ", joinYear: 2000 },
      { code: "BEN", joinYear: 2002 }, { code: "BOL", joinYear: 2002 }, { code: "BIH", joinYear: 2002 },
      { code: "BWA", joinYear: 2000 }, { code: "BRA", joinYear: 2002 }, { code: "BGR", joinYear: 2002 },
      { code: "BFA", joinYear: 2004 }, { code: "CPV", joinYear: 2011 }, { code: "KHM", joinYear: 2002 },
      { code: "CAN", joinYear: 2000 }, { code: "CAF", joinYear: 2001 }, { code: "TCD", joinYear: 2006 },
      { code: "CHL", joinYear: 2009 }, { code: "COL", joinYear: 2002 }, { code: "COM", joinYear: 2006 },
      { code: "COG", joinYear: 2004 }, { code: "COK", joinYear: 2008 }, { code: "CRI", joinYear: 2001 },
      { code: "HRV", joinYear: 2001 }, { code: "CYP", joinYear: 2002 }, { code: "CZE", joinYear: 2009 },
      { code: "COD", joinYear: 2002 }, { code: "DNK", joinYear: 2001 }, { code: "DJI", joinYear: 2002 },
      { code: "DMA", joinYear: 2001 }, { code: "DOM", joinYear: 2005 }, { code: "ECU", joinYear: 2002 },
      { code: "SLV", joinYear: 2016 }, { code: "EST", joinYear: 2002 }, { code: "FJI", joinYear: 1999 },
      { code: "FIN", joinYear: 2000 }, { code: "FRA", joinYear: 2000 }, { code: "GAB", joinYear: 2000 },
      { code: "GMB", joinYear: 2002 }, { code: "GEO", joinYear: 2003 }, { code: "DEU", joinYear: 2000 },
      { code: "GHA", joinYear: 1999 }, { code: "GRC", joinYear: 2002 }, { code: "GRD", joinYear: 2011 },
      { code: "GTM", joinYear: 2012 }, { code: "GIN", joinYear: 2003 }, { code: "GUY", joinYear: 2004 },
      { code: "HND", joinYear: 2002 }, { code: "HUN", joinYear: 2001 }, { code: "ISL", joinYear: 2000 },
      { code: "IRL", joinYear: 2002 }, { code: "ITA", joinYear: 1999 }, { code: "JPN", joinYear: 2007 },
      { code: "JOR", joinYear: 2002 }, { code: "KEN", joinYear: 2005 }, { code: "LVA", joinYear: 2002 },
      { code: "LSO", joinYear: 2000 }, { code: "LBR", joinYear: 2004 }, { code: "LIE", joinYear: 2001 },
      { code: "LTU", joinYear: 2003 }, { code: "LUX", joinYear: 2000 }, { code: "MDG", joinYear: 2008 },
      { code: "MWI", joinYear: 2002 }, { code: "MDV", joinYear: 2011 }, { code: "MLI", joinYear: 2000 },
      { code: "MLT", joinYear: 2002 }, { code: "MHL", joinYear: 2000 }, { code: "MUS", joinYear: 2002 },
      { code: "MEX", joinYear: 2005 }, { code: "MNG", joinYear: 2002 }, { code: "MNE", joinYear: 2006 },
      { code: "NAM", joinYear: 2002 }, { code: "NRU", joinYear: 2001 }, { code: "NLD", joinYear: 2001 },
      { code: "NZL", joinYear: 2000 }, { code: "NER", joinYear: 2002 }, { code: "NGA", joinYear: 2001 },
      { code: "MKD", joinYear: 2002 }, { code: "NOR", joinYear: 2000 }, { code: "PAN", joinYear: 2002 },
      { code: "PRY", joinYear: 2001 }, { code: "PER", joinYear: 2001 }, { code: "PHL", joinYear: 2011 },
      { code: "POL", joinYear: 2001 }, { code: "PRT", joinYear: 2002 }, { code: "KOR", joinYear: 2003 },
      { code: "MDA", joinYear: 2010 }, { code: "ROU", joinYear: 2002 }, { code: "KNA", joinYear: 2006 },
      { code: "LCA", joinYear: 2010 }, { code: "VCT", joinYear: 2003 }, { code: "WSM", joinYear: 2002 },
      { code: "SMR", joinYear: 1999 }, { code: "SEN", joinYear: 1999 }, { code: "SRB", joinYear: 2001 },
      { code: "SYC", joinYear: 2010 }, { code: "SLE", joinYear: 2000 }, { code: "SVK", joinYear: 2002 },
      { code: "SVN", joinYear: 2001 }, { code: "ZAF", joinYear: 2000 }, { code: "ESP", joinYear: 2000 },
      { code: "LKA", joinYear: 2016 }, { code: "SWE", joinYear: 2001 }, { code: "CHE", joinYear: 2001 },
      { code: "TJK", joinYear: 2000 }, { code: "TLS", joinYear: 2002 }, { code: "TTO", joinYear: 1999 },
      { code: "TUN", joinYear: 2011 }, { code: "GBR", joinYear: 2001 }, { code: "TZA", joinYear: 2002 },
      { code: "URY", joinYear: 2002 }, { code: "VUT", joinYear: 2012 }, { code: "VEN", joinYear: 2000 },
      { code: "ZMB", joinYear: 2002 }
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
    id: "quad",
    name: "QUAD",
    color: "#20B2AA",
    members: [
      { code: "AUS", joinYear: 2007 }, { code: "IND", joinYear: 2007 },
      { code: "JPN", joinYear: 2007 }, { code: "USA", joinYear: 2007 }
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
    id: "ioc",
    name: "International Olympic Committee",
    color: "#FFD700",
    members: [
      { code: "AFG", joinYear: 1936 }, { code: "ALB", joinYear: 1959 }, { code: "DZA", joinYear: 1964 },
      { code: "AND", joinYear: 1975 }, { code: "AGO", joinYear: 1980 }, { code: "ATG", joinYear: 1976 },
      { code: "ARG", joinYear: 1894 }, { code: "ARM", joinYear: 1993 }, { code: "AUS", joinYear: 1895 },
      { code: "AUT", joinYear: 1912 }, { code: "AZE", joinYear: 1993 }, { code: "BHS", joinYear: 1952 },
      { code: "BHR", joinYear: 1979 }, { code: "BGD", joinYear: 1980 }, { code: "BRB", joinYear: 1951 },
      { code: "BLR", joinYear: 1993 }, { code: "BEL", joinYear: 1894 }, { code: "BLZ", joinYear: 1968 },
      { code: "BEN", joinYear: 1962 }, { code: "BMU", joinYear: 1936 }, { code: "BTN", joinYear: 1983 },
      { code: "BOL", joinYear: 1936 }, { code: "BIH", joinYear: 1993 }, { code: "BWA", joinYear: 1980 },
      { code: "BRA", joinYear: 1935 }, { code: "BRN", joinYear: 1984 }, { code: "BGR", joinYear: 1924 },
      { code: "BFA", joinYear: 1972 }, { code: "BDI", joinYear: 1993 }, { code: "KHM", joinYear: 1953 },
      { code: "CMR", joinYear: 1963 }, { code: "CAN", joinYear: 1907 }, { code: "CPV", joinYear: 1993 },
      { code: "CAF", joinYear: 1965 }, { code: "TCD", joinYear: 1964 }, { code: "CHL", joinYear: 1934 },
      { code: "CHN", joinYear: 1979 }, { code: "COL", joinYear: 1948 }, { code: "COM", joinYear: 1993 },
      { code: "COG", joinYear: 1964 }, { code: "COK", joinYear: 1986 }, { code: "CRI", joinYear: 1936 },
      { code: "CIV", joinYear: 1963 }, { code: "HRV", joinYear: 1993 }, { code: "CUB", joinYear: 1955 },
      { code: "CYP", joinYear: 1978 }, { code: "CZE", joinYear: 1993 }, { code: "PRK", joinYear: 1957 },
      { code: "COD", joinYear: 1968 }, { code: "DNK", joinYear: 1905 }, { code: "DJI", joinYear: 1984 },
      { code: "DMA", joinYear: 1993 }, { code: "DOM", joinYear: 1953 }, { code: "ECU", joinYear: 1959 },
      { code: "EGY", joinYear: 1910 }, { code: "SLV", joinYear: 1938 }, { code: "GNQ", joinYear: 1984 },
      { code: "ERI", joinYear: 1999 }, { code: "EST", joinYear: 1991 }, { code: "SWZ", joinYear: 1972 },
      { code: "ETH", joinYear: 1954 }, { code: "FJI", joinYear: 1955 }, { code: "FIN", joinYear: 1907 },
      { code: "FRA", joinYear: 1894 }, { code: "GAB", joinYear: 1965 }, { code: "GMB", joinYear: 1976 },
      { code: "GEO", joinYear: 1993 }, { code: "DEU", joinYear: 1895 }, { code: "GHA", joinYear: 1952 },
      { code: "GBR", joinYear: 1894 }, { code: "GRC", joinYear: 1894 }, { code: "GRD", joinYear: 1984 },
      { code: "GTM", joinYear: 1947 }, { code: "GIN", joinYear: 1965 }, { code: "GNB", joinYear: 1995 },
      { code: "GUY", joinYear: 1948 }, { code: "HTI", joinYear: 1924 }, { code: "HND", joinYear: 1956 },
      { code: "HKG", joinYear: 1950 }, { code: "HUN", joinYear: 1895 }, { code: "ISL", joinYear: 1935 },
      { code: "IND", joinYear: 1900 }, { code: "IDN", joinYear: 1952 }, { code: "IRQ", joinYear: 1948 },
      { code: "IRL", joinYear: 1922 }, { code: "ISR", joinYear: 1952 }, { code: "ITA", joinYear: 1894 },
      { code: "JAM", joinYear: 1936 }, { code: "JPN", joinYear: 1912 }, { code: "JOR", joinYear: 1963 },
      { code: "KAZ", joinYear: 1993 }, { code: "KEN", joinYear: 1955 }, { code: "KIR", joinYear: 2003 },
      { code: "KWT", joinYear: 1966 }, { code: "KGZ", joinYear: 1993 }, { code: "LAO", joinYear: 1979 },
      { code: "LVA", joinYear: 1991 }, { code: "LBN", joinYear: 1947 }, { code: "LSO", joinYear: 1972 },
      { code: "LBR", joinYear: 1955 }, { code: "LBY", joinYear: 1963 }, { code: "LIE", joinYear: 1935 },
      { code: "LTU", joinYear: 1991 }, { code: "LUX", joinYear: 1912 }, { code: "MDG", joinYear: 1960 },
      { code: "MWI", joinYear: 1968 }, { code: "MYS", joinYear: 1954 }, { code: "MDV", joinYear: 1985 },
      { code: "MLI", joinYear: 1960 }, { code: "MLT", joinYear: 1928 }, { code: "MHL", joinYear: 2006 },
      { code: "MRT", joinYear: 1979 }, { code: "MUS", joinYear: 1972 }, { code: "MEX", joinYear: 1901 },
      { code: "FSM", joinYear: 2003 }, { code: "MDA", joinYear: 1993 }, { code: "MCO", joinYear: 1953 },
      { code: "MNG", joinYear: 1962 }, { code: "MNE", joinYear: 2007 }, { code: "MAR", joinYear: 1959 },
      { code: "MOZ", joinYear: 1979 }, { code: "MMR", joinYear: 1947 }, { code: "NAM", joinYear: 1991 },
      { code: "NRU", joinYear: 1994 }, { code: "NPL", joinYear: 1963 }, { code: "NLD", joinYear: 1912 },
      { code: "NZL", joinYear: 1919 }, { code: "NIC", joinYear: 1959 }, { code: "NER", joinYear: 1964 },
      { code: "NGA", joinYear: 1951 }, { code: "MKD", joinYear: 1993 }, { code: "NOR", joinYear: 1894 },
      { code: "OMN", joinYear: 1982 }, { code: "PAK", joinYear: 1948 }, { code: "PLW", joinYear: 1999 },
      { code: "PSE", joinYear: 1995 }, { code: "PAN", joinYear: 1947 }, { code: "PNG", joinYear: 1974 },
      { code: "PRY", joinYear: 1929 }, { code: "PER", joinYear: 1936 }, { code: "PHL", joinYear: 1929 },
      { code: "POL", joinYear: 1919 }, { code: "PRT", joinYear: 1909 }, { code: "PRI", joinYear: 1948 },
      { code: "QAT", joinYear: 1980 }, { code: "KOR", joinYear: 1947 }, { code: "ROU", joinYear: 1914 },
      { code: "RUS", joinYear: 1993 }, { code: "RWA", joinYear: 1984 }, { code: "KNA", joinYear: 1993 },
      { code: "LCA", joinYear: 1993 }, { code: "VCT", joinYear: 1987 }, { code: "WSM", joinYear: 1983 },
      { code: "SMR", joinYear: 1959 }, { code: "STP", joinYear: 1993 }, { code: "SAU", joinYear: 1965 },
      { code: "SEN", joinYear: 1963 }, { code: "SRB", joinYear: 1912 }, { code: "SYC", joinYear: 1979 },
      { code: "SLE", joinYear: 1964 }, { code: "SGP", joinYear: 1948 }, { code: "SVK", joinYear: 1993 },
      { code: "SVN", joinYear: 1993 }, { code: "SLB", joinYear: 1983 }, { code: "SOM", joinYear: 1972 },
      { code: "ZAF", joinYear: 1991 }, { code: "ESP", joinYear: 1912 }, { code: "LKA", joinYear: 1937 },
      { code: "SDN", joinYear: 1959 }, { code: "SUR", joinYear: 1959 }, { code: "SWE", joinYear: 1913 },
      { code: "CHE", joinYear: 1912 }, { code: "SYR", joinYear: 1948 }, { code: "TWN", joinYear: 1960 },
      { code: "TJK", joinYear: 1993 }, { code: "TZA", joinYear: 1964 }, { code: "THA", joinYear: 1950 },
      { code: "TLS", joinYear: 2003 }, { code: "TGO", joinYear: 1965 }, { code: "TON", joinYear: 1984 },
      { code: "TTO", joinYear: 1947 }, { code: "TUN", joinYear: 1957 }, { code: "TUR", joinYear: 1908 },
      { code: "TKM", joinYear: 1993 }, { code: "TUV", joinYear: 2007 }, { code: "UGA", joinYear: 1956 },
      { code: "UKR", joinYear: 1993 }, { code: "ARE", joinYear: 1980 }, { code: "USA", joinYear: 1894 },
      { code: "URY", joinYear: 1923 }, { code: "UZB", joinYear: 1993 }, { code: "VUT", joinYear: 1987 },
      { code: "VEN", joinYear: 1935 }, { code: "VNM", joinYear: 1979 }, { code: "YEM", joinYear: 1981 },
      { code: "ZMB", joinYear: 1963 }, { code: "ZWE", joinYear: 1980 }
    ]
  }
];
