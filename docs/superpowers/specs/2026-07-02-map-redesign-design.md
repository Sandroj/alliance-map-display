# Wereldkaart redesign — design spec

Datum: 2026-07-02

## Doel

De kaart moet informatiever én gebruiksvriendelijker worden, met een gepolijst,
opvallend design. Het is een persoonlijk project, maar wel een dat met trots
gedeeld moet kunnen worden onder mensen die geïnteresseerd zijn in geopolitiek
of design. Geen zakelijk gebruik.

Gekozen richting: **vibrant, bijna gamified data-viz** — expliciet niet het
saaie/professionele aanzien dat dit soort geopolitieke data vaak heeft.

## Buiten scope (bewust niet meegenomen)

- Tijdlijn-slider door de jaren
- Aparte vergelijkingsmodus (twee allianties naast elkaar, split-screen)

## Interactiemodel

- **Multi-select in plaats van single-select.** State gaat van
  `selectedAlliance: Alliance | null` naar `selectedAlliances: Alliance[]`.
  Klikken op een alliantie-chip toggelt hem in/uit de actieve set.
- **Categorie-chips (militair/handel/politiek/religieus) zijn filters, geen
  snelkeuzes.** Ze bepalen welke alliantie-chips zichtbaar zijn, maar
  selecteren zelf niets op de kaart. Filter en selectie zijn losse state.
- **Klik in plaats van hover voor land-detail.** De huidige hover-popup
  verdwijnt te snel voor een paneel met stats en badges. Klik op een land
  opent een slide-in detailpaneel. Het paneel sluit door op hetzelfde land te
  klikken, op een expliciete sluitknop, of door een ander land te klikken
  (waarna het paneel direct de nieuwe selectie toont, niet eerst sluiten en
  heropenen). Hover blijft over voor een lichte visuele gloed op het land
  onder de cursor.
- **Overlap-rendering.** Een land dat in 2+ geselecteerde allianties zit
  krijgt een gestreept diagonaal patroon met de kleuren van precies die
  allianties — niet een generieke "overlap"-kleur. Zo blijft zichtbaar wélke
  allianties overlappen.

## Lay-out: Layered HUD (strategy map)

De kaart is beeldvullend en de hoofdrolspeler van het scherm. Alle UI zweeft
er als losse glaspanelen (glassmorphism) overheen, in plaats van een
traditionele header + vaste zijbalk:

- **Top bar** (zwevend glaspaneel): titel, zoekbalk (land of alliantie),
  categorie-filterpills (⚔ militair, 💰 handel, 🏛 politiek, ☪ religieus)
- **Alliantie-chip rij** (glaspaneel eronder): chips van de actief
  gefilterde categorie, geselecteerde chips lichten fel op met een gloed
- **Kaart**: vult de rest van het scherm
- **Legenda** (glaspaneel linksonder): kleur → alliantie voor de actief
  geselecteerde allianties, plus uitleg van het streeppatroon voor overlap
- **Land-detailpaneel** (glaspaneel rechts, slide-in bij klik): vlag-emoji,
  landnaam, badges per lidmaatschap (alliantie + jaar van toetreden)

## Visuele stijl

**Achtergrond:** donkere paars-navy gradient (`#0f0a1f` → `#1e0f42`), geen wit
of lichtgrijs — dat was de "saaie/professionele" sfeer die we vermijden.

**Kleurenfamilies per categorie** — elke categorie krijgt een eigen brede
kleurboog (niet één kleurtoon), met per alliantie een eigen tint. Waar
allianties qua kleurtoon toch dicht bij elkaar liggen (met name in categorieën
met veel leden, zoals handel met 8), wordt het verschil gecompenseerd met
duidelijk andere helderheid én verzadiging (fel/verzadigd vs. bleek/gedempt).

Bevestigde waarden (HSL), te gebruiken als het nieuwe `color`-veld per
alliantie:

*Militair (boog crimson → koraal):*
- Africa Corps: `hsl(335, 75%, 50%)`
- AUKUS: `hsl(0, 85%, 58%)`
- NATO: `hsl(15, 90%, 50%)`
- QUAD: `hsl(35, 70%, 65%)`

*Handel (boog diep oranje → bleekgeel):*
- Atlantic Cooperation Pact: `hsl(8, 85%, 48%)`
- BRI: `hsl(58, 60%, 62%)`
- BRICS: `hsl(18, 90%, 55%)`
- CPTPP: `hsl(50, 70%, 45%)`
- OECD: `hsl(28, 80%, 68%)`
- OPEC: `hsl(42, 85%, 58%)`
- RCEP: `hsl(34, 50%, 75%)`
- USMCA: `hsl(36, 95%, 40%)`

*Politiek (boog blauw-cyaan → violet-magenta):*
- African Union: `hsl(200, 75%, 52%)`
- ASEAN: `hsl(290, 70%, 62%)`
- CELAC: `hsl(215, 80%, 58%)`
- EU: `hsl(275, 65%, 68%)`
- G7: `hsl(230, 85%, 48%)`
- G20: `hsl(260, 55%, 70%)`
- SCO: `hsl(245, 90%, 42%)`

*Religieus:*
- OIC: `hsl(165, 75%, 48%)` — enige lid nu, ruimte om te groeien binnen deze
  familie als er later meer religieuze organisaties bijkomen.

**Regel voor nieuwe allianties (bronmateriaal):** kies een kleurtoon binnen
de boog van de categorie die zo ver mogelijk afstaat van de buren; bij een
kleurtoon-botsing compenseer met een duidelijk andere helderheid/verzadiging
in plaats van de boog verder te verbreden.

**Typografie:**
- Koppen: Space Grotesk (modern, iets speels, leesbaar op donker)
- Body: Inter
- Cijfers/statistieken: JetBrains Mono — geeft een "spelstatistiek"-gevoel

## Componenten & data

- `Index.tsx` — state: `selectedAlliances: Alliance[]`,
  `activeCategory: AllianceCategory | null`, `selectedCountry: string | null`,
  `searchQuery: string`
- `TopBar.tsx` (nieuw) — zoekbalk + categorie-filterpills
- `AllianceSelector.tsx` (herzien) — multi-select toggle-chips, gefilterd op
  `activeCategory`, nieuwe kleuren/stijl; tooltip per chip uitgebreid met
  afgeleide stats (aantal leden, oprichtingsjaar — al beschikbaar via
  bestaande `joinYear`-data, geen nieuwe databron nodig)
- `CountryDetailDrawer.tsx` (nieuw) — slide-in paneel, hergebruikt de
  bestaande `findCountryAlliances`-functie uit `mapUtils.ts`
- `src/data/countries.ts` (nieuw) — handmatige lookup ISO alpha-3 → landnaam
  + vlag-emoji, alleen voor de ±100 landcodes die daadwerkelijk voorkomen in
  `alliances.ts`. Nodig voor zoekfunctie én het detailpaneel (Mapbox geeft
  zelf geen vlag-emoji, en landnamen zijn nu alleen beschikbaar via
  hover-events op de kaart, niet als doorzoekbare lijst vooraf)
- `mapUtils.ts` — `updateAllianceHighlight` wordt `updateAllianceHighlights`
  (meervoud), werkt met een lijst allianties in plaats van één

**Overlap-streping, technisch:** Mapbox kan geen dynamisch tweekleurig
streeppatroon tekenen via een simpele paint-property. Aanpak: canvas-
gegenereerde patroonafbeelding per combinatie van overlappende allianties
(via `map.addImage`), plus een aparte kaartlaag bovenop de normale
landkleuring die alleen de overlap-landen toont (`fill-pattern`, gefilterd op
land-code). Dit is een apart implementatie-onderdeel, geen eenregelige
aanpassing van de bestaande `fill-color`-expressie.

## Edge cases

- Geen allianties geselecteerd → kaart toont neutrale/gedempte staat (zoals nu)
- Land zonder lidmaatschappen aangeklikt → detailpaneel toont lege staat
- Zoekopdracht zonder resultaten → eenvoudige lege staat
- Categoriefilter actief terwijl een geselecteerde alliantie buiten die
  filter valt → blijft gewoon actief op de kaart (filter en selectie staan los)

## Verificatie

Geen testframework in dit project — past bij de handmatige, snelle
werkwijze. Verificatie gebeurt handmatig via de dev-server: multi-select +
overlap-rendering, categoriefilter, zoekfunctie, detailpaneel, en
leesbaarheid van elke kleurfamilie.
