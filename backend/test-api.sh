#!/bin/bash
echo "Testing NGO Registration..."
RESPONSE=$(curl -s -X POST http://localhost:5001/api/auth/register \
-H "Content-Type: application/json" \
-d '{
  "email": "ngo_test_final@example.com",
  "password": "password123",
  "role": "ngo",
  "ngoName": "Final NGO Test",
  "registrationNumber": "REG123456"
}')

echo ""
echo "API Response:"
echo $RESPONSE | jq .

echo ""
echo "Verifying Database Insert (NGOs table)..."
npx ts-node -e "
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
(async () => {
    const { data } = await supabase.from('ngos').select('*').eq('registration_number', 'REG123456');
    console.log(JSON.stringify(data, null, 2));
})();
"
