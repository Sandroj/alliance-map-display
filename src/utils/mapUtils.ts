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
  // Wait for the style to load before adding layers
  map.on('style.load', () => {
    // Add source if it doesn't exist
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
          'fill-color': [
            'case',
            ['in', ['get', 'iso_3166_1_alpha_3'], ['literal', selectedAlliance?.members || []]],
            selectedAlliance?.color || '#cccccc',
            '#cccccc'
          ],
          'fill-opacity': [
            'case',
            ['in', ['get', 'iso_3166_1_alpha_3'], ['literal', selectedAlliance?.members || []]],
            0.8,
            0.3
          ]
        },
        filter: ['==', ['get', 'disputed'], '0']
      });
    }

    // Add borders layer if it doesn't exist
    if (!map.getLayer('country-borders')) {
      map.addLayer({
        id: 'country-borders',
        type: 'line',
        source: 'countries',
        'source-layer': 'country_boundaries',
        paint: {
          'line-color': '#ffffff',
          'line-width': 1
        },
        filter: ['==', ['get', 'disputed'], '0']
      });
    }

    // Initial highlight if there's a selected alliance
    if (selectedAlliance) {
      updateAllianceHighlight(map, selectedAlliance);
    }
  });
};

export const updateAllianceHighlight = (map: mapboxgl.Map, alliance: Alliance | null) => {
  // Wait for the style and layers to be loaded
  if (!map.isStyleLoaded() || !map.getLayer('country-fills')) {
    console.log('Map or layers not ready yet');
    return;
  }

  console.log('Updating alliance highlight:', alliance?.name, 'with members:', alliance?.members);

  const defaultColor = '#cccccc';
  
  try {
    map.setPaintProperty('country-fills', 'fill-color', [
      'case',
      ['in', ['get', 'iso_3166_1_alpha_3'], ['literal', alliance?.members || []]],
      alliance?.color || defaultColor,
      defaultColor
    ]);

    map.setPaintProperty('country-fills', 'fill-opacity', [
      'case',
      ['in', ['get', 'iso_3166_1_alpha_3'], ['literal', alliance?.members || []]],
      0.8,
      0.3
    ]);
  } catch (error) {
    console.error('Error updating map paint properties:', error);
  }
};