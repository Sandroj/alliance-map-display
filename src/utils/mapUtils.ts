import mapboxgl from 'mapbox-gl';
import { Alliance } from '@/data/alliances';

export const initializeMap = (container: HTMLDivElement, token: string) => {
  mapboxgl.accessToken = token;
  return new mapboxgl.Map({
    container,
    style: 'mapbox://styles/mapbox/light-v11',
    center: [0, 20],
    zoom: 1.5,
    projection: 'mercator'
  });
};

export const setupCountriesLayer = (map: mapboxgl.Map, selectedAlliance: Alliance | null) => {
  // Add source if it doesn't exist
  if (!map.getSource('countries')) {
    map.addSource('countries', {
      type: 'vector',
      url: 'mapbox://mapbox.country-boundaries-v1'
    });
  }

  // Add layer if it doesn't exist
  if (!map.getLayer('country-fills')) {
    map.addLayer({
      id: 'country-fills',
      type: 'fill',
      source: 'countries',
      'source-layer': 'country_boundaries',
      paint: {
        'fill-color': 'rgba(200, 200, 200, 0.3)',
        'fill-opacity': 0.7
      },
      filter: ['==', ['get', 'disputed'], '0'] // Only show undisputed territories
    });
  }

  if (selectedAlliance) {
    updateAllianceHighlight(map, selectedAlliance);
  }
};

export const updateAllianceHighlight = (map: mapboxgl.Map, alliance: Alliance | null) => {
  if (!map.getLayer('country-fills')) return;
  
  map.setPaintProperty('country-fills', 'fill-color', [
    'case',
    ['in', ['get', 'iso_3166_1_alpha_3'], ['literal', alliance?.members || []]],
    alliance?.color || 'rgba(200, 200, 200, 0.3)',
    'rgba(200, 200, 200, 0.3)'
  ]);
};