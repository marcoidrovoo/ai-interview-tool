// supabaseClient.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

export const supabase = createClient(
  "https://tdblhwmfwhzqkcfiwyzw.supabase.co", // ✅ Your Project URL
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkYmxod21md2h6cWtjZml3eXp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxODcyMjQsImV4cCI6MjA2MDc2MzIyNH0.Hi6vfaXJLkZfWB93Z1dm6wzXycW8zK-rjBaLgx1jn1s" // ✅ Your anon key
);
