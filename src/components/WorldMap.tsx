import React, { useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Alliance } from '@/data/alliances';
import MapTokenInput from './MapTokenInput';
import { Alert, AlertDescription } from './ui/alert';
import MapControls from './MapControls';
import MapInitializer from './map/MapInitializer';
import MapLayers from './map/MapLayers';

interface WorldMapProps {
  selectedAlliance: Alliance | null;
}

const DEFAULT_MAPBOX_TOKEN = 'pk.eyJ1Ijoic2FuZHJvajg4IiwiYSI6ImNsaXhhbHdpYzA2ZHMzY285bGVnMmM2M28ifQ._Tg-8q66Ef4MRPvac9zUjA';

const WorldMap: React.FC<WorldMapProps> = ({ selectedAlliance }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [popup] = useState<mapboxgl.Popup>(() => new mapboxgl.Popup({
    closeButton: false,
    className: 'bg-white rounded-md shadow-lg p-2'
  }));
  const [mapboxToken, setMapboxToken] = useState<string>(DEFAULT_MAPBOX_TOKEN);
  const [error, setError] = useState<string | null>(null);
  const [showAlliances, setShowAlliances] = useState(false);
  const [showDisputed, setShowDisputed] = useState(false);

  const handleMapInit = (initializedMap: mapboxgl.Map) => {
    setMap(initializedMap);
  };

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
        
        <MapInitializer
          mapContainer={mapContainer}
          mapboxToken={mapboxToken}
          onMapInit={handleMapInit}
          selectedAlliance={selectedAlliance}
        />
        
        <MapLayers
          map={map}
          popup={popup}
          showAlliances={showAlliances}
          showDisputed={showDisputed}
        />
      </div>
    </div>
  );
};

export default WorldMap;