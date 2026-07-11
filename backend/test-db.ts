import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function testDB() {
    console.log("Checking tables...");
    const { data: users, error: e1 } = await supabase.from('users').select('*').limit(1);
    console.log("Users Data:", users);

    const { data: hotels, error: e2 } = await supabase.from('hotels').select('*').limit(5);
    console.log("Hotels Error:", e2?.message);
    console.log("Hotels Data:", hotels);

    const { data: volunteers, error: e3 } = await supabase.from('volunteers').select('*').limit(5);
    console.log("Volunteers Error:", e3?.message);
    console.log("Volunteers Data:", volunteers);
}

testDB().catch(console.error);
