import mapboxgl from 'mapbox-gl';
import { Alliance, MemberStatus } from '@/data/alliances';

const BASE_FILL_COLOR = '#d5d5dc';

// De mapbox.country-boundaries-v1 dataset bevat voor betwiste grenzen meerdere
// overlappende polygonen — één per "worldview" (bijv. worldview "RU", "JP" én
// "AR,CN,IN,MA,RS,TR,US" liggen alle drie over elkaar heen op Rusland). Zonder
// filter renderen ze alle tegelijk, wat bij fill-opacity < 1 een zichtbaar
// donkerdere tint geeft op precies die landen (gestapelde transparantie) —
// terwijl landen zonder grensgeschil maar één polygoon (worldview "all")
// hebben. Deze filter kiest per locatie steeds precies één polygoon.
const WORLDVIEW_FILTER: mapboxgl.FilterSpecification = [
  'any',
  ['==', ['get', 'worldview'], 'all'],
  ['in', 'US', ['get', 'worldview']]
];

export const initializeMap = (container: HTMLDivElement, token: string) => {
  mapboxgl.accessToken = token;
  return new mapboxgl.Map({
    container,
    style: 'mapbox://styles/mapbox/outdoors-v12',
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
    filter: WORLDVIEW_FILTER,
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
    filter: ['all', WORLDVIEW_FILTER, ['in', ['get', 'iso_3166_1_alpha_3'], ['literal', []]]],
    paint: {
      'fill-opacity': 1
    }
  });

  map.addLayer({
    id: 'country-borders',
    type: 'line',
    source: 'countries',
    'source-layer': 'country_boundaries',
    filter: WORLDVIEW_FILTER,
    paint: {
      'line-color': ['case', ['boolean', ['feature-state', 'hover'], false], '#1a1a2e', 'rgba(0,0,0,0.15)'],
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
  const patternId = `stripe-${colors.join('|')}`;
  if (map.hasImage(patternId)) return patternId;

  const size = 48;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) return patternId;

  // Tot 4 kleuren tegelijk in het streeppatroon — bijv. de VS zit in NAVO,
  // AUKUS én QUAD, dus een 2-kleuren-cap zou bij zo'n drievoudig overlap
  // stilzwijgend een alliantie laten verdwijnen uit de streping. Bij 5+
  // gelijktijdig geselecteerde overlappende allianties op één land (zeldzaam)
  // worden de resterende kleuren om praktische leesbaarheidsredenen weggelaten.
  const stripeColors = colors.slice(0, 4);
  const stripeWidth = 4;
  const period = stripeWidth * stripeColors.length;

  // Diagonaal streeppatroon via (x - y) mod period. Deze aanpak tegelt
  // altijd naadloos zolang period de canvasgrootte deelt — bij canvasgrootte
  // 48 en stripeWidth 4 geldt dat voor 2, 3 én 4 kleuren (period 8/12/16,
  // 48 is door alle drie deelbaar) — in tegenstelling tot een geroteerd
  // canvas, dat bij een 45°-hoek niet vanzelf periodiek is met de
  // canvasgrootte en zichtbare naden geeft zodra Mapbox het patroon over
  // een land groter dan één tegel herhaalt.
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const diagonal = ((x - y) % period + period) % period;
      const colorIndex = Math.floor(diagonal / stripeWidth);
      ctx.fillStyle = stripeColors[colorIndex];
      ctx.fillRect(x, y, 1, 1);
    }
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

export const findCountryAlliances = (
  countryCode: string,
  alliances: Alliance[]
): Array<{ alliance: Alliance; joinYear?: number; status?: MemberStatus }> => {
  return alliances.reduce((acc, alliance) => {
    const membership = alliance.members.find((member) => member.code === countryCode);
    if (membership) {
      acc.push({ alliance, joinYear: membership.joinYear, status: membership.status });
    }
    return acc;
  }, [] as Array<{ alliance: Alliance; joinYear?: number; status?: MemberStatus }>);
};
