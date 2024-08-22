import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import store from './../userStore';

const useFetchUser = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchUser = async () => {
    if (status === 'authenticated' && session?.user) {
      try {
        const response = await fetch('/api/userInfo', {
          headers: {
            'Authorization': `Bearer ${session}`
          }
        });
        const data = await response.json();

        if (data) {
          const role = ['admin', 'manager', 'employee'].includes(data.role);
          if (!role) {
            localStorage.removeItem('riskModalShown');
          }
          setUser(data);
          store.user = data;
          localStorage.setItem('user', JSON.stringify(data));
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    } else if (status === 'unauthenticated') {
      setLoading(false); // Устанавливаем loading в false, если пользователь не авторизован
    }
  };

  useEffect(() => {
    fetchUser();
  }, [session, status, router]);

  return { user, loading };
};

export default useFetchUser;
