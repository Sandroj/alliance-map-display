# Uitbreiding & Wereldklasse-polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Multi-categorie datamodel met lidmaatschapsniveaus, ~19 nieuwe organisaties (met webresearch), gesectioneerd organisatiepaneel, header-menu met overlays, organisatieprofiel-modal met Wikipedia-intro, bewegende achtergrond, toetsenbord-navigeerbaar zoeken, en de dropdown-z-index-fix.

**Architecture:** Data verhuist naar één bestand per organisatie (`src/data/alliances/orgs/*.ts`) met `categories: AllianceCategory[]` en optionele `status` per lid. UI: nieuwe `Header` (vervangt TopBar) en `AlliancePanel` (vervangt AllianceSelector), plus `InfoOverlay`/`OrgProfileModal`/`AnimatedBackground`. Kaart krijgt tier-opacity.

**Tech Stack:** React + TypeScript + Vite, Tailwind, Mapbox GL JS, Wikipedia REST summary API. Geen testframework — verificatie via `npx tsc -p tsconfig.app.json --noEmit` (LET OP: plain `npx tsc --noEmit` checkt 0 bestanden door de references-only root-tsconfig en geeft valse rust), productiebuild en handmatige browser-doorloop.

**Referentie:** spec in [`docs/superpowers/specs/2026-07-02-expansion-redesign-design.md`](../specs/2026-07-02-expansion-redesign-design.md).

**Voor research-taken (Task 2–6):** gebruik WebSearch. Officiële organisatiewebsites zijn de primaire bron; peildatum 2026. `joinYear` = jaar waarin het land zijn húidige status kreeg. Controleer dat elke `wikipediaTitle` een bestaand Engelstalig artikel is.

---

## Task 1: Fundament — datamodel, per-organisatie bestanden, categorie-metadata

**Files:**
- Modify: `src/data/alliance-types.ts`
- Create: `src/data/categories.ts`
- Create: `src/data/alliances/orgs/<id>.ts` (20 bestanden, conversie van bestaande data)
- Modify: `src/data/alliances.ts`
- Modify: `src/pages/Index.tsx` (alleen de filterregel)
- Delete: `src/data/alliances/militair.ts`, `handel.ts`, `politiek.ts`, `religieus.ts`

- [ ] **Step 1: Leg de baseline vast**

Run: `npx tsx -e "import('./src/data/alliances.js').then(m => console.log('orgs:', m.alliances.length, 'members:', m.alliances.reduce((n,a)=>n+a.members.length,0)))"`
(als de .js-import faalt, gebruik `./src/data/alliances` — tsx lost dit op)
Noteer beide getallen; na de conversie moeten ze exact gelijk zijn.

- [ ] **Step 2: Vervang de volledige inhoud van `src/data/alliance-types.ts`**

```ts
export type AllianceCategory = "militair" | "handel" | "politiek" | "religieus";

export type MemberStatus = "observer" | "dialogue" | "partner";

export interface AllianceMember {
  code: string;        // ISO 3166-1 alpha-3, of pseudo-code (EU, AU, XAB, XSO, XTR)
  joinYear: number;    // jaar waarin dit land zijn huidige status kreeg
  status?: MemberStatus; // afwezig = volwaardig lid
}

export interface Alliance {
  id: string;
  name: string;
  color: string;
  description: string;
  categories: AllianceCategory[]; // eerste = primaire categorie
  members: AllianceMember[];
  mapNote?: string;
  wikipediaTitle?: string;
}
```

- [ ] **Step 3: Create `src/data/categories.ts`**

```ts
import { AllianceCategory } from './alliance-types';

export const CATEGORY_META: Record<AllianceCategory, { label: string; icon: string; color: string }> = {
  militair: { label: 'Military', icon: '⚔️', color: 'hsl(0, 70%, 50%)' },
  handel: { label: 'Trade', icon: '💰', color: 'hsl(36, 80%, 45%)' },
  politiek: { label: 'Political', icon: '🏛️', color: 'hsl(240, 60%, 55%)' },
  religieus: { label: 'Religious', icon: '☪️', color: 'hsl(165, 70%, 40%)' },
};

export const CATEGORY_ORDER: AllianceCategory[] = ['militair', 'handel', 'politiek', 'religieus'];
```

- [ ] **Step 4: Converteer de 20 bestaande organisaties naar `src/data/alliances/orgs/<id>.ts`**

Per organisatie één bestand. Ledenlijsten **byte-voor-byte kopiëren** uit de oude categoriebestanden; alleen de metadata verandert. Formaat (voorbeeld voor NAVO):

```ts
import { Alliance } from "../../alliance-types";

export const nato: Alliance = {
  id: "nato",
  name: "NATO",
  color: "hsl(15, 90%, 50%)",
  description: "Military alliance between North American and European countries. Its principal political decision-making body is the North Atlantic Council (NAC).",
  categories: ["militair"],
  wikipediaTitle: "NATO",
  members: [
    // ... exact gekopieerd uit militair.ts ...
  ]
};
```

Mappingtabel (bestand = `orgs/<id>.ts`, exportnaam = id; kleur en leden ongewijzigd; description ongewijzigd behalve NAVO zoals hierboven):

| id | categories | wikipediaTitle |
|---|---|---|
| africacorps | ["militair"] | "Africa Corps" |
| aukus | ["militair"] | "AUKUS" |
| nato | ["militair"] | "NATO" (description: NAC-zin toevoegen, zie boven) |
| quad | ["militair"] | "Quadrilateral Security Dialogue" |
| atlanticpact | ["handel"] | *(geen — veld weglaten)* |
| bri | ["handel"] | "Belt and Road Initiative" |
| brics | ["handel"] | "BRICS" |
| cptpp | ["handel"] | "Comprehensive and Progressive Agreement for Trans-Pacific Partnership" |
| oecd | ["handel"] | "OECD" |
| opec | ["handel"] | "OPEC" |
| rcep | ["handel"] | "Regional Comprehensive Economic Partnership" |
| usmca | ["handel"] | "United States–Mexico–Canada Agreement" |
| africanunion | ["politiek"] | "African Union" |
| asean | ["politiek"] | "ASEAN" |
| celac | ["politiek"] | "Community of Latin American and Caribbean States" |
| eu | ["politiek"] | "European Union" |
| g7 | ["politiek"] | "G7" |
| g20 | ["politiek"] | "G20" |
| sco | ["politiek"] | "Shanghai Cooperation Organisation" |
| oic | ["religieus"] | "Organisation of Islamic Cooperation" |

- [ ] **Step 5: Vervang de volledige inhoud van `src/data/alliances.ts`**

```ts
import { Alliance } from "./alliance-types";
import { africacorps } from "./alliances/orgs/africacorps";
import { africanunion } from "./alliances/orgs/africanunion";
import { asean } from "./alliances/orgs/asean";
import { atlanticpact } from "./alliances/orgs/atlanticpact";
import { aukus } from "./alliances/orgs/aukus";
import { bri } from "./alliances/orgs/bri";
import { brics } from "./alliances/orgs/brics";
import { celac } from "./alliances/orgs/celac";
import { cptpp } from "./alliances/orgs/cptpp";
import { eu } from "./alliances/orgs/eu";
import { g7 } from "./alliances/orgs/g7";
import { g20 } from "./alliances/orgs/g20";
import { nato } from "./alliances/orgs/nato";
import { oecd } from "./alliances/orgs/oecd";
import { oic } from "./alliances/orgs/oic";
import { opec } from "./alliances/orgs/opec";
import { quad } from "./alliances/orgs/quad";
import { rcep } from "./alliances/orgs/rcep";
import { sco } from "./alliances/orgs/sco";
import { usmca } from "./alliances/orgs/usmca";

export type { Alliance, AllianceCategory, AllianceMember, MemberStatus } from "./alliance-types";

export const alliances: Alliance[] = [
  africacorps, africanunion, asean, atlanticpact, aukus, bri, brics, celac,
  cptpp, eu, g7, g20, nato, oecd, oic, opec, quad, rcep, sco, usmca,
].sort((a, b) => a.name.localeCompare(b.name));
```

- [ ] **Step 6: Fix de filterregel in `src/pages/Index.tsx`**

Vervang:
```tsx
  const visibleAlliances = activeCategory
    ? alliances.filter((a) => a.category === activeCategory)
    : alliances;
```
door:
```tsx
  const visibleAlliances = activeCategory
    ? alliances.filter((a) => a.categories.includes(activeCategory))
    : alliances;
```

- [ ] **Step 7: Verwijder de oude categoriebestanden**

```bash
git rm src/data/alliances/militair.ts src/data/alliances/handel.ts src/data/alliances/politiek.ts src/data/alliances/religieus.ts
```

- [ ] **Step 8: Verifieer**

Run: `npx tsc -p tsconfig.app.json --noEmit` — verwacht: geen errors.
Run de baseline-one-liner uit Step 1 opnieuw — verwacht: exact dezelfde twee getallen (20 orgs, zelfde ledentotaal).

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "Restructure alliance data: one file per org, multi-category model, member tiers"
```

---

## Task 2: Data — nieuwe militaire organisaties (research)

**Files:**
- Create: `src/data/alliances/orgs/csto.ts`, `icepact.ts`, `safe.ts`, `ceps.ts`, `msp.ts`, `iaea.ts`
- Modify: `src/data/alliances.ts` (imports + array)

- [ ] **Step 1: Research en schrijf de zes bestanden**

Bestandsformaat exact zoals in Task 1 Step 4. Per organisatie (kleur is voorgeschreven, niet zelf kiezen):

1. **csto** — "Collective Security Treaty Organization", color `hsl(345, 80%, 42%)`, categories `["militair"]`, wikipediaTitle "Collective Security Treaty Organization". Ankers: RUS, BLR, ARM, KAZ, KGZ, TJK; research toetredingsjaren (1992/1994-golf en 2002-herstructurering — gebruik het jaar passend bij de huidige status). Armeense deelname is bevroren; benoem dat in de description (Armenië blijft formeel lid).
2. **icepact** — "ICE Pact", color `hsl(10, 60%, 68%)`, categories `["militair"]`, wikipediaTitle: research de exacte artikeltitel (waarschijnlijk "Icebreaker Collaboration Effort"). Ankers: USA, CAN, FIN (2024, ijsbrekersamenwerking).
3. **safe** — "SAFE (Security Action for Europe)", color `hsl(20, 85%, 62%)`, categories `["militair"]`, EU-defensie-instrument 2025. Research welke landen deelnemen (EU-lidstaten die intekenden, Oekraïne-associatie, Canada recent — gebruikersnotitie). wikipediaTitle: research; weglaten als er geen artikel is.
4. **ceps** — "Central Europe Pipeline System", color `hsl(30, 55%, 55%)`, categories `["militair", "handel"]`, wikipediaTitle "Central Europe Pipeline System". NAVO-brandstofpijpleidingnet; research de deelnemende landen (gebruikersnotitie: nu 12, Polen en Roemenië aspirant → als `status: "partner"`).
5. **msp** — "Minerals Security Partnership", color `hsl(5, 50%, 40%)`, categories `["militair", "handel"]`, wikipediaTitle "Minerals Security Partnership". Research de actuele partnerlijst (~14 landen + EU als pseudo-lid met code "EU"). Description noemt kritieke mineralen (lithium, gallium, germanium).
6. **iaea** — "International Atomic Energy Agency", color `hsl(350, 45%, 60%)`, categories `["militair", "politiek"]`, wikipediaTitle "International Atomic Energy Agency". **Volledige ledenlijst (~180 landen) met toetredingsjaar per land** — gebruik de officiële IAEA-ledenlijst.

- [ ] **Step 2: Voeg de imports en array-entries toe aan `src/data/alliances.ts`**

```ts
import { ceps } from "./alliances/orgs/ceps";
import { csto } from "./alliances/orgs/csto";
import { iaea } from "./alliances/orgs/iaea";
import { icepact } from "./alliances/orgs/icepact";
import { msp } from "./alliances/orgs/msp";
import { safe } from "./alliances/orgs/safe";
```
En in de array: `ceps, csto, iaea, icepact, msp, safe,` (de sort regelt de volgorde).

- [ ] **Step 3: Verifieer**

Run: `npx tsc -p tsconfig.app.json --noEmit` — geen errors.
Run: `npx tsx -e "import('./src/data/alliances').then(m => m.alliances.filter(a=>['csto','icepact','safe','ceps','msp','iaea'].includes(a.id)).forEach(a=>console.log(a.id, a.members.length)))"` — sanity-check de aantallen (iaea ~175-185, csto 6, icepact 3).

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "Add CSTO, ICE Pact, SAFE, CEPS, MSP and IAEA with researched memberships"
```

---

## Task 3: Data — nieuwe handelsorganisaties (research)

**Files:**
- Create: `src/data/alliances/orgs/hanseatic.ts`, `iea.ts`
- Modify: `src/data/alliances.ts`

- [ ] **Step 1: Research en schrijf de twee bestanden**

1. **hanseatic** — "New Hanseatic League", color `hsl(46, 65%, 58%)`, categories `["handel"]`, wikipediaTitle "New Hanseatic League". Ankers: NLD, IRL, DNK, SWE, FIN, EST, LVA, LTU (2018, fiscaal verbond).
2. **iea** — "International Energy Agency", color `hsl(24, 70%, 60%)`, categories `["handel"]`, wikipediaTitle "International Energy Agency". Volledige ledenlijst (~31-32 landen) met toetredingsjaren; description noemt de rol als tegenhanger van OPEC voor olieverbruikende landen. Associatielanden (o.a. India, China, Brazilië) als `status: "partner"`.

- [ ] **Step 2: Imports + array-entries in `src/data/alliances.ts`** (`hanseatic`, `iea` — zelfde patroon als Task 2 Step 2)

- [ ] **Step 3: Verifieer** — `npx tsc -p tsconfig.app.json --noEmit`, geen errors.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "Add New Hanseatic League and IEA with researched memberships"
```

---

## Task 4: Data — grote politieke organisaties (research)

**Files:**
- Create: `src/data/alliances/orgs/icc.ts`, `osce.ts`, `parischarter.ts`
- Modify: `src/data/alliances.ts`

- [ ] **Step 1: Research en schrijf de drie bestanden**

1. **icc** — "International Criminal Court", color `hsl(220, 60%, 65%)`, categories `["politiek"]`, wikipediaTitle "International Criminal Court". **Volledige lijst verdragspartijen (~125) met ratificatiejaar.** Teruggetrokken staten (Burundi, Filipijnen) níet opnemen.
2. **osce** — "Organization for Security and Co-operation in Europe", color `hsl(205, 85%, 40%)`, categories `["politiek"]`, wikipediaTitle "Organization for Security and Co-operation in Europe". Alle 57 deelnemende staten met toetredingsjaar (CSCE-oprichters 1973/1975, latere toetreders eigen jaar).
3. **parischarter** — "Charter of Paris", color `hsl(265, 80%, 68%)`, categories `["politiek"]`, wikipediaTitle "Charter of Paris". Ondertekenaars van november 1990 (jaar 1990) plus staten die later toetraden tot het Handvest — research de exacte lijst; grotendeels de OSCE-kring.

- [ ] **Step 2: Imports + array-entries in `src/data/alliances.ts`** (`icc`, `osce`, `parischarter`)

- [ ] **Step 3: Verifieer** — tsc geen errors; member-counts sanity-check (icc ~123-125, osce 57).

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "Add ICC, OSCE and Charter of Paris with full researched memberships"
```

---

## Task 5: Data — overige politieke organisaties (research)

**Files:**
- Create: `src/data/alliances/orgs/arableague.ts`, `arcticcouncil.ts`, `epc.ts`, `ggi.ts`, `iomed.ts`, `cdrn.ts`, `aachen.ts`, `cofa.ts`
- Modify: `src/data/alliances.ts`

- [ ] **Step 1: Research en schrijf de acht bestanden**

1. **arableague** — "Arab League", color `hsl(245, 90%, 42%)`, categories `["politiek", "militair"]`, wikipediaTitle "Arab League". 22 leden met toetredingsjaren; description vermeldt het gezamenlijke defensieverdrag en Syrië's terugkeer in 2023.
2. **arcticcouncil** — "Arctic Council", color `hsl(210, 45%, 48%)`, categories `["politiek"]`, wikipediaTitle "Arctic Council". 8 leden (1996) + waarnemer-státen (geen organisaties) als `status: "observer"` met jaar van waarnemerstatus. Description vermeldt de beperkte samenwerking met Rusland sinds 2022.
3. **epc** — "European Political Community", color `hsl(255, 75%, 60%)`, categories `["politiek"]`, wikipediaTitle "European Political Community". Alle deelnemende staten (~47, 2022).
4. **ggi** — "Global Governance Initiative", color `hsl(240, 40%, 55%)`, categories `["politiek"]`, wikipediaTitle: research (weglaten als geen artikel). CHN als initiator (2025) + gedocumenteerde publieke steunbetuigers; description legt uit dat het een Chinees beleidsinitiatief zonder formeel lidmaatschap is, gericht op nieuwe internationale structuren en invloed in het mondiale zuiden.
5. **iomed** — "International Organization for Mediation", color `hsl(270, 50%, 45%)`, categories `["politiek"]`, wikipediaTitle "International Organization for Mediation". Ondertekenaars van het verdrag (2025, HQ Hongkong) — research de actuele lijst (~33).
6. **cdrn** — "Community for Democracy and Rights of Nations", color `hsl(285, 45%, 55%)`, categories `["politiek"]`, wikipediaTitle "Community for Democracy and Rights of Nations". Members: `{ code: "XAB", joinYear: 2007 }, { code: "XSO", joinYear: 2007 }, { code: "XTR", joinYear: 2007 }` (research de jaren). **Verplicht:** `mapNote: "Members are unrecognized states and cannot be shown on the map."`
7. **aachen** — "Treaty of Aachen", color `hsl(225, 70%, 55%)`, categories `["politiek"]`, wikipediaTitle "Aachen Treaty". FRA + DEU (2019).
8. **cofa** — "Compact of Free Association", color `hsl(235, 55%, 68%)`, categories `["politiek", "militair"]`, wikipediaTitle "Compact of Free Association". USA, MHL, FSM, PLW met de jaren van de oorspronkelijke compacts (research: 1986/1994).

- [ ] **Step 2: Imports + array-entries in `src/data/alliances.ts`** (alle acht)

- [ ] **Step 3: Verifieer** — tsc geen errors.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "Add Arab League, Arctic Council, EPC, GGI, IOMed, CDRN, Aachen Treaty and CoFA"
```

---

## Task 6: Data — updates bestaande organisaties (research)

**Files:**
- Modify: `src/data/alliances/orgs/sco.ts`, `brics.ts`, `bri.ts`, `g20.ts`, `cptpp.ts`

- [ ] **Step 1: Werk de vijf bestanden bij**

1. **sco** — categories → `["militair", "politiek"]`; **nieuwe kleur `hsl(355, 65%, 52%)`** (primaire categorie wordt militair). Leden actualiseren: Belarus (2024) toevoegen. Waarnemers (research: o.a. Afghanistan, Mongolië) als `status: "observer"`. Dialoogpartners als `status: "dialogue"` — research de volledige actuele lijst; omvat minimaal Armenië, Azerbeidzjan, Cambodja, Sri Lanka, Nepal, Turkije, Qatar en Saudi-Arabië.
2. **brics** — leden actualiseren (Indonesië 2025 als volwaardig lid); partnerlanden (research de actuele lijst, 2024/2025-golf: o.a. Belarus, Bolivia, Cuba, Kazachstan, Maleisië, Nigeria, Thailand, Oeganda, Oezbekistan) als `status: "partner"`.
3. **bri** — categories → `["handel", "politiek"]`; **volledige lijst van MoU-ondertekenaars (~150 landen)** met jaar van ondertekening — research de actuele officiële/geconsolideerde lijst; landen die zich terugtrokken (Italië 2023) níet opnemen.
4. **g20** — lid toevoegen: `{ code: "AU", joinYear: 2023 }` (Afrikaanse Unie).
5. **cptpp** — lid toevoegen: `{ code: "GBR", joinYear: 2024 }`.

- [ ] **Step 2: Verifieer** — `npx tsc -p tsconfig.app.json --noEmit` geen errors; sanity-check: `npx tsx -e "import('./src/data/alliances').then(m => m.alliances.filter(a=>['sco','brics','bri'].includes(a.id)).forEach(a=>console.log(a.id, a.members.length)))"` (bri ~140-155, sco ~20+, brics ~20).

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "Update SCO, BRICS, BRI, G20 and CPTPP with tiers and current memberships"
```

---

## Task 7: Landendata — pseudo-codes en hergeneratie

**Files:**
- Modify: `scripts/generate-countries.ts`
- Modify (gegenereerd): `src/data/countries.ts`

- [ ] **Step 1: Vervang `EXTRA_ENTRIES` in `scripts/generate-countries.ts`**

```ts
// world-countries modelleert alleen soevereine staten; supranationale
// entiteiten en niet-erkende staten krijgen hier handmatig een entry.
const EXTRA_ENTRIES: Record<string, { name: string; flag: string }> = {
  EU: { name: 'European Union', flag: '🇪🇺' },
  AU: { name: 'African Union', flag: '🌍' },
  XAB: { name: 'Abkhazia', flag: '🏳️' },
  XSO: { name: 'South Ossetia', flag: '🏳️' },
  XTR: { name: 'Transnistria', flag: '🏳️' },
};
```

- [ ] **Step 2: Hergenereer**

Run: `npx tsx scripts/generate-countries.ts` (sandbox-uitzondering nodig: tsx opent een IPC-socket)
Expected: "geschreven met <N> landen" zonder "Geen land gevonden"-warnings; N groeit fors (~195-205) door de nieuwe organisaties. Elke warning = een verkeerde code in de data van Task 2–6 → corrigeer die eerst.

- [ ] **Step 3: Verifieer + commit**

Run: `npx tsc -p tsconfig.app.json --noEmit` — geen errors.

```bash
git add scripts/generate-countries.ts src/data/countries.ts
git commit -m "Add AU and unrecognized-state pseudo-codes, regenerate country lookup"
```

---

## Task 8: AnimatedBackground + InfoOverlay + InfoContent

**Files:**
- Create: `src/components/AnimatedBackground.tsx`
- Create: `src/components/InfoOverlay.tsx`
- Create: `src/components/InfoContent.tsx`
- Modify: `src/index.css`

- [ ] **Step 1: Create `src/components/AnimatedBackground.tsx`**

```tsx
const AnimatedBackground = () => (
  <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="bg-blob bg-blob-1" />
    <div className="bg-blob bg-blob-2" />
    <div className="bg-blob bg-blob-3" />
  </div>
);

export default AnimatedBackground;
```

- [ ] **Step 2: Voeg de blob-stijlen toe onderaan `src/index.css`**

```css
.bg-blob {
  position: absolute;
  border-radius: 9999px;
  filter: blur(70px);
  opacity: 0.45;
  will-change: transform;
}
.bg-blob-1 { width: 45vw; height: 45vw; background: #a5c9f5; top: -10%; left: -8%; animation: blob-drift-1 16s ease-in-out infinite; }
.bg-blob-2 { width: 40vw; height: 40vw; background: #b3ecc9; bottom: -15%; right: -5%; animation: blob-drift-2 19s ease-in-out infinite; }
.bg-blob-3 { width: 30vw; height: 30vw; background: #f5d9a5; top: 35%; left: 55%; animation: blob-drift-3 23s ease-in-out infinite; }

@keyframes blob-drift-1 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(6vw, -4vh) scale(1.12); } }
@keyframes blob-drift-2 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-5vw, 5vh) scale(1.08); } }
@keyframes blob-drift-3 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-4vw, -6vh) scale(1.15); } }

@media (prefers-reduced-motion: reduce) {
  .bg-blob { animation: none; }
}
```

- [ ] **Step 3: Create `src/components/InfoOverlay.tsx`**

```tsx
import React, { useEffect } from 'react';

interface InfoOverlayProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const InfoOverlay: React.FC<InfoOverlayProps> = ({ title, onClose, children }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/25 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="w-full max-w-md max-h-[70vh] flex flex-col bg-white/80 backdrop-blur-xl border border-white/70 shadow-xl rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200/70">
          <h2 className="font-heading font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-gray-400 hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-gray-400 rounded px-1 transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="px-5 py-4 overflow-y-auto text-sm text-gray-700 leading-relaxed">{children}</div>
      </div>
    </div>
  );
};

export default InfoOverlay;
```

- [ ] **Step 4: Create `src/components/InfoContent.tsx`**

```tsx
export const AboutContent = () => (
  <div className="space-y-3">
    <p>
      World Alliances is an interactive map of geopolitical treaties, alliances and
      international organizations — military, trade, political and religious.
    </p>
    <p>
      Select organizations to highlight their members on the map. Countries that belong
      to several selected organizations get a striped pattern. Click any country for its
      full list of memberships, and use the ⓘ on an organization for background information.
    </p>
  </div>
);

export const LegendContent = () => (
  <div className="space-y-3">
    <p><span className="font-semibold">Solid color</span> — full member of the selected organization.</p>
    <p><span className="font-semibold">Faded color</span> — observer, dialogue partner or partner country.</p>
    <p><span className="font-semibold">Striped</span> — belongs to two or more of the selected organizations.</p>
    <p><span className="font-semibold">⚔️ 💰 🏛️ ☪️</span> — category icons: military, trade, political, religious. Organizations can belong to more than one category.</p>
    <p><span className="font-semibold">ⓘ</span> — opens the organization profile with background information.</p>
  </div>
);

export const SourcesContent = () => (
  <div className="space-y-3">
    <p>
      Membership data is manually curated from the official websites of the organizations,
      researched in 2026. Background texts in the organization profiles come from Wikipedia
      (CC BY-SA) via its public API.
    </p>
    <p>
      Map data © Mapbox © OpenStreetMap. Country boundaries follow a single consistent
      worldview; disputed territories may be shown differently than in your country.
    </p>
  </div>
);
```

- [ ] **Step 5: Verifieer + commit**

Run: `npx tsc -p tsconfig.app.json --noEmit` — geen errors (nieuwe bestanden zijn nog ongebruikt; dat is oké).

```bash
git add src/components/AnimatedBackground.tsx src/components/InfoOverlay.tsx src/components/InfoContent.tsx src/index.css
git commit -m "Add animated background, glass overlay shell and info content"
```

---

## Task 9: Wikipedia-helper + OrgProfileModal

**Files:**
- Create: `src/utils/wikipedia.ts`
- Create: `src/components/OrgProfileModal.tsx`

- [ ] **Step 1: Create `src/utils/wikipedia.ts`**

```ts
export interface WikiSummary {
  title: string;
  extract: string;
  thumbnailUrl?: string;
  pageUrl: string;
}

// null in de cache = eerder mislukt; niet opnieuw proberen binnen de sessie.
const cache = new Map<string, WikiSummary | null>();

export async function fetchWikiSummary(title: string): Promise<WikiSummary | null> {
  if (cache.has(title)) return cache.get(title) ?? null;
  try {
    const res = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title.replace(/ /g, '_'))}`
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (!data.extract) throw new Error('No extract');
    const summary: WikiSummary = {
      title: data.title,
      extract: data.extract,
      thumbnailUrl: data.thumbnail?.source,
      pageUrl: data.content_urls?.desktop?.page ?? `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`,
    };
    cache.set(title, summary);
    return summary;
  } catch {
    cache.set(title, null);
    return null;
  }
}
```

- [ ] **Step 2: Create `src/components/OrgProfileModal.tsx`**

```tsx
import React, { useEffect, useState } from 'react';
import { Alliance } from '@/data/alliances';
import { CATEGORY_META } from '@/data/categories';
import { getAllianceStats } from '@/utils/allianceStats';
import { fetchWikiSummary, WikiSummary } from '@/utils/wikipedia';
import InfoOverlay from './InfoOverlay';

interface OrgProfileModalProps {
  alliance: Alliance | null;
  onClose: () => void;
}

const OrgProfileModal: React.FC<OrgProfileModalProps> = ({ alliance, onClose }) => {
  const [summary, setSummary] = useState<WikiSummary | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!alliance?.wikipediaTitle) {
      setSummary(null);
      return;
    }
    let cancelled = false;
    setLoading(true);
    fetchWikiSummary(alliance.wikipediaTitle).then((s) => {
      if (!cancelled) {
        setSummary(s);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [alliance]);

  if (!alliance) return null;
  const stats = getAllianceStats(alliance);

  return (
    <InfoOverlay title={alliance.name} onClose={onClose}>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3 text-xs text-gray-500">
        <span>
          {alliance.categories.map((c) => `${CATEGORY_META[c].icon} ${CATEGORY_META[c].label}`).join(' · ')}
        </span>
        <span className="font-mono">{stats.memberCount} members</span>
        <span className="font-mono">since {stats.foundingYear}</span>
      </div>
      {alliance.mapNote && <p className="mb-3 text-xs italic text-gray-500">{alliance.mapNote}</p>}
      {loading && (
        <div className="space-y-2 animate-pulse" aria-label="Loading">
          <div className="h-3 bg-gray-200 rounded w-full" />
          <div className="h-3 bg-gray-200 rounded w-11/12" />
          <div className="h-3 bg-gray-200 rounded w-4/5" />
        </div>
      )}
      {!loading && summary && (
        <div>
          {summary.thumbnailUrl && (
            <img src={summary.thumbnailUrl} alt="" className="float-right ml-3 mb-2 w-24 rounded-lg" />
          )}
          <p className="whitespace-pre-line">{summary.extract}</p>
          <p className="mt-3 text-xs text-gray-400 clear-both">
            From Wikipedia ·{' '}
            <a
              href={summary.pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Read more on Wikipedia →
            </a>
          </p>
        </div>
      )}
      {!loading && !summary && <p>{alliance.description}</p>}
    </InfoOverlay>
  );
};

export default OrgProfileModal;
```

- [ ] **Step 3: Verifieer + commit**

Run: `npx tsc -p tsconfig.app.json --noEmit` — geen errors.

```bash
git add src/utils/wikipedia.ts src/components/OrgProfileModal.tsx
git commit -m "Add Wikipedia summary helper and organization profile modal"
```

---

## Task 10: Header (vervangt TopBar — nog niet bedraad)

**Files:**
- Create: `src/components/Header.tsx`

- [ ] **Step 1: Create `src/components/Header.tsx`**

```tsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Alliance, AllianceCategory } from '@/data/alliances';
import { CountryInfo } from '@/data/countries';
import { CATEGORY_META, CATEGORY_ORDER } from '@/data/categories';
import { withAlpha } from '@/utils/colorUtils';

export type InfoKind = 'about' | 'legend' | 'sources';

interface HeaderProps {
  alliances: Alliance[];
  countries: Record<string, CountryInfo>;
  activeCategory: AllianceCategory | null;
  onCategoryChange: (category: AllianceCategory | null) => void;
  onSelectAlliance: (alliance: Alliance) => void;
  onSelectCountry: (code: string) => void;
  onOpenInfo: (which: InfoKind) => void;
}

type SearchResult =
  | { kind: 'alliance'; key: string; alliance: Alliance }
  | { kind: 'country'; key: string; code: string; label: string };

const INFO_ITEMS: { kind: InfoKind; label: string }[] = [
  { kind: 'about', label: 'About' },
  { kind: 'legend', label: 'Legend' },
  { kind: 'sources', label: 'Sources' },
];

const Header: React.FC<HeaderProps> = ({
  alliances,
  countries,
  activeCategory,
  onCategoryChange,
  onSelectAlliance,
  onSelectCountry,
  onOpenInfo,
}) => {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const searchRef = useRef<HTMLDivElement>(null);

  const results = useMemo<SearchResult[]>(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    const allianceHits: SearchResult[] = alliances
      .filter((a) => a.name.toLowerCase().includes(q))
      .slice(0, 5)
      .map((a) => ({ kind: 'alliance', key: a.id, alliance: a }));
    const countryHits: SearchResult[] = Object.entries(countries)
      .filter(([, info]) => info.name.toLowerCase().includes(q))
      .slice(0, 5)
      .map(([code, info]) => ({ kind: 'country', key: code, code, label: `${info.flag} ${info.name}` }));
    return [...allianceHits, ...countryHits];
  }, [query, alliances, countries]);

  const choose = (r: SearchResult) => {
    if (r.kind === 'alliance') onSelectAlliance(r.alliance);
    else onSelectCountry(r.code);
    setQuery('');
    setActiveIndex(0);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (results.length === 0) {
      if (e.key === 'Escape') setQuery('');
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      choose(results[Math.min(activeIndex, results.length - 1)]);
    } else if (e.key === 'Escape') {
      setQuery('');
    }
  };

  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) setQuery('');
    };
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, []);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  return (
    <header className="sticky top-4 z-30 flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3 bg-white/60 backdrop-blur-xl border border-white/60 shadow-sm rounded-xl">
      <div className="font-heading font-bold text-lg text-gray-900">🌐 World Alliances</div>

      <nav className="flex gap-1.5 flex-wrap" aria-label="Categories">
        {CATEGORY_ORDER.map((category) => {
          const meta = CATEGORY_META[category];
          const active = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(active ? null : category)}
              aria-pressed={active}
              className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all focus-visible:ring-2 focus-visible:ring-gray-500"
              style={{
                backgroundColor: active ? meta.color : withAlpha(meta.color, 0.1),
                color: active ? '#ffffff' : meta.color,
              }}
            >
              {meta.icon} {meta.label}
            </button>
          );
        })}
      </nav>

      <div className="flex-1" />

      <nav className="flex gap-1 flex-wrap" aria-label="Information">
        {INFO_ITEMS.map(({ kind, label }) => (
          <button
            key={kind}
            onClick={() => onOpenInfo(kind)}
            className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-900/5 hover:text-gray-900 transition-colors focus-visible:ring-2 focus-visible:ring-gray-500"
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="relative w-56" ref={searchRef}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Search country or alliance..."
          role="combobox"
          aria-expanded={results.length > 0}
          aria-controls="header-search-results"
          aria-activedescendant={results.length > 0 ? `search-opt-${activeIndex}` : undefined}
          className="w-full px-3 py-1.5 text-sm text-gray-900 placeholder-gray-400 bg-white/80 border border-gray-200 rounded-lg outline-none focus:border-gray-400 focus-visible:ring-2 focus-visible:ring-gray-400 transition-colors"
        />
        {query.trim() && (
          <div
            id="header-search-results"
            role="listbox"
            className="absolute top-full right-0 w-72 mt-2 p-2 z-50 max-h-72 overflow-y-auto bg-white/90 backdrop-blur-xl border border-gray-200 rounded-xl shadow-xl"
          >
            {results.length === 0 && <div className="text-xs text-gray-400 px-2 py-1">No results</div>}
            {results.map((r, i) => (
              <button
                key={`${r.kind}-${r.key}`}
                id={`search-opt-${i}`}
                role="option"
                aria-selected={i === activeIndex}
                onClick={() => choose(r)}
                onMouseEnter={() => setActiveIndex(i)}
                className={`block w-full text-left text-sm text-gray-900 px-2 py-1 rounded transition-colors ${
                  i === activeIndex ? 'bg-gray-100' : ''
                }`}
              >
                {r.kind === 'alliance' ? (
                  <>
                    {r.alliance.name}{' '}
                    <span className="text-gray-400 text-xs">
                      {r.alliance.categories.map((c) => CATEGORY_META[c].icon).join('')} alliance
                    </span>
                  </>
                ) : (
                  r.label
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
```

- [ ] **Step 2: Verifieer + commit**

Run: `npx tsc -p tsconfig.app.json --noEmit` — geen errors (Header is nog nergens geïmporteerd).

```bash
git add src/components/Header.tsx
git commit -m "Add Header with category menu, info items and keyboard-navigable search"
```

---

## Task 11: AlliancePanel (vervangt AllianceSelector — nog niet bedraad)

**Files:**
- Create: `src/components/AlliancePanel.tsx`

- [ ] **Step 1: Create `src/components/AlliancePanel.tsx`**

```tsx
import React, { useState } from 'react';
import { Alliance, AllianceCategory } from '@/data/alliances';
import { CATEGORY_META, CATEGORY_ORDER } from '@/data/categories';
import { getAllianceStats } from '@/utils/allianceStats';
import { getContrastTextColor, withAlpha } from '@/utils/colorUtils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface AlliancePanelProps {
  alliances: Alliance[];
  activeCategory: AllianceCategory | null;
  selectedIds: string[];
  onToggle: (alliance: Alliance) => void;
  onShowInfo: (alliance: Alliance) => void;
}

const AllianceChip: React.FC<{
  alliance: Alliance;
  isSelected: boolean;
  onToggle: () => void;
  onShowInfo: () => void;
}> = ({ alliance, isSelected, onToggle, onShowInfo }) => {
  const stats = getAllianceStats(alliance);
  const multiCategory = alliance.categories.length > 1;
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className="flex items-stretch rounded-full transition-all hover:-translate-y-px hover:shadow-md"
          style={{
            backgroundColor: isSelected ? alliance.color : withAlpha(alliance.color, 0.18),
            boxShadow: isSelected ? `0 0 14px ${withAlpha(alliance.color, 0.6)}` : undefined,
          }}
        >
          <button
            onClick={onToggle}
            aria-pressed={isSelected}
            className="pl-3 pr-1 py-1.5 text-xs font-semibold rounded-l-full transition-colors focus-visible:ring-2 focus-visible:ring-gray-500"
            style={{ color: isSelected ? getContrastTextColor(alliance.color) : alliance.color }}
          >
            {alliance.name}
            {multiCategory && (
              <span className="ml-1 text-[9px] opacity-70">
                {alliance.categories.map((c) => CATEGORY_META[c].icon).join('')}
              </span>
            )}
          </button>
          <button
            onClick={onShowInfo}
            aria-label={`About ${alliance.name}`}
            className="pl-1 pr-2.5 text-[10px] rounded-r-full opacity-50 hover:opacity-100 transition-opacity focus-visible:ring-2 focus-visible:ring-gray-500"
            style={{ color: isSelected ? getContrastTextColor(alliance.color) : alliance.color }}
          >
            ⓘ
          </button>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p className="max-w-xs text-sm font-medium">{alliance.description}</p>
        <p className="text-xs text-muted-foreground mt-1">
          {stats.memberCount} members · since {stats.foundingYear}
        </p>
      </TooltipContent>
    </Tooltip>
  );
};

const AlliancePanel: React.FC<AlliancePanelProps> = ({
  alliances,
  activeCategory,
  selectedIds,
  onToggle,
  onShowInfo,
}) => {
  const [collapsed, setCollapsed] = useState<Partial<Record<AllianceCategory, boolean>>>({});
  const visibleCategories = activeCategory ? [activeCategory] : CATEGORY_ORDER;

  return (
    <div className="flex flex-col gap-1.5 p-3 bg-white/50 backdrop-blur-xl border border-white/60 shadow-sm rounded-xl">
      <TooltipProvider>
        {visibleCategories.map((category) => {
          const orgs = alliances.filter((a) => a.categories.includes(category));
          if (orgs.length === 0) return null;
          const meta = CATEGORY_META[category];
          const open = !collapsed[category];
          return (
            <section key={category}>
              <button
                onClick={() => setCollapsed((prev) => ({ ...prev, [category]: open }))}
                aria-expanded={open}
                className="w-full flex items-center gap-2 py-1 text-[11px] font-bold uppercase tracking-wider rounded transition-colors focus-visible:ring-2 focus-visible:ring-gray-500"
                style={{ color: meta.color }}
              >
                <span>{meta.icon}</span>
                <span>{meta.label}</span>
                <span className="font-mono font-normal opacity-60">{orgs.length}</span>
                <span className="flex-1 h-px" style={{ backgroundColor: withAlpha(meta.color, 0.3) }} />
                <span className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>▾</span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                  open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-wrap gap-2 pt-1.5 pb-1">
                    {orgs.map((alliance) => (
                      <AllianceChip
                        key={alliance.id}
                        alliance={alliance}
                        isSelected={selectedIds.includes(alliance.id)}
                        onToggle={() => onToggle(alliance)}
                        onShowInfo={() => onShowInfo(alliance)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </TooltipProvider>
    </div>
  );
};

export default AlliancePanel;
```

- [ ] **Step 2: Verifieer + commit**

Run: `npx tsc -p tsconfig.app.json --noEmit` — geen errors (nog niet geïmporteerd).

```bash
git add src/components/AlliancePanel.tsx
git commit -m "Add sectioned AlliancePanel with collapsible categories and info affordance"
```

---

## Task 12: mapUtils — tier-opacity en status in findCountryAlliances

**Files:**
- Modify: `src/utils/mapUtils.ts`

- [ ] **Step 1: Werk de import bovenaan bij**

```ts
import { Alliance, MemberStatus } from '@/data/alliances';
```

- [ ] **Step 2: Vervang `updateAllianceHighlights` volledig**

De functie behoudt zijn signatuur. Alleen de binnenkant verandert: memberships dragen nu hun status mee, en de opacity per land hangt af van of het ergens volwaardig lid is.

```ts
export const updateAllianceHighlights = (map: mapboxgl.Map, alliances: Alliance[]) => {
  if (!map.getLayer('country-fills')) return;

  if (alliances.length === 0) {
    map.setPaintProperty('country-fills', 'fill-color', BASE_FILL_COLOR);
    map.setPaintProperty('country-fills', 'fill-opacity', 0.55);
    if (map.getLayer('country-overlap')) {
      map.setFilter('country-overlap', ['all', WORLDVIEW_FILTER, ['in', ['get', 'iso_3166_1_alpha_3'], ['literal', []]]]);
    }
    return;
  }

  type Membership = { alliance: Alliance; status?: MemberStatus };
  const codeToMemberships = new Map<string, Membership[]>();
  alliances.forEach((alliance) => {
    alliance.members.forEach((member) => {
      const list = codeToMemberships.get(member.code) ?? [];
      list.push({ alliance, status: member.status });
      codeToMemberships.set(member.code, list);
    });
  });

  const soloMatch: string[] = [];
  const overlapCodes: string[] = [];
  const overlapPatternMatch: string[] = [];
  const opacityMatch: (string | number)[] = [];

  codeToMemberships.forEach((memberships, code) => {
    // Volwaardig lid van minstens één geselecteerde organisatie → vol zichtbaar;
    // uitsluitend observer/dialogue/partner-statussen → vervaagd (0.45).
    const isFullSomewhere = memberships.some((m) => !m.status);
    opacityMatch.push(code, isFullSomewhere ? 1 : 0.45);

    if (memberships.length === 1) {
      soloMatch.push(code, memberships[0].alliance.color);
    } else {
      overlapCodes.push(code);
      const patternId = getOrCreateStripePattern(map, memberships.map((m) => m.alliance.color));
      overlapPatternMatch.push(code, patternId);
    }
  });

  map.setPaintProperty('country-fills', 'fill-color', [
    'match',
    ['get', 'iso_3166_1_alpha_3'],
    ...soloMatch,
    BASE_FILL_COLOR
  ]);
  map.setPaintProperty('country-fills', 'fill-opacity', [
    'match',
    ['get', 'iso_3166_1_alpha_3'],
    ...opacityMatch,
    0.55
  ]);

  if (map.getLayer('country-overlap')) {
    map.setFilter('country-overlap', ['all', WORLDVIEW_FILTER, ['in', ['get', 'iso_3166_1_alpha_3'], ['literal', overlapCodes]]]);
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
```

- [ ] **Step 3: Vervang `findCountryAlliances` volledig (status komt mee in het resultaat)**

```ts
export const findCountryAlliances = (
  countryCode: string,
  alliances: Alliance[]
): Array<{ alliance: Alliance; joinYear: number; status?: MemberStatus }> => {
  return alliances.reduce((acc, alliance) => {
    const membership = alliance.members.find((member) => member.code === countryCode);
    if (membership) {
      acc.push({ alliance, joinYear: membership.joinYear, status: membership.status });
    }
    return acc;
  }, [] as Array<{ alliance: Alliance; joinYear: number; status?: MemberStatus }>);
};
```

- [ ] **Step 4: Verifieer + commit**

Run: `npx tsc -p tsconfig.app.json --noEmit` — geen errors (return-type-uitbreiding is backwards-compatibel).

```bash
git add src/utils/mapUtils.ts
git commit -m "Render membership tiers with reduced opacity, expose status in findCountryAlliances"
```

---

## Task 13: CountryDetailDrawer — slide-animatie, status-labels, klikbare rijen

**Files:**
- Modify: `src/components/CountryDetailDrawer.tsx` (volledige vervanging)

- [ ] **Step 1: Vervang de volledige inhoud**

```tsx
import React, { useEffect, useRef } from 'react';
import { Alliance, MemberStatus } from '@/data/alliances';
import { countries } from '@/data/countries';
import { CATEGORY_META } from '@/data/categories';
import { findCountryAlliances } from '@/utils/mapUtils';
import { withAlpha } from '@/utils/colorUtils';

interface CountryDetailDrawerProps {
  countryCode: string | null;
  alliances: Alliance[];
  onClose: () => void;
  onShowInfo: (alliance: Alliance) => void;
}

const STATUS_LABELS: Record<MemberStatus, string> = {
  observer: 'Observer',
  dialogue: 'Dialogue partner',
  partner: 'Partner',
};

const CountryDetailDrawer: React.FC<CountryDetailDrawerProps> = ({
  countryCode,
  alliances,
  onClose,
  onShowInfo,
}) => {
  // Onthoud het laatst getoonde land zodat de inhoud tijdens de
  // uitschuif-animatie zichtbaar blijft.
  const lastCode = useRef<string | null>(null);
  if (countryCode) lastCode.current = countryCode;
  const displayCode = countryCode ?? lastCode.current;
  const open = countryCode !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!displayCode) return null;

  const info = countries[displayCode];
  const memberships = findCountryAlliances(displayCode, alliances);

  return (
    <div
      aria-hidden={!open}
      className={`absolute top-4 right-4 bottom-4 w-56 p-4 flex flex-col gap-3 z-10 overflow-y-auto bg-white/50 backdrop-blur-xl border border-white/60 shadow-sm rounded-xl transition-transform duration-300 ease-out ${
        open ? 'translate-x-0' : 'translate-x-[120%]'
      }`}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        tabIndex={open ? 0 : -1}
        className="self-end text-gray-400 hover:text-gray-900 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-gray-400 rounded px-1"
      >
        ✕
      </button>
      <div>
        <div className="text-3xl">{info?.flag ?? '🏳️'}</div>
        <div className="font-heading font-bold text-lg text-gray-900">{info?.name ?? displayCode}</div>
        <div className="text-xs text-gray-400 uppercase tracking-wide">
          {memberships.length} {memberships.length === 1 ? 'alliance' : 'alliances'}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {memberships.map(({ alliance, joinYear, status }) => (
          <button
            key={alliance.id}
            onClick={() => onShowInfo(alliance)}
            tabIndex={open ? 0 : -1}
            className="text-left rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-transform hover:-translate-y-px focus-visible:ring-2 focus-visible:ring-gray-500"
            style={{ backgroundColor: withAlpha(alliance.color, 0.22), color: alliance.color }}
          >
            <span className="flex items-center justify-between gap-2">
              <span>
                {alliance.name}{' '}
                <span className="text-[9px] opacity-70">
                  {alliance.categories.map((c) => CATEGORY_META[c].icon).join('')}
                </span>
              </span>
              <span className="font-mono">{joinYear}</span>
            </span>
            {status && (
              <span className="block mt-0.5 text-[10px] font-normal opacity-75">{STATUS_LABELS[status]}</span>
            )}
          </button>
        ))}
        {memberships.length === 0 && <div className="text-xs text-gray-400">No known memberships</div>}
      </div>
    </div>
  );
};

export default CountryDetailDrawer;
```

- [ ] **Step 2: Verifieer**

Run: `npx tsc -p tsconfig.app.json --noEmit`
Expected: **precies één error** — `Index.tsx` geeft de nieuwe verplichte prop `onShowInfo` nog niet mee. Dat is verwacht en wordt opgelost in Task 15. Geen errors binnen `CountryDetailDrawer.tsx` zelf.

- [ ] **Step 3: Commit**

```bash
git add src/components/CountryDetailDrawer.tsx
git commit -m "Drawer: slide animation, membership status labels, rows open org profile"
```

---

## Task 14: WorldMap — legenda-uitbreiding en lege-staat-hint

**Files:**
- Modify: `src/components/WorldMap.tsx`

- [ ] **Step 1: Voeg de lege-staat-hint toe**

Direct ná de regel `<div ref={mapContainer} className="absolute inset-0 rounded-xl overflow-hidden" />`:

```tsx
      {selectedAlliances.length === 0 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 px-4 py-2 text-xs text-gray-600 bg-white/60 backdrop-blur-xl border border-white/70 rounded-full shadow-sm pointer-events-none">
          Select an alliance to explore the map
        </div>
      )}
```

- [ ] **Step 2: Breid de legenda uit met een tier-regel**

Binnen het bestaande legenda-blok (`{selectedAlliances.length > 0 && (...)}`), direct vóór het `{selectedAlliances.length > 1 && (...)}`-blok:

```tsx
          {selectedAlliances.some((a) => a.members.some((m) => m.status)) && (
            <div className="flex items-center gap-2 opacity-70">
              <span className="w-2.5 h-2.5 rounded-sm bg-gray-400/50" />
              faded = observer / partner
            </div>
          )}
```

- [ ] **Step 3: Verifieer + commit**

Run: `npx tsc -p tsconfig.app.json --noEmit` — nog steeds alleen de ene verwachte `Index.tsx`-error uit Task 13.

```bash
git add src/components/WorldMap.tsx
git commit -m "Map: empty-state hint and tier explanation in legend"
```

---

## Task 15: Index — alles bedraden, oude componenten verwijderen

**Files:**
- Modify: `src/pages/Index.tsx` (volledige vervanging)
- Delete: `src/components/TopBar.tsx`, `src/components/AllianceSelector.tsx`

- [ ] **Step 1: Vervang de volledige inhoud van `src/pages/Index.tsx`**

```tsx
import { useState } from 'react';
import WorldMap from '@/components/WorldMap';
import Header, { InfoKind } from '@/components/Header';
import AlliancePanel from '@/components/AlliancePanel';
import CountryDetailDrawer from '@/components/CountryDetailDrawer';
import OrgProfileModal from '@/components/OrgProfileModal';
import InfoOverlay from '@/components/InfoOverlay';
import AnimatedBackground from '@/components/AnimatedBackground';
import { AboutContent, LegendContent, SourcesContent } from '@/components/InfoContent';
import { alliances, Alliance, AllianceCategory } from '@/data/alliances';
import { countries } from '@/data/countries';

const INFO_TITLES: Record<InfoKind, string> = {
  about: 'About',
  legend: 'Legend',
  sources: 'Sources',
};

const Index = () => {
  const [selectedAlliances, setSelectedAlliances] = useState<Alliance[]>([]);
  const [activeCategory, setActiveCategory] = useState<AllianceCategory | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [openInfo, setOpenInfo] = useState<InfoKind | null>(null);
  const [profileOrg, setProfileOrg] = useState<Alliance | null>(null);

  const toggleAlliance = (alliance: Alliance) => {
    setSelectedAlliances((prev) =>
      prev.some((a) => a.id === alliance.id)
        ? prev.filter((a) => a.id !== alliance.id)
        : [...prev, alliance]
    );
  };

  return (
    <div className="min-h-screen p-4">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto space-y-3">
        <Header
          alliances={alliances}
          countries={countries}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onSelectAlliance={toggleAlliance}
          onSelectCountry={setSelectedCountry}
          onOpenInfo={setOpenInfo}
        />

        <AlliancePanel
          alliances={alliances}
          activeCategory={activeCategory}
          selectedIds={selectedAlliances.map((a) => a.id)}
          onToggle={toggleAlliance}
          onShowInfo={setProfileOrg}
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
            onShowInfo={setProfileOrg}
          />
        </div>
      </div>

      {openInfo && (
        <InfoOverlay title={INFO_TITLES[openInfo]} onClose={() => setOpenInfo(null)}>
          {openInfo === 'about' && <AboutContent />}
          {openInfo === 'legend' && <LegendContent />}
          {openInfo === 'sources' && <SourcesContent />}
        </InfoOverlay>
      )}
      <OrgProfileModal alliance={profileOrg} onClose={() => setProfileOrg(null)} />
    </div>
  );
};

export default Index;
```

Let op: de achtergrond-gradient op de root is bewust weg — de `AnimatedBackground` levert de kleur en moet zichtbaar blijven (een dekkende gradient op de content-div zou de blobs verbergen).

- [ ] **Step 2: Verwijder de vervangen componenten**

```bash
git rm src/components/TopBar.tsx src/components/AllianceSelector.tsx
```

- [ ] **Step 3: Verifieer**

Run: `npx tsc -p tsconfig.app.json --noEmit` — **nu volledig schoon** (de Task 13-error is opgelost).
Run: `npx vite build` — succesvolle productiebuild.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "Wire Header, AlliancePanel, overlays and org profile; remove TopBar and AllianceSelector"
```

---

## Task 16: Handmatige verificatie in de dev-server

**Files:** geen — alleen controleren, correcties waar nodig.

Start de dev-server via de preview-tooling en controleer:

- [ ] **Step 1:** Pagina laadt zonder console-errors; bewegende blobs zichtbaar achter de glaspanelen; header sticky bij scrollen. Reduced-motion: controleer per codereview dat de `prefers-reduced-motion`-mediaquery in `index.css` staat (niet toetsbaar via de preview-tooling).
- [ ] **Step 2:** Paneel toont vier secties met koppen/tellers; in- en uitklappen animeert; categorie-menu-item in de header filtert naar één sectie en toggle­t weer terug.
- [ ] **Step 3:** SCO staat in zowel Military als Political; selecteren in de ene sectie licht ook de andere op; chip toont de dubbele categorie-iconen.
- [ ] **Step 4:** SCO selecteren → dialoogpartners (bijv. Turkije, Qatar) vervaagd op de kaart, leden vol; legenda toont de "faded"-regel; land-detailpaneel van Turkije toont "Dialogue partner" bij SCO.
- [ ] **Step 5:** Zoeken: typ "germ" → dropdown VÓÓR het paneel (bug-check!); pijltjestoetsen bewegen de selectie, Enter opent Duitsland, Escape sluit.
- [ ] **Step 6:** ⓘ op de NAVO-chip → profiel-modal met Wikipedia-intro + thumbnail + link; werkt ook via een rij in het land-detailpaneel; Escape sluit; organisatie zonder artikel (atlanticpact) toont de eigen beschrijving.
- [ ] **Step 7:** About/Legend/Sources openen en sluiten (Escape, klik-buiten, kruisje).
- [ ] **Step 8:** Detailpaneel schuift zichtbaar in/uit; zelfde land opnieuw klikken sluit het.
- [ ] **Step 9:** CDRN selecteren → kaart kleurt niets; profiel-modal toont de mapNote. IAEA selecteren → vrijwel de hele kaart kleurt (verwacht).
- [ ] **Step 10:** Lege staat: alles deselecteren → hint "Select an alliance to explore the map" verschijnt.
- [ ] **Step 11:** Correcties uit Step 1–10 doorvoeren, `npx tsc -p tsconfig.app.json --noEmit` schoon, dan:

```bash
git add -A
git commit -m "Fix issues found during manual verification of expansion iteration"
```
(overslaan als er niets te corrigeren was)
