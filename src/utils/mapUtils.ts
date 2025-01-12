import mapboxgl from 'mapbox-gl';
import { Alliance } from '@/data/alliances';

export const initializeMap = (container: HTMLDivElement, token: string) => {
  mapboxgl.accessToken = token;
  return new mapboxgl.Map({
    container,
    style: 'mapbox://styles/mapbox/outdoors-v12', // Changed to outdoors style for more natural colors
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

  // Add fill layer with a default natural color
  map.addLayer({
    id: 'country-fills',
    type: 'fill',
    source: 'countries',
    'source-layer': 'country_boundaries',
    paint: {
      'fill-color': selectedAlliance ? '#FFFFFF' : '#E8E6E0', // Light beige for default
      'fill-opacity': 0.7,
      'fill-outline-color': '#A69F95' // Softer border color
    }
  });

  // Add border layer with improved styling
  map.addLayer({
    id: 'country-borders',
    type: 'line',
    source: 'countries',
    'source-layer': 'country_boundaries',
    paint: {
      'line-color': '#A69F95',
      'line-width': 0.8,
      'line-opacity': 0.8
    }
  });

  // Customize water color
  map.setPaintProperty('water', 'fill-color', '#B3D7EA');

  // Add water texture
  if (!map.getLayer('water-texture')) {
    map.addLayer({
      id: 'water-texture',
      type: 'fill',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [-180, -90],
                [180, -90],
                [180, 90],
                [-180, 90],
                [-180, -90]
              ]
            ]
          },
          properties: {}
        }
      },
      paint: {
        'fill-pattern': 'wave',
        'fill-opacity': 0.1
      },
      layout: {
        visibility: 'visible'
      }
    });
  }

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
    // Set a single, consistent color for all alliance members
    const allianceColor = alliance.color;
    map.setPaintProperty('country-fills', 'fill-color', [
      'case',
      ['in', ['get', 'iso_3166_1_alpha_3'], ['literal', alliance.members]],
      allianceColor,
      '#E8E6E0' // Keep non-alliance countries in the default color
    ]);
    map.setPaintProperty('country-fills', 'fill-opacity', 0.7);
  } else {
    map.setPaintProperty('country-fills', 'fill-color', '#E8E6E0');
    map.setPaintProperty('country-fills', 'fill-opacity', 0.7);
  }
};

export const findCountryAlliances = (countryCode: string, alliances: Alliance[]): Alliance[] => {
  return alliances.filter(alliance => alliance.members.includes(countryCode));
};