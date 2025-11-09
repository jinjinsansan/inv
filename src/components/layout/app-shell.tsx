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
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1">
        <div className="relative isolate overflow-hidden bg-black">{children}</div>
      </main>
      <MobileNav />
    </div>
  );
}
