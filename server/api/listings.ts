// Listings API Endpoints

import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Fetch all listings
    const { data, error } = await supabase.from('listings').select('*');

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
  }

  if (req.method === 'POST') {
    // Create a new listing
    const { property_id, minimum_investment, target_yield, risk_category, distribution_frequency } = req.body;

    const { data, error } = await supabase.from('listings').insert({
      property_id,
      minimum_investment,
      target_yield,
      risk_category,
      distribution_frequency,
    });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(201).json(data);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}