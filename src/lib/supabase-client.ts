'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export type BrowserSupabaseClient = ReturnType<typeof createClientComponentClient>;

let browserClient: BrowserSupabaseClient | undefined;

export function getSupabaseBrowserClient(): BrowserSupabaseClient {
  if (!browserClient) {
    browserClient = createClientComponentClient({
      isSingleton: true,
    });
  }

  return browserClient;
}
