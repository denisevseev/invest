// /src/hooks/useFetchUser.js
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import store from './../userStore';

const useFetchUser = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchUser = async () => {
    if (session && session.user) {
      try {
        const response = await fetch('/api/userInfo', {
          headers: {
            'Authorization': `Bearer ${session}`
          }
        });
        const data = await response.json();

        if (data) {
          const role = ['admin', 'manager', 'employee'].includes(data.role);
          if(!role){
            localStorage.removeItem('riskModalShown');
          }
          setUser(data);
          store.user = data;
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, [session, router]);

  return { user, loading };
};

export default useFetchUser;
