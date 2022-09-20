import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';

import {
  doc,
  updateDoc,
  getDoc,
  setDoc,
  Timestamp,
  deleteDoc,
  onSnapshot,
  collection
} from 'firebase/firestore';
import { db } from '../../services/firestore';

import { MdFavoriteBorder } from 'react-icons/md';
// import { MdMoreHoriz } from 'react-icons/md';
import { BiCommentDetail } from 'react-icons/bi';
import { GiZeusSword } from 'react-icons/gi';
import { AiFillHeart } from 'react-icons/ai';
// import { IoCloseCircleSharp } from 'react-icons/io5';
import { RiImageAddLine } from 'react-icons/ri';

import { useRouter } from 'next/router';

import {
  Container,
  ImageContainer,
  Main,
  PostInfosContainer,
  UserInfosContainer,
  UserPostContainer,
  // ModalOverlay,
  // ModalSettingsContainer,
  // ModalImageContainer,
  // ModalInfoContainer,
  CommentsContainer,
  CommentsForm,
  CommentsList
} from './styles';

interface IPostContentProps {
  userName: string;
  postId?: number;
  userAvatar: string;
  postContent: string;
  postImageUrl?: string;
  postLikes: number;
  postComments: number;
  uid: string;
  comments?: [];
}

interface Icomment {
  avatar_url: string;
  url_image: string;
  content: string;
  likes: number;
  username: string;
}

function PostContent({
  userName,
  postImageUrl,
  postContent,
  postLikes,
  postComments,
  userAvatar,
  uid,
  postId,
  comments
}: IPostContentProps) {
  const isLogged = localStorage.getItem('isLoggedIn');
  const userUid = localStorage.getItem('userUid');

  const router = useRouter();

  const { userData, posts } = useContext(UserContext);

  const [commentsShow, setCommentsShow] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [postValue, setPostValue] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const notSignedIn = () => {
    router.push('/login', undefined, { shallow: true });
  };

  const updatingLikes = async () => {
    const postLikesRef = doc(db, 'users', uid, 'myPosts', postContent);
    const likedRef = doc(db, 'users', uid, 'myPosts', postContent, 'likedBy', userData.uid);

    const likesData = await getDoc(likedRef);

    if (!likesData.exists()) {
      await setDoc(likedRef, {
        username: userData.username,
        timestamp: Timestamp.now()
      });
      await updateDoc(postLikesRef, {
        post_likes: ++postLikes
      });
      setIsLiked(true);
    } else {
      await deleteDoc(likedRef);
      await updateDoc(postLikesRef, {
        post_likes: --postLikes
      });
      setIsLiked(false);
    }
  };

  const isLikedByMe = async () => {
    const likedRef = doc(db, 'users', uid, 'myPosts', postContent, 'likedBy', `${userUid}`);
    const likesData = await getDoc(likedRef);

    if (likesData.exists()) {
      setIsLiked(true);
    }
  };

  const handlePostComment = async (e: any) => {
    e.preventDefault();
    e.target.reset();

    const docRef = doc(
      db,
      'users',
      uid,
      'myPosts',
      postContent,
      'comments',
      `${postValue}:${userData.uid}`
    );

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
  };

  const getComments = async () => {
    const commentsRef = collection(db, 'users', uid, 'myPosts', `${postContent}`, 'comments');

    onSnapshot(commentsRef, (snap: any) => {
      const data = snap.docs.map((doc: any) => doc.data());
      setCommentsList(data);
    });
  };

  useEffect(() => {
    isLogged == 'true' ? isLikedByMe() : null;
    getComments();
  }, []);

  return (
    <>
      <Container
        style={
          commentsShow
            ? {
                margin: 'none',
                borderBottom: 'none',
                borderRadius: '12px 12px 0 0'
              }
            : {
                marginBottom: '0.8rem'
              }
        }>
        <ImageContainer>
          <img src={userAvatar} alt={`avatar do usuário ${userName}`} />
        </ImageContainer>
        <Main>
          <UserInfosContainer>
            <span>{userName}</span>
            <GiZeusSword color="#7d1d39" />
          </UserInfosContainer>
          <UserPostContainer>
            {postImageUrl && <img src={postImageUrl} />}
            <p>{postContent}</p>
          </UserPostContainer>
          <PostInfosContainer>
            <div onClick={isLogged == 'true' ? updatingLikes : notSignedIn}>
              {isLiked ? <AiFillHeart color="#7d1d39" /> : <MdFavoriteBorder color="#7d1d39" />}
              <span>{postLikes}</span>
            </div>
            <div>
              <BiCommentDetail color="#7d1d39" onClick={() => setCommentsShow(!commentsShow)} />
              <span>{commentsList.length}</span>
            </div>
          </PostInfosContainer>
        </Main>
      </Container>
      {commentsShow ? (
        <CommentsContainer>
          <span className="comments">Comentários</span>
          {commentsList.map((comment: any) => (
            <CommentsList>
              <ImageContainer>
                <img src={comment.sendBy_img} alt={`avatar do usuário ${comment.sendBy}`} />
              </ImageContainer>
              <Main>
                <UserInfosContainer>
                  <span>{comment.sendBy}</span>
                  <GiZeusSword color="#7d1d39" />
                </UserInfosContainer>
                <UserPostContainer>
                  {comment.url_image && <img src={comment.url_image} />}
                  <p>{comment.post_content}</p>
                </UserPostContainer>
                <PostInfosContainer>
                  <div>
                    <MdFavoriteBorder color="#7d1d39" />
                    <span>{comment.post_likes}</span>
                  </div>
                  <div>
                    <BiCommentDetail color="#7d1d39" />
                    <span>{comment.post_comments}</span>
                  </div>
                </PostInfosContainer>
              </Main>
            </CommentsList>
          ))}
          {isLogged == 'true' ? (
            <CommentsForm onSubmit={handlePostComment}>
              <textarea
                placeholder="Escreva um comentário"
                value={postValue}
                onChange={(e) => setPostValue(e.target.value)}
              />
              <button type="submit" value="Enviar" />
            </CommentsForm>
          ) : (
            <span className="notLogged">
              É nescessario estar logado para comentar. <a href="/login">Faça login aqui!</a>
            </span>
          )}
        </CommentsContainer>
      ) : null}
    </>
  );
}

export default PostContent;

// function ModalShowImage() {
//   return (
//     <>
//       <ModalOverlay>
//         <ModalSettingsContainer>
//           <IoCloseCircleSharp color="#fff" />
//           <MdMoreHoriz color="#fff" />
//         </ModalSettingsContainer>
//         <ModalImageContainer>
//           <Image
//             src="/assets/images/utils/avatar.jpg"
//             width={360}
//             height={360}
//             layout="responsive"
//           />
//         </ModalImageContainer>
//         <ModalInfoContainer>sadjdasijfasifhjasij</ModalInfoContainer>
//       </ModalOverlay>
//     </>
//   );
// }
