import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

async function run() {
  console.log("Worker started");

  while (true) {
    const { data } = await supabase.from("bots").select("*");

    console.log("Bots found:", data?.length || 0);

    await new Promise(r => setTimeout(r, 5000));
  }
}

run();
