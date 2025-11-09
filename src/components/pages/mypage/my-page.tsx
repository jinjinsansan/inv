'use client';

import { useLanguage } from '@/providers/language-provider';

const mockProfile = {
  registrationDate: '2024-11-21',
  email: 'user@example.com',
  billingStatus: 'Active',
  plan: 'Pro',
  lastLogin: '2025-11-08 22:15',
};

export function MyPage() {
  const { dictionary } = useLanguage();
  const { myPage } = dictionary;

  return (
    <div className="mx-auto w-full max-w-5xl space-y-10 px-4 py-12">
      <section className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-slate-900/60 to-indigo-500/20 p-8 backdrop-blur">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
              Account
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-white">
              {myPage.title}
            </h1>
          </div>
          <div className="flex flex-wrap gap-3 text-xs">
            <span className="rounded-full bg-white/10 px-4 py-2 text-cyan-200">
              ID: DV-2981
            </span>
            <span className="rounded-full bg-white/5 px-4 py-2 text-white/70">
              2FA Enabled
            </span>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <InfoCard label={myPage.registrationDate} value={mockProfile.registrationDate} />
          <InfoCard label={myPage.email} value={mockProfile.email} />
          <InfoCard label={myPage.billingStatus} value={mockProfile.billingStatus} />
          <InfoCard label={myPage.lastLogin} value={mockProfile.lastLogin} />
        </div>
        <div className="mt-8 flex flex-col gap-3 md:flex-row">
          <button className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
            {myPage.actions.managePlan}
          </button>
          <button className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/60 hover:text-white">
            {myPage.actions.updateEmail}
          </button>
          <button className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/50 hover:text-white">
            {myPage.actions.securitySettings}
          </button>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold text-white">
            {myPage.plan}
          </h2>
          <p className="mt-2 text-sm text-white/70">
            次回請求日: 2025-12-01
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {Object.entries(myPage.planOptions).map(([key, label]) => (
              <button
                key={key}
                className="group rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:border-cyan-300/40 hover:bg-cyan-500/10"
              >
                <span className="block text-xs uppercase tracking-[0.25em] text-white/50">
                  PLAN
                </span>
                <span className="mt-2 block text-lg font-semibold text-white">
                  {label}
                </span>
                <span className="mt-1 block text-[11px] text-white/60">
                  {key === mockProfile.plan.toLowerCase()
                    ? '現在のプラン'
                    : '選択可能'}
                </span>
              </button>
            ))}
          </div>
        </article>
        <article className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div>
            <h2 className="text-lg font-semibold text-white">セキュリティ概要</h2>
            <p className="mt-2 text-sm text-white/60">
              接続中のデバイスやログイン履歴を確認できます。
            </p>
          </div>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <div>
                <p className="font-semibold text-white">MacBook Pro</p>
                <p className="text-xs text-white/50">東京 · 2025-11-09 10:21</p>
              </div>
              <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                {dictionary.common.status.online}
              </span>
            </li>
            <li className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <div>
                <p className="font-semibold text-white">iPhone 16 Pro</p>
                <p className="text-xs text-white/50">大阪 · 2025-11-08 21:02</p>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">
                {dictionary.common.status.offline}
              </span>
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
}

type InfoCardProps = {
  label: string;
  value: string;
};

function InfoCard({ label, value }: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm backdrop-blur">
      <p className="text-xs uppercase tracking-[0.25em] text-white/40">
        {label}
      </p>
      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}
