'use client';

import { cn } from '@/lib/utils';
import { useLanguage } from '@/providers/language-provider';
import type { Locale } from '@/locales/dictionaries';

const options: Array<{ code: Locale; label: string }> = [
  { code: 'ja', label: '日本語' },
  { code: 'en', label: 'English' },
];

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center rounded-full bg-white/10 p-1 text-xs backdrop-blur">
      {options.map((option) => (
        <button
          key={option.code}
          type="button"
          onClick={() => setLocale(option.code)}
          className={cn(
            'rounded-full px-3 py-1 font-medium transition-colors',
            locale === option.code
              ? 'bg-white text-slate-900 shadow'
              : 'text-white/70 hover:text-white',
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
