import { useSession } from 'next-auth/react';
import store from './../userStore';

const useSessionStore = () => {
    const { data: session, status } = useSession();
    store.sessionUser = session;
    console.log(session?.user?.id);

    return session?.user?.id;
};

export default useSessionStore;
