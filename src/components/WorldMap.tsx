import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Alliance } from '@/data/alliances';
import MapTokenInput from './MapTokenInput';
import { initializeMap, setupCountriesLayer, updateAllianceHighlight } from '@/utils/mapUtils';
import { Alert, AlertDescription } from './ui/alert';
import { useToast } from './ui/use-toast';

interface WorldMapProps {
  selectedAlliance: Alliance | null;
}

const DEFAULT_MAPBOX_TOKEN = 'pk.eyJ1Ijoic2FuZHJvajg4IiwiYSI6ImNsaXhhbHdpYzA2ZHMzY285bGVnMmM2M28ifQ._Tg-8q66Ef4MRPvac9zUjA';

const WorldMap: React.FC<WorldMapProps> = ({ selectedAlliance }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>(DEFAULT_MAPBOX_TOKEN);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      map.current = initializeMap(mapContainer.current, mapboxToken);
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      map.current.on('error', (e) => {
        console.error('Mapbox error:', e);
        setError('There was an error loading the map. Please try refreshing the page.');
        toast({
          title: "Map Error",
          description: "There was an error loading the map. Please try refreshing the page.",
          variant: "destructive",
        });
      });

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
    } catch (err) {
      console.error('Error initializing map:', err);
      setError('Failed to initialize the map. Please check your internet connection and try again.');
      toast({
        title: "Map Initialization Error",
        description: "Failed to initialize the map. Please check your internet connection and try again.",
        variant: "destructive",
      });
    }

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
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {!mapboxToken && <MapTokenInput onTokenSet={setMapboxToken} />}
      <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-lg" />
    </div>
  );
};

export default WorldMap;