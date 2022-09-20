import { useRouter } from 'next/router';

import Notifications from '../containers/notifications';
import MainLayout from '../layouts/MainLayout';

function NotificationsPage() {
  const router = useRouter();
  const isLogged = localStorage.getItem('isLoggedIn');

  const handleNotSignedIn = () => {
    router.push('/login', undefined, { shallow: true });
  };

  return (
    <>
      {isLogged == 'true' ? (
        <MainLayout title="Notificações" mainContent={<Notifications />} />
      ) : (
        handleNotSignedIn()
      )}{' '}
    </>
  );
}

export default NotificationsPage;
