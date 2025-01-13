import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Alliance } from '@/data/alliances';
import MapTokenInput from './MapTokenInput';
import { setupCountriesLayer, updateAllianceHighlight } from '@/utils/mapUtils';
import { Alert, AlertDescription } from './ui/alert';
import { useToast } from './ui/use-toast';
import MapControls from './MapControls';
import { createCountryPopup, createDisputePopup } from './MapPopup';
import { alliances } from '@/data/alliances';

interface WorldMapProps {
  selectedAlliance: Alliance | null;
}

const DEFAULT_MAPBOX_TOKEN = 'pk.eyJ1Ijoic2FuZHJvajg4IiwiYSI6ImNsaXhhbHdpYzA2ZHMzY285bGVnMmM2M28ifQ._Tg-8q66Ef4MRPvac9zUjA';

const WorldMap: React.FC<WorldMapProps> = ({ selectedAlliance }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const popup = useRef<mapboxgl.Popup | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>(DEFAULT_MAPBOX_TOKEN);
  const [error, setError] = useState<string | null>(null);
  const [showAlliances, setShowAlliances] = useState(false);
  const [showDisputed, setShowDisputed] = useState(false);
  const { toast } = useToast();

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      if (map.current) return; // Prevent multiple initializations

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [0, 20],
        zoom: 1.5,
        projection: 'mercator',
        accessToken: mapboxToken
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Return cleanup function
      return () => {
        if (popup.current) {
          popup.current.remove();
          popup.current = null;
        }
        if (map.current) {
          map.current.remove();
          map.current = null;
        }
      };
    } catch (err) {
      console.error('Error initializing map:', err);
      setError('Failed to initialize the map. Please check your internet connection and try again.');
      toast({
        title: "Map Initialization Error",
        description: "Failed to initialize the map. Please check your internet connection and try again.",
        variant: "destructive",
      });
    }
  }, [mapboxToken]);

  // Setup layers and event handlers
  useEffect(() => {
    if (!map.current || !map.current.isStyleLoaded()) return;

    const currentMap = map.current;

    const setupLayers = () => {
      // Add disputed territories layer
      if (!currentMap.getLayer('disputed-territories')) {
        currentMap.addLayer({
          id: 'disputed-territories',
          type: 'fill',
          source: {
            type: 'vector',
            url: 'mapbox://mapbox.boundaries-adm0-v3'
          },
          'source-layer': 'boundaries_admin_0',
          filter: ['==', ['get', 'disputed'], 'true'],
          paint: {
            'fill-color': '#FF0000',
            'fill-opacity': 0.3
          }
        });

        // Add disputed boundaries layer
        currentMap.addLayer({
          id: 'disputed-boundaries',
          type: 'line',
          source: {
            type: 'vector',
            url: 'mapbox://mapbox.boundaries-adm0-v3'
          },
          'source-layer': 'boundaries_admin_0',
          filter: ['==', ['get', 'disputed'], 'true'],
          paint: {
            'line-color': '#FF0000',
            'line-width': 2,
            'line-dasharray': [2, 2]
          }
        });
      }

      setupCountriesLayer(currentMap, selectedAlliance);
    };

    const handleCountryHover = (e: mapboxgl.MapMouseEvent & { features?: mapboxgl.MapboxGeoJSONFeature[] }) => {
      if (e.features && e.features[0]?.properties) {
        const countryCode = e.features[0].properties.iso_3166_1_alpha_3;
        const countryName = e.features[0].properties.name_en;
        
        const canvas = currentMap.getCanvas();
        canvas.style.cursor = 'pointer';

        if (showAlliances) {
          if (!popup.current) {
            popup.current = new mapboxgl.Popup({
              closeButton: false,
              className: 'bg-white rounded-md shadow-lg p-2'
            });
          }

          popup.current
            .setLngLat(e.lngLat)
            .setHTML(createCountryPopup(countryName, countryCode, alliances))
            .addTo(currentMap);
        }
      }
    };

    const handleDisputedHover = (e: mapboxgl.MapMouseEvent & { features?: mapboxgl.MapboxGeoJSONFeature[] }) => {
      if (e.features && e.features[0]) {
        if (!popup.current) {
          popup.current = new mapboxgl.Popup({
            closeButton: false,
            className: 'bg-white rounded-md shadow-lg p-2'
          });
        }

        popup.current
          .setLngLat(e.lngLat)
          .setHTML(createDisputePopup(e.features[0].properties))
          .addTo(currentMap);
      }
    };

    const handleMouseLeave = () => {
      const canvas = currentMap.getCanvas();
      canvas.style.cursor = '';
      if (popup.current) {
        popup.current.remove();
      }
    };

    currentMap.once('style.load', setupLayers);
    
    // Add event listeners
    currentMap.on('mousemove', 'country-fills', handleCountryHover);
    currentMap.on('mousemove', 'disputed-territories', handleDisputedHover);
    currentMap.on('mouseleave', 'country-fills', handleMouseLeave);
    currentMap.on('mouseleave', 'disputed-territories', handleMouseLeave);

    currentMap.on('error', (e) => {
      console.error('Mapbox error:', e);
      setError('There was an error loading the map. Please try refreshing the page.');
      toast({
        title: "Map Error",
        description: "There was an error loading the map. Please try refreshing the page.",
        variant: "destructive",
      });
    });

    // Cleanup function
    return () => {
      if (!currentMap.isStyleLoaded()) return;
      
      currentMap.off('mousemove', 'country-fills', handleCountryHover);
      currentMap.off('mousemove', 'disputed-territories', handleDisputedHover);
      currentMap.off('mouseleave', 'country-fills', handleMouseLeave);
      currentMap.off('mouseleave', 'disputed-territories', handleMouseLeave);
      
      if (popup.current) {
        popup.current.remove();
      }
    };
  }, [mapboxToken, showAlliances, showDisputed, selectedAlliance]);

  return (
    <div className="space-y-4">
      <MapControls
        showAlliances={showAlliances}
        setShowAlliances={setShowAlliances}
        showDisputed={showDisputed}
        setShowDisputed={setShowDisputed}
      />

      <div className="relative w-full h-[calc(100vh-12rem)]">
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {!mapboxToken && <MapTokenInput onTokenSet={setMapboxToken} />}
        <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default WorldMap;