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
  if (!map.getSource('countries')) {
    map.addSource('countries', {
      type: 'vector',
      url: 'mapbox://mapbox.country-boundaries-v1'
    });
  }

  // Add fill layer if it doesn't exist
  if (!map.getLayer('country-fills')) {
    map.addLayer({
      id: 'country-fills',
      type: 'fill',
      source: 'countries',
      'source-layer': 'country_boundaries',
      paint: {
        'fill-color': '#FFFFFF',  // Default white color for all countries
        'fill-opacity': 0.7
      }
    }, 'country-label'); // Place below labels
  }

  // Add border layer for better visibility
  if (!map.getLayer('country-borders')) {
    map.addLayer({
      id: 'country-borders',
      type: 'line',
      source: 'countries',
      'source-layer': 'country_boundaries',
      paint: {
        'line-color': '#CCCCCC',
        'line-width': 0.5
      }
    }, 'country-label'); // Place below labels
  }

  if (selectedAlliance) {
    updateAllianceHighlight(map, selectedAlliance);
  }
};

export const updateAllianceHighlight = (map: mapboxgl.Map, alliance: Alliance | null) => {
  console.log('Updating alliance highlight:', alliance?.name, 'with members:', alliance?.members);
  
  if (!map.getLayer('country-fills')) {
    console.error('country-fills layer not found');
    return;
  }

  if (alliance) {
    map.setPaintProperty('country-fills', 'fill-color', [
      'case',
      ['in', ['get', 'iso_3166_1_alpha_3'], ['literal', alliance.members]],
      alliance.color,
      '#FFFFFF'  // Default white for non-member countries
    ]);
  } else {
    map.setPaintProperty('country-fills', 'fill-color', '#FFFFFF');
  }
};