export const AboutContent = () => (
  <div className="space-y-3">
    <p>
      World Alliances is an interactive map of geopolitical treaties, alliances and
      international organizations — military, trade, political and religious.
    </p>
    <p>
      Select organizations to highlight their members on the map. Countries that belong
      to several selected organizations get a striped pattern. Click any country for its
      full list of memberships, and use the ⓘ on an organization for background information.
    </p>
  </div>
);

export const LegendContent = () => (
  <div className="space-y-3">
    <p><span className="font-semibold">Solid color</span> — full member of the selected organization.</p>
    <p><span className="font-semibold">Faded color</span> — observer, dialogue partner or partner country.</p>
    <p><span className="font-semibold">Striped</span> — belongs to two or more of the selected organizations.</p>
    <p><span className="font-semibold">⚔️ 💰 🏛️ ☪️</span> — category icons: military, trade, political, religious. Organizations can belong to more than one category.</p>
    <p><span className="font-semibold">ⓘ</span> — opens the organization profile with background information.</p>
  </div>
);

export const SourcesContent = () => (
  <div className="space-y-3">
    <p>
      Membership data is manually curated from the official websites of the organizations,
      researched in 2026. Background texts in the organization profiles come from Wikipedia
      (CC BY-SA) via its public API.
    </p>
    <p>
      Map data © Mapbox © OpenStreetMap. Country boundaries follow a single consistent
      worldview; disputed territories may be shown differently than in your country.
    </p>
  </div>
);
