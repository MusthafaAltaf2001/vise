import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rrokkrqahuqhyixxrzle.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyb2trcnFhaHVxaHlpeHhyemxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQxNzcxNjcsImV4cCI6MTk4OTc1MzE2N30.HtyiOEsuFyquL2ZFrSoZx55Tc5Kcd0u-jrhEc711ynI";
export const supabase = createClient(supabaseUrl, supabaseKey);
