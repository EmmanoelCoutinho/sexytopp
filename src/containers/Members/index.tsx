import { useEffect, useState } from 'react';

import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../services/firestore';

import CardMembers from '../../components/CardMembers';

import * as S from './styles';

interface Imembers {
  email: string;
  avatar_img: string;
  username: string;
  location: string;
  interest: string;
}

function Members() {
  const [members, setMembers] = useState([]);

  const getAllMembers = async () => {
    const collRef = collection(db, 'users');
    onSnapshot(collRef, (snap: any) => {
      const data = snap.docs.map((doc: any) => doc.data());
      setMembers(data);
    });
  };

  useEffect(() => {
    getAllMembers();
  }, []);

  return (
    <>
      <S.Wrapper>
        {members.map((member: Imembers) => (
          <CardMembers
            image={member.avatar_img}
            name={member.username}
            location={member.location}
            interest={member.interest}
          />
        ))}
      </S.Wrapper>
    </>
  );
}

export default Members;
