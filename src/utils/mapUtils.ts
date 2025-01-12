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
      url: 'mapbox://mapbox.country-boundaries-v1'
    });
  }

  // Remove existing layers if they exist
  if (map.getLayer('country-fills')) map.removeLayer('country-fills');
  if (map.getLayer('country-borders')) map.removeLayer('country-borders');

  // Add fill layer
  map.addLayer({
    id: 'country-fills',
    type: 'fill',
    source: 'countries',
    'source-layer': 'country_boundaries',
    paint: {
      'fill-color': '#FFFFFF',
      'fill-opacity': 0.7
    }
  });

  // Add border layer
  map.addLayer({
    id: 'country-borders',
    type: 'line',
    source: 'countries',
    'source-layer': 'country_boundaries',
    paint: {
      'line-color': '#CCCCCC',
      'line-width': 0.5
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

  if (selectedAlliance) {
    updateAllianceHighlight(map, selectedAlliance);
  }
};

export const updateAllianceHighlight = (map: mapboxgl.Map, alliance: Alliance | null) => {
  if (!map.getLayer('country-fills')) return;

  if (alliance) {
    // Set a single, consistent color for all alliance members using a literal expression
    const allianceColor = alliance.color;
    
    // Use a literal expression to ensure consistent color application
    map.setPaintProperty('country-fills', 'fill-color', [
      'match',
      ['get', 'iso_3166_1_alpha_3'],
      alliance.members,
      allianceColor,
      '#FFFFFF'
    ]);
    
    // Set a consistent opacity for all countries
    map.setPaintProperty('country-fills', 'fill-opacity', 0.7);
  } else {
    // Reset to default white color
    map.setPaintProperty('country-fills', 'fill-color', '#FFFFFF');
    map.setPaintProperty('country-fills', 'fill-opacity', 0.7);
  }
};

export const findCountryAlliances = (countryCode: string, alliances: Alliance[]): Alliance[] => {
  return alliances.filter(alliance => alliance.members.includes(countryCode));
};