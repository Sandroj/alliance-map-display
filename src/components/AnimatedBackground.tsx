const AnimatedBackground = () => (
  <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="atlas-base" />
    <div className="atlas-grid" />
    <div className="atlas-band atlas-band-1" />
    <div className="atlas-band atlas-band-2" />
  </div>
);

export default AnimatedBackground;
