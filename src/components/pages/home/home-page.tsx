'use client';

import { cn } from '@/lib/utils';
import { useLanguage } from '@/providers/language-provider';

export function HomePage() {
  const { dictionary } = useLanguage();
  const { hero, heroCards, features, automationModes, timeline, cta } =
    dictionary;

  return (
    <div className="space-y-24 pb-24 pt-12 md:space-y-32 md:pt-20">
      <section className="mx-auto grid w-full max-w-6xl gap-12 px-4 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-16">
        <div className="space-y-8">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            {hero.badge}
          </span>
          <h1 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
            {hero.title}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
            {hero.subtitle}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:shadow-xl hover:shadow-cyan-500/30">
              {hero.ctaPrimary}
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/60 hover:text-white">
              {hero.ctaSecondary}
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.3em] text-white/40">
            <span>{hero.trustedBy}</span>
            <div className="flex items-center gap-3 text-white">
              {Object.entries(hero.metrics).map(([key, label]) => (
                <div key={key} className="flex items-center gap-2">
                  <span className="text-lg font-semibold">
                    {hero.metricValues[key as keyof typeof hero.metricValues]}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">
          <div className="absolute inset-0 -z-10 animate-pulse rounded-[3rem] bg-gradient-to-br from-cyan-500/30 via-sky-500/20 to-indigo-500/30 blur-3xl" />
          <PhoneMockup />
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 md:grid-cols-3">
        {(
          [
            {
              title: heroCards.scheduleTitle,
              body: heroCards.scheduleBody,
            },
            {
              title: heroCards.riskModesTitle,
              body: heroCards.riskModesBody,
            },
            {
              title: heroCards.complianceTitle,
              body: heroCards.complianceBody,
            },
          ] as const
        ).map((card) => (
          <article
            key={card.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-cyan-300/40 hover:bg-white/10"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-400/0 via-white/0 to-indigo-500/0 transition duration-500 group-hover:from-cyan-500/20 group-hover:via-white/10 group-hover:to-indigo-500/30" />
            <h3 className="mb-3 text-lg font-semibold text-white">
              {card.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              {card.body}
            </p>
          </article>
        ))}
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-start">
        <div className="max-w-xl space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Nansen-inspired UX
          </p>
          <h2 className="text-2xl font-semibold text-white md:text-4xl">
            {features.title}
          </h2>
          <p className="text-base text-slate-300 md:text-lg">
            {features.subtitle}
          </p>
        </div>
        <div className="grid flex-1 gap-6 md:grid-cols-3">
          {features.items.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-6 backdrop-blur transition hover:border-cyan-300/40"
            >
              <div className="absolute inset-x-4 top-4 h-0.5 bg-gradient-to-r from-cyan-400/60 to-indigo-400/60" />
              <h3 className="mt-6 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-8 px-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white md:text-4xl">
              {automationModes.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              {automationModes.description}
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {automationModes.modes.map((mode) => (
            <article
              key={mode.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-cyan-300/40 hover:bg-white/10"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {mode.name}
                </h3>
                <span className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cyan-200">
                  {mode.tagline}
                </span>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                {mode.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-400" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-10 px-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-white md:text-4xl">
            {timeline.title}
          </h2>
        </div>
        <div className="relative grid gap-6 md:grid-cols-3">
          {timeline.steps.map((step, index) => (
            <article
              key={step.title}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-white/10 p-6 backdrop-blur"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/0 via-white/0 to-indigo-500/0 transition duration-700 hover:from-cyan-500/15 hover:via-white/10 hover:to-indigo-500/25" />
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-base font-semibold text-cyan-200">
                {index + 1}
              </span>
              <h3 className="mt-6 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-sky-500/10 to-indigo-500/20 px-6 py-12 text-center backdrop-blur md:px-16">
        <h2 className="text-2xl font-semibold text-white md:text-4xl">
          {cta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-100/80 md:text-base">
          {cta.subtitle}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100">
            {cta.primary}
          </button>
          <button className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white/70 hover:text-white">
            {cta.secondary}
          </button>
        </div>
      </section>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative h-[520px] w-[260px] rounded-[3rem] border border-white/20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 p-4 shadow-2xl shadow-cyan-500/20">
      <div className="absolute inset-x-1 top-2 mx-auto h-1.5 w-24 rounded-full bg-white/10" />
      <div className="absolute inset-y-8 inset-x-2 rounded-[2.4rem] border border-white/10 bg-slate-900/80 p-3">
        <div className="flex flex-col gap-3 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-950/90 p-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/40">
              Portfolio
            </p>
            <p className="mt-1 text-2xl font-semibold text-white">
              ¥2,540,000
            </p>
            <p className="text-xs text-emerald-300">+12.4% 今日</p>
          </div>
          <div className="rounded-2xl bg-black/40 p-4">
            <Curve />
          </div>
          <div className="grid grid-cols-3 gap-3 text-[11px] text-white/70">
            {[
              { label: '安定', value: '45%' },
              { label: 'ミドル', value: '35%' },
              { label: 'アクティブ', value: '20%' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/5 bg-white/5 p-3 text-center"
              >
                <span className="block text-[10px] text-white/50">
                  {item.label}
                </span>
                <span className="text-sm font-semibold text-white">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/20 to-indigo-500/10 p-3">
            <p className="text-[11px] text-white/70">次の取引まで</p>
            <p className="text-sm font-semibold text-white">00:02:34</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Curve() {
  return (
    <svg
      viewBox="0 0 200 120"
      className="h-24 w-full"
      fill="none"
      strokeWidth="2"
    >
      <defs>
        <linearGradient id="curveGradient" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="rgba(34, 211, 238, 0.8)" />
          <stop offset="100%" stopColor="rgba(129, 140, 248, 0.8)" />
        </linearGradient>
      </defs>
      <path
        d="M4 96 C 32 62, 68 110, 96 74 C 128 38, 156 110, 196 48"
        stroke="url(#curveGradient)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 96 L 196 48"
        stroke="rgba(148, 163, 184, 0.2)"
        strokeDasharray="4 6"
      />
      <circle cx="196" cy="48" r="5" fill="rgba(129, 140, 248, 0.9)" />
      <circle cx="96" cy="74" r="5" fill="rgba(34, 211, 238, 0.9)" />
    </svg>
  );
}
