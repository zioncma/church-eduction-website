"use client";

import {
  createContext,
  useContext,
} from "react";
import { createBrowserClient } from "@supabase/ssr";
import { User, AuthError, Session } from "@supabase/supabase-js";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (
    email: string,
    password: string
  ) => Promise<{ error: AuthError | null }>;
  signOut: () => Promise<void>;
  accessToken: string | null;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signIn: async () => ({ error: null }),
  signOut: async () => {},
  accessToken: null,
});

export const useAuth = () => useContext(AuthContext);

export function createSupabaseBrowserClient() {
  return createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_KEY!
    );
}

let supabaseBrowserClient: ReturnType<typeof createSupabaseBrowserClient> | null = null;
export function getSupabaseBrowserClient() {
  if (!supabaseBrowserClient) {
    supabaseBrowserClient = createSupabaseBrowserClient();
  }
  return supabaseBrowserClient;
}

    