'use client';

import { LanguageToggle } from '@/components/shared/language-toggle';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/providers/language-provider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', key: 'top' as const },
  { href: '/mypage', key: 'myPage' as const },
  { href: '/history', key: 'history' as const },
  { href: '/connection', key: 'connection' as const },
  { href: '/admin', key: 'admin' as const },
];

export function SiteHeader() {
  const { dictionary } = useLanguage();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-transparent backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 text-sm font-bold text-slate-900">
            D
          </span>
          <span className="text-lg font-semibold">D-invesment</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-white/70 md:flex">
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={cn(
                'transition-colors hover:text-white',
                pathname === link.href && 'text-white',
              )}
            >
              {dictionary.nav[link.key]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <Link
            href="/login"
            className="hidden rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-white/60 hover:text-white md:inline-flex"
          >
            {dictionary.nav.signIn}
          </Link>
          <Link
            href="/signup"
            className="hidden rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-4 py-2 text-xs font-semibold text-slate-900 shadow md:inline-flex"
          >
            {dictionary.nav.getStarted}
          </Link>
        </div>
      </div>
    </header>
  );
}
