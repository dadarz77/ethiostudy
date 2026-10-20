import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string | undefined)?.trim();
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined)?.trim();

// A placeholder value is not configuration: .env ships with
// "PASTE_YOUR_ANON_KEY_HERE" / "your-project.supabase.co" style strings that
// would otherwise count as configured and send real requests into the void.
function isPlaceholder(s: string): boolean {
  return /paste_your|your-|example\.|changeme|here$/i.test(s);
}

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl.startsWith('http') &&
  supabaseAnonKey.length > 20 &&
  !isPlaceholder(supabaseUrl) &&
  !isPlaceholder(supabaseAnonKey)
);

// Graceful singleton: only instantiates when valid credentials exist
export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null;
