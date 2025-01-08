import React from 'react';
import { toast } from 'sonner';

interface MapTokenInputProps {
  onTokenSet: (token: string) => void;
}

const MapTokenInput: React.FC<MapTokenInputProps> = ({ onTokenSet }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 rounded-lg p-4">
      <p className="text-gray-600 mb-2">Please enter your Mapbox token to view the map:</p>
      <input
        type="text"
        className="px-4 py-2 border rounded-md w-96 max-w-full"
        placeholder="Enter your Mapbox token"
        onChange={(e) => {
          onTokenSet(e.target.value);
          toast("Map token set successfully!");
        }}
      />
      <p className="text-sm text-gray-500 mt-2">
        Get your token at{" "}
        <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          mapbox.com
        </a>
      </p>
    </div>
  );
};

export default MapTokenInput;