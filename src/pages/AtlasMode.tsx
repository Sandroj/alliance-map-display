import { Link, NavLink, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, Gauge, Layers3, Play, Sparkles } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import {
  ANALYSIS_RAIL,
  ATLAS_MODE_NAV,
  AtlasModeId,
  COUNTRY_POWER_ROWS,
  MODE_COPY,
  SCENARIO_PRESETS,
} from "@/data/atlas-modes";
import { countries } from "@/data/countries";

const toneClasses = {
  blue: "border-blue-200 bg-blue-50/72 text-blue-700",
  rose: "border-rose-200 bg-rose-50/72 text-rose-700",
  amber: "border-amber-200 bg-amber-50/72 text-amber-700",
  emerald: "border-emerald-200 bg-emerald-50/72 text-emerald-700",
};

const isMode = (value: string | undefined): value is AtlasModeId =>
  value === "diplomacy" || value === "conflict" || value === "war" || value === "countries";

const Meter = ({ value, tone = "bg-gray-950" }: { value: number; tone?: string }) => (
  <div className="h-2 overflow-hidden rounded-full bg-gray-950/8">
    <div className={`h-full rounded-full ${tone}`} style={{ width: `${Math.max(4, Math.min(100, value))}%` }} />
  </div>
);

const ScenarioCard = ({ scenario, intense = false }: { scenario: (typeof SCENARIO_PRESETS)[number]; intense?: boolean }) => (
  <article className="rounded-xl border border-white/70 bg-white/72 p-3 shadow-sm backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:shadow-md">
    <div className="flex items-start gap-3">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gray-950 text-white">
        <Play className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-sm font-bold text-gray-950">{scenario.title}</h3>
          <span className="rounded bg-gray-950/5 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-gray-500">
            {scenario.region}
          </span>
        </div>
        <p className="mt-1 text-xs leading-relaxed text-gray-600">{scenario.insight}</p>
      </div>
    </div>

    <div className="mt-3 grid gap-2 sm:grid-cols-2">
      <div className="rounded-lg border border-blue-100 bg-blue-50/70 p-2">
        <div className="text-[10px] font-bold uppercase text-blue-700">Blue side</div>
        <div className="mt-1 flex flex-wrap gap-1">
          {scenario.blue.map((country) => (
            <span key={country} className="rounded bg-white/80 px-1.5 py-0.5 text-[10px] font-semibold text-blue-900">
              {country}
            </span>
          ))}
        </div>
      </div>
      <div className="rounded-lg border border-rose-100 bg-rose-50/70 p-2">
        <div className="text-[10px] font-bold uppercase text-rose-700">Red side</div>
        <div className="mt-1 flex flex-wrap gap-1">
          {scenario.red.map((country) => (
            <span key={country} className="rounded bg-white/80 px-1.5 py-0.5 text-[10px] font-semibold text-rose-900">
              {country}
            </span>
          ))}
        </div>
      </div>
    </div>

    {scenario.green && (
      <div className="mt-2 rounded-lg border border-emerald-100 bg-emerald-50/70 p-2">
        <div className="text-[10px] font-bold uppercase text-emerald-700">Third pull</div>
        <div className="mt-1 flex flex-wrap gap-1">
          {scenario.green.map((country) => (
            <span key={country} className="rounded bg-white/80 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-900">
              {country}
            </span>
          ))}
        </div>
      </div>
    )}

    <div className="mt-3 space-y-2">
      <div className="flex items-center justify-between text-[11px] font-semibold text-gray-600">
        <span>{intense ? "Escalation pressure" : "Alignment pressure"}</span>
        <span>{scenario.pressure}</span>
      </div>
      <Meter value={scenario.pressure} tone={intense ? "bg-amber-500" : "bg-rose-500"} />
      {scenario.nuclearRisk != null && (
        <>
          <div className="flex items-center justify-between text-[11px] font-semibold text-gray-600">
            <span>Nuclear proximity</span>
            <span>{scenario.nuclearRisk}</span>
          </div>
          <Meter value={scenario.nuclearRisk} tone="bg-gray-950" />
        </>
      )}
    </div>

    <div className="mt-3 flex items-center justify-between gap-2 rounded-lg bg-gray-950/5 px-2 py-1.5">
      <span className="text-[11px] font-semibold text-gray-500">Best lens</span>
      <span className="text-[11px] font-bold text-gray-950">{scenario.recommendedLens}</span>
    </div>
  </article>
);

const CountriesBoard = () => (
  <div className="overflow-hidden rounded-xl border border-white/70 bg-white/72 shadow-sm backdrop-blur-xl">
    <div className="grid grid-cols-[2.2rem_minmax(8rem,1fr)_3rem_1fr] gap-2 border-b border-gray-200/80 px-3 py-2 text-[10px] font-bold uppercase text-gray-500">
      <span>#</span>
      <span>Country</span>
      <span>Score</span>
      <span>Power shape</span>
    </div>
    {COUNTRY_POWER_ROWS.map((row, index) => {
      const flag = countries[row.code]?.flag ?? "";
      return (
        <div key={row.code} className="grid grid-cols-[2.2rem_minmax(8rem,1fr)_3rem_1fr] gap-2 border-b border-gray-100 px-3 py-2 last:border-b-0">
          <span className="font-mono text-xs font-semibold text-gray-400">{index + 1}</span>
          <span className="text-sm font-bold text-gray-950">
            {flag} {row.name}
          </span>
          <span className="font-mono text-xs font-bold text-gray-700">{row.overall}</span>
          <div className="grid grid-cols-4 gap-1">
            <Meter value={row.military} tone="bg-rose-500" />
            <Meter value={row.economic} tone="bg-amber-500" />
            <Meter value={row.diplomatic} tone="bg-blue-500" />
            <Meter value={row.technology} tone="bg-emerald-500" />
          </div>
        </div>
      );
    })}
  </div>
);

const AtlasMode = () => {
  const { mode } = useParams();
  if (!isMode(mode)) return <Navigate to="/diplomacy" replace />;

  const copy = MODE_COPY[mode];
  const ActiveIcon = copy.icon;
  const activeNav = ATLAS_MODE_NAV.find((item) => item.id === mode) ?? ATLAS_MODE_NAV[0];
  const featuredScenarios =
    mode === "war"
      ? SCENARIO_PRESETS.filter((scenario) => scenario.nuclearRisk && scenario.nuclearRisk > 50)
      : mode === "conflict"
        ? SCENARIO_PRESETS
        : SCENARIO_PRESETS.slice(0, 4);

  return (
    <div className="min-h-screen p-4">
      <AnimatedBackground />
      <div className="mx-auto flex max-w-[96rem] flex-col gap-3">
        <header className="sticky top-4 z-30 flex flex-wrap items-center gap-3 rounded-xl border border-white/70 bg-white/72 px-4 py-3 shadow-sm backdrop-blur-xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-bold text-gray-600 transition-colors hover:bg-gray-950/5 hover:text-gray-950"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Atlas
          </Link>
          <nav className="flex flex-wrap gap-1.5" aria-label="Atlas modes">
            {ATLAS_MODE_NAV.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-bold transition-colors ${
                      isActive ? toneClasses[item.tone as keyof typeof toneClasses] : "border-transparent text-gray-500 hover:bg-gray-950/5 hover:text-gray-950"
                    }`
                  }
                >
                  <Icon className="h-3.5 w-3.5" />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
          <span className="ml-auto rounded bg-gray-950 px-2 py-1 text-[10px] font-bold uppercase text-white">
            Fast mode
          </span>
        </header>

        <main className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <section className="rounded-xl border border-white/70 bg-white/68 p-4 shadow-sm backdrop-blur-xl">
            <div className="flex flex-wrap items-start gap-4">
              <div className={`grid h-12 w-12 place-items-center rounded-xl border ${toneClasses[activeNav.tone as keyof typeof toneClasses]}`}>
                <ActiveIcon className="h-5 w-5" />
              </div>
              <div className="max-w-3xl">
                <div className="text-[11px] font-bold uppercase tracking-wide text-gray-500">{copy.eyebrow}</div>
                <h1 className="font-heading text-3xl font-bold text-gray-950 sm:text-4xl">{copy.title}</h1>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">{copy.deck}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {copy.verbs.map((verb) => (
                    <span key={verb} className="rounded-full bg-gray-950/5 px-2.5 py-1 text-[11px] font-bold text-gray-600">
                      {verb}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {mode === "countries" ? (
              <div className="mt-4">
                <CountriesBoard />
              </div>
            ) : (
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {featuredScenarios.map((scenario) => (
                  <ScenarioCard key={scenario.id} scenario={scenario} intense={mode === "war"} />
                ))}
              </div>
            )}
          </section>

          <aside className="flex flex-col gap-3">
            <section className="rounded-xl border border-white/70 bg-gray-950 p-4 text-white shadow-sm">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-300" />
                <h2 className="text-sm font-bold">Why this matters</h2>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                This turns the atlas from a layer library into a decision surface. The user starts with a
                real question, then the site suggests which lens, route or dispute explains the pattern.
              </p>
            </section>

            {ANALYSIS_RAIL.map(({ title, body, icon: Icon }) => (
              <section key={title} className="rounded-xl border border-white/70 bg-white/70 p-3 shadow-sm backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-gray-950/5 text-gray-800">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="text-sm font-bold text-gray-950">{title}</h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-gray-600">{body}</p>
              </section>
            ))}

            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/70 bg-white/78 px-3 py-2 text-sm font-bold text-gray-800 shadow-sm backdrop-blur-xl transition-colors hover:bg-white"
            >
              <Layers3 className="h-4 w-4" />
              Open layer map
            </Link>
          </aside>
        </main>

        <p className="max-w-3xl text-xs leading-relaxed text-gray-500">
          Inspired by MapDis-style interaction patterns: diplomacy as a country perspective, conflict as
          a side-builder, war as escalation, and countries as a rankable strategic board. Current values
          are editorial scaffolding, not automated pairwise predictions.
        </p>
      </div>
    </div>
  );
};

export default AtlasMode;
