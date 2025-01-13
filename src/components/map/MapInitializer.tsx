import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { setupCountriesLayer } from '@/utils/mapUtils';
import { useToast } from '../ui/use-toast';
import { Alliance } from '@/data/alliances';

interface MapInitializerProps {
  mapContainer: React.RefObject<HTMLDivElement>;
  mapboxToken: string;
  onMapInit: (map: mapboxgl.Map) => void;
  selectedAlliance: Alliance | null;
}

const MapInitializer: React.FC<MapInitializerProps> = ({
  mapContainer,
  mapboxToken,
  onMapInit,
  selectedAlliance
}) => {
  const map = useRef<mapboxgl.Map | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      if (map.current) return;

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [0, 20],
        zoom: 1.5,
        projection: 'mercator',
        accessToken: mapboxToken
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      map.current.once('style.load', () => {
        if (map.current) {
          setupCountriesLayer(map.current, selectedAlliance);
          onMapInit(map.current);
        }
      });

      return () => {
        if (map.current) {
          map.current.remove();
          map.current = null;
        }
      };
    } catch (err) {
      console.error('Error initializing map:', err);
      toast({
        title: "Map Initialization Error",
        description: "Failed to initialize the map. Please check your internet connection and try again.",
        variant: "destructive",
      });
    }
  }, [mapboxToken, onMapInit, selectedAlliance]);

  return null;
};

export default MapInitializer;