// Investments API Endpoints

import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Fetch all investments
    const { data, error } = await supabase.from('investments').select('*');

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
  }

  if (req.method === 'POST') {
    // Create a new investment
    const { user_id, offering_id, amount } = req.body;

    const { data, error } = await supabase.from('investments').insert({
      user_id,
      offering_id,
      amount,
      status: 'Pending',
    });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(201).json(data);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}