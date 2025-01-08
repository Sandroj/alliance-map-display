import mapboxgl from 'mapbox-gl';
import { Alliance } from '@/data/alliances';

export const initializeMap = (container: HTMLDivElement, token: string) => {
  mapboxgl.accessToken = token;
  return new mapboxgl.Map({
    container,
    style: 'mapbox://styles/mapbox/light-v11',
    center: [0, 20],
    zoom: 1.5,
  });
};

export const setupCountriesLayer = (map: mapboxgl.Map, selectedAlliance: Alliance | null) => {
  map.addSource('countries', {
    type: 'vector',
    url: 'mapbox://mapbox.country-boundaries-v1'
  });

  map.addLayer({
    id: 'country-fills',
    type: 'fill',
    source: 'countries',
    'source-layer': 'country_boundaries',
    paint: {
      'fill-color': 'rgba(0, 0, 0, 0.1)',
      'fill-opacity': 0.7
    }
  });

  if (selectedAlliance) {
    updateAllianceHighlight(map, selectedAlliance);
  }
};

export const updateAllianceHighlight = (map: mapboxgl.Map, alliance: Alliance | null) => {
  if (!alliance) {
    map.setPaintProperty('country-fills', 'fill-color', 'rgba(0, 0, 0, 0.1)');
    return;
  }

  map.setPaintProperty('country-fills', 'fill-color', [
    'case',
    ['in', ['get', 'iso_3166_1'], ['literal', alliance.members]],
    alliance.color,
    'rgba(0, 0, 0, 0.1)'
  ]);
};