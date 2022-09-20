import { useEffect, useState } from 'react';

import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../services/firestore';

import FriendsWarp from '../../components/FriendsWarp';

interface Ifollowers {
  username: string;
  avatar_img: string;
  interest: string;
  location: string;
}

function Following() {
  const [following, setFollowing] = useState([]);

  const userUid = localStorage.getItem('userUid');

  const getFollowers = () => {
    const collRef = collection(db, 'users', `${userUid}`, 'following');
    onSnapshot(collRef, (snap: any) => {
      const data = snap.docs.map((doc: any) => doc.data());
      setFollowing(data);
    });
  };

  useEffect(() => {
    getFollowers();
  }, []);

  return (
    <>
      {following.map((followers: Ifollowers) => (
        <FriendsWarp
          username={followers.username}
          avatar_img={followers.avatar_img}
          specs={followers.interest}
          location={followers.location}
        />
      ))}
    </>
  );
}

export default Following;
