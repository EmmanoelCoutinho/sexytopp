import { useRouter } from 'next/router';

import Account from '../../containers/Account';
import MainLayout from '../../layouts/MainLayout';

function AccountAuth() {
  const router = useRouter();

  const isLogged = localStorage.getItem('isLoggedIn');

  const handleNotSignedIn = () => {
    router.push('/login', undefined, { shallow: true });
  };

  return (
    <>
      {isLogged == 'true' ? (
        <MainLayout title="Perfil" mainContent={<Account />} />
      ) : (
        handleNotSignedIn()
      )}
    </>
  );
}

export default AccountAuth;
