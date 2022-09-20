import styled from 'styled-components';

import { PostContainer } from '../../containers/Feed/styles';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  min-height: fit-content;

  border-bottom: 1px solid #7d1d39;

  padding: 0.5rem;
`;

export const ImageContainer = styled.div`
  min-width: 50px;
  min-height: 50px;

  padding-top: 0.5rem;
  margin-right: 1rem;

  /* background-color: black; */

  z-index: unset;

  img {
    max-width: 48px;
    max-height: 48px;
    min-height: 48px;
    height: auto;
    width: auto;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  /* margin-left: 1rem; */

  // background-color: red;
`;

export const UserInfosContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 30px;

  span {
    margin-right: 0.5rem;
  }

  // background-color: purple;

  /* margin-bottom: 1rem; */
`;

export const UserPostContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;

  gap: 1rem;

  font-family: sans-serif;

  text-align: left;

  /* background-color: yellow; */

  img {
    position: relative;
    margin-right: 5rem;

    width: auto;
    max-width: 860px;
    height: auto;
    max-height: 500px;

    border-radius: 12px;
  }

  p {
    font-size: 14.4px;
    font-weight: lighter;

    color: #72808e;
  }
`;

export const PostInfosContainer = styled.div`
  display: flex;
  /* align-items: center; */

  height: 20px;
  width: 100%;

  color: #7d1d39;

  margin-top: 0.5rem;

  /* background-color: blue; */

  div {
    display: flex;
    align-items: center;

    margin-right: 2rem;

    cursor: pointer;
    font-size: 0.8rem;

    span {
      margin-left: 0.3rem;
    }
  }
`;

// modal styles

export const ModalSettingsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 10vh;
`;

export const ModalOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(125, 29, 57, 0.4);

  z-index: 4;
`;

export const ModalImageContainer = styled.div`
  display: flex;

  width: 100vw;
  height: 100%;

  overflow: hidden;

  background-color: white;

  img {
    width: auto;
    max-width: 100vw;
    height: auto;
    max-height: 100%;
  }
`;

export const ModalInfoContainer = styled.div`
  display: flex;

  width: 100%;
  height: 20vh;

  // background-color: red;
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  // border-top: 1px solid #7d1d39;
  // background-color: #efefef;
  width: 100%;
  height: 100%;
  margin: 0;

  img {
    width: auto;
    max-width: 48px;
    height: auto;
    max-height: 48px;
    border-radius: 50%;
  }

  div:last-child {
    border-bottom: none;
  }

  .comments {
    color: #efefef;
    background-color: #7d1d39;
    border: 1px solid #7d1d39;
    padding: 0.5rem;
  }

  .notLogged {
    color: #efefef;
    background-color: #7d1d39;
    border: 1px solid #7d1d39;
    padding: 0.5rem;
    border-radius: 0 0 10px 10px;
    margin-bottom: 0.8rem;

    a {
      color: pink;
    }
  }
`;

export const CommentsForm = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  border: none;
  // border-radius: none !important;
  margin-bottom: 0.8rem;
  // background-color: pink;

  textarea {
    width: 100%;
    height: 100%;
    min-height: 50px;

    background-color: #7d1d39;
    border: none;

    padding: 1rem;

    color: #efefef;
    font-size: 14.4px;
    ::placeholder {
      color: #efefef;
      font-size: 14.4px;
    }

    :focus {
      outline: none;
    }
  }
`;

export const CommentsList = styled(Container)`
  margin: 0;
  border-radius: 0;
  border-top: none;
  background-color: inherit;
  box-shadow: none;
`;
