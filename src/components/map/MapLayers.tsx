import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { createCountryPopup, createDisputePopup } from '../MapPopup';
import { alliances } from '@/data/alliances';

interface MapLayersProps {
  map: mapboxgl.Map | null;
  popup: mapboxgl.Popup | null;
  showAlliances: boolean;
  showDisputed: boolean;
}

const MapLayers: React.FC<MapLayersProps> = ({
  map,
  popup,
  showAlliances,
  showDisputed
}) => {
  useEffect(() => {
    if (!map || !popup) return;

    let mounted = true;
    const eventHandlers: { [key: string]: (e: mapboxgl.MapMouseEvent) => void } = {};

    const addEventListeners = () => {
      if (!mounted || !map.getLayer('country-fills')) return;

      eventHandlers.countryHover = (e: mapboxgl.MapMouseEvent & { features?: mapboxgl.MapboxGeoJSONFeature[] }) => {
        if (e.features && e.features[0]?.properties && showAlliances) {
          const countryCode = e.features[0].properties.iso_3166_1_alpha_3;
          const countryName = e.features[0].properties.name_en;
          
          map.getCanvas().style.cursor = 'pointer';
          popup
            .setLngLat(e.lngLat)
            .setHTML(createCountryPopup(countryName, countryCode, alliances))
            .addTo(map);
        }
      };

      eventHandlers.disputedHover = (e: mapboxgl.MapMouseEvent & { features?: mapboxgl.MapboxGeoJSONFeature[] }) => {
        if (e.features && e.features[0] && showDisputed) {
          popup
            .setLngLat(e.lngLat)
            .setHTML(createDisputePopup(e.features[0].properties))
            .addTo(map);
        }
      };

      eventHandlers.mouseLeave = () => {
        map.getCanvas().style.cursor = '';
        popup.remove();
      };

      map.on('mousemove', 'country-fills', eventHandlers.countryHover);
      map.on('mouseleave', 'country-fills', eventHandlers.mouseLeave);

      if (map.getLayer('disputed-territories')) {
        map.on('mousemove', 'disputed-territories', eventHandlers.disputedHover);
        map.on('mouseleave', 'disputed-territories', eventHandlers.mouseLeave);
      }
    };

    if (map.isStyleLoaded()) {
      addEventListeners();
    } else {
      map.once('style.load', addEventListeners);
    }

    return () => {
      mounted = false;
      if (!map) return;

      // Remove event listeners if they were added
      Object.entries(eventHandlers).forEach(([, handler]) => {
        if (map.getLayer('country-fills')) {
          map.off('mousemove', 'country-fills', handler);
          map.off('mouseleave', 'country-fills', handler);
        }
        if (map.getLayer('disputed-territories')) {
          map.off('mousemove', 'disputed-territories', handler);
          map.off('mouseleave', 'disputed-territories', handler);
        }
      });
    };
  }, [map, popup, showAlliances, showDisputed]);

  return null;
};

export default MapLayers;