"use client";
import { User, Session } from "@supabase/supabase-js";
import { ReactNode, useState, useEffect } from "react";
import { getSupabaseBrowserClient } from "./auth";
import { AuthContext } from "./AuthContext";


export function AuthProvider({ children, ...optionals }: { children: ReactNode; }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const supabase = getSupabaseBrowserClient();

  useEffect(() => {
    // Check active sessions and sets the user
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event: string, session: Session | null) => {
        setUser(session?.user ?? null);
        setAccessToken(session?.access_token ?? null);
        setLoading(false);
      }
    );

    // Get the current session
    supabase.auth
      .getSession()
      .then(({ data: { session } }: { data: { session: Session | null; }; }) => {
        setUser(session?.user ?? null);
        setAccessToken(session?.access_token ?? null);
        setLoading(false);
      });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  const signIn = async (email: string, password: string) => {
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (data?.session) {
      setAccessToken(data.session.access_token);
    }
    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setAccessToken(null);
  };

  const value = {
    user,
    loading,
    signIn,
    signOut,
    accessToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
