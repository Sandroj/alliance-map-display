import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Alliance } from '@/data/alliances';
import MapTokenInput from './MapTokenInput';
import { initializeMap, setupCountriesLayer, updateAllianceHighlight } from '@/utils/mapUtils';

interface WorldMapProps {
  selectedAlliance: Alliance | null;
}

const DEFAULT_MAPBOX_TOKEN = 'pk.eyJ1Ijoic2FuZHJvajg4IiwiYSI6ImNsaXhhbHdpYzA2ZHMzY285bGVnMmM2M28ifQ._Tg-8q66Ef4MRPvac9zUjA';

const WorldMap: React.FC<WorldMapProps> = ({ selectedAlliance }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>(DEFAULT_MAPBOX_TOKEN);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    map.current = initializeMap(mapContainer.current, mapboxToken);
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      if (!map.current) return;
      setupCountriesLayer(map.current, selectedAlliance);

      // Add hover effect
      map.current.on('mousemove', 'country-fills', (e) => {
        if (e.features && e.features[0]?.properties) {
          if (map.current) {
            const canvas = map.current.getCanvas();
            canvas.style.cursor = 'pointer';
          }
        }
      });

      map.current.on('mouseleave', 'country-fills', () => {
        if (map.current) {
          const canvas = map.current.getCanvas();
          canvas.style.cursor = '';
        }
      });
    });

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  // Update highlighting when alliance selection changes
  useEffect(() => {
    if (!map.current || !map.current.isStyleLoaded()) return;
    updateAllianceHighlight(map.current, selectedAlliance);
  }, [selectedAlliance]);

  return (
    <div className="relative w-full h-[calc(100vh-12rem)]">
      {!mapboxToken && <MapTokenInput onTokenSet={setMapboxToken} />}
      <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-lg" />
    </div>
  );
};

export default WorldMap;