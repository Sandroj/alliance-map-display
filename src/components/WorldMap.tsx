import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Alliance } from '@/data/alliances';
import { toast } from 'sonner';

interface WorldMapProps {
  selectedAlliance: Alliance | null;
}

const WorldMap: React.FC<WorldMapProps> = ({ selectedAlliance }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [0, 20],
      zoom: 1.5,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      if (!map.current) return;
      
      // Add hover effect
      map.current.on('mousemove', 'country-fills', (e) => {
        if (e.features && e.features[0]?.properties && map.current) {
          const feature = e.features[0];
          const countryCode = feature.properties.iso_3166_1;
          const countryName = feature.properties.name;
          
          const canvas = map.current.getCanvas();
          if (canvas) {
            canvas.style.cursor = 'pointer';
          }
          // Show tooltip with country info
        }
      });

      map.current.on('mouseleave', 'country-fills', () => {
        if (map.current) {
          const canvas = map.current.getCanvas();
          if (canvas) {
            canvas.style.cursor = '';
          }
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

    if (selectedAlliance) {
      // Add layer for highlighting countries
      map.current.setPaintProperty('country-fills', 'fill-color', [
        'case',
        ['in', ['get', 'iso_3166_1'], ['literal', selectedAlliance.members]],
        selectedAlliance.color,
        'rgba(0, 0, 0, 0.1)'
      ]);
    } else {
      // Reset highlighting
      map.current.setPaintProperty('country-fills', 'fill-color', 'rgba(0, 0, 0, 0.1)');
    }
  }, [selectedAlliance]);

  return (
    <div className="relative w-full h-[calc(100vh-12rem)]">
      {!mapboxToken && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 rounded-lg p-4">
          <p className="text-gray-600 mb-2">Please enter your Mapbox token to view the map:</p>
          <input
            type="text"
            className="px-4 py-2 border rounded-md w-96 max-w-full"
            placeholder="Enter your Mapbox token"
            onChange={(e) => {
              setMapboxToken(e.target.value);
              toast("Map token set successfully!");
            }}
          />
          <p className="text-sm text-gray-500 mt-2">
            Get your token at{" "}
            <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              mapbox.com
            </a>
          </p>
        </div>
      )}
      <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-lg" />
    </div>
  );
};

export default WorldMap;