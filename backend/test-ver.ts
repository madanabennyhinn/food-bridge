import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
async function run() {
    const { data: users, error } = await supabase.from('users').select('*').in('email', ['john.doe@example.com', 'test_browser_subagent1@example.com']);
    console.log("Users:", users);
    if (users && users.length > 0) {
        const { data: vol } = await supabase.from('volunteers').select('*').in('id', users.map(u => u.id));
        console.log("Volunteers:", vol);
    }
}
run();
