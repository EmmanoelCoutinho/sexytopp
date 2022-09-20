import { createContext, ReactNode, useState, useEffect } from 'react';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc, onSnapshot, getDocs, collection } from 'firebase/firestore';
import { db } from '../services/firestore';

interface IUserProviderProps {
  children: ReactNode;
}

interface IUser {
  avatar_img: string;
  username: string;
  banner_img: string;
  uid: string;
  followers: number;
  following: number;
}

interface IUserContext {
  userData: IUser;
  posts: any;
  notifications: any;
  setIsSignedIn: any;
}

interface Idoc {
  allPosts: [];
}

export const UserContext = createContext({} as IUserContext);

export function UserProvider({ children }: IUserProviderProps) {
  const [userData, setUserData] = useState<IUser>({
    avatar_img: '',
    username: '',
    banner_img: '',
    uid: '',
    followers: 0,
    following: 0
  });
  const [posts, setPosts] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const auth = getAuth();

  const userLogged = async (uid: string) => {
    const docSnap = await getDoc(doc(db, 'users', uid));

    if (docSnap.exists()) {
      const data: any = docSnap.data();
      setUserData(data);
    }
  };

  const getMyPosts = async (uid: string) => {
    const collRef = collection(db, 'users', uid, 'myPosts');

    onSnapshot(collRef, (snap: any) => {
      const data = snap.docs.map((doc: any) => doc.data());
      setPosts(data.reverse());
    });
  };

  const getNotifications = async (uid: string) => {
    const followRequestRef = collection(db, 'users', uid, 'followRequests');

    onSnapshot(followRequestRef, (snap: any) => {
      const data = snap.docs.map((doc: any) => doc.data());
      setNotifications(data.reverse());
    });
  };

  const useCurrentUser = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        userLogged(user.uid);
        getNotifications(user.uid);
        getMyPosts(user.uid);
        localStorage.setItem('userUid', user.uid);
      } else {
        console.log('Usuário não logado');
      }
    });
  };

  useEffect(() => {
    useCurrentUser();
  }, [isSignedIn]);

  return (
    <UserContext.Provider value={{ userData, posts, notifications, setIsSignedIn }}>
      {children}
    </UserContext.Provider>
  );
}
