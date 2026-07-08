# Geopolitical Atlas Roadmap

## Doel

De app groeit van een "World Alliances"-kaart naar een strategische geopolitieke atlas:
een langzaam bijgewerkte kaart van machtsstructuren, afhankelijkheden en formele
verbanden. De kaart hoeft geen nieuws-dashboard te zijn. De juiste tijdschaal is
maanden tot jaren, met expliciete "as of"-datums per dataset.

De kernvraag per land wordt:

> Waar hoort dit land institutioneel bij, waar is het strategisch van afhankelijk,
> en welke machtsnetwerken lopen erdoorheen?

## Productprincipe

Niet alles is een alliantie. De app moet onderscheid maken tussen:

- Formele lidmaatschappen: verdragen, organisaties, handelsblokken.
- Veiligheidsrelaties: bondgenootschappen, bases, nucleaire paraplu's, militaire toegang.
- Strategische afhankelijkheden: energie, kritieke mineralen, voedsel, chips, routes.
- Invloed en normatieve blokken: politieke fora, taal- en cultuurorganisaties, governance-clubs.
- Spanningsvelden: conflicten, sancties, betwiste gebieden, bevroren deelname.

Daarom wordt de hoofdstructuur geen langere lijst chips, maar een set lenzen.

## Aanbevolen lenzen

1. Alliances
   - Harde verdragen en organisaties met expliciet lidmaatschap.
   - Voorbeelden: NATO, CSTO, EU, ASEAN, AU, Arab League, OAS, GCC.

2. Security
   - Defensierelaties, bases, militaire toegang, nucleaire status.
   - Voorbeelden: Five Eyes, NORAD, FPDA, JEF, PESCO, US treaty allies, NPT,
     nuclear umbrella, nuclear-weapon-free zones.

3. Trade
   - Handelsblokken, douane-unies, economische integratie.
   - Voorbeelden: WTO status, RCEP, CPTPP, USMCA, AfCFTA, Mercosur, EAEU,
     EFTA, APEC, CARICOM, ECOWAS, SADC, EAC.

4. Energy & Resources
   - Productie, reserves, verwerking, importafhankelijkheid en strategische routes.
   - Voorbeelden: OPEC+, GECF, IEA, IRENA, MSP, uranium, lithium, copper,
     cobalt, nickel, rare earths, gas, oil, grain, fertilizer.

5. Influence
   - Losser georganiseerde invloed, cultuur, taal, ideologische en diplomatieke blokken.
   - Voorbeelden: Commonwealth, Francophonie, CPLP, Organization of Turkic States,
     Non-Aligned Movement, G77 + China, BRICS, SCO, BRI, Global Governance Initiative.

6. Conflict & Disputes
   - Niet als live nieuws, maar als structurele geopolitieke context.
   - Voorbeelden: active conflict country flag, disputed territory notes,
     sanctions exposure, frozen participation, unrecognized states.

7. Chokepoints
   - Zeestraten, kanalen, pijpleidingen en logistieke knooppunten.
   - Voorbeelden: Strait of Hormuz, Malacca Strait, Suez Canal, Bab el-Mandeb,
     Bosporus, Panama Canal, Arctic routes, CEPS.

## Data die zeker moet worden toegevoegd

### Veiligheid

- Five Eyes
- NORAD
- FPDA
- Joint Expeditionary Force
- PESCO
- US treaty allies
- Rio Treaty / TIAR
- GCC security dimension
- NPT
- Nuclear-weapon states
- Nuclear sharing / umbrella
- Nuclear-weapon-free zones

### Handel en regio's

- AfCFTA
- Mercosur
- EAEU
- EFTA
- APEC
- GCC
- CARICOM / OECS
- Pacific Islands Forum
- IORA
- BIMSTEC
- SAARC
- ECOWAS
- SADC
- EAC
- COMESA
- IGAD
- OAS
- Council of Europe

### Invloed en cultuur

- Commonwealth
- Francophonie
- CPLP
- Organization of Turkic States
- Non-Aligned Movement
- G77 + China
- ALBA-TCP
- Andean Community
- SICA

### Energie en grondstoffen

- OPEC+
- Gas Exporting Countries Forum
- International Renewable Energy Agency
- International Solar Alliance
- Antarctic Treaty System
- Kimberley Process
- Critical minerals producers by commodity
- Critical minerals reserves by commodity
- Refining / processing concentration, especially China for rare earths and battery chains
- Strategic chokepoints for oil, gas, grain and container shipping

## Grondstoffen-aanpak

Grondstoffen moeten niet als gewone organisatie-chip worden toegevoegd. Ze zijn geen
relatie tussen landen, maar een strategische capaciteit of afhankelijkheid.

Maak daarom een aparte resource-dataset met per commodity:

- commodity: bijvoorbeeld lithium, copper, cobalt, uranium, rare earths, gas, oil.
- metric: reserves, mine production, refining, exports, import dependence.
- asOf: jaar of maand van de dataset.
- source: USGS, IEA, Energy Institute, FAO, UN Comtrade of andere stabiele bron.
- countries: ISO3 codes met waarde, rang of tier.
- notes: methodologische waarschuwingen.

Begin niet met alles. Eerste batch:

1. Oil and gas: OPEC+, GECF, top producers, top exporters, key chokepoints.
2. Battery chain: lithium, cobalt, nickel, graphite.
3. Electricity and defense chain: uranium, copper, rare earths.
4. Food leverage: grain exporters, fertilizer exporters.

## UI-richting

### Startscherm

Vervang het gevoel van "selecteer een paar allianties" door "kies een geopolitieke lens".
De kaart blijft centraal. Bovenin:

- Lens selector
- Search
- About / Legend / Sources

Links of onder:

- Binnen actieve lens: relevante groepen, datasets of commodities.
- Niet alle objecten tegelijk tonen.

### Country drawer

Maak het landprofiel rijker:

- Institutional: formele organisaties en verdragen.
- Security: bondgenoten, bases, nucleaire status, defensieclubs.
- Economy: handelsblokken en economische netwerken.
- Resources: strategische productie, reserves en afhankelijkheden.
- Tensions: conflicten, sancties, betwiste status, frozen participation.

### Kaartweergave

Gebruik verschillende visualisaties per datatype:

- Lidmaatschap: huidige kleur/overlap werkt.
- Resource ranking: choropleth met tiers.
- Chokepoints: lijnen en punten, niet landen inkleuren.
- Bases/ports: symbolen.
- Conflict/dispute: subtiele outline of hatch, niet schreeuwerig rood.
- Mixed lens: voorkom meer dan 2-3 datalagen tegelijk.

## Datamodel

Breid de huidige Alliance uit met optionele metadata:

- kind: organization, treaty, initiative, forum, infrastructure, resource, route, status.
- formality: binding, formal, informal, unilateral, analytical.
- lensIds: welke lenzen dit object ondersteunt.
- asOf: peildatum.
- reviewCadence: yearly, quarterly, event-driven.
- confidence: high, medium, low.
- sourceUrls: bronnen per item.
- notes: redactionele context.

Houd bestaande data werkend. Nieuwe velden blijven optioneel totdat de UI ze gebruikt.

## Bronbeleid

Elke dataset krijgt minimaal:

- Primaire bron waar mogelijk.
- "as of"-datum.
- Laatst gecontroleerd.
- Bekende nuance.
- Updatefrequentie.

Voorkeursbronnen:

- Organisaties zelf voor lidmaatschap.
- WTO RTA-IS voor handelsakkoorden.
- USGS Mineral Commodity Summaries voor mineralen.
- IEA Critical Minerals Data Explorer voor kritieke mineralen en energieketens.
- SIPRI voor militaire uitgaven, arms transfers en peace operations.
- UCDP of CFR voor conflictcontext.
- UNCTAD, World Bank, IMF, FAO of UN Comtrade voor economische afhankelijkheden.

Wikipedia mag achtergrondtekst leveren, maar niet de enige bron zijn voor ledenlijsten.

## Hostingadvies

De app is nu een frontend-only Vite/React-app. Daardoor is goedkope of gratis statische
hosting logisch.

Aanbevolen richting:

1. Blijf Lovable gebruiken als snelle AI-bouwomgeving zolang dat prettig is.
2. Host productie los op Cloudflare Pages of GitHub Pages.
3. Laat `main` niet automatisch groot werk deployen zonder akkoord.
4. Gebruik branches voor inhoudelijke uitbreidingen.

Cloudflare Pages is de beste gratis productie-optie als er een eigen domein komt of
als snelheid/CDN belangrijk is. GitHub Pages is het simpelst als alles volledig bij
GitHub mag blijven. Vercel en Netlify zijn prima, maar voegen hier weinig toe zolang
er geen serverfuncties nodig zijn.

## Uitvoeringsplan

### Fase 0 - Stabiliseer de basis

- Voeg dit roadmap-document toe.
- Breid types optioneel uit voor metadata, bronnen, lenzen en reviewstatus.
- Voeg een `source`/`asOf`-conventie toe aan nieuwe data.
- Controleer build en TypeScript.

### Fase 1 - Herpositionering

- Hernoem zichtbare app van "World Alliances" naar "Geopolitical Atlas" of gekozen naam.
- Pas About/Legend/Sources aan op de nieuwe scope.
- Introduceer lens-navigatie zonder de bestaande alliance-selectie te breken.

### Fase 2 - Data uitbreiding, formele verbanden

- Voeg ontbrekende organisaties batchgewijs toe.
- Start met hoge informatiewaarde en stabiel lidmaatschap:
  Five Eyes, AfCFTA, Mercosur, GCC, EAEU, EFTA, Commonwealth, Francophonie,
  OAS, Council of Europe, G77 + China, NAM.
- Verifieer elk item met primaire bron of betrouwbare institutionele bron.

### Fase 3 - Country profile 2.0

- Groepeer memberships per lens.
- Toon `asOf`, status en confidence waar relevant.
- Voeg redactionele notities toe bij betwiste staten en frozen participation.

### Fase 4 - Resources MVP

- Maak resource-dataset voor oil, gas, lithium, cobalt, nickel, copper, uranium,
  rare earths en grain/fertilizer.
- Toon per commodity eerst alleen tiers, geen exacte getallen in de UI.
- Voeg bronverwijzing en peildatum toe.

### Fase 5 - Chokepoints en routes

- Voeg punten/lijnen toe voor strategische zeestraten en kanalen.
- Koppel chokepoints aan relevante commodities en handelsstromen.

### Fase 6 - Hostingmigratie

- Kies productiehost.
- Voeg build-config toe.
- Test preview deployment.
- Pas README en HANDOFF aan.
- Deploy pas naar productie na expliciet akkoord.

## Beslispunten voor Max

1. Naam: "Geopolitical Atlas", "World Power Map", of Nederlands/anders?
2. Scope: alleen staten, of ook niet-erkende staten, gebieden, bases, havens en routes?
3. Grondstoffen: eerst alleen kritieke mineralen, of ook olie/gas/voedsel vanaf het begin?
4. Hosting: Cloudflare Pages, GitHub Pages, of voorlopig Lovable houden?
5. Tone of voice: neutraal academisch, journalistiek compact, of persoonlijk/essayistisch?

## Eerste aanbevolen keuze

Mijn voorkeur:

- Naam: Geopolitical Atlas.
- Scope: staten plus expliciete uitzonderingen voor disputed/unrecognized territories,
  chokepoints, bases en routes.
- Resources MVP: oil, gas, lithium, cobalt, nickel, copper, uranium, rare earths,
  grain and fertilizer.
- Hosting: Cloudflare Pages voor productie, Lovable alleen als bouw/editorlaag.
- Toon: neutraal, compact en bronbewust.
