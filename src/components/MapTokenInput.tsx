import React from 'react';
import { toast } from 'sonner';

interface MapTokenInputProps {
  onTokenSet: (token: string) => void;
}

const MapTokenInput: React.FC<MapTokenInputProps> = ({ onTokenSet }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/70 backdrop-blur-xl border border-white/60 rounded-xl p-4 z-30">
      <p className="text-gray-600 mb-2">Enter your Mapbox token to view the map:</p>
      <input
        type="text"
        className="px-4 py-2 border border-gray-300 bg-white text-gray-900 rounded-md w-96 max-w-full placeholder-gray-400"
        placeholder="Enter your Mapbox token"
        onChange={(e) => {
          onTokenSet(e.target.value);
          toast("Mapbox token set");
        }}
      />
      <p className="text-sm text-gray-500 mt-2">
        Get your token at{" "}
        <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          mapbox.com
        </a>
      </p>
    </div>
  );
};

export default MapTokenInput;
