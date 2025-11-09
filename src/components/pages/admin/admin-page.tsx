"use client";

import { useLanguage } from "@/providers/language-provider";

const mockUsers = [
  {
    id: "USR-8201",
    name: "Kento A.",
    email: "kento@example.com",
    plan: "Pro",
    mode: "安定",
    status: "online" as const,
    lastActivity: "2025-11-09 18:41",
  },
  {
    id: "USR-8202",
    name: "Mika O.",
    email: "mika@example.com",
    plan: "Basic",
    mode: "ミドル",
    status: "pending" as const,
    lastActivity: "2025-11-09 17:12",
  },
  {
    id: "USR-8203",
    name: "Leo S.",
    email: "leo@example.com",
    plan: "Enterprise",
    mode: "アクティブ",
    status: "offline" as const,
    lastActivity: "2025-11-08 23:04",
  },
];

const mockMetrics = [
  {
    key: "totalUsers" as const,
    value: "1,280",
    change: "+6.2%",
  },
  {
    key: "activeConnections" as const,
    value: "982",
    change: "+3.8%",
  },
  {
    key: "monthlyVolume" as const,
    value: "¥482M",
    change: "+11.4%",
  },
];

const mockPayments = [
  { label: "paid" as const, value: "¥12,480,000" },
  { label: "upcoming" as const, value: "¥1,280,000" },
  { label: "overdue" as const, value: "¥320,000" },
];

const statusPalette = {
  online: "bg-emerald-400/20 text-emerald-200",
  offline: "bg-white/15 text-white/70",
  pending: "bg-amber-300/20 text-amber-200",
} as const;

export function AdminPage() {
  const { dictionary } = useLanguage();
  const { adminPage, common } = dictionary;

  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-white">{adminPage.title}</h1>
        <p className="text-sm text-white/70">{adminPage.subtitle}</p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {mockMetrics.map((metric) => (
          <article
            key={metric.key}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-white/10 p-6 backdrop-blur"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              {adminPage.metrics[metric.key]}
            </p>
            <p className="mt-3 text-3xl font-semibold text-white">{metric.value}</p>
            <p className="text-xs text-emerald-300">{metric.change}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-[1.6fr_1fr]">
        <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
          <header className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <div>
              <h2 className="text-lg font-semibold text-white">
                {adminPage.userTable.user}
              </h2>
              <p className="text-xs text-white/50">1540bo.org · Management</p>
            </div>
            <button className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/70 transition hover:border-white/60 hover:text-white">
              CSV
            </button>
          </header>
          <table className="min-w-full divide-y divide-white/10 text-sm text-white/80">
            <thead className="bg-white/5 text-xs uppercase tracking-[0.3em] text-white/50">
              <tr>
                <th className="px-6 py-3 text-left">{adminPage.userTable.user}</th>
                <th className="px-6 py-3 text-left">{adminPage.userTable.email}</th>
                <th className="px-6 py-3 text-left">{adminPage.userTable.plan}</th>
                <th className="px-6 py-3 text-left">{adminPage.userTable.mode}</th>
                <th className="px-6 py-3 text-left">{adminPage.userTable.status}</th>
                <th className="px-6 py-3 text-left">{adminPage.userTable.lastActivity}</th>
                <th className="px-6 py-3 text-left">{common.actions.edit}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {mockUsers.map((user) => (
                <tr key={user.id} className="transition hover:bg-white/5">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-white">{user.name}</div>
                    <div className="text-xs text-white/40">{user.id}</div>
                  </td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.plan}</td>
                  <td className="px-6 py-4">{user.mode}</td>
                  <td className="px-6 py-4">
                    <StatusBadge label={common.status[user.status]} paletteKey={user.status} />
                  </td>
                  <td className="px-6 py-4">{user.lastActivity}</td>
                  <td className="px-6 py-4">
                    <button className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white/70 transition hover:border-white/60 hover:text-white">
                      {common.actions.edit}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <div className="space-y-6">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold text-white">
              {adminPage.tradeOverview.title}
            </h2>
            <div className="mt-4 space-y-4 text-sm text-white/80">
              <StatRow label="24h 勝率" value="68.4%" accent="text-emerald-300" />
              <StatRow label="最大ドローダウン" value="-2.1%" accent="text-rose-300" />
              <StatRow label="連勝 / 連敗" value="7 / 2" accent="text-white" />
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold text-white">
              {adminPage.paymentStats.title}
            </h2>
            <div className="mt-4 space-y-4 text-sm text-white/80">
              {mockPayments.map((payment) => (
                <div
                  key={payment.label}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                >
                  <span>
                    {adminPage.paymentStats[
                      payment.label as keyof typeof adminPage.paymentStats
                    ]}
                  </span>
                  <span className="font-semibold text-white">{payment.value}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

type StatusKey = keyof typeof statusPalette;

type StatusBadgeProps = {
  label: string;
  paletteKey: StatusKey;
};

function StatusBadge({ label, paletteKey }: StatusBadgeProps) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${statusPalette[paletteKey]}`}
    >
      {label}
    </span>
  );
}

type StatRowProps = {
  label: string;
  value: string;
  accent: string;
};

function StatRow({ label, value, accent }: StatRowProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
      <span>{label}</span>
      <span className={`font-semibold ${accent}`}>{value}</span>
    </div>
  );
}
