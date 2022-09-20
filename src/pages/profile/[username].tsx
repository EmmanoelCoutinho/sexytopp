import { collection, query, where, getDocs } from 'firebase/firestore';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';

import UsernameAccount from '../../containers/UsernameAccount';
import MainLayout from '../../layouts/MainLayout';
import { db } from '../../services/firestore';

interface IUser {
  avatar_img: string;
  username: string;
  banner_img: string;
  uid: string;
  followers: number;
  following: number;
}

function AccountAuth(props: IUser) {
  const router = useRouter();

  const isLogged = localStorage.getItem('isLoggedIn');

  const handleNotSignedIn = () => {
    router.push('/login', undefined, { shallow: true });
  };

  return (
    <>
      {isLogged == 'true' ? (
        <MainLayout title="Perfil" mainContent={<UsernameAccount props={{ ...props }} />} />
      ) : (
        handleNotSignedIn()
      )}
    </>
  );
}

export default AccountAuth;

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const username = ctx.query.username as string;

  const usersRef = collection(db, 'users');

  const q = query(usersRef, where('username_lower', '==', username));

  const querySnapshot = await getDocs(q);
  const userData = querySnapshot.docs[0].data();

  return {
    props: userData
  };
};
