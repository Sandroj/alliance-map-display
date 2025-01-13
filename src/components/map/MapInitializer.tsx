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
  const mapInstance = useRef<mapboxgl.Map | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    let isMounted = true;

    const initializeMap = async () => {
      try {
        if (mapInstance.current) {
          mapInstance.current.remove();
          mapInstance.current = null;
        }

        mapboxgl.accessToken = mapboxToken;
        
        const map = new mapboxgl.Map({
          container: mapContainer.current!,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [0, 20],
          zoom: 1.5,
          projection: 'mercator'
        });

        await new Promise<void>((resolve) => {
          map.once('style.load', () => resolve());
        });

        if (!isMounted) {
          map.remove();
          return;
        }

        map.addControl(new mapboxgl.NavigationControl(), 'top-right');
        setupCountriesLayer(map, selectedAlliance);
        mapInstance.current = map;
        onMapInit(map);

      } catch (err) {
        console.error('Error initializing map:', err);
        toast({
          title: "Map Initialization Error",
          description: "Failed to initialize the map. Please check your internet connection and try again.",
          variant: "destructive",
        });
      }
    };

    initializeMap();

    return () => {
      isMounted = false;
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [mapboxToken, onMapInit, selectedAlliance]);

  return null;
};

export default MapInitializer;