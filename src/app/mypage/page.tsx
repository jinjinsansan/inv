import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

import type { Session } from '@supabase/supabase-js';

import { MyPage } from '@/components/pages/mypage/my-page';

export const dynamic = 'force-dynamic';

export default async function Page() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.error('[mypage] Missing Supabase environment variables.');
    redirect('/');
  }

  let session: Session | null = null;

  try {
    const supabase = createServerComponentClient({ cookies });
    const {
      data: { session: sessionData },
    } = await supabase.auth.getSession();
    session = sessionData ?? null;
  } catch (error) {
    console.error('[mypage] Failed to load session', error);
    redirect('/');
  }

  if (!session) {
    redirect('/');
  }

  return <MyPage session={session} />;
}
