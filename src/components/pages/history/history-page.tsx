'use client';

import { useLanguage } from '@/providers/language-provider';

const mockHistory = [
  {
    id: 'TRD-15401',
    timestamp: '2025-11-09 18:04',
    asset: 'USD/JPY',
    direction: 'CALL',
    stake: '¥25,000',
    result: '+¥7,500',
    mode: '安定',
    status: 'WIN',
  },
  {
    id: 'TRD-15402',
    timestamp: '2025-11-09 18:30',
    asset: 'BTC/USD',
    direction: 'PUT',
    stake: '¥40,000',
    result: '-¥40,000',
    mode: 'ミドル',
    status: 'LOSE',
  },
  {
    id: 'TRD-15403',
    timestamp: '2025-11-09 19:45',
    asset: 'EUR/USD',
    direction: 'CALL',
    stake: '¥30,000',
    result: '+¥30,000',
    mode: 'アクティブ',
    status: 'WIN',
  },
];

export function HistoryPage() {
  const { dictionary } = useLanguage();
  const { historyPage, common } = dictionary;

  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-white">{historyPage.title}</h1>
        <p className="text-sm text-white/70">{historyPage.subtitle}</p>
      </section>

      <section className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-3 text-xs text-white/70">
          <FilterTag label={historyPage.filters.mode} value="安定" />
          <FilterTag label={historyPage.filters.mode} value="ミドル" />
          <FilterTag label={historyPage.filters.mode} value="アクティブ" />
          <FilterTag label={historyPage.filters.result} value="WIN" />
          <FilterTag label={historyPage.filters.result} value="LOSE" />
          <FilterTag label={historyPage.filters.dateRange} value="今週" />
        </div>
        <button className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2 text-xs font-semibold text-white/80 transition hover:border-white/60 hover:text-white">
          CSV Export
        </button>
      </section>

      <section className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60">
        <table className="min-w-full divide-y divide-white/5 text-sm">
          <thead className="bg-white/5 text-xs uppercase tracking-[0.3em] text-white/50">
            <tr>
              <HeaderCell>{historyPage.columns.timestamp}</HeaderCell>
              <HeaderCell>{historyPage.columns.asset}</HeaderCell>
              <HeaderCell>{historyPage.columns.direction}</HeaderCell>
              <HeaderCell>{historyPage.columns.stake}</HeaderCell>
              <HeaderCell>{historyPage.columns.result}</HeaderCell>
              <HeaderCell>{historyPage.columns.mode}</HeaderCell>
              <HeaderCell>{common.actions.view}</HeaderCell>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-white/80">
            {mockHistory.map((trade) => (
              <tr key={trade.id} className="transition hover:bg-white/5">
                <Cell>{trade.timestamp}</Cell>
                <Cell>{trade.asset}</Cell>
                <Cell>{trade.direction}</Cell>
                <Cell>{trade.stake}</Cell>
                <Cell>
                  <span
                    className={trade.status === 'WIN' ? 'text-emerald-300' : 'text-rose-300'}
                  >
                    {trade.result}
                  </span>
                </Cell>
                <Cell>{trade.mode}</Cell>
                <Cell>
                  <button className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/80 transition hover:border-white/60 hover:text-white">
                    {common.actions.view}
                  </button>
                </Cell>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between border-t border-white/10 bg-white/5 px-6 py-4 text-xs text-white/60">
          <span>{historyPage.columns.timestamp} · {mockHistory.length}</span>
          <div className="flex items-center gap-2">
            <span>{common.table.rowsPerPage}</span>
            <select className="rounded-full border border-white/10 bg-transparent px-3 py-1 text-white">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-dashed border-white/20 bg-white/5 p-10 text-center text-sm text-white/60">
        {historyPage.empty}
      </section>
    </div>
  );
}

type FilterTagProps = {
  label: string;
  value: string;
};

function FilterTag({ label, value }: FilterTagProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
      <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
        {label}
      </span>
      <span className="font-semibold text-white">{value}</span>
    </span>
  );
}

type CellProps = {
  children: React.ReactNode;
};

function Cell({ children }: CellProps) {
  return <td className="whitespace-nowrap px-6 py-4 align-middle">{children}</td>;
}

function HeaderCell({ children }: CellProps) {
  return (
    <th scope="col" className="px-6 py-4 text-left">
      {children}
    </th>
  );
}
