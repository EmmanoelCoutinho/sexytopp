import { useContext, useEffect, useState } from 'react';

import { collection, doc, onSnapshot, setDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../services/firestore';

import { UserContext } from '../../contexts/UserContext';

import { RiImageAddLine } from 'react-icons/ri';

import PostContent from '../../components/PostContent';

import { PostContainer, PostsContainer } from './styles';

interface Idata {
  id: number;
  avatar_img: string;
  post_text: string;
  likes: number;
  comments: [];
}

function FantasyFeed() {
  const { userData, posts } = useContext(UserContext);

  const [postValue, setPostValue] = useState('vrau');
  const [following, setFollowing] = useState([]);
  const [followingPosts, setFollowingPosts] = useState([]);
  const [followers, setFollowers] = useState([]);

  const userUid = localStorage.getItem('userUid');

  const getFollowers = async () => {
    const collRef = collection(db, 'users', `${userUid}`, 'followers');

    onSnapshot(collRef, (snap: any) => {
      const data = snap.docs.map((doc: any) => doc.data());
      setFollowers(data);
    });
  };

  const getFollowing = async () => {
    const collRef = collection(db, 'users', `${userUid}`, 'following');

    onSnapshot(collRef, (snap: any) => {
      const data = snap.docs.map((doc: any) => doc.data());

      const getFollowingPosts = async (data: []) => {
        data.map((following: any) => {
          const collRef = collection(db, 'users', following.uid, 'myPosts');

          onSnapshot(collRef, (snap: any) => {
            const data = snap.docs.map((doc: any) => doc.data());
            setFollowingPosts(data);
          });
        });
      };
      getFollowingPosts(data);
    });
  };

  const sendPostToFollowers = async () => {
    followers.forEach(async (follower: any) => {
      const collRefPost = doc(
        db,
        'users',
        follower.uid,
        'followingPosts',
        `${postValue.substring(0, 30)}`
      );

      await setDoc(collRefPost, {
        post_id: posts == undefined ? 1 : ++posts.length,
        sendBy: userData.username,
        sendBy_img: userData.avatar_img,
        sendBy_uid: userData.uid,
        post_comments: 0,
        post_likes: 0,
        post_content: postValue,
        timestampLocation: Timestamp.now()
        // timestamp: serverTimestamp()
      });
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    e.target.reset();

    const docRef = doc(db, 'users', userData.uid, 'myPosts', `${postValue.substring(0, 30)}`);

    await setDoc(docRef, {
      post_id: posts == undefined ? 1 : ++posts.length,
      sendBy: userData.username,
      sendBy_img: userData.avatar_img,
      sendBy_uid: userData.uid,
      post_likes: 0,
      post_content: postValue,
      timestampLocation: Timestamp.now()
      // timestamp: serverTimestamp()
    });
    sendPostToFollowers();
  };

  const onEnterPress = async (e: any) => {
    const key = e.keyCode ? e.keyCode : e.which;
    if (key == 13) {
      e.preventDefault();
      e.target.value = e.target.defaultValue;

      const collRef = doc(db, 'users', userData.uid, 'myPosts', `${postValue.substring(0, 30)}`);

      await setDoc(collRef, {
        post_id: posts == undefined ? 1 : ++posts.length,
        sendBy: userData.username,
        sendBy_img: userData.avatar_img,
        sendBy_uid: userData.uid,
        post_likes: 0,
        post_content: postValue,
        timestampLocation: Timestamp.now()
        // timestamp: serverTimestamp()
      });
      sendPostToFollowers();
    }
  };

  useEffect(() => {
    getFollowing();
    getFollowers();
  }, []);

  return (
    <>
      <PostContainer onSubmit={handleSubmit} onKeyDown={onEnterPress}>
        <div>
          {/* <Link href="/perfil"> */}
          <a href="/profile">
            <img src={userData.avatar_img} alt="imagem de avatar" />
          </a>
          {/* </Link> */}
          <textarea
            placeholder="Qual a safadeza de hoje? 😈"
            onChange={(e) => setPostValue(e.target.value)}
          />
        </div>
        <div>
          <span>
            <RiImageAddLine size="20px" color="#7d1d39" />
          </span>
          <button type="submit">Enviar</button>
        </div>
      </PostContainer>
      <PostsContainer>
        {followingPosts.map((post: any) => (
          <PostContent
            key={post.post_id}
            uid={post.sendBy_uid}
            postId={post.post_id}
            postContent={post.post_content}
            postLikes={post.post_likes}
            postComments={post.post_comments}
            userAvatar={post.sendBy_img}
            userName={post.sendBy}
          />
        ))}
      </PostsContainer>
    </>
  );
}

export default FantasyFeed;
