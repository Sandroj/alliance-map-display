import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Alliance } from '@/data/alliances';
import MapTokenInput from './MapTokenInput';
import { initializeMap, setupCountriesLayer, updateAllianceHighlight, findCountryAlliances } from '@/utils/mapUtils';
import { Alert, AlertDescription } from './ui/alert';
import { useToast } from './ui/use-toast';
import { Checkbox } from './ui/checkbox';
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

        if (showDisputed) {
          map.current.setLayoutProperty('admin-1-boundary-disputed', 'visibility', 'visible');
          map.current.setLayoutProperty('admin-0-boundary-disputed', 'visibility', 'visible');
        }

        // Add hover effect
        map.current.on('mousemove', 'country-fills', (e) => {
          if (e.features && e.features[0]?.properties) {
            const countryCode = e.features[0].properties.iso_3166_1_alpha_3;
            const countryName = e.features[0].properties.name_en;
            
            if (map.current) {
              const canvas = map.current.getCanvas();
              canvas.style.cursor = 'pointer';

              if (showAlliances) {
                const countryAlliances = findCountryAlliances(countryCode, alliances);
                
                if (countryAlliances.length > 0) {
                  if (!popup.current) {
                    popup.current = new mapboxgl.Popup({
                      closeButton: false,
                      className: 'bg-white rounded-md shadow-lg p-2'
                    });
                  }

                  const alliancesList = countryAlliances
                    .map(alliance => `${alliance.name} (joined ${alliance.joinYear})`)
                    .join('<br>');

                  popup.current
                    .setLngLat(e.lngLat)
                    .setHTML(`
                      <div class="font-semibold">${countryName}</div>
                      <div class="text-sm text-gray-600">Member of:</div>
                      <div class="text-sm">${alliancesList}</div>
                    `)
                    .addTo(map.current);
                }
              }
            }
          }
        });

        // Add hover effect for disputed territories
        if (showDisputed) {
          map.current.on('mousemove', 'admin-0-boundary-disputed', (e) => {
            if (e.features && e.features[0]) {
              const disputeInfo = getDisputeInfo(e.features[0].properties);
              
              if (!popup.current) {
                popup.current = new mapboxgl.Popup({
                  closeButton: false,
                  className: 'bg-white rounded-md shadow-lg p-2'
                });
              }

              popup.current
                .setLngLat(e.lngLat)
                .setHTML(`
                  <div class="font-semibold">Disputed Territory</div>
                  <div class="text-sm">${disputeInfo}</div>
                `)
                .addTo(map.current);
            }
          });
        }

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
          map.current.on('mouseleave', 'admin-0-boundary-disputed', () => {
            if (popup.current) {
              popup.current.remove();
            }
          });
        }
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

  const getDisputeInfo = (properties: any) => {
    // This is a simplified version. In a real application, you would want to maintain
    // a comprehensive database of disputed territories and their details
    const disputeInfo: { [key: string]: string } = {
      'Kashmir': 'Disputed between India, Pakistan, and China since 1947',
      'Crimea': 'Annexed by Russia from Ukraine in 2014, internationally disputed',
      'West Bank': 'Disputed between Israel and Palestinian territories',
      'South China Sea': 'Multiple territorial disputes involving China, Vietnam, Philippines, and others',
      'Kuril Islands': 'Disputed between Japan and Russia since World War II'
    };

    // You would need to match the properties from the Mapbox data
    // to your dispute database. This is a simplified example:
    return disputeInfo[properties.name] || 'Territory under dispute';
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="show-alliances"
            checked={showAlliances}
            onCheckedChange={(checked) => setShowAlliances(checked as boolean)}
          />
          <label
            htmlFor="show-alliances"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Show country alliance memberships on hover
          </label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox
            id="show-disputed"
            checked={showDisputed}
            onCheckedChange={(checked) => setShowDisputed(checked as boolean)}
          />
          <label
            htmlFor="show-disputed"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Show disputed territories
          </label>
        </div>
      </div>

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