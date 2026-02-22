import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || '';

export function createSupabaseClient() {
  return createClient(supabaseUrl, supabaseKey);
}

let supabaseClient: ReturnType<typeof createSupabaseClient> | null = null;
export function getSupabaseClient() {
  if (!supabaseClient) {
    supabaseClient = createSupabaseClient();
  }
  return supabaseClient;
}

/**
 * This function will be used to get an authenticated client in client components
 * @param accessToken
 * @returns
 */
export const getAuthenticatedClient = (accessToken: string | undefined) => {
  if (!accessToken) return getSupabaseClient();

  return createClient(supabaseUrl, supabaseKey, {
    global: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  });
};

export async function signinClient(email?: string, password?: string) {
  const client = getSupabaseClient();
  const { data, error } = await client.auth.signInWithPassword({
    email: email || process.env.SUPABASE_TESTING_USER || '<EMAIL>',
    password: password || process.env.SUPABASE_TESTING_PASSWORD || '<PASSWORD>',
  });
  return { client, data, error };
}
