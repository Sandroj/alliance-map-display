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
        'fill-color': [
          'case',
          ['boolean', ['feature-state', 'selected'], false],
          ['string', ['feature-state', 'color'], 'rgba(0, 0, 0, 0.1)'],
          'rgba(0, 0, 0, 0.1)'
        ],
        'fill-opacity': 0.7
      }
    });
  }

  if (selectedAlliance) {
    updateAllianceHighlight(map, selectedAlliance);
  }
};

export const updateAllianceHighlight = (map: mapboxgl.Map, alliance: Alliance | null) => {
  // Reset all countries
  map.setPaintProperty('country-fills', 'fill-color', [
    'case',
    ['in', ['get', 'iso_3166_1_alpha_3'], ['literal', alliance?.members || []]],
    alliance?.color || 'rgba(0, 0, 0, 0.1)',
    'rgba(0, 0, 0, 0.1)'
  ]);
};