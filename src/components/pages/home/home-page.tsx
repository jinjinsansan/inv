'use client';

import Image from 'next/image';
import { useLanguage } from '@/providers/language-provider';

export function HomePage() {
  const { dictionary } = useLanguage();
  const { hero, heroCards, features, automationModes, timeline, cta } =
    dictionary;

  return (
    <div className="space-y-24 pb-24 pt-0 md:space-y-32">
      <section className="relative isolate -mt-12 overflow-hidden bg-black text-white">
        <HeroBackground />

        <div className="relative z-20 mx-auto flex min-h-[820px] w/full max-w-4xl flex-col items-center justify-center gap-8 px-4 py-[14rem] text-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70">
            {hero.badge}
          </span>
          <h1 className="text-3xl font-semibold tracking-[-0.01em] text-white md:text-6xl">
            {hero.title}
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            {hero.subtitle}
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <StoreButton platform="ios" />
            <StoreButton platform="android" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 text-xs uppercase tracking-[0.3em] text-white/40">
            <span>{hero.trustedBy}</span>
            <div className="flex flex-wrap items-center justify-center gap-4 text-white">
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
      </section>
      <section className="relative isolate mx-auto w-full max-w-6xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-6 text-left">
            <span className="text-xs uppercase tracking-[0.35em] text-white/40">
              D-invesment Intelligence
            </span>
            <h2 className="text-2xl font-semibold text-white md:text-4xl">
              {heroCards.scheduleTitle}
            </h2>
            <p className="max-w-xl text-sm text-white/60 md:text-base">
              {heroCards.scheduleBody}
            </p>
            <div className="space-y-4">
              {[heroCards.riskModesTitle, heroCards.complianceTitle].map(
                (title) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur"
                  >
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-sm font-semibold text-white/70">
                      •
                    </span>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-white">
                        {title}
                      </p>
                      <p className="text-xs text-white/60">
                        {title === heroCards.riskModesTitle
                          ? heroCards.riskModesBody
                          : heroCards.complianceBody}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-2 backdrop-blur">
              <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                <Image
                  src="/btcusd.jpeg"
                  alt="BTCUSD automated trading"
                  width={640}
                  height={960}
                  className="h-auto w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
              </div>
              <div className="absolute left-6 bottom-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70 backdrop-blur">
                Live Feed
              </div>
            </div>
          </div>
        </div>
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

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      >
        <source src="/USDチャート.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/85" />
    </div>
  );
}

type StoreButtonProps = {
  platform: 'ios' | 'android';
};

function StoreButton({ platform }: StoreButtonProps) {
  const content =
    platform === 'ios'
      ? {
          label: '始める',
          prefix: '',
          icon: '▶',
        }
      : {
          label: 'ログイン',
          prefix: '',
          icon: '→',
        };

  return (
    <button className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm">
        {content.icon}
      </span>
      <span>{content.label}</span>
    </button>
  );
}
