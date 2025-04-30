// Normally I would not include .env files in the repository,
// but for the sake of this example, I will include it.

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
// RLS is enabled inside Supabase, so we use the anon key
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase URL/Key is not defined");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
