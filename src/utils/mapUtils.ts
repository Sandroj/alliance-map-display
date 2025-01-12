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

  if (!map.getLayer('country-fills')) {
    map.addLayer({
      id: 'country-fills',
      type: 'fill',
      source: 'countries',
      'source-layer': 'country_boundaries',
      paint: {
        'fill-color': '#FFFFFF',
        'fill-opacity': ['case',
          ['==', ['get', 'disputed'], 'true'], 0.3,
          0.7
        ]
      }
    });
  }

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
    });
  }

  // Ensure labels are on top
  const labelLayerId = map.getStyle().layers.find(layer => layer.type === 'symbol' && layer.layout && layer.layout['text-field'])?.id;
  if (labelLayerId) {
    map.moveLayer(labelLayerId);
  }

  if (selectedAlliance) {
    updateAllianceHighlight(map, selectedAlliance);
  }
};

export const updateAllianceHighlight = (map: mapboxgl.Map, alliance: Alliance | null) => {
  if (!map.getLayer('country-fills')) return;

  if (alliance) {
    map.setPaintProperty('country-fills', 'fill-color', [
      'case',
      ['in', ['get', 'iso_3166_1_alpha_3'], ['literal', alliance.members]],
      alliance.color,
      '#FFFFFF'
    ]);
  } else {
    map.setPaintProperty('country-fills', 'fill-color', '#FFFFFF');
  }
};

export const findCountryAlliances = (countryCode: string, alliances: Alliance[]): Alliance[] => {
  return alliances.filter(alliance => alliance.members.includes(countryCode));
};