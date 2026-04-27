require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function listMessages() {
  const { data, error } = await supabase.from('ContactMessage').select('*');
  if (error) {
    console.error("ERROR Fetching:", error);
  } else {
    console.log("Total messages in Supabase:", data.length);
    console.log("Messages:");
    console.log(data);
  }
}

listMessages();
