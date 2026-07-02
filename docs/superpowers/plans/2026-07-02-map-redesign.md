# Wereldkaart Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Herbouw de wereldkaart-app naar een donker, "gamified" data-viz HUD met multi-select allianties, categorie-kleurfamilies, land-detailpaneel, zoekfunctie en een gestreept overlap-patroon voor landen die in meerdere geselecteerde allianties zitten.

**Architecture:** Layered HUD — de Mapbox-kaart is beeldvullend, alle UI (zoekbalk, categoriefilters, alliantie-chips, legenda, detailpaneel) zweeft erover als glaspanelen. State verhuist van single-select (`selectedAlliance: Alliance | null`) naar multi-select (`selectedAlliances: Alliance[]`), met een aparte `activeCategory` filter die alleen bepaalt welke chips zichtbaar zijn.

**Tech Stack:** React + TypeScript + Vite, Tailwind CSS, shadcn/ui (Radix), Mapbox GL JS. Geen testframework — verificatie via `tsc --noEmit` en handmatige controle in de dev-server.

**Referentie:** volledige spec in [`docs/superpowers/specs/2026-07-02-map-redesign-design.md`](../specs/2026-07-02-map-redesign-design.md).

---

## Task 1: Landendata genereren

Er is nog geen landnaam/vlag-lookup per ISO-code in de app. Nodig voor zoekfunctie en het detailpaneel.

**Files:**
- Modify: `package.json` (devDependencies)
- Create: `scripts/generate-countries.ts`
- Create (gegenereerd): `src/data/countries.ts`

- [ ] **Step 1: Installeer de dependencies voor het genereren**

```bash
npm install --save-dev world-countries tsx
```

- [ ] **Step 2: Schrijf het generatie-script**

Create `scripts/generate-countries.ts`:

```ts
import worldCountries from 'world-countries';
import { writeFileSync } from 'fs';
import { alliances } from '../src/data/alliances';

// world-countries levert soms een default-export, soms een namespace-object
// afhankelijk van de module-resolutie; dit dekt beide gevallen.
const countriesData: typeof worldCountries =
  (worldCountries as unknown as { default?: typeof worldCountries }).default ?? worldCountries;

const EXTRA_ENTRIES: Record<string, { name: string; flag: string }> = {
  EU: { name: 'Europese Unie', flag: '🇪🇺' },
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
```

- [ ] **Step 3: Draai het script**

Run: `npx tsx scripts/generate-countries.ts`
Expected: console-regel `src/data/countries.ts geschreven met <N> landen.` (N ligt rond de 120-140), geen `Geen land gevonden voor code ...`-waarschuwingen. Als die er wel zijn: controleer of de betreffende code een tikfout is in de brondata of een land dat `world-countries` onder een andere cca3-code registreert, en corrigeer `EXTRA_ENTRIES` in het script.

- [ ] **Step 4: Type-check**

Run: `npx tsc --noEmit`
Expected: geen output (geen errors)

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json scripts/generate-countries.ts src/data/countries.ts
git commit -m "Add generated country name/flag lookup for search and country detail panel"
```

---

## Task 2: Categorie-kleurenpalet doorvoeren

Elke alliantie krijgt de nieuwe kleur uit de spec — brede kleurboog per categorie in plaats van bijna-identieke tinten.

**Files:**
- Modify: `src/data/alliances/militair.ts`
- Modify: `src/data/alliances/handel.ts`
- Modify: `src/data/alliances/politiek.ts`
- Modify: `src/data/alliances/religieus.ts`

- [ ] **Step 1: Militair — vervang de `color`-regel per alliantie**

In `src/data/alliances/militair.ts`:
- `africacorps`: `color: "#8B4513",` → `color: "hsl(335, 75%, 50%)",`
- `aukus`: `color: "#483D8B",` → `color: "hsl(0, 85%, 58%)",`
- `nato`: `color: "#00A0DC",` → `color: "hsl(15, 90%, 50%)",`
- `quad`: `color: "#20B2AA",` → `color: "hsl(35, 70%, 65%)",`

- [ ] **Step 2: Handel — vervang de `color`-regel per alliantie**

In `src/data/alliances/handel.ts`:
- `atlanticpact`: `color: "#4682B4",` → `color: "hsl(8, 85%, 48%)",`
- `bri`: `color: "#CD853F",` → `color: "hsl(58, 60%, 62%)",`
- `brics`: `color: "#9932CC",` → `color: "hsl(18, 90%, 55%)",`
- `cptpp`: `color: "#6B4423",` → `color: "hsl(50, 70%, 45%)",`
- `oecd`: `color: "#008080",` → `color: "hsl(28, 80%, 68%)",`
- `opec`: `color: "#006400",` → `color: "hsl(42, 85%, 58%)",`
- `rcep`: `color: "#4B0082",` → `color: "hsl(34, 50%, 75%)",`
- `usmca`: `color: "#2E8B57",` → `color: "hsl(36, 95%, 40%)",`

- [ ] **Step 3: Politiek — vervang de `color`-regel per alliantie**

In `src/data/alliances/politiek.ts`:
- `africanunion`: `color: "#228B22",` → `color: "hsl(200, 75%, 52%)",`
- `asean`: `color: "#FF4500",` → `color: "hsl(290, 70%, 62%)",`
- `celac`: `color: "#FF69B4",` → `color: "hsl(215, 80%, 58%)",`
- `eu`: `color: "#003399",` → `color: "hsl(275, 65%, 68%)",`
- `g7`: `color: "#4169E1",` → `color: "hsl(230, 85%, 48%)",`
- `g20`: `color: "#800080",` → `color: "hsl(260, 55%, 70%)",`
- `sco`: `color: "#8B0000",` → `color: "hsl(245, 90%, 42%)",`

- [ ] **Step 4: Religieus — vervang de `color`-regel**

In `src/data/alliances/religieus.ts`:
- `oic`: `color: "#8B4513",` → `color: "hsl(165, 75%, 48%)",`

- [ ] **Step 5: Type-check**

Run: `npx tsc --noEmit`
Expected: geen output

- [ ] **Step 6: Commit**

```bash
git add src/data/alliances/militair.ts src/data/alliances/handel.ts src/data/alliances/politiek.ts src/data/alliances/religieus.ts
git commit -m "Replace alliance colors with per-category hue-arc palette"
```

---

## Task 3: Donkere visuele basis (fonts, achtergrond, tailwind config)

**Files:**
- Modify: `src/index.css`
- Modify: `tailwind.config.ts`
- Modify: `src/components/MapTokenInput.tsx`

- [ ] **Step 1: Voeg de fonts toe en zet de donkere basisachtergrond**

In `src/index.css`, voeg bovenaan het bestand toe (vóór de `@tailwind`-regels):

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap');
```

Vervang het bestaande `body`-blok onderaan (binnen `@layer base`):

```css
  body {
    @apply bg-background text-foreground;
  }
```

door:

```css
  body {
    @apply text-foreground;
    background-color: #0f0a1f;
    font-family: 'Inter', system-ui, sans-serif;
  }
```

- [ ] **Step 2: Voeg de heading/mono fonts toe aan Tailwind**

In `tailwind.config.ts`, binnen `theme.extend`, voeg toe naast `colors`, `borderRadius`, etc.:

```ts
			fontFamily: {
				heading: ['"Space Grotesk"', 'sans-serif'],
				mono: ['"JetBrains Mono"', 'monospace']
			},
```

- [ ] **Step 3: Restyle MapTokenInput naar het donkere thema**

Replace the full content of `src/components/MapTokenInput.tsx`:

```tsx
import React from 'react';
import { toast } from 'sonner';

interface MapTokenInputProps {
  onTokenSet: (token: string) => void;
}

const MapTokenInput: React.FC<MapTokenInputProps> = ({ onTokenSet }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/5 backdrop-blur-xl rounded-xl p-4 z-30">
      <p className="text-white/70 mb-2">Voer je Mapbox-token in om de kaart te tonen:</p>
      <input
        type="text"
        className="px-4 py-2 border border-white/20 bg-white/5 text-white rounded-md w-96 max-w-full placeholder-white/40"
        placeholder="Voer je Mapbox-token in"
        onChange={(e) => {
          onTokenSet(e.target.value);
          toast("Mapbox-token ingesteld");
        }}
      />
      <p className="text-sm text-white/50 mt-2">
        Token ophalen op{" "}
        <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
          mapbox.com
        </a>
      </p>
    </div>
  );
};

export default MapTokenInput;
```

- [ ] **Step 4: Type-check**

Run: `npx tsc --noEmit`
Expected: geen output

- [ ] **Step 5: Commit**

```bash
git add src/index.css tailwind.config.ts src/components/MapTokenInput.tsx
git commit -m "Add dark theme foundation: fonts, background, restyled token input"
```

---

## Task 4: Kleur- en statistiek-utilities

**Files:**
- Create: `src/utils/colorUtils.ts`
- Create: `src/utils/allianceStats.ts`

- [ ] **Step 1: Schrijf colorUtils**

Create `src/utils/colorUtils.ts`:

```ts
export const getContrastTextColor = (hslColor: string): string => {
  const match = hslColor.match(/hsl\(\s*[\d.]+\s*,\s*[\d.]+%\s*,\s*([\d.]+)%\s*\)/);
  const lightness = match ? parseFloat(match[1]) : 50;
  return lightness > 58 ? '#0a0a0a' : '#ffffff';
};

export const withAlpha = (hslColor: string, alpha: number): string => {
  return hslColor.replace('hsl(', 'hsla(').replace(')', `, ${alpha})`);
};
```

- [ ] **Step 2: Schrijf allianceStats**

Create `src/utils/allianceStats.ts`:

```ts
import { Alliance } from '@/data/alliances';

export interface AllianceStats {
  memberCount: number;
  foundingYear: number;
}

export const getAllianceStats = (alliance: Alliance): AllianceStats => {
  const foundingYear = alliance.members.reduce(
    (earliest, member) => Math.min(earliest, member.joinYear),
    Infinity
  );
  return {
    memberCount: alliance.members.length,
    foundingYear,
  };
};
```

- [ ] **Step 3: Type-check**

Run: `npx tsc --noEmit`
Expected: geen output (deze utilities worden nog nergens gebruikt, dus geen unused-import errors te verwachten — als die er wel zijn, komt dat door een strikte `noUnusedLocals`-regel; in dat geval is dat verwacht totdat Task 5/7 ze gebruiken)

- [ ] **Step 4: Commit**

```bash
git add src/utils/colorUtils.ts src/utils/allianceStats.ts
git commit -m "Add color contrast and alliance stats utilities"
```

---

## Task 5: AllianceSelector herbouwen naar multi-select

**Files:**
- Modify: `src/components/AllianceSelector.tsx`

- [ ] **Step 1: Vervang de volledige inhoud**

Replace the full content of `src/components/AllianceSelector.tsx`:

```tsx
import React from 'react';
import { Alliance } from '@/data/alliances';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getAllianceStats } from '@/utils/allianceStats';
import { getContrastTextColor, withAlpha } from '@/utils/colorUtils';

interface AllianceSelectorProps {
  alliances: Alliance[];
  selectedIds: string[];
  onToggle: (alliance: Alliance) => void;
}

const AllianceSelector: React.FC<AllianceSelectorProps> = ({
  alliances,
  selectedIds,
  onToggle,
}) => {
  return (
    <div className="flex flex-wrap gap-2 p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl">
      <TooltipProvider>
        {alliances.map((alliance) => {
          const isSelected = selectedIds.includes(alliance.id);
          const stats = getAllianceStats(alliance);
          return (
            <Tooltip key={alliance.id}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => onToggle(alliance)}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
                  style={{
                    backgroundColor: isSelected ? alliance.color : withAlpha(alliance.color, 0.18),
                    color: isSelected ? getContrastTextColor(alliance.color) : alliance.color,
                    boxShadow: isSelected ? `0 0 14px ${withAlpha(alliance.color, 0.6)}` : 'none',
                  }}
                >
                  {alliance.name}
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs text-sm font-medium">{alliance.description}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {stats.memberCount} leden · sinds {stats.foundingYear}
                </p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </TooltipProvider>
    </div>
  );
};

export default AllianceSelector;
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: errors over `Index.tsx` die `AllianceSelector` nog met de oude props (`selectedAlliance`, `onSelect`) aanroept — dat is verwacht, dat lossen we op in Task 10. Er mogen geen errors zijn binnen `AllianceSelector.tsx` zelf.

- [ ] **Step 3: Commit**

```bash
git add src/components/AllianceSelector.tsx
git commit -m "Rework AllianceSelector to multi-select toggle chips with stats tooltip"
```

---

## Task 6: TopBar (zoekbalk + categoriefilter)

**Files:**
- Create: `src/components/TopBar.tsx`

- [ ] **Step 1: Schrijf de component**

Create `src/components/TopBar.tsx`:

```tsx
import React, { useMemo, useState } from 'react';
import { Alliance, AllianceCategory } from '@/data/alliances';
import { CountryInfo } from '@/data/countries';

interface TopBarProps {
  alliances: Alliance[];
  countries: Record<string, CountryInfo>;
  activeCategory: AllianceCategory | null;
  onCategoryChange: (category: AllianceCategory | null) => void;
  onSelectAlliance: (alliance: Alliance) => void;
  onSelectCountry: (code: string) => void;
}

const CATEGORY_LABELS: Record<AllianceCategory, string> = {
  militair: '⚔ militair',
  handel: '💰 handel',
  politiek: '🏛 politiek',
  religieus: '☪ religieus',
};

const TopBar: React.FC<TopBarProps> = ({
  alliances,
  countries,
  activeCategory,
  onCategoryChange,
  onSelectAlliance,
  onSelectCountry,
}) => {
  const [query, setQuery] = useState('');

  const allianceResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return alliances.filter((a) => a.name.toLowerCase().includes(q)).slice(0, 5);
  }, [query, alliances]);

  const countryResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return Object.entries(countries)
      .filter(([, info]) => info.name.toLowerCase().includes(q))
      .slice(0, 5);
  }, [query, countries]);

  const hasResults = allianceResults.length > 0 || countryResults.length > 0;

  return (
    <div className="flex flex-wrap items-center gap-3 px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl relative">
      <div className="font-heading font-bold text-lg text-white">🌐 World Alliances</div>

      <div className="relative flex-1 min-w-[220px]">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Zoek land of alliantie..."
          className="w-full px-3 py-1.5 text-sm text-white placeholder-white/50 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-white/30"
        />
        {query.trim() && (
          <div className="absolute top-full left-0 right-0 mt-2 p-2 z-20 max-h-64 overflow-y-auto bg-[#1e0f42] border border-white/10 rounded-xl shadow-xl">
            {!hasResults && (
              <div className="text-xs text-white/50 px-2 py-1">Geen resultaten</div>
            )}
            {allianceResults.map((a) => (
              <button
                key={a.id}
                onClick={() => { onSelectAlliance(a); setQuery(''); }}
                className="block w-full text-left text-sm text-white px-2 py-1 rounded hover:bg-white/10"
              >
                {a.name} <span className="text-white/40 text-xs">alliantie</span>
              </button>
            ))}
            {countryResults.map(([code, info]) => (
              <button
                key={code}
                onClick={() => { onSelectCountry(code); setQuery(''); }}
                className="block w-full text-left text-sm text-white px-2 py-1 rounded hover:bg-white/10"
              >
                {info.flag} {info.name}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex gap-2 flex-wrap">
        {(Object.keys(CATEGORY_LABELS) as AllianceCategory[]).map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(activeCategory === category ? null : category)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              activeCategory === category
                ? 'bg-white/25 text-white'
                : 'bg-white/5 text-white/60 hover:bg-white/10'
            }`}
          >
            {CATEGORY_LABELS[category]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: geen nieuwe errors die specifiek `TopBar.tsx` betreffen (dit bestand wordt nog nergens geïmporteerd, dus geen "unused" issues)

- [ ] **Step 3: Commit**

```bash
git add src/components/TopBar.tsx
git commit -m "Add TopBar component with search and category filter pills"
```

---

## Task 7: CountryDetailDrawer

**Files:**
- Create: `src/components/CountryDetailDrawer.tsx`

- [ ] **Step 1: Schrijf de component**

Create `src/components/CountryDetailDrawer.tsx`:

```tsx
import React from 'react';
import { Alliance } from '@/data/alliances';
import { countries } from '@/data/countries';
import { findCountryAlliances } from '@/utils/mapUtils';
import { getContrastTextColor, withAlpha } from '@/utils/colorUtils';

interface CountryDetailDrawerProps {
  countryCode: string | null;
  alliances: Alliance[];
  onClose: () => void;
}

const CountryDetailDrawer: React.FC<CountryDetailDrawerProps> = ({
  countryCode,
  alliances,
  onClose,
}) => {
  if (!countryCode) return null;

  const info = countries[countryCode];
  const memberships = findCountryAlliances(countryCode, alliances);

  return (
    <div className="absolute top-4 right-4 bottom-4 w-56 p-4 flex flex-col gap-3 z-10 overflow-y-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl">
      <button
        onClick={onClose}
        className="self-end text-white/50 hover:text-white text-sm"
        aria-label="Sluiten"
      >
        ✕
      </button>
      <div>
        <div className="text-3xl">{info?.flag ?? '🏳️'}</div>
        <div className="font-heading font-bold text-lg text-white">
          {info?.name ?? countryCode}
        </div>
        <div className="text-xs text-white/50 uppercase tracking-wide">
          {memberships.length} {memberships.length === 1 ? 'alliantie' : 'allianties'}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {memberships.map(({ alliance, joinYear }) => (
          <div
            key={alliance.id}
            className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-semibold"
            style={{
              backgroundColor: withAlpha(alliance.color, 0.22),
              color: alliance.color,
            }}
          >
            <span>{alliance.name}</span>
            <span className="font-mono">{joinYear}</span>
          </div>
        ))}
        {memberships.length === 0 && (
          <div className="text-xs text-white/50">Geen lidmaatschappen bekend</div>
        )}
      </div>
    </div>
  );
};

export default CountryDetailDrawer;
```

Note: `getContrastTextColor` wordt hier geïmporteerd maar niet gebruikt (de badge-tekst gebruikt bewust de volle allianceskleur, niet een contrastkleur, voor consistentie met de goedgekeurde mockup). Verwijder de ongebruikte import als stap 2 een unused-import error geeft.

- [ ] **Step 2: Type-check en ongebruikte import opruimen**

Run: `npx tsc --noEmit`
Expected: als er een "getContrastTextColor is declared but never read"-achtige error verschijnt, verwijder `getContrastTextColor` uit de import-regel zodat die alleen `withAlpha` importeert. Draai daarna `npx tsc --noEmit` opnieuw.
Expected na fix: geen errors binnen `CountryDetailDrawer.tsx`

- [ ] **Step 3: Commit**

```bash
git add src/components/CountryDetailDrawer.tsx
git commit -m "Add CountryDetailDrawer showing flag, name and alliance memberships"
```

---

## Task 8: mapUtils herbouwen — multi-alliantie highlighting en overlap-patroon

Dit is het technisch zwaarste onderdeel: Mapbox kan geen dynamisch tweekleurig streeppatroon tekenen via een simpele paint-property, dus genereren we een canvas-patroonafbeelding per combinatie van overlappende allianties.

**Files:**
- Modify: `src/utils/mapUtils.ts`

- [ ] **Step 1: Vervang de volledige inhoud**

Replace the full content of `src/utils/mapUtils.ts`:

```ts
import mapboxgl from 'mapbox-gl';
import { Alliance } from '@/data/alliances';

const BASE_FILL_COLOR = '#241a3d';

export const initializeMap = (container: HTMLDivElement, token: string) => {
  mapboxgl.accessToken = token;
  return new mapboxgl.Map({
    container,
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [0, 20],
    zoom: 1.5,
    projection: 'mercator'
  });
};

export const setupCountriesLayer = (map: mapboxgl.Map, selectedAlliances: Alliance[]) => {
  if (!map.getSource('countries')) {
    map.addSource('countries', {
      type: 'vector',
      url: 'mapbox://mapbox.country-boundaries-v1',
      promoteId: 'iso_3166_1_alpha_3'
    });
  }

  if (map.getLayer('country-overlap')) map.removeLayer('country-overlap');
  if (map.getLayer('country-fills')) map.removeLayer('country-fills');
  if (map.getLayer('country-borders')) map.removeLayer('country-borders');

  map.addLayer({
    id: 'country-fills',
    type: 'fill',
    source: 'countries',
    'source-layer': 'country_boundaries',
    paint: {
      'fill-color': BASE_FILL_COLOR,
      'fill-opacity': 0.55
    }
  });

  map.addLayer({
    id: 'country-overlap',
    type: 'fill',
    source: 'countries',
    'source-layer': 'country_boundaries',
    filter: ['in', ['get', 'iso_3166_1_alpha_3'], ['literal', []]],
    paint: {
      'fill-opacity': 1
    }
  });

  map.addLayer({
    id: 'country-borders',
    type: 'line',
    source: 'countries',
    'source-layer': 'country_boundaries',
    paint: {
      'line-color': ['case', ['boolean', ['feature-state', 'hover'], false], '#ffffff', 'rgba(255,255,255,0.15)'],
      'line-width': ['case', ['boolean', ['feature-state', 'hover'], false], 1.5, 0.5]
    }
  });

  const layers = map.getStyle().layers;
  const labelLayerIds = layers
    .filter((layer) => layer.type === 'symbol')
    .map((layer) => layer.id);

  labelLayerIds.forEach((layerId) => {
    map.moveLayer(layerId);
  });

  updateAllianceHighlights(map, selectedAlliances);
};

const getOrCreateStripePattern = (map: mapboxgl.Map, colors: string[]): string => {
  const patternId = `stripe-${colors.map((c) => c.replace(/[^a-zA-Z0-9]/g, '')).join('-')}`;
  if (map.hasImage(patternId)) return patternId;

  const size = 32;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) return patternId;

  const stripeColors = colors.slice(0, 2);
  const stripeWidth = size / (stripeColors.length * 2);
  for (let i = -size; i < size * 2; i += stripeWidth) {
    const colorIndex = Math.floor((i + size) / stripeWidth) % stripeColors.length;
    ctx.fillStyle = stripeColors[colorIndex];
    ctx.save();
    ctx.translate(size / 2, size / 2);
    ctx.rotate(Math.PI / 4);
    ctx.translate(-size / 2, -size / 2);
    ctx.fillRect(i, -size, stripeWidth, size * 3);
    ctx.restore();
  }

  const imageData = ctx.getImageData(0, 0, size, size);
  map.addImage(patternId, imageData);
  return patternId;
};

export const updateAllianceHighlights = (map: mapboxgl.Map, alliances: Alliance[]) => {
  if (!map.getLayer('country-fills')) return;

  if (alliances.length === 0) {
    map.setPaintProperty('country-fills', 'fill-color', BASE_FILL_COLOR);
    map.setPaintProperty('country-fills', 'fill-opacity', 0.55);
    if (map.getLayer('country-overlap')) {
      map.setFilter('country-overlap', ['in', ['get', 'iso_3166_1_alpha_3'], ['literal', []]]);
    }
    return;
  }

  const codeToAlliances = new Map<string, Alliance[]>();
  alliances.forEach((alliance) => {
    alliance.members.forEach((member) => {
      const list = codeToAlliances.get(member.code) ?? [];
      list.push(alliance);
      codeToAlliances.set(member.code, list);
    });
  });

  const soloMatch: string[] = [];
  const overlapCodes: string[] = [];
  const overlapPatternMatch: string[] = [];

  codeToAlliances.forEach((memberAlliances, code) => {
    if (memberAlliances.length === 1) {
      soloMatch.push(code, memberAlliances[0].color);
    } else {
      overlapCodes.push(code);
      const patternId = getOrCreateStripePattern(map, memberAlliances.map((a) => a.color));
      overlapPatternMatch.push(code, patternId);
    }
  });

  map.setPaintProperty('country-fills', 'fill-color', [
    'match',
    ['get', 'iso_3166_1_alpha_3'],
    ...soloMatch,
    BASE_FILL_COLOR
  ]);
  map.setPaintProperty('country-fills', 'fill-opacity', 1);

  if (map.getLayer('country-overlap')) {
    map.setFilter('country-overlap', ['in', ['get', 'iso_3166_1_alpha_3'], ['literal', overlapCodes]]);
    if (overlapPatternMatch.length > 0) {
      map.setPaintProperty('country-overlap', 'fill-pattern', [
        'match',
        ['get', 'iso_3166_1_alpha_3'],
        ...overlapPatternMatch,
        ''
      ]);
    }
  }
};

export const findCountryAlliances = (countryCode: string, alliances: Alliance[]): Array<{ alliance: Alliance; joinYear: number }> => {
  return alliances.reduce((acc, alliance) => {
    const membership = alliance.members.find((member) => member.code === countryCode);
    if (membership) {
      acc.push({
        alliance,
        joinYear: membership.joinYear
      });
    }
    return acc;
  }, [] as Array<{ alliance: Alliance; joinYear: number }>);
};
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: errors in `WorldMap.tsx` omdat die nog de oude `updateAllianceHighlight`/`setupCountriesLayer`-signatuur gebruikt — verwacht, wordt opgelost in Task 9. Geen errors binnen `mapUtils.ts` zelf.

- [ ] **Step 3: Commit**

```bash
git add src/utils/mapUtils.ts
git commit -m "Rework mapUtils for multi-alliance highlighting and overlap stripe patterns"
```

---

## Task 9: WorldMap herbouwen — klik in plaats van hover, legenda

**Files:**
- Modify: `src/components/WorldMap.tsx`

- [ ] **Step 1: Vervang de volledige inhoud**

Replace the full content of `src/components/WorldMap.tsx`:

```tsx
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Alliance } from '@/data/alliances';
import MapTokenInput from './MapTokenInput';
import { initializeMap, setupCountriesLayer, updateAllianceHighlights } from '@/utils/mapUtils';
import { Alert, AlertDescription } from './ui/alert';
import { useToast } from './ui/use-toast';

interface WorldMapProps {
  selectedAlliances: Alliance[];
  onCountryClick: (code: string) => void;
}

const DEFAULT_MAPBOX_TOKEN = 'pk.eyJ1Ijoic2FuZHJvajg4IiwiYSI6ImNsaXhhbHdpYzA2ZHMzY285bGVnMmM2M28ifQ._Tg-8q66Ef4MRPvac9zUjA';

const WorldMap: React.FC<WorldMapProps> = ({ selectedAlliances, onCountryClick }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const hoveredCode = useRef<string | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>(DEFAULT_MAPBOX_TOKEN);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      map.current = initializeMap(mapContainer.current, mapboxToken);
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      map.current.on('error', (e) => {
        console.error('Mapbox error:', e);
        setError('Er ging iets mis bij het laden van de kaart. Ververs de pagina.');
        toast({
          title: "Kaart-fout",
          description: "Er ging iets mis bij het laden van de kaart. Ververs de pagina.",
          variant: "destructive",
        });
      });

      map.current.on('load', () => {
        if (!map.current) return;
        setupCountriesLayer(map.current, selectedAlliances);

        map.current.on('mousemove', 'country-fills', (e) => {
          if (!map.current || !e.features?.[0]) return;
          const code = e.features[0].properties?.iso_3166_1_alpha_3;
          if (hoveredCode.current && hoveredCode.current !== code) {
            map.current.setFeatureState(
              { source: 'countries', sourceLayer: 'country_boundaries', id: hoveredCode.current },
              { hover: false }
            );
          }
          if (code) {
            map.current.setFeatureState(
              { source: 'countries', sourceLayer: 'country_boundaries', id: code },
              { hover: true }
            );
            hoveredCode.current = code;
            map.current.getCanvas().style.cursor = 'pointer';
          }
        });

        map.current.on('mouseleave', 'country-fills', () => {
          if (!map.current) return;
          if (hoveredCode.current) {
            map.current.setFeatureState(
              { source: 'countries', sourceLayer: 'country_boundaries', id: hoveredCode.current },
              { hover: false }
            );
          }
          hoveredCode.current = null;
          map.current.getCanvas().style.cursor = '';
        });

        map.current.on('click', 'country-fills', (e) => {
          const code = e.features?.[0]?.properties?.iso_3166_1_alpha_3;
          if (code) onCountryClick(code);
        });
      });
    } catch (err) {
      console.error('Error initializing map:', err);
      setError('Kon de kaart niet initialiseren. Controleer je internetverbinding.');
      toast({
        title: "Kaart-initialisatie mislukt",
        description: "Kon de kaart niet initialiseren. Controleer je internetverbinding.",
        variant: "destructive",
      });
    }

    return () => {
      map.current?.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapboxToken]);

  useEffect(() => {
    if (!map.current || !map.current.isStyleLoaded()) return;
    updateAllianceHighlights(map.current, selectedAlliances);
  }, [selectedAlliances]);

  return (
    <div className="relative w-full h-[calc(100vh-9rem)]">
      {error && (
        <Alert variant="destructive" className="absolute top-4 left-4 right-4 z-20">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {!mapboxToken && <MapTokenInput onTokenSet={setMapboxToken} />}
      <div ref={mapContainer} className="absolute inset-0 rounded-xl overflow-hidden" />

      {selectedAlliances.length > 0 && (
        <div className="absolute bottom-4 left-4 p-3 text-xs text-white flex flex-col gap-1.5 z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl">
          {selectedAlliances.map((a) => (
            <div key={a.id} className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: a.color }} />
              {a.name}
            </div>
          ))}
          {selectedAlliances.length > 1 && (
            <div className="flex items-center gap-2 opacity-70 pt-1.5 mt-1 border-t border-white/10">
              <span
                className="w-2.5 h-2.5 rounded-sm"
                style={{
                  background: `repeating-linear-gradient(45deg, ${selectedAlliances[0].color}, ${selectedAlliances[0].color} 2px, ${selectedAlliances[1].color} 2px, ${selectedAlliances[1].color} 4px)`
                }}
              />
              overlap
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WorldMap;
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: errors in `Index.tsx` (nog oude props) — verwacht, wordt opgelost in Task 10. Geen errors binnen `WorldMap.tsx` zelf.

- [ ] **Step 3: Commit**

```bash
git add src/components/WorldMap.tsx
git commit -m "Rework WorldMap: click-based country selection, hover glow via feature-state, legend"
```

---

## Task 10: Index.tsx — alles samenbrengen

**Files:**
- Modify: `src/pages/Index.tsx`

- [ ] **Step 1: Vervang de volledige inhoud**

Replace the full content of `src/pages/Index.tsx`:

```tsx
import { useState } from 'react';
import WorldMap from '@/components/WorldMap';
import AllianceSelector from '@/components/AllianceSelector';
import TopBar from '@/components/TopBar';
import CountryDetailDrawer from '@/components/CountryDetailDrawer';
import { alliances, Alliance, AllianceCategory } from '@/data/alliances';
import { countries } from '@/data/countries';

const Index = () => {
  const [selectedAlliances, setSelectedAlliances] = useState<Alliance[]>([]);
  const [activeCategory, setActiveCategory] = useState<AllianceCategory | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const toggleAlliance = (alliance: Alliance) => {
    setSelectedAlliances((prev) =>
      prev.some((a) => a.id === alliance.id)
        ? prev.filter((a) => a.id !== alliance.id)
        : [...prev, alliance]
    );
  };

  const visibleAlliances = activeCategory
    ? alliances.filter((a) => a.category === activeCategory)
    : alliances;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0a1f] to-[#1e0f42] p-4">
      <div className="max-w-7xl mx-auto space-y-3">
        <TopBar
          alliances={alliances}
          countries={countries}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onSelectAlliance={toggleAlliance}
          onSelectCountry={setSelectedCountry}
        />

        <AllianceSelector
          alliances={visibleAlliances}
          selectedIds={selectedAlliances.map((a) => a.id)}
          onToggle={toggleAlliance}
        />

        <div className="relative">
          <WorldMap
            selectedAlliances={selectedAlliances}
            onCountryClick={(code) =>
              setSelectedCountry((prev) => (prev === code ? null : code))
            }
          />
          <CountryDetailDrawer
            countryCode={selectedCountry}
            alliances={alliances}
            onClose={() => setSelectedCountry(null)}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
```

- [ ] **Step 2: Type-check — nu moet alles kloppen**

Run: `npx tsc --noEmit`
Expected: geen output (geen errors) — als er nog errors zijn, controleer of Task 5-9 exact zijn overgenomen zoals gespecificeerd (met name prop-namen: `selectedIds`/`onToggle` op AllianceSelector, `selectedAlliances`/`onCountryClick` op WorldMap)

- [ ] **Step 3: Commit**

```bash
git add src/pages/Index.tsx
git commit -m "Wire up TopBar, multi-select AllianceSelector, WorldMap and CountryDetailDrawer in Index"
```

---

## Task 11: Handmatige verificatie in de dev-server

**Files:** geen wijzigingen — alleen controleren.

- [ ] **Step 1: Start de dev-server en laad de pagina**

Start de server (via het project se `npm run dev`, poort 8080) en open de pagina. Controleer met een screenshot: donkere achtergrond, glaspanelen zichtbaar (top bar, alliantie-chips), geen consolefouten.

- [ ] **Step 2: Controleer categoriefilter**

Klik op elke categoriepill (militair, handel, politiek, religieus) en controleer dat de chip-rij eronder alleen allianties uit die categorie toont, met duidelijk te onderscheiden kleuren binnen de rij. Klik dezelfde pill nogmaals aan: alle allianties moeten weer zichtbaar zijn.

- [ ] **Step 3: Controleer multi-select en overlap**

Selecteer twee allianties met minstens één gezamenlijk lid (bijvoorbeeld BRICS en SCO — beide bevatten Rusland, China, India). Controleer dat:
- Beide allianties op de kaart hun eigen kleur tonen voor niet-overlappende leden
- Het gezamenlijke land een gestreept patroon met beide kleuren toont
- De legenda linksonder beide allianties plus een "overlap"-regel toont

- [ ] **Step 4: Controleer land-detailpaneel**

Klik op een land dat in meerdere geselecteerde allianties zit. Controleer dat het paneel rechts opent met vlag, naam, en een badge per alliantie met het toetredingsjaar. Klik hetzelfde land nogmaals aan: paneel sluit.

- [ ] **Step 5: Controleer zoekfunctie**

Typ een gedeeltelijke naam van een land (bijv. "duit") in de zoekbalk. Controleer dat het land verschijnt in de resultatenlijst en dat klikken het detailpaneel opent. Typ een alliantienaam (bijv. "nato") en controleer dat klikken de alliantie aan de selectie toevoegt.

- [ ] **Step 6: Controleer hover-gloed**

Beweeg de muis over een land zonder te klikken. Controleer dat de rand van het land oplicht (witter/dikker) zolang de cursor erboven blijft, en weer normaal wordt zodra de cursor weggaat.

- [ ] **Step 7: Los eventuele bevindingen op**

Als een van bovenstaande controles afwijkt van de beschrijving, noteer wat er misgaat, corrigeer het betreffende bestand uit Task 1-10, en herhaal de type-check (`npx tsc --noEmit`) voor dat bestand voordat je verder gaat.

- [ ] **Step 8: Laatste commit indien er correcties waren**

```bash
git add -A
git commit -m "Fix issues found during manual verification of redesign"
```

(Sla deze stap over als Step 1-6 zonder bevindingen zijn doorlopen.)
