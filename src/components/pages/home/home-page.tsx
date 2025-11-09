'use client';

import { useLanguage } from '@/providers/language-provider';

export function HomePage() {
  const { dictionary } = useLanguage();
  const { hero, heroCards, features, automationModes, timeline, cta } =
    dictionary;

  return (
    <div className="space-y-24 pb-24 pt-12 md:space-y-32 md:pt-20">
      <section className="relative overflow-hidden bg-[#050708] text-white">
        <HeroBackground />
        <HeroPhone />

        <div className="relative z-20 mx-auto flex min-h-[640px] w-full max-w-4xl flex-col items-center justify-center gap-8 px-4 py-24 text-center">
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

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(18,24,28,0.85),rgba(5,7,8,0.95))]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,13,16,0.9)_0%,rgba(5,7,8,0.95)_45%,rgba(5,7,8,1)_100%)]" />
      <div className="animate-blob absolute left-[-18%] top-[-8%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(74,222,128,0.18),transparent_65%)] blur-3xl" />
      <div className="animate-blob-delay absolute right-[-10%] top-[12%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.24),transparent_60%)] blur-3xl" />
      <div className="animate-float absolute left-1/2 top-[18%] h-[540px] w-[540px] -translate-x-1/2 rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(12,18,22,0.8),transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-[radial-gradient(circle_at_bottom,rgba(12,17,20,0.65),transparent_70%)]" />
    </div>
  );
}

function HeroPhone() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-16 z-10 w-[360px] -translate-x-1/2 sm:w-[420px]">
      <div className="relative">
        <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.25),transparent_60%)] blur-[120px]" />
        <div className="relative mx-auto aspect-[9/19] w-full overflow-hidden rounded-[3.2rem] border border-white/10 bg-gradient-to-b from-[#121619] via-[#050708] to-[#101417] shadow-[0_80px_180px_-60px_rgba(20,110,255,0.55)]">
          <div className="absolute inset-x-16 top-6 h-2 rounded-full bg-white/10" />
          <div className="flex h-full flex-col justify-end rounded-[3.1rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_65%)] px-8 pb-10 pt-24 text-left">
            <div className="space-y-2 text-white/80">
              <p className="text-sm font-semibold tracking-[0.08em] text-white/70">GM!</p>
              <p className="text-[13px] text-white/60">You are up +$2.19M today.</p>
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-white">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>Balance</span>
                <span>$9.03M</span>
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] text-emerald-300">
                <span>+2.19M</span>
                <span className="text-sky-300">+31.97%</span>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/50 p-4 text-[11px] text-white/60">
              <p>Ask D-invesment</p>
              <div className="mt-2 flex items-center justify-between text-[10px] text-white/40">
                <span>モード: Fast</span>
                <span>AI Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
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
          label: 'App Store',
          prefix: 'Download on the',
          icon: '',
        }
      : {
          label: 'Google Play',
          prefix: 'Get it on',
          icon: '▶',
        };

  return (
    <button className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-left text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg">
        {content.icon}
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[11px] uppercase tracking-[0.25em] text-white/50">
          {content.prefix}
        </span>
        <span className="text-sm font-semibold">{content.label}</span>
      </span>
    </button>
  );
}
