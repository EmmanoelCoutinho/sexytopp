import { useRouter } from 'next/router';

import ProfileSpecs from '../containers/ProfileSpecs';

function NotificationsPage() {
  const router = useRouter();
  const isLogged = localStorage.getItem('isLoggedIn');

  const handleNotSignedIn = () => {
    router.push('/login', undefined, { shallow: true });
  };

  // return <>{isLogged == 'true' ? <ProfileSpecs /> : handleNotSignedIn()} </>;
  return <ProfileSpecs />;
}

export default NotificationsPage;
