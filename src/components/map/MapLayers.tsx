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

    const handleCountryHover = (e: mapboxgl.MapMouseEvent & { features?: mapboxgl.MapboxGeoJSONFeature[] }) => {
      if (e.features && e.features[0]?.properties) {
        const countryCode = e.features[0].properties.iso_3166_1_alpha_3;
        const countryName = e.features[0].properties.name_en;
        
        const canvas = map.getCanvas();
        canvas.style.cursor = 'pointer';

        if (showAlliances) {
          popup
            .setLngLat(e.lngLat)
            .setHTML(createCountryPopup(countryName, countryCode, alliances))
            .addTo(map);
        }
      }
    };

    const handleDisputedHover = (e: mapboxgl.MapMouseEvent & { features?: mapboxgl.MapboxGeoJSONFeature[] }) => {
      if (e.features && e.features[0] && showDisputed) {
        popup
          .setLngLat(e.lngLat)
          .setHTML(createDisputePopup(e.features[0].properties))
          .addTo(map);
      }
    };

    const handleMouseLeave = () => {
      const canvas = map.getCanvas();
      canvas.style.cursor = '';
      popup.remove();
    };

    // Wait for style to be loaded before adding event listeners
    if (map.isStyleLoaded()) {
      map.on('mousemove', 'country-fills', handleCountryHover);
      map.on('mousemove', 'disputed-territories', handleDisputedHover);
      map.on('mouseleave', 'country-fills', handleMouseLeave);
      map.on('mouseleave', 'disputed-territories', handleMouseLeave);
    } else {
      map.once('style.load', () => {
        map.on('mousemove', 'country-fills', handleCountryHover);
        map.on('mousemove', 'disputed-territories', handleDisputedHover);
        map.on('mouseleave', 'country-fills', handleMouseLeave);
        map.on('mouseleave', 'disputed-territories', handleMouseLeave);
      });
    }

    return () => {
      if (map.getLayer('country-fills')) {
        map.off('mousemove', 'country-fills', handleCountryHover);
        map.off('mouseleave', 'country-fills', handleMouseLeave);
      }
      if (map.getLayer('disputed-territories')) {
        map.off('mousemove', 'disputed-territories', handleDisputedHover);
        map.off('mouseleave', 'disputed-territories', handleMouseLeave);
      }
    };
  }, [map, popup, showAlliances, showDisputed]);

  return null;
};

export default MapLayers;