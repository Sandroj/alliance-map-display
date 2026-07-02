# Uitbreiding & wereldklasse-polish — design spec

Datum: 2026-07-02 (tweede iteratie, volgt op `2026-07-02-map-redesign-design.md`)

## Doel

Vier samenhangende verbeteringen aan de wereldkaart-app:

1. Duidelijk visueel onderscheid tussen categorieën, inclusief organisaties
   die onder meerdere categorieën vallen.
2. Forse data-uitbreiding: ~19 nieuwe organisaties plus updates aan bestaande,
   met per organisatie gedegen webresearch naar actuele leden en jaartallen.
3. Design op topniveau: bewegende achtergrond, volwaardig menu, consistente
   micro-interacties, en het inlossen van eerder getrackte polish-schuld
   (focus-ringen, aria-pressed, slide-animatie detailpaneel, keyboard-
   navigatie in zoeken).
4. Bugfix: zoekresultaten-dropdown verdwijnt achter het organisatiepaneel.

De UI-taal is Engels (vastgelegd in de vorige iteratie). Code-commentaar mag
Nederlands blijven.

## 1. Datamodel

In `src/data/alliance-types.ts`:

```ts
export type AllianceCategory = "militair" | "handel" | "politiek" | "religieus";

export type MemberStatus = "observer" | "dialogue" | "partner";

export interface AllianceMember {
  code: string;        // ISO 3166-1 alpha-3, of pseudo-code (EU, AU, XAB, XSO, XTR)
  joinYear: number;    // jaar waarin dit land deze status kreeg
  status?: MemberStatus; // afwezig = volwaardig lid
}

export interface Alliance {
  id: string;
  name: string;
  color: string;              // hsl(...)
  description: string;        // Engels, één à twee zinnen
  categories: AllianceCategory[]; // eerste = primaire categorie (bepaalt kleurboog)
  members: AllianceMember[];
  mapNote?: string;           // optionele notitie in detailpaneel/legenda,
                              // bijv. "Members are unrecognized states and
                              // cannot be shown on the map"
}
```

**Breaking change:** `category` (enkelvoud) verdwijnt. Alle filterlogica
(`Index.tsx`, panel) werkt op `categories.includes(...)`.

**Bestandsstructuur:** één bestand per organisatie in
`src/data/alliances/orgs/<id>.ts`, elk met één `export const <id>: Alliance`.
`src/data/alliances.ts` importeert alles en exporteert de gesorteerde
`alliances`-array plus de types (bestaande import-paden blijven werken).
De vier oude categoriebestanden (`militair.ts`, `handel.ts`, `politiek.ts`,
`religieus.ts`) vervallen.

**Pseudo-codes** (geen ISO-land, wel data): bestaand `EU`; nieuw `AU`
(Afrikaanse Unie, G20-lid sinds 2023) en `XAB`/`XSO`/`XTR` (Abchazië,
Zuid-Ossetië, Transnistrië — X-prefix is gereserveerd in ISO 3166 dus botst
nooit met echte codes). Pseudo-codes matchen nooit een kaartpolygoon
(onschadelijk) maar verschijnen wél in zoeken en detailpaneel. Ze komen in
`EXTRA_ENTRIES` van `scripts/generate-countries.ts`:
AU → naam "African Union", vlag 🌍; XAB → "Abkhazia" 🏳️;
XSO → "South Ossetia" 🏳️; XTR → "Transnistria" 🏳️.

## 2. Organisaties

### Dedupe-beslissingen (met gebruiker afgestemd)

- "NATO Allies" en "North Atlantic Council" = exact de NAVO-leden → één
  NAVO-entry; beschrijving vermeldt dat de NAC het besluitvormend orgaan is.
- "EU Allies" = EU-leden → bestaande EU-entry.
- "Trans Pacific Partnership" → bestaande CPTPP-entry (uit te breiden met VK).
- "Hanzeliga" = de Nieuwe Hanzeliga (2018, fiscaal verbond) → categorie
  handel, ondanks plaatsing in de militaire groep van het bronmateriaal.

### Nieuwe organisaties (research per organisatie vereist)

Elke research-taak levert het complete `Alliance`-object: actuele ledenlijst
met toetredingsjaar per lid (jaar van huidige status), status-tiers waar van
toepassing, Engelse beschrijving. Onderzoeksdatum: 2026. Bekende ankers
hieronder zijn startpunten, geen vervanging van research.

| id | naam | categories | ankers |
|---|---|---|---|
| `csto` | CSTO | militair | RUS, BLR, ARM, KAZ, KGZ, TJK; Armeense deelname bevroren — in beschrijving |
| `icepact` | ICE Pact | militair | USA, CAN, FIN (2024, ijsbrekers) |
| `hanseatic` | New Hanseatic League | handel | NLD, IRL, DNK, SWE, FIN, EST, LVA, LTU (2018) |
| `arableague` | Arab League | politiek, militair | 22 leden; Syrië geschorst geweest, 2023 terug |
| `msp` | Minerals Security Partnership | militair, handel | ~14 partners + EU; kritieke mineralen (lithium, gallium, germanium) |
| `safe` | SAFE (Security Action for Europe) | militair | EU-instrument 2025; deelnemers + Canada (recent) — research actuele stand |
| `iaea` | IAEA | militair, politiek | ~180 leden, volledige lijst |
| `iea` | International Energy Agency | handel | ~32 leden; tegenhanger OPEC |
| `ceps` | Central Europe Pipeline System | militair, handel | NAVO-pijpleidingnet; gebruiker: nu 12 landen, Polen/Roemenië aspirant (status `partner`) — research |
| `icc` | International Criminal Court | politiek | ~125 verdragspartijen, volledige lijst; terugtrekkingen (BDI, PHL) niet opnemen |
| `osce` | OSCE | politiek | 57 deelnemende staten |
| `arcticcouncil` | Arctic Council | politiek | 8 leden + waarnemer-staten als `observer`; Rusland-deelname beperkt — beschrijving |
| `epc` | European Political Community | politiek | ~47 staten |
| `ggi` | Global Governance Initiative | politiek | Chinees initiatief 2025; geen formele leden → CHN als initiator + gedocumenteerde steunbetuigers; beschrijving legt karakter uit |
| `iomed` | International Organization for Mediation | politiek | verdrag 2025, HQ Hongkong; ~33 ondertekenaars — research |
| `cdrn` | Community for Democracy and Rights of Nations | politiek | XAB, XSO, XTR; `mapNote` verplicht (niet op kaart weer te geven) |
| `aachen` | Treaty of Aachen | politiek | FRA, DEU (2019) |
| `parischarter` | Charter of Paris | politiek | ondertekenaars 1990 + latere toetreders (≈ OSCE-kring) — research exacte lijst |
| `cofa` | Compact of Free Association | politiek, militair | USA, MHL, FSM, PLW |

### Updates aan bestaande organisaties

- `sco`: categories → [militair, politiek]; leden actualiseren (Belarus 2024);
  waarnemers als `observer`; dialoogpartners als `dialogue` (actuele volledige
  lijst — omvat minimaal Armenië, Azerbeidzjan, Cambodja, Sri Lanka, Nepal,
  Turkije, Qatar, Saudi-Arabië). Let op: primaire categorie wordt militair,
  dus SCO krijgt een nieuwe kleur uit de militair-boog.
- `brics`: leden actualiseren (Indonesië 2025); partnerlanden-tier als
  `partner` (actuele lijst researchen).
- `g20`: lid `AU` (2023) toevoegen.
- `cptpp`: VK (2024) toevoegen.
- `bri`: categories → [handel, politiek]; uitbreiden naar volledige lijst
  van MoU-ondertekenaars (~150 landen) — conform keuze "volledige lijsten".
- Alle overige bestaande organisaties: `category` → `categories` (één element).

### Kleuren

Primaire categorie (eerste in `categories`) bepaalt de kleurboog: militair
crimson→koraal (~335–35°), handel oranje→geel (~8–58°), politiek blauw→violet
(~200–290°), religieus smaragd (~165°). Nieuwe kleuren systematisch over de
boog verdeeld met afwisselende helderheid/verzadiging (regel uit vorige spec).
Met ~15 organisaties per categorie zijn botsingen niet volledig vermijdbaar;
acceptabel omdat chips en legenda kleur altijd aan naam koppelen en op de
kaart vooral de 2–5 gelijktijdig geselecteerde organisaties moeten verschillen.

## 3. UI/UX

### Header (nieuw, vervangt TopBar)

Sticky glaspaneel bovenaan, eigen stacking context (`relative z-30` op de
root — dit lost meteen de dropdown-bug op: de sibling-panelen hebben door
`backdrop-filter` elk een eigen stacking context en de later gerenderde
won tot nu toe).

Inhoud, links naar rechts: wordmark "🌐 World Alliances" (Space Grotesk),
vier categorie-menu-items (icoon + Engels label; klik toggle­t het filter;
actieve staat = gevulde pill in categoriekleur; `aria-pressed`), spacer,
About / Legend / Sources (openen glas-overlays), zoekveld.

**Zoeken:** resultaten gegroepeerd (Alliances / Countries), toetsenbord-
navigatie: ↑/↓ door resultaten, Enter selecteert, Escape sluit, klik-buiten
sluit. `role="listbox"`/`aria-activedescendant` op de dropdown,
`aria-expanded` op het veld. Dropdown krijgt `z-50` binnen de header-context.

**Overlays (About/Legend/Sources):** één herbruikbare `InfoOverlay`-component:
gedimde backdrop, glaspaneel gecentreerd, sluit op Escape/klik-buiten/kruisje.
About = korte uitleg van het project; Legend = uitleg van kleur (lid),
vervaagde kleur (waarnemer/partner), streping (overlap), categorie-iconen;
Sources = notitie dat data handmatig samengesteld is met onderzoeksdatum 2026
en verwijzing naar de officiële websites van de organisaties.

### Organisatiepaneel (nieuw, vervangt AllianceSelector — keuze A)

Glaspaneel met vier inklapbare categorie-secties. Sectiekop: categorie-icoon,
Engels label, teller (aantal organisaties), kleuraccentlijn in de
categoriekleur, chevron; klikbaar om in/uit te klappen (met hoogte-transitie),
standaard alles uitgeklapt. Actief categoriefilter uit het menu toont alleen
die sectie.

Chips: zoals nu getint in de organisatiekleur, plus mini-categorie-iconen
wanneer een organisatie in meerdere categorieën valt. Multi-categorie
organisaties staan in élke relevante sectie; selectiestaat is per id
gesynchroniseerd (beide chips lichten op). Hover: subtiele lift
(translateY -1px + schaduw). Selected: gevulde kleur + gloed (bestaand).
Focus: zichtbare focus-ring. `aria-pressed` per chip.

### Detailpaneel (upgrade)

- Echte slide-in/slide-out (transform-transitie; component blijft gemount
  tijdens de exit-animatie).
- Per lidmaatschap: organisatienaam, categorie-mini-iconen, jaar, en het
  niveau als klein label wanneer `status` gezet is ("observer",
  "dialogue partner", "partner").
- Toont `mapNote` van een organisatie waar aanwezig.
- Sluit ook op Escape.
- Ongebruikte `getContrastTextColor`-import opruimen (bestaande schuld).

### Bewegende achtergrond

`AnimatedBackground`-component: 3 grote geblurde kleurvlekken (zacht blauw,
groen, amber — passend bij de outdoors-kaart), `position: fixed` achter alle
content, `aria-hidden`, animatie uitsluitend via `transform` (translate/scale,
14–20s ease-in-out loops, per blob verschillend), en volledig statisch bij
`prefers-reduced-motion: reduce`. De glaspanelen blurren deze achtergrond —
dat is waar het glaseffect zijn diepte vandaan haalt.

### Micro-interacties & consistentie

- 150–200ms ease-out transities op alle interactieve elementen.
- Consistente spacing op 8px-grid; typografie: Space Grotesk (koppen),
  Inter (body), JetBrains Mono (cijfers) — bestaand.
- Lege staat: geen selectie → subtiele hint gecentreerd onder in de kaart
  ("Select an alliance to explore the map"), verdwijnt bij eerste selectie.
- Focus-ringen overal (`focus-visible:ring-2` in passende kleur).

## 4. Kaartweergave

In `mapUtils.ts`:

- **Tiers:** per land geldt: is het volwaardig lid van ≥1 geselecteerde
  organisatie → dekking 1; heeft het uitsluitend niet-volwaardige statussen
  (observer/dialogue/partner) bij de geselecteerde organisaties → dekking 0.45
  in de organisatiekleur. Niet-leden blijven gedimd op 0.55 basiskleur
  (bestaand gedrag).
- **Overlap-streping:** ongewijzigd; alle statussen tellen mee voor de vraag
  óf een land bij 2+ geselecteerde organisaties hoort. Tier-nuance valt binnen
  streping bewust weg.
- Legenda vermeldt de drie visuele middelen: vol = member, vervaagd =
  observer/partner, streping = meerdere geselecteerde organisaties.
- Worldview-filter en naadloze streping (bestaande fixes) blijven intact.

## 5. Componenten & bestanden

| Bestand | Actie |
|---|---|
| `src/data/alliance-types.ts` | categories-array, MemberStatus, mapNote |
| `src/data/alliances/orgs/*.ts` | nieuw: één per organisatie (~29 stuks) |
| `src/data/alliances.ts` | index/aggregatie, oude categoriebestanden weg |
| `scripts/generate-countries.ts` | EXTRA_ENTRIES: AU, XAB, XSO, XTR; herdraaien |
| `src/components/Header.tsx` | nieuw (vervangt TopBar.tsx) |
| `src/components/AlliancePanel.tsx` | nieuw (vervangt AllianceSelector.tsx) |
| `src/components/InfoOverlay.tsx` | nieuw (About/Legend/Sources) |
| `src/components/AnimatedBackground.tsx` | nieuw |
| `src/components/CountryDetailDrawer.tsx` | slide-animatie, status-labels, mapNote, Escape |
| `src/components/WorldMap.tsx` | legenda-uitbreiding, lege-staat-hint |
| `src/utils/mapUtils.ts` | tier-opacity |
| `src/pages/Index.tsx` | nieuwe componenten bedraden, categories-filter |

## 6. Edge cases

- Land met alleen observer/dialoogstatus in de énige geselecteerde
  organisatie → vervaagde kleur, detailpaneel toont het niveau.
- Organisatie zonder kaartweergave (cdrn) → chips/zoeken/detail werken
  normaal; kaart kleurt niets; `mapNote` legt uit waarom.
- Categoriefilter actief + selectie buiten die categorie → blijft op de
  kaart (bestaand principe: filter ≠ selectie).
- Mega-organisatie geselecteerd (IAEA) → vrijwel hele kaart kleurt; dat is
  informatief (wie zit er níet in) en bewust gekozen.
- `prefers-reduced-motion` → achtergrond statisch, overige transities mogen
  blijven (subtiel en kort).

## 7. Research-werkwijze en verificatie

Ledenlijsten worden per organisatie onderzocht door subagents met webresearch
(officiële organisatiewebsites als primaire bron), die direct het
`orgs/<id>.ts`-bestand opleveren in de vorm uit sectie 1. Twijfelgevallen
(SAFE-deelnemers, CEPS-landen, GGI-steunbetuigers, IOMed-ondertekenaars)
worden onderzocht op de stand van 2026; waar bronnen elkaar tegenspreken wint
de officiële bron en vermeldt de beschrijving de peildatum.

Geen testframework (bewust). Verificatie: `tsc -p tsconfig.app.json --noEmit`
(let op: plain `tsc --noEmit` checkt niets door de references-only root-
tsconfig), productiebuild, hergenereren van `countries.ts` zonder
warnings, en een volledige handmatige browser-doorloop: secties, filters,
multi-categorie-sync, tiers op de kaart, zoeken met toetsenbord, overlays,
detailpaneel-animatie, lege staat, bewegende achtergrond, reduced-motion.
