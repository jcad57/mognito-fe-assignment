// Normally I would not include .env files in the repository,
// but for the sake of this example, I will include it.
// RLS is enabled inside Supabase to prevent unauthorized access to the database.

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase URL/Key is not defined");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
