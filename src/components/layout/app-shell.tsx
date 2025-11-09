'use client';

import { MobileNav } from '@/components/layout/mobile-nav';
import { SiteHeader } from '@/components/layout/site-header';
import { useLanguage } from '@/providers/language-provider';
import { useEffect } from 'react';

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const { dictionary } = useLanguage();

  useEffect(() => {
    document.title = dictionary.meta.title;
  }, [dictionary.meta.title]);

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <SiteHeader />
      <main className="flex-1">
        <div className="relative isolate overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(94,234,212,0.25),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(129,140,248,0.35),transparent_52%),radial-gradient(circle_at_50%_110%,rgba(14,165,233,0.2),transparent_55%)]" />
          {children}
        </div>
      </main>
      <MobileNav />
    </div>
  );
}
