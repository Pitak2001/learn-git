import { useState, useEffect, useContext } from 'react';
import { auth } from '../services/auth';
import { User } from '../types/user';
import { AuthContext } from '../context/AuthContext';

export function useAuth() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const context = useContext(AuthContext);

  return {
    loading,
    user,
    ...context,
  };
}