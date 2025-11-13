
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import type { Session } from '@supabase/supabase-js';

import { getSupabaseBrowserClient, type BrowserSupabaseClient } from '@/lib/supabase-client';
import { useLanguage } from '@/providers/language-provider';

const nameKeys = ['full_name', 'name', 'display_name'];

export function MyPage() {
  const { dictionary, locale } = useLanguage();
  const { myPage } = dictionary;
  const router = useRouter();

  const supabase = useMemo<BrowserSupabaseClient | null>(() => {
    try {
      return getSupabaseBrowserClient();
    } catch (clientError) {
      console.error('[mypage] Browser Supabase client unavailable', clientError);
      return null;
    }
  }, []);

  const [session, setSession] = useState<Session | null>(null);
  const [status, setStatus] = useState<'loading' | 'authenticated' | 'unauthenticated'>(
    'loading',
  );

  useEffect(() => {
    if (!supabase) {
      queueMicrotask(() => {
        setStatus('unauthenticated');
      });
      router.replace('/');
      return;
    }

    let isMounted = true;

    supabase.auth
      .getSession()
      .then(({ data }) => {
        if (!isMounted) {
          return;
        }
        const nextSession = data.session ?? null;
        setSession(nextSession);
        setStatus(nextSession ? 'authenticated' : 'unauthenticated');
        if (!nextSession) {
          router.replace('/');
        }
      })
      .catch((error) => {
        console.error('[mypage] Failed to fetch session', error);
        if (!isMounted) {
          return;
        }
        setStatus('unauthenticated');
        router.replace('/');
      });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setStatus(nextSession ? 'authenticated' : 'unauthenticated');
      if (!nextSession) {
        router.replace('/');
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [supabase, router]);

  if (status !== 'authenticated' || !session) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-sm text-white/60">
        {myPage.states.loading}
      </div>
    );
  }

  const metadata = (session.user.user_metadata ?? {}) as Record<string, unknown>;
  const displayNameCandidate = nameKeys
    .map((key) => metadata[key])
    .find((value): value is string => typeof value === 'string' && value.trim().length > 0);
  const displayName = displayNameCandidate ?? myPage.profile.fallbacks.name;

  const email = session.user.email ?? myPage.profile.fallbacks.email;

  const registrationDate = (() => {
    if (!session.user.created_at) {
      return myPage.profile.fallbacks.registrationDate;
    }
    try {
      const preferredLocale = locale === 'ja' ? 'ja-JP' : 'en-US';
      return new Intl.DateTimeFormat(preferredLocale, {
        dateStyle: 'medium',
        timeStyle: 'short',
      }).format(new Date(session.user.created_at));
    } catch (formatError) {
      console.error(formatError);
      return myPage.profile.fallbacks.registrationDate;
    }
  })();

  return (
    <div className="mx-auto w-full max-w-5xl space-y-10 px-4 py-12">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-white">{myPage.title}</h1>
        <p className="text-sm text-white/70">{myPage.profile.description}</p>
      </header>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <h2 className="text-lg font-semibold text-white">{myPage.profile.title}</h2>
        <dl className="mt-6 grid gap-6 sm:grid-cols-2">
          <ProfileItem
            term={myPage.profile.labels.name}
            description={displayName}
          />
          <ProfileItem term={myPage.profile.labels.email} description={email} />
          <ProfileItem
            term={myPage.profile.labels.registrationDate}
            description={registrationDate}
          />
        </dl>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-white">
              {myPage.sections.connection.title}
            </h2>
            <p className="text-sm text-white/70">
              {myPage.sections.connection.description}
            </p>
            <p className="text-xs text-white/50">
              {myPage.sections.connection.statusPlaceholder}
            </p>
          </div>
          <div className="mt-6">
            <Link
              href="/connection"
              className="inline-flex items-center justify-center rounded-full bg-red-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-400"
            >
              {myPage.sections.connection.actionLabel}
            </Link>
            <p className="mt-2 text-xs text-white/40">
              {myPage.sections.connection.actionHint}
            </p>
          </div>
        </article>

        <article className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-white">
              {myPage.sections.tools.title}
            </h2>
            <p className="text-sm text-white/70">
              {myPage.sections.tools.description}
            </p>
            <div className="rounded-2xl border border-dashed border-white/20 bg-white/5 px-4 py-5 text-sm text-white/60">
              {myPage.sections.tools.emptyState}
            </div>
          </div>
          <div className="mt-6">
            <button
              type="button"
              disabled
              className="inline-flex w-full items-center justify-center rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-white/70 transition disabled:cursor-not-allowed disabled:opacity-60"
            >
              {myPage.sections.tools.actionLabel}
            </button>
            <p className="mt-2 text-xs text-white/40">
              {myPage.sections.tools.actionHint}
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}

type ProfileItemProps = {
  term: string;
  description: string;
};

function ProfileItem({ term, description }: ProfileItemProps) {
  return (
    <div className="space-y-2">
      <dt className="text-xs uppercase tracking-[0.25em] text-white/40">{term}</dt>
      <dd className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm font-semibold text-white">
        {description}
      </dd>
    </div>
  );
}
