import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl =
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SUPABASE_URL) ||
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_URL) ||
  'https://ssjftddofxbnmytsxobj.supabase.co'

const supabaseKey =
  (typeof process !== 'undefined' && (process.env?.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY)) ||
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_PUBLISHABLE_KEY) ||
  'sb_publishable_zYvn3rEpEXMGgBOWelmrSQ_Egqnamv8'

export const createClient = () => createBrowserClient(supabaseUrl, supabaseKey)

export const supabase = createClient()
