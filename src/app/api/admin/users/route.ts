import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function GET() {
  if (!supabaseUrl || !serviceRoleKey) {
    console.error('[api/admin/users] Missing Supabase configuration.');
    return NextResponse.json(
      { error: 'Supabase service role is not configured.' },
      { status: 500 },
    );
  }

  try {
    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    const { data, error } = await supabaseAdmin.auth.admin.listUsers({
      page: 1,
      perPage: 50,
    });

    if (error) {
      throw error;
    }

    const users = (data?.users ?? []).map((user) => ({
      id: user.id,
      email: user.email,
      created_at: user.created_at,
      last_sign_in_at: user.last_sign_in_at,
      email_confirmed_at: user.email_confirmed_at,
      phone: user.phone,
      user_metadata: user.user_metadata ?? {},
    }));

    return NextResponse.json({ users });
  } catch (error) {
    console.error('[api/admin/users] Failed to list users', error);
    return NextResponse.json({ error: 'Failed to fetch users.' }, { status: 500 });
  }
}
