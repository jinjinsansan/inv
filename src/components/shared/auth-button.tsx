'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { getSupabaseBrowserClient, type BrowserSupabaseClient } from '@/lib/supabase-client';

export function AuthButton() {
  const supabase = useMemo<BrowserSupabaseClient | null>(() => {
    try {
      return getSupabaseBrowserClient();
    } catch (clientError) {
      console.error(clientError);
      return null;
    }
  }, []);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase) {
      return;
    }

    let ignore = false;

    supabase.auth
      .getSession()
      .then(({ data }) => {
        if (!ignore) {
          setSession(data.session ?? null);
        }
      })
      .catch((authError) => {
        if (!ignore) {
          setError('認証情報の取得に失敗しました。');
          console.error(authError);
        }
      });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setLoading(false);
      setError(null);
    });

    return () => {
      ignore = true;
      subscription.unsubscribe();
    };
  }, [supabase]);

  const handleSignIn = useCallback(async () => {
    if (!supabase) {
      return;
    }
    try {
      setLoading(true);
      setError(null);
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: typeof window === 'undefined' ? undefined : `${window.location.origin}`,
        },
      });
    } catch (authError) {
      console.error(authError);
      setError('Googleログインに失敗しました。しばらくしてから再度お試しください。');
      setLoading(false);
    }
  }, [supabase]);

  const handleSignOut = useCallback(async () => {
    if (!supabase) {
      return;
    }
    try {
      setLoading(true);
      setError(null);
      await supabase.auth.signOut();
    } catch (authError) {
      console.error(authError);
      setError('ログアウトに失敗しました。');
      setLoading(false);
    }
  }, [supabase]);

  const userEmail = session?.user?.email;

  if (!supabase) {
    return (
      <span className="text-xs text-rose-300">Supabaseが正しく設定されていません。環境変数を確認してください。</span>
    );
  }

  if (error) {
    return (
      <button
        type="button"
        className="rounded-full border border-rose-300/60 px-4 py-2 text-xs font-semibold text-rose-200 transition hover:border-rose-200 hover:text-rose-100"
        onClick={handleSignIn}
        disabled={loading}
      >
        再試行
      </button>
    );
  }

  if (session) {
    return (
      <div className="flex items-center gap-3">
        {userEmail ? (
          <span className="hidden text-xs text-white/70 md:inline">{userEmail}</span>
        ) : null}
        <button
          type="button"
          className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-white/60 hover:text-white"
          onClick={handleSignOut}
          disabled={loading}
        >
          {loading ? 'ログアウト中…' : 'ログアウト'}
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      className="rounded-full bg-red-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-red-400 disabled:opacity-60"
      onClick={handleSignIn}
      disabled={loading}
    >
      {loading ? 'リダイレクト中…' : 'Googleでログイン'}
    </button>
  );
}
