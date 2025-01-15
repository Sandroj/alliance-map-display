import mapboxgl from 'mapbox-gl';
import { Alliance } from '@/data/alliances';

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

export const setupCountriesLayer = (map: mapboxgl.Map, selectedAlliance: Alliance | null) => {
  // Add the countries source if it doesn't exist
  if (!map.getSource('countries')) {
    map.addSource('countries', {
      type: 'vector',
      url: 'mapbox://mapbox.country-boundaries-v1' // Use the Mapbox country boundaries tileset
    });
  }

  // Remove existing layers if they exist
  if (map.getLayer('country-fills')) map.removeLayer('country-fills');
  if (map.getLayer('country-borders')) map.removeLayer('country-borders');

  // Add fill layer with a uniform color (e.g., all countries in white or any single color)
  map.addLayer({
    id: 'country-fills',
    type: 'fill',
    source: 'countries',
    'source-layer': 'country_boundaries', // The layer name inside the tileset
    paint: {
      'fill-color': '#FFFFFF',  // Set all countries to a uniform color
      'fill-opacity': 0.7  // Adjust opacity as needed
    }
  });

  // Add border layer with a uniform color for borders
  map.addLayer({
    id: 'country-borders',
    type: 'line',
    source: 'countries',
    'source-layer': 'country_boundaries',
    paint: {
      'line-color': '#CCCCCC',  // Set border color
      'line-width': 0.5  // Adjust line width as needed
    }
  });

  // Move all symbol layers to the top
  const layers = map.getStyle().layers;
  const labelLayerIds = layers
    .filter(layer => layer.type === 'symbol')
    .map(layer => layer.id);

  labelLayerIds.forEach(layerId => {
    map.moveLayer(layerId);
  });

  // Optionally, highlight the selected alliance if there is one
  if (selectedAlliance) {
    updateAllianceHighlight(map, selectedAlliance);
  }
};

export const updateAllianceHighlight = (map: mapboxgl.Map, alliance: Alliance | null) => {
  if (!map.getLayer('country-fills')) return;

  if (alliance) {
    const memberCodes = alliance.members.map(member => member.code);
    map.setPaintProperty('country-fills', 'fill-color', [
      'match',
      ['get', 'iso_3166_1_alpha_3'],
      memberCodes,
      alliance.color,
      '#FFFFFF'
    ]);
    map.setPaintProperty('country-fills', 'fill-opacity', 0.7);
  } else {
    map.setPaintProperty('country-fills', 'fill-color', '#FFFFFF');
    map.setPaintProperty('country-fills', 'fill-opacity', 0.7);
  }
};

export const findCountryAlliances = (countryCode: string, alliances: Alliance[]): Array<{alliance: Alliance, joinYear: number}> => {
  return alliances.reduce((acc, alliance) => {
    const membership = alliance.members.find(member => member.code === countryCode);
    if (membership) {
      acc.push({
        alliance,
        joinYear: membership.joinYear
      });
    }
    return acc;
  }, [] as Array<{alliance: Alliance, joinYear: number}>);
};