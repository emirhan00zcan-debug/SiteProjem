require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const crypto = require('crypto');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function test() {
  console.log("Testing Supabase Insert...");
  
  const { data, error } = await supabase.from('ContactMessage').insert([{
    id: crypto.randomUUID(),
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test message from Antigravity.'
  }]).select();

  if (error) {
    console.error("ERROR:", error);
  } else {
    console.log("SUCCESS! Data:", data);
  }
}

test();
