import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;

// Create a client that can be used in server components
export const supabase = createClient(supabaseUrl, supabaseKey);

// This function will be used to get an authenticated client in client components
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
