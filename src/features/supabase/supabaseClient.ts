import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || "";

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

// Create a client that can be used in server components
export const supabase = createSupabaseClient();

/**
 * This function will be used to get an authenticated client in client components
 * @param accessToken 
 * @returns 
 */
export const getAuthenticatedClient = (accessToken: string | undefined) => {
  if (!accessToken) return supabase;

  return createClient(supabaseUrl, supabaseKey, {
    global: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  });
};