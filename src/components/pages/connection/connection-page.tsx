'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/providers/language-provider';

type ModeKey = 'stable' | 'middle' | 'active';

export function ConnectionPage() {
  const { dictionary } = useLanguage();
  const { connectionPage, common, hero } = dictionary;
  const [connected, setConnected] = useState(true);
  const [mode, setMode] = useState<ModeKey>('stable');
  const [toggles, setToggles] = useState({
    autoRestart: true,
    newsFilter: false,
    syncBalance: true,
  });

  const modeDefinitions: Array<{ key: ModeKey; label: string }> = [
    { key: 'stable', label: connectionPage.stability },
    { key: 'middle', label: connectionPage.middle },
    { key: 'active', label: connectionPage.active },
  ];

  const handleToggle = (key: keyof typeof toggles) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-white">{connectionPage.title}</h1>
        <p className="text-sm text-white/70">{connectionPage.subtitle}</p>
      </section>

      <section className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <header className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                {connectionPage.connectionStatus}
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                {connected ? common.status.online : common.status.offline}
              </p>
              <p className="text-xs text-white/60">1540bo.org · ID 1540-93284</p>
            </div>
            <div className="flex gap-3 text-xs">
              <button
                type="button"
                onClick={() => setConnected(true)}
                className={cn(
                  'rounded-full px-5 py-2 font-semibold transition',
                  connected
                    ? 'bg-emerald-400 text-slate-900'
                    : 'border border-white/20 text-white/70 hover:text-white',
                )}
              >
                {connectionPage.actions.connect}
              </button>
              <button
                type="button"
                onClick={() => setConnected(false)}
                className={cn(
                  'rounded-full px-5 py-2 font-semibold transition',
                  !connected
                    ? 'bg-white/20 text-white'
                    : 'border border-white/20 text-white/70 hover:text-white',
                )}
              >
                {connectionPage.actions.disconnect}
              </button>
            </div>
          </header>

          <div className="mt-6 space-y-6 text-sm text-white/80">
            <div className="grid gap-3 md:grid-cols-2">
              <Field label={connectionPage.apiKey} value="sk_live_1540_****" />
              <Field label="Webhook" value="https://d-investment.app/api/hooks" />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {Object.entries(toggles).map(([key, value]) => (
                <Toggle
                  key={key}
                  label={connectionPage.toggles[key as keyof typeof toggles]}
                  enabled={value}
                  onToggle={() => handleToggle(key as keyof typeof toggles)}
                />
              ))}
            </div>
          </div>
        </article>

        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold text-white">{connectionPage.schedule}</h2>
          <div className="mt-4 space-y-4 text-sm text-white/80">
            <div className="flex gap-3">
              <select className="flex-1 rounded-2xl border border-white/15 bg-black/30 px-4 py-3">
                <option>{connectionPage.timezone} · Asia/Tokyo</option>
                <option>UTC</option>
                <option>America/New_York</option>
              </select>
              <select className="flex-1 rounded-2xl border border-white/15 bg-black/30 px-4 py-3">
                <option>{connectionPage.session}</option>
                <option>{connectionPage.scheduleOptions.tokyo}</option>
                <option>{connectionPage.scheduleOptions.london}</option>
                <option>{connectionPage.scheduleOptions.newyork}</option>
              </select>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <TimeBlock label="Start" value="09:00" />
              <TimeBlock label="End" value="21:00" />
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
                <span
                  key={day}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 font-semibold text-white"
                >
                  {day}
                </span>
              ))}
              {['Sat', 'Sun'].map((day) => (
                <span
                  key={day}
                  className="rounded-full border border-white/10 px-4 py-2 font-semibold text-white/40"
                >
                  {day}
                </span>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <h2 className="text-lg font-semibold text-white">
          {connectionPage.actions.save}
        </h2>
        <p className="mt-2 text-sm text-white/60">
          モードを切り替えるとAI戦略が即座に再構成されます。
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {modeDefinitions.map((definition) => (
            <ModeCard
              key={definition.key}
              selected={mode === definition.key}
              title={definition.label}
              onSelect={() => setMode(definition.key)}
            />
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 md:flex-row">
          <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow shadow-cyan-500/20 transition hover:shadow-lg hover:shadow-cyan-500/30">
            {connectionPage.actions.save}
          </button>
          <button className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/60 hover:text-white">
            {hero.ctaSecondary}
          </button>
        </div>
      </section>
    </div>
  );
}

type FieldProps = {
  label: string;
  value: string;
};

function Field({ label, value }: FieldProps) {
  return (
    <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white">
      <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
        {label}
      </span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

type ToggleProps = {
  label: string;
  enabled: boolean;
  onToggle: () => void;
};

function Toggle({ label, enabled, onToggle }: ToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        'flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-xs transition',
        enabled
          ? 'border-cyan-400/40 bg-cyan-500/10 text-cyan-100'
          : 'border-white/10 bg-black/20 text-white/60 hover:text-white',
      )}
    >
      <span className="max-w-[14rem] leading-relaxed">{label}</span>
      <span
        className={cn(
          'inline-flex h-6 w-12 items-center rounded-full border border-white/10 p-1 transition',
          enabled ? 'justify-end bg-white/70' : 'justify-start bg-white/10',
        )}
      >
        <span className="h-4 w-4 rounded-full bg-white" />
      </span>
    </button>
  );
}

type TimeBlockProps = {
  label: string;
  value: string;
};

function TimeBlock({ label, value }: TimeBlockProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/80">
      <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
        {label}
      </span>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-lg font-semibold text-white">{value}</span>
        <span className="text-xs text-white/50">JST</span>
      </div>
    </div>
  );
}

type ModeCardProps = {
  title: string;
  selected: boolean;
  onSelect: () => void;
};

function ModeCard({ title, selected, onSelect }: ModeCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        'flex h-full flex-col gap-3 rounded-3xl border p-5 text-left transition',
        selected
          ? 'border-cyan-400/60 bg-cyan-500/15 text-white'
          : 'border-white/10 bg-white/5 text-white/70 hover:border-cyan-300/40 hover:text-white',
      )}
    >
      <span className="text-sm font-semibold uppercase tracking-[0.2em]">
        {title}
      </span>
      <p className="text-xs text-white/60">
        {selected ? '現在選択中' : 'タップして選択'}
      </p>
    </button>
  );
}
