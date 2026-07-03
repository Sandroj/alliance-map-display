import React, { useEffect } from 'react';

interface InfoOverlayProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const InfoOverlay: React.FC<InfoOverlayProps> = ({ title, onClose, children }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/25 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="w-full max-w-md max-h-[70vh] flex flex-col bg-white/80 backdrop-blur-xl border border-white/70 shadow-xl rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200/70">
          <h2 className="font-heading font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-gray-400 hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-gray-400 rounded px-1 transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="px-5 py-4 overflow-y-auto text-sm text-gray-700 leading-relaxed">{children}</div>
      </div>
    </div>
  );
};

export default InfoOverlay;
