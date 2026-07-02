import React from 'react';
import { toast } from 'sonner';

interface MapTokenInputProps {
  onTokenSet: (token: string) => void;
}

const MapTokenInput: React.FC<MapTokenInputProps> = ({ onTokenSet }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/5 backdrop-blur-xl rounded-xl p-4 z-30">
      <p className="text-white/70 mb-2">Voer je Mapbox-token in om de kaart te tonen:</p>
      <input
        type="text"
        className="px-4 py-2 border border-white/20 bg-white/5 text-white rounded-md w-96 max-w-full placeholder-white/40"
        placeholder="Voer je Mapbox-token in"
        onChange={(e) => {
          onTokenSet(e.target.value);
          toast("Mapbox-token ingesteld");
        }}
      />
      <p className="text-sm text-white/50 mt-2">
        Token ophalen op{" "}
        <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
          mapbox.com
        </a>
      </p>
    </div>
  );
};

export default MapTokenInput;
