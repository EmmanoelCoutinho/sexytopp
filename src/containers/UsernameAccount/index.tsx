import { useState, useEffect, useContext } from 'react';

import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  serverTimestamp,
  setDoc
} from 'firebase/firestore';

import { useRouter } from 'next/router';

import FooterMenu from '../../components/FooterMenu';
import PostContent from '../../components/PostContent';
import MessageModal from './components/MessageModal';

import { db } from '../../services/firestore';

import { UserContext } from '../../contexts/UserContext';

import { AiOutlineComment } from 'react-icons/ai';
import { MdOutlineBlock } from 'react-icons/md';

import { AccountContainer, AccountHeader, AccountMenu, PostsContainer } from './styles';
import Header from '../../components/Header';

function UsernameAccount(props: any) {
  const isLogged = localStorage.getItem('isLoggedIn');
  const userUid = localStorage.getItem('userUid');
  const propsData = props.props;
  const size = '1.5rem';
  const color = '#7d1d39';
  const router = useRouter();
  const { userData } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentFollowState, setCurrentFollowState] = useState('Carrengando...');

  // console.log('propsData.uid' + propsData.uid); //lolla
  // console.log('userUid' + userUid); // marcos

  console.log(currentFollowState);

  const getUserPosts = async () => {
    const collRef = collection(db, 'users', propsData.uid, 'myPosts');

    onSnapshot(collRef, (snap: any) => {
      const data = snap.docs.map((doc: any) => doc.data());
      setPosts(data.reverse());
    });
  };

  const handleClick = async () => {
    const followersRef = doc(db, 'users', propsData.uid, 'followers', `${userUid}`);
    const followersReqRef = doc(db, 'users', propsData.uid, 'followRequests', `${userUid}`);

    switch (currentFollowState) {
      case 'Seguindo':
        await deleteDoc(followersRef);
        setCurrentFollowState('Seguir');
        break;

      case 'Solicitado':
        await deleteDoc(followersReqRef);
        setCurrentFollowState('Seguir');
        break;

      case 'Seguir':
        await setDoc(doc(db, 'users', propsData.uid, 'followRequests', userData.uid), {
          sendBy: userData.username,
          sendBy_img: userData.avatar_img,
          sendBy_uid: userData.uid,
          type: 'followRequest',
          accepted: false,
          createdAt: serverTimestamp()
        });
        setCurrentFollowState('Solicitado');
        break;
    }
  };

  const getFollowState = async () => {
    const followersRef = doc(db, 'users', propsData.uid, 'followers', `${userUid}`);
    const followersReqRef = doc(db, 'users', propsData.uid, 'followRequest', `${userUid}`);
    const followers = await getDoc(followersRef);

    switch (followers.exists()) {
      case true:
        setCurrentFollowState('Seguindo');
        break;

      case false: {
        const followersReq = await getDoc(followersReqRef);
        if (followersReq.exists()) {
          setCurrentFollowState('Solicitado');
        } else {
          setCurrentFollowState('Seguir');
        }
        break;
      }
    }
  };

  const notLogged = () => {
    router.push('/login');
  };

  useEffect(() => {
    getUserPosts();
    isLogged == 'true' ? getFollowState() : setCurrentFollowState('Seguir');
  }, []);

  return (
    <>
      {isLogged == 'true' ? null : <Header />}
      <AccountContainer>
        <div className="account_banner" style={{ backgroundImage: `url(${propsData.banner_img})` }}>
          <img className="account_avatar" src={propsData.avatar_img} alt="avatar" />
        </div>
        <AccountHeader>
          <div className="info_container">
            <h1>{propsData.username}</h1>
            <div className="followers_container">
              <p>{propsData.following} Seguindo</p>
              <p>{propsData.followers} Seguidores</p>
            </div>
            <div className="interaction_container">
              {isLogged === 'true' ? (
                <button className={`button-follow ${currentFollowState}`} onClick={handleClick}>
                  <p>{currentFollowState}</p>
                </button>
              ) : (
                <button className={`button-follow ${currentFollowState}`} onClick={notLogged}>
                  <p>
                    {currentFollowState == 'Seguindo' ? 'Deixar de seguir' : 'Cancelar Solicitação'}
                  </p>
                </button>
              )}
              <button onClick={() => setModalIsOpen(!modalIsOpen)}>
                <AiOutlineComment size={size} color={color} />
              </button>
              <button>
                <MdOutlineBlock size={size} color={color} />
              </button>
            </div>
          </div>
        </AccountHeader>
        <AccountMenu>
          <button className="selected">Posts</button>
          <button>Mídias</button>
        </AccountMenu>
        <PostsContainer>
          {posts &&
            posts.map((post: any) => (
              <PostContent
                key={post.post_id}
                uid={post.sendBy_uid}
                postId={post.post_id}
                postContent={post.post_content}
                postLikes={post.post_likes}
                postComments={post.post_comments}
                userAvatar={propsData.avatar_img}
                userName={propsData.username}
              />
            ))}
        </PostsContainer>
      </AccountContainer>
      {modalIsOpen && (
        <MessageModal
          isOpen={modalIsOpen}
          setIsOpen={setModalIsOpen}
          sendTo="MarcosBelmont"
          sendToUid={propsData.uid}
        />
      )}
      <FooterMenu />
    </>
  );
}

export default UsernameAccount;
