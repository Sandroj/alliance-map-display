export const AboutContent = () => (
  <div className="space-y-3">
    <p>
      Geopolitical Atlas maps the slow-moving structures behind world politics:
      alliances, security networks, trade blocs, resource leverage, influence systems,
      disputes and strategic routes.
    </p>
    <p>
      The target is not breaking news. The app should show the current strategic landscape
      at a months-to-years cadence, with explicit source dates and a clear distinction
      between binding treaties, informal initiatives and analytical resource layers.
    </p>
  </div>
);

export const LegendContent = () => (
  <div className="space-y-3">
    <p><span className="font-semibold">Solid color</span> — full member of the selected organization.</p>
    <p><span className="font-semibold">Faded color</span> — observer, dialogue partner or partner country.</p>
    <p><span className="font-semibold">Striped</span> — belongs to two or more of the selected organizations.</p>
    <p><span className="font-semibold">Lens status</span> — Live layers are fully usable now; Mapped layers reuse current organization data; Next layers are being prepared as separate resource, route or dispute overlays.</p>
    <p><span className="font-semibold">Organization profile</span> — opens background information and context for a selected layer.</p>
  </div>
);

export const SourcesContent = () => (
  <div className="space-y-3">
    <p>
      Membership data is manually curated from the official websites of the organizations,
      researched in 2026. New resource and route datasets will prefer primary and stable
      institutional sources such as USGS, IEA, SIPRI, WTO, UNCTAD, FAO and UN Comtrade.
    </p>
    <p>
      Map data © Mapbox © OpenStreetMap. Country boundaries follow a single consistent
      worldview; disputed territories may be shown differently than in your country.
    </p>
    <p>
      Background texts in organization profiles can use Wikipedia (CC BY-SA) via its public
      API, but membership and strategic datasets should not rely on Wikipedia as their only
      source.
    </p>
  </div>
);
