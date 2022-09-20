import { useContext } from 'react';

import { UserContext } from '../../contexts/UserContext';

import { deleteDoc, doc, getDoc, setDoc, Timestamp, updateDoc } from 'firebase/firestore';
import { db } from '../../services/firestore';

import { Container, EmptyNotf, NotfContainer } from './styles';

interface Inotf {
  sendBy: string;
  sendBy_img: string;
  sendBy_uid: string;
  timeStamp: any;
}

function Notifications() {
  const { notifications, userData } = useContext(UserContext);
  const uid = localStorage.getItem('userUid');

  const FriendRequest = ({ sendBy_img, sendBy, sendBy_uid, timeStamp }: Inotf) => {
    const handleAccept = async () => {
      // deleta o request nas notificações
      await deleteDoc(doc(db, 'users', `${uid}`, 'followRequests', sendBy_uid));

      // adiciona o seguidor no seu followers
      await setDoc(doc(db, 'users', `${uid}`, 'followers', sendBy_uid), {
        uid: sendBy_uid,
        avatar_img: sendBy_img,
        username: sendBy,
        createdAt: Timestamp.now()
      });

      // atualiza o numero de seguidores
      await updateDoc(doc(db, 'users', `${uid}`), {
        followers: ++userData.followers
      });

      // adiciona a nova pessoa que você está seguindo
      await setDoc(doc(db, 'users', `${sendBy_uid}`, 'following', `${uid}`), {
        uid: uid,
        avatar_img: userData.avatar_img,
        username: userData.username,
        createdAt: Timestamp.now()
      });

      // atualiza o numero de pessoas que o usuario emissor está seguindo
      const docSnap = await getDoc(doc(db, 'users', `${sendBy_uid}`));

      if (docSnap.exists()) {
        const data: any = docSnap.data();
        await updateDoc(doc(db, 'users', `${sendBy_uid}`), {
          following: ++data.following
        });
      }
    };

    return (
      <NotfContainer>
        <div className="notf-left">
          <img src={sendBy_img} alt={`avatar de ${sendBy}`} />
        </div>
        <div className="notf-right">
          <span className="notf-title">
            <strong>{sendBy}</strong> enviou solicitação de amizade
          </span>
          <span className="notf-date">Há 2 horas</span>
          <div className="buttons">
            <button onClick={handleAccept}>Aceitar</button>
            <button>Recusar</button>
            <a href={`/profile/${sendBy}`}>Ver Perfil</a>
          </div>
        </div>
      </NotfContainer>
    );
  };

  const Mention = () => {
    return (
      <NotfContainer>
        <div className="notf-left">
          {/* <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt={`avatar de ${sendBy}`} /> */}
        </div>
        <div className="notf-right">
          <span className="notf-title">
            <strong>Fulano</strong> mencionou você em uma postagem
          </span>
          <span className="notf-date">Há 2 horas</span>
          <p className="post-content">Saudades da @ciclano</p>
          <div className="buttons">
            <a href="">Ver Perfil</a>
            <a href="">Ver a postagem</a>
          </div>
        </div>
      </NotfContainer>
    );
  };

  const Massage = () => {
    return (
      <NotfContainer>
        <div className="notf-left">
          {/* <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt={`avatar de ${sendBy}`} /> */}
        </div>
        <div className="notf-right">
          <span className="notf-title">
            <strong>Fulano</strong> enviou uma nova mensagem
          </span>
          <span className="notf-date">Há 2 horas</span>
          <p className="post-content">Bora marcar pra sexta a noite?</p>
          <div className="buttons">
            <a href="">Ler mensagem</a>
            <a href="">Marcar como lida</a>
            <a href="">Ver Perfil</a>
          </div>
        </div>
      </NotfContainer>
    );
  };
  return (
    <>
      {notifications.lenght > 0 ? (
        <EmptyNotf>Você não possui novas notificações</EmptyNotf>
      ) : (
        <Container>
          {notifications.map((notf: any) => (
            <FriendRequest
              key={notf.sendBy_uid}
              sendBy={notf.sendBy}
              sendBy_img={notf.sendBy_img}
              timeStamp={notf.createdAt}
              sendBy_uid={notf.sendBy_uid}
            />
          ))}
        </Container>
      )}
    </>
  );
}

export default Notifications;
