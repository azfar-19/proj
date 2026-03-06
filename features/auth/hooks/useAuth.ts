// useAuth Hook

import { useState } from 'react';
import { signUp, signIn, signOut, getUser } from '../server/authService';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (email: string, password: string, role: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await signUp(email, password, role);
      setUser(data.user);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await signIn(email, password);
      setUser(data.user);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      await signOut();
      setUser(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getUser();
      setUser(data.user);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
    register,
    login,
    logout,
    fetchUser,
  };
};

export default useAuth;