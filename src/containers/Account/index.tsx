import { useState, useContext } from 'react';

import FooterMenu from '../../components/FooterMenu';

import PostContent from '../../components/PostContent';

import { UserContext } from '../../contexts/UserContext';

import { AccountContainer, AccountHeader, AccountMenu, PostsContainer } from './styles';

function Account() {
  const { userData, posts } = useContext(UserContext);

  return (
    <>
      <AccountContainer>
        <div className="account_banner" style={{ backgroundImage: `url(${userData.banner_img})` }}>
          <img className="account_avatar" src={userData.avatar_img} alt="avatar" />
        </div>
        <AccountHeader>
          <div className="info_container">
            <h1>{userData.username}</h1>
            <div className="followers_container">
              <p>{userData.following} Seguindo</p>
              <p>{userData.followers} Seguidores</p>
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
                userAvatar={userData.avatar_img}
                userName={userData.username}
              />
            ))}
        </PostsContainer>
      </AccountContainer>
      <FooterMenu />
    </>
  );
}

export default Account;
