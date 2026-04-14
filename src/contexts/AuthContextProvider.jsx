import { useEffect, useState } from 'react';
import pb from '../lib/pocketbase';
import { AuthContext } from './AuthContext';

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(pb.authStore.record);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsub = pb.authStore.onChange(() => {
      setUser(pb.authStore.record);
    });

    if (pb.authStore.isValid) {
      pb.collection('users')
        .authRefresh()
        .catch(() => pb.authStore.clear())
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }

    return () => unsub();
  }, []);

  async function login(email, password) {
    await pb.collection('users').authWithPassword(email, password);
  }

  function logout() {
    pb.authStore.clear();
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
