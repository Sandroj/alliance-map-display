import worldCountries from 'world-countries';
import { writeFileSync } from 'fs';
import { alliances } from '../src/data/alliances';

// world-countries levert soms een default-export, soms een namespace-object
// afhankelijk van de module-resolutie; dit dekt beide gevallen.
const countriesData: typeof worldCountries =
  (worldCountries as unknown as { default?: typeof worldCountries }).default ?? worldCountries;

// world-countries modelleert alleen soevereine staten; supranationale
// entiteiten en niet-erkende staten krijgen hier handmatig een entry.
const EXTRA_ENTRIES: Record<string, { name: string; flag: string }> = {
  EU: { name: 'European Union', flag: '🇪🇺' },
  AU: { name: 'African Union', flag: '🌍' },
  TUV: { name: 'Tuvalu', flag: '🇹🇻' },
  XKX: { name: 'Kosovo', flag: '🇽🇰' },
  XAB: { name: 'Abkhazia', flag: '🏳️' },
  XSO: { name: 'South Ossetia', flag: '🏳️' },
  XTR: { name: 'Transnistria', flag: '🏳️' },
};

const usedCodes = new Set<string>();
alliances.forEach((alliance) => {
  alliance.members.forEach((member) => usedCodes.add(member.code));
});

const entries: Record<string, { name: string; flag: string }> = {};

usedCodes.forEach((code) => {
  if (EXTRA_ENTRIES[code]) {
    entries[code] = EXTRA_ENTRIES[code];
    return;
  }
  const match = countriesData.find((c) => c.cca3 === code);
  if (!match) {
    console.warn(`Geen land gevonden voor code ${code}`);
    return;
  }
  entries[code] = { name: match.name.common, flag: match.flag };
});

const lines = Object.entries(entries)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([code, info]) => `  ${code}: { name: ${JSON.stringify(info.name)}, flag: ${JSON.stringify(info.flag)} },`);

const output = `// Gegenereerd via scripts/generate-countries.ts — niet handmatig bewerken.
// Herdraaien met: npx tsx scripts/generate-countries.ts

export interface CountryInfo {
  name: string;
  flag: string;
}

export const countries: Record<string, CountryInfo> = {
${lines.join('\n')}
};
`;

writeFileSync('src/data/countries.ts', output);
console.log(`src/data/countries.ts geschreven met ${Object.keys(entries).length} landen.`);
