// Investment Service

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export const createSubscription = async (userId: string, offeringId: string, amount: number, fundingMethod: string) => {
  const { data, error } = await supabase.from('subscriptions').insert({
    user_id: userId,
    offering_id: offeringId,
    amount,
    funding_method: fundingMethod,
    status: 'Pending',
  });

  if (error) throw new Error(error.message);

  return data;
};

export const confirmSubscription = async (subscriptionId: string) => {
  const { data, error } = await supabase
    .from('subscriptions')
    .update({ status: 'Confirmed' })
    .eq('id', subscriptionId);

  if (error) throw new Error(error.message);

  return data;
};