import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://wksimigtgkfcdutaacie.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indrc2ltaWd0Z2tmY2R1dGFhY2llIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyMTc4NjQsImV4cCI6MjA1Mzc5Mzg2NH0.eR1TH9Gj1GKxM5OR6M45-4q3-opnxOLaNcOOMooqehI')