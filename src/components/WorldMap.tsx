import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Alliance } from '@/data/alliances';
import MapTokenInput from './MapTokenInput';
import { initializeMap, setupCountriesLayer, updateAllianceHighlight } from '@/utils/mapUtils';
import { Alert, AlertDescription } from './ui/alert';
import { useToast } from './ui/use-toast';
import MapControls from './MapControls';
import AllianceButtons from './AllianceButtons';
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

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      map.current = initializeMap(mapContainer.current, mapboxToken);
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      map.current.on('load', () => {
        if (!map.current) return;
        setupCountriesLayer(map.current, selectedAlliance);

        // Add disputed territories layers
        if (showDisputed) {
          // Add disputed territories style
          map.current.setPaintProperty('disputed_territory', 'fill-color', '#FF0000');
          map.current.setPaintProperty('disputed_territory', 'fill-opacity', 0.3);
          map.current.setLayoutProperty('disputed_territory', 'visibility', 'visible');
          
          // Add disputed boundaries style
          map.current.setPaintProperty('disputed_border', 'line-color', '#FF0000');
          map.current.setPaintProperty('disputed_border', 'line-width', 2);
          map.current.setPaintProperty('disputed_border', 'line-dasharray', [2, 2]);
          map.current.setLayoutProperty('disputed_border', 'visibility', 'visible');
        } else {
          map.current.setLayoutProperty('disputed_territory', 'visibility', 'none');
          map.current.setLayoutProperty('disputed_border', 'visibility', 'none');
        }

        // Handle country hover events
        map.current.on('mousemove', 'country-fills', (e) => {
          if (e.features && e.features[0]?.properties) {
            const countryCode = e.features[0].properties.iso_3166_1_alpha_3;
            const countryName = e.features[0].properties.name_en;
            
            if (map.current) {
              const canvas = map.current.getCanvas();
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
                  .addTo(map.current);
              }
            }
          }
        });

        // Handle disputed territory hover events
        if (showDisputed) {
          map.current.on('mousemove', 'disputed_territory', (e) => {
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
                .addTo(map.current);
            }
          });
        }

        // Handle mouse leave events
        map.current.on('mouseleave', 'country-fills', () => {
          if (map.current) {
            const canvas = map.current.getCanvas();
            canvas.style.cursor = '';
            if (popup.current) {
              popup.current.remove();
            }
          }
        });

        if (showDisputed) {
          map.current.on('mouseleave', 'disputed_territory', () => {
            if (popup.current) {
              popup.current.remove();
            }
          });
        }
      });

      map.current.on('error', (e) => {
        console.error('Mapbox error:', e);
        setError('There was an error loading the map. Please try refreshing the page.');
        toast({
          title: "Map Error",
          description: "There was an error loading the map. Please try refreshing the page.",
          variant: "destructive",
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
  }, [mapboxToken, showAlliances, showDisputed]);

  useEffect(() => {
    if (!map.current || !map.current.isStyleLoaded()) return;
    updateAllianceHighlight(map.current, selectedAlliance);
  }, [selectedAlliance]);

  return (
    <div className="space-y-4">
      <AllianceButtons
        alliances={alliances}
        selectedAlliance={selectedAlliance}
        onSelect={(alliance) => {
          if (map.current) {
            updateAllianceHighlight(map.current, alliance);
          }
        }}
      />
      
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