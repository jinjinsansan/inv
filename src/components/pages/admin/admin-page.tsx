"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Session } from "@supabase/supabase-js";

import { getSupabaseBrowserClient, type BrowserSupabaseClient } from "@/lib/supabase-client";
import { useLanguage } from "@/providers/language-provider";

type AdminUser = {
  id: string;
  email: string | null;
  created_at: string | null;
  last_sign_in_at: string | null;
  email_confirmed_at: string | null;
  user_metadata: Record<string, unknown>;
};

const nameKeys = ["full_name", "name", "display_name"] as const;

export function AdminPage() {
  const { dictionary, locale } = useLanguage();
  const { adminPage } = dictionary;
  const router = useRouter();

  const supabase = useMemo<BrowserSupabaseClient | null>(() => {
    try {
      return getSupabaseBrowserClient();
    } catch (clientError) {
      console.error("[admin] Browser Supabase client unavailable", clientError);
      return null;
    }
  }, []);

  const [session, setSession] = useState<Session | null>(null);
  const [authStatus, setAuthStatus] = useState<"loading" | "authenticated" | "unauthenticated">(
    "loading",
  );

  const [users, setUsers] = useState<AdminUser[]>([]);
  const [usersLoading, setUsersLoading] = useState(true);
  const [usersError, setUsersError] = useState<string | null>(null);
  const [lastSyncedAt, setLastSyncedAt] = useState<number | null>(null);

  useEffect(() => {
    if (!supabase) {
      queueMicrotask(() => {
        setAuthStatus("unauthenticated");
      });
      router.replace("/");
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
        setAuthStatus(nextSession ? "authenticated" : "unauthenticated");
        if (!nextSession) {
          router.replace("/");
        }
      })
      .catch((error) => {
        console.error("[admin] Failed to fetch session", error);
        if (!isMounted) {
          return;
        }
        setAuthStatus("unauthenticated");
        router.replace("/");
      });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setAuthStatus(nextSession ? "authenticated" : "unauthenticated");
      if (!nextSession) {
        router.replace("/");
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [supabase, router]);

  const fetchUsers = useCallback(
    async (signal?: AbortSignal) => {
      setUsersLoading(true);
      setUsersError(null);

      try {
        const response = await fetch("/api/admin/users", {
          signal,
          cache: "no-store",
        });

        if (!response.ok) {
          if (response.status === 500) {
            const body = await response.json().catch(() => ({}));
            const isMisconfigured =
              typeof body.error === "string" && body.error.includes("service role");
            setUsersError(
              isMisconfigured ? adminPage.alerts.misconfigured : adminPage.alerts.fetchFailed,
            );
            return;
          }
          setUsersError(adminPage.alerts.fetchFailed);
          return;
        }

        const payload = (await response.json()) as { users?: AdminUser[] };
        setUsers(payload.users ?? []);
        setLastSyncedAt(Date.now());
      } catch (error) {
        if ((error as DOMException).name === "AbortError") {
          return;
        }
        console.error("[admin] Failed to load users", error);
        setUsersError(adminPage.alerts.fetchFailed);
      } finally {
        if (!signal || !signal.aborted) {
          setUsersLoading(false);
        }
      }
    },
    [adminPage.alerts.fetchFailed, adminPage.alerts.misconfigured],
  );

  useEffect(() => {
    if (authStatus !== "authenticated") {
      return;
    }

    const controller = new AbortController();
    fetchUsers(controller.signal);
    return () => controller.abort();
  }, [authStatus, fetchUsers]);

  const handleRefresh = () => {
    fetchUsers();
  };

  if (authStatus !== "authenticated" || !session) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-sm text-white/60">
        {adminPage.states.loading}
      </div>
    );
  }

  const totalUsers = users.length;
  const dateFormatter = new Intl.DateTimeFormat(locale === "ja" ? "ja-JP" : "en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const formatDate = (input: string | null) => {
    if (!input) {
      return adminPage.users.unknown;
    }
    try {
      return dateFormatter.format(new Date(input));
    } catch (error) {
      console.error("[admin] Failed to format date", error);
      return adminPage.users.unknown;
    }
  };

  const renderStatus = (user: AdminUser) => {
    if (user.email_confirmed_at) {
      return (
        <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">
          {adminPage.users.status.verified}
        </span>
      );
    }
    return (
      <span className="rounded-full bg-amber-300/15 px-3 py-1 text-xs font-semibold text-amber-100">
        {adminPage.users.status.pending}
      </span>
    );
  };

  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-white">{adminPage.title}</h1>
        <p className="text-sm text-white/70">{adminPage.subtitle}</p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <SummaryCard
          title={adminPage.summary.totalUsers}
          value={usersLoading ? "—" : totalUsers.toLocaleString()}
          description={adminPage.summary.totalUsersHint}
        />
        <SummaryCard
          title={adminPage.summary.maintenance}
          value={adminPage.summary.comingSoon}
          description={adminPage.summary.maintenanceHint}
        />
        <SummaryCard
          title={adminPage.summary.accounting}
          value={adminPage.summary.comingSoon}
          description={adminPage.summary.accountingHint}
        />
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
        <header className="flex flex-col gap-3 border-b border-white/10 px-6 py-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">{adminPage.users.title}</h2>
            <p className="text-xs text-white/60">{adminPage.users.description}</p>
          </div>
          <div className="flex items-center gap-3 text-xs text-white/50">
            {lastSyncedAt ? (
              <span>
                {adminPage.users.lastSync}: {dateFormatter.format(new Date(lastSyncedAt))}
              </span>
            ) : null}
            <button
              type="button"
              onClick={handleRefresh}
              className="rounded-full border border-white/20 px-3 py-1 font-semibold text-white/70 transition hover:border-white/60 hover:text-white"
              disabled={usersLoading}
            >
              {usersLoading ? adminPage.users.refreshing : adminPage.users.refresh}
            </button>
          </div>
        </header>
        {usersError ? (
          <div className="px-6 py-5 text-sm text-amber-200">
            {usersError}
          </div>
        ) : null}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-white/10 text-sm text-white/80">
            <thead className="bg-white/5 text-xs uppercase tracking-[0.3em] text-white/50">
              <tr>
                <th className="px-6 py-3 text-left">{adminPage.users.columns.userId}</th>
                <th className="px-6 py-3 text-left">{adminPage.users.columns.email}</th>
                <th className="px-6 py-3 text-left">{adminPage.users.columns.name}</th>
                <th className="px-6 py-3 text-left">{adminPage.users.columns.createdAt}</th>
                <th className="px-6 py-3 text-left">{adminPage.users.columns.lastSignIn}</th>
                <th className="px-6 py-3 text-left">{adminPage.users.columns.status}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {usersLoading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-6 text-center text-sm text-white/60">
                    {adminPage.users.loading}
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-6 text-center text-sm text-white/60">
                    {adminPage.users.empty}
                  </td>
                </tr>
              ) : (
                users.map((user) => {
                  const metadata = user.user_metadata ?? {};
                  const displayNameCandidate = nameKeys
                    .map((key) => metadata[key])
                    .find(
                      (value): value is string =>
                        typeof value === "string" && value.trim().length > 0,
                    );

                  return (
                    <tr key={user.id} className="transition hover:bg-white/5">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-white">{user.id}</div>
                      </td>
                      <td className="px-6 py-4">{user.email ?? adminPage.users.unknown}</td>
                      <td className="px-6 py-4">
                        {displayNameCandidate ?? adminPage.users.unknown}
                      </td>
                      <td className="px-6 py-4">{formatDate(user.created_at)}</td>
                      <td className="px-6 py-4">{formatDate(user.last_sign_in_at)}</td>
                      <td className="px-6 py-4">{renderStatus(user)}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div>
            <h2 className="text-lg font-semibold text-white">{adminPage.maintenance.title}</h2>
            <p className="mt-2 text-sm text-white/70">{adminPage.maintenance.description}</p>
          </div>
          <div className="rounded-2xl border border-dashed border-white/20 bg-black/20 px-4 py-5 text-sm text-white/60">
            {adminPage.maintenance.placeholder}
          </div>
          <button
            type="button"
            disabled
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/60 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {adminPage.maintenance.toggleLabel}
          </button>
          <p className="text-xs text-white/40">{adminPage.maintenance.helpText}</p>
        </article>

        <article className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div>
            <h2 className="text-lg font-semibold text-white">{adminPage.accounting.title}</h2>
            <p className="mt-2 text-sm text-white/70">{adminPage.accounting.description}</p>
          </div>
          <div className="rounded-2xl border border-dashed border-white/20 bg-black/20 px-4 py-5 text-sm text-white/60">
            {adminPage.accounting.placeholder}
          </div>
          <Link
            href="/history"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/70 transition hover:border-white/60 hover:text-white"
          >
            {adminPage.accounting.historyLink}
          </Link>
        </article>

        <article className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div>
            <h2 className="text-lg font-semibold text-white">{adminPage.misc.title}</h2>
            <p className="mt-2 text-sm text-white/70">{adminPage.misc.description}</p>
          </div>
          <div className="rounded-2xl border border-dashed border-white/20 bg-black/20 px-4 py-5 text-sm text-white/60">
            {adminPage.misc.placeholder}
          </div>
        </article>
      </section>
    </div>
  );
}

type SummaryCardProps = {
  title: string;
  value: string;
  description: string;
};

function SummaryCard({ title, value, description }: SummaryCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-white/10 p-6 backdrop-blur">
      <p className="text-xs uppercase tracking-[0.3em] text-white/50">{title}</p>
      <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-xs text-white/60">{description}</p>
    </article>
  );
}
