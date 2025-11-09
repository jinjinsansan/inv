'use client';

import {
  type Dictionary,
  type Locale,
  defaultLocale,
  fallbackLocale,
  dictionaries,
} from '@/locales/dictionaries';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type LanguageContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

type LanguageProviderProps = {
  children: React.ReactNode;
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === 'undefined') {
      return defaultLocale;
    }
    const saved = window.localStorage.getItem('d-investment-locale');
    return saved === 'ja' || saved === 'en' ? saved : defaultLocale;
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    window.localStorage.setItem('d-investment-locale', locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<LanguageContextValue>(() => {
    const dictionary = dictionaries[locale] ?? dictionaries[fallbackLocale];
    return {
      locale,
      dictionary,
      setLocale,
    };
  }, [locale]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
