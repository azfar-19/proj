// Authentication Service

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export const signUp = async (email: string, password: string, role: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  // Assign role to user
  const { error: roleError } = await supabase.from('profiles').insert({
    user_id: data.user?.id,
    role,
  });

  if (roleError) throw new Error(roleError.message);

  return data;
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
};

export const getUser = async () => {
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data;
};