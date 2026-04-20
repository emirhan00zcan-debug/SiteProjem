import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase environment variables are missing. Some features may not work as expected.');
}

export const supabase = createClient(
    supabaseUrl || 'http://localhost:8000', // Fallback for build time
    supabaseAnonKey || 'placeholder'
);
