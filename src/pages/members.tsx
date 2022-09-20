import { useRouter } from 'next/router';
import Members from '../containers/Members';

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
        <MainLayout title="Seguindo" mainContent={<Members />} />
      ) : (
        handleNotSignedIn()
      )}
    </>
  );
}
