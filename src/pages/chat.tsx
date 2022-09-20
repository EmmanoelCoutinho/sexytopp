import { useRouter } from 'next/router';

import Chat from '../containers/Chat';
import MainLayout from '../layouts/MainLayout';

export default function Feed() {
  const router = useRouter();
  const isLogged = localStorage.getItem('isLoggedIn');

  const handleNotSignedIn = () => {
    router.push('/login', undefined, { shallow: true });
  };

  return (
    <>
      {isLogged == 'true' ? (
        <MainLayout title="Mensagens" mainContent={<Chat />} />
      ) : (
        handleNotSignedIn()
      )}
    </>
  );
}
