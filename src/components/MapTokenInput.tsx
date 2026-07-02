import React from 'react';
import { toast } from 'sonner';

interface MapTokenInputProps {
  onTokenSet: (token: string) => void;
}

const MapTokenInput: React.FC<MapTokenInputProps> = ({ onTokenSet }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-xl border border-gray-200 rounded-xl p-4 z-30">
      <p className="text-gray-600 mb-2">Voer je Mapbox-token in om de kaart te tonen:</p>
      <input
        type="text"
        className="px-4 py-2 border border-gray-300 bg-white text-gray-900 rounded-md w-96 max-w-full placeholder-gray-400"
        placeholder="Voer je Mapbox-token in"
        onChange={(e) => {
          onTokenSet(e.target.value);
          toast("Mapbox-token ingesteld");
        }}
      />
      <p className="text-sm text-gray-500 mt-2">
        Token ophalen op{" "}
        <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          mapbox.com
        </a>
      </p>
    </div>
  );
};

export default MapTokenInput;
