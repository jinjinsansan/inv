'use client';

import { cn } from '@/lib/utils';
import { useLanguage } from '@/providers/language-provider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

const links = [
  { href: '/', key: 'top' as const },
  { href: '/mypage', key: 'myPage' as const },
  { href: '/history', key: 'history' as const },
  { href: '/connection', key: 'connection' as const },
  { href: '/admin', key: 'admin' as const },
];

export function MobileNav() {
  const { dictionary } = useLanguage();
  const pathname = usePathname();

  return (
    <Fragment>
      <div className="h-16 md:hidden" />
      <nav className="fixed inset-x-0 bottom-0 z-50 flex justify-center border-t border-white/10 bg-slate-950/85 backdrop-blur md:hidden">
        <ul className="flex w-full max-w-md items-center justify-around px-3 py-2 text-[11px] text-white/60">
          {links.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className={cn(
                  'flex flex-col items-center gap-1 rounded-full px-3 py-2 transition-colors',
                  pathname === link.href
                    ? 'text-white'
                    : 'text-white/60 hover:text-white',
                )}
              >
                <span className="font-medium">
                  {dictionary.nav[link.key]}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Fragment>
  );
}
