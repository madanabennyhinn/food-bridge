import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

async function run() {
    console.log("Testing NGO Registration...");
    try {
        const response = await axios.post('http://localhost:5001/api/auth/register', {
            email: "ngo_test_success@example.com",
            password: "password123",
            role: "ngo",
            ngoName: "Perfect NGO Test",
            registrationNumber: "REG999999"
        });
        console.log("\nAPI Response:");
        console.log(JSON.stringify(response.data, null, 2));
    } catch (e: any) {
        console.error("API Error:", e.response?.data || e.message);
    }

    console.log("\nVerifying Database Insert (ngos table)...");
    const { data } = await supabase.from('ngos').select('*').eq('registration_number', 'REG999999');
    console.log(JSON.stringify(data, null, 2));
}

run();
