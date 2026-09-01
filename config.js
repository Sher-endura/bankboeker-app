// Bankboeker — cloudconfiguratie
// Zolang SUPABASE_URL leeg is draait de app in lokale modus (localStorage, geen login).
// Vul na het aanmaken van het Supabase-project de twee waarden hieronder in — zie SETUP.md stap 2.
// De ANON key is een publieke sleutel (mag in de broncode); de toegang wordt afgedwongen
// door Row Level Security in de database + Microsoft-login.
window.BANKBOEKER_CONFIG = {
  SUPABASE_URL: "https://baaxuergynqgxwlbwrbp.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhYXh1ZXJneW5xZ3h3bGJ3cmJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM5Nzc0NTgsImV4cCI6MjA5OTU1MzQ1OH0.trGguPle7TYMSHpLeWRPJ9OI3LnAV-_vR4WQOPRO3a8",
  TOEGESTAAN_DOMEIN: "endura-aruba.com"  // alleen e-mailadressen op dit domein krijgen toegang
};
