import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Alliance } from '@/data/alliances';
import MapTokenInput from './MapTokenInput';
import { initializeMap, setupCountriesLayer, updateAllianceHighlights } from '@/utils/mapUtils';
import { Alert, AlertDescription } from './ui/alert';
import { useToast } from './ui/use-toast';

interface WorldMapProps {
  selectedAlliances: Alliance[];
  onCountryClick: (code: string) => void;
}

const DEFAULT_MAPBOX_TOKEN = 'pk.eyJ1Ijoic2FuZHJvajg4IiwiYSI6ImNsaXhhbHdpYzA2ZHMzY285bGVnMmM2M28ifQ._Tg-8q66Ef4MRPvac9zUjA';

const WorldMap: React.FC<WorldMapProps> = ({ selectedAlliances, onCountryClick }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const hoveredCode = useRef<string | null>(null);
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
        setError('Something went wrong while loading the map. Please refresh the page.');
        toast({
          title: "Map error",
          description: "Something went wrong while loading the map. Please refresh the page.",
          variant: "destructive",
        });
      });

      map.current.on('load', () => {
        if (!map.current) return;
        setupCountriesLayer(map.current, selectedAlliances);

        map.current.on('mousemove', 'country-fills', (e) => {
          if (!map.current || !e.features?.[0]) return;
          const code = e.features[0].properties?.iso_3166_1_alpha_3;
          if (hoveredCode.current && hoveredCode.current !== code) {
            map.current.setFeatureState(
              { source: 'countries', sourceLayer: 'country_boundaries', id: hoveredCode.current },
              { hover: false }
            );
          }
          if (code) {
            map.current.setFeatureState(
              { source: 'countries', sourceLayer: 'country_boundaries', id: code },
              { hover: true }
            );
            hoveredCode.current = code;
            map.current.getCanvas().style.cursor = 'pointer';
          }
        });

        map.current.on('mouseleave', 'country-fills', () => {
          if (!map.current) return;
          if (hoveredCode.current) {
            map.current.setFeatureState(
              { source: 'countries', sourceLayer: 'country_boundaries', id: hoveredCode.current },
              { hover: false }
            );
          }
          hoveredCode.current = null;
          map.current.getCanvas().style.cursor = '';
        });

        map.current.on('click', 'country-fills', (e) => {
          const code = e.features?.[0]?.properties?.iso_3166_1_alpha_3;
          if (code) onCountryClick(code);
        });
      });
    } catch (err) {
      console.error('Error initializing map:', err);
      setError('Could not initialize the map. Please check your internet connection.');
      toast({
        title: "Map initialization failed",
        description: "Could not initialize the map. Please check your internet connection.",
        variant: "destructive",
      });
    }

    return () => {
      map.current?.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapboxToken]);

  useEffect(() => {
    if (!map.current || !map.current.isStyleLoaded()) return;
    updateAllianceHighlights(map.current, selectedAlliances);
  }, [selectedAlliances]);

  return (
    <div className="relative w-full h-[calc(100vh-9rem)]">
      {error && (
        <Alert variant="destructive" className="absolute top-4 left-4 right-4 z-20">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {!mapboxToken && <MapTokenInput onTokenSet={setMapboxToken} />}
      <div ref={mapContainer} className="absolute inset-0 rounded-xl overflow-hidden" />
      {selectedAlliances.length === 0 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 px-4 py-2 text-xs text-gray-600 bg-white/60 backdrop-blur-xl border border-white/70 rounded-full shadow-sm pointer-events-none">
          Choose a mapped layer to reveal country alignments
        </div>
      )}

      {selectedAlliances.length > 0 && (
        <div className="absolute bottom-4 left-4 p-3 text-xs text-gray-700 flex flex-col gap-1.5 z-10 bg-white/60 backdrop-blur-xl border border-white/70 shadow-sm rounded-xl">
          {selectedAlliances.map((a) => (
            <div key={a.id} className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: a.color }} />
              {a.name}
            </div>
          ))}
          {selectedAlliances.some((a) => a.members.some((m) => m.status)) && (
            <div className="flex items-center gap-2 opacity-70">
              <span className="w-2.5 h-2.5 rounded-sm bg-gray-400/50" />
              faded = observer / partner / suspended
            </div>
          )}
          {selectedAlliances.length > 1 && (
            <div className="flex items-center gap-2 opacity-70 pt-1.5 mt-1 border-t border-gray-200">
              <span
                className="w-2.5 h-2.5 rounded-sm"
                style={{
                  background: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6) 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)'
                }}
              />
              overlap between selected alliances
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WorldMap;
