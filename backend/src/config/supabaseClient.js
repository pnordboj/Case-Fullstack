import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kylvsurihnmnzuqvauvd.supabase.co";
const supabaseKey = `${process.env.SUPABASE_ANON_KEY}`;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);