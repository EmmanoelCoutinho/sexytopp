import styled from 'styled-components';

export const PostContainer = styled.form`
  display: flex;
  flex-direction: column;

  border-bottom: 1px solid #7d1d39;
  // border-radius: 0 0 15px 15px;
  // box-shadow: 0px 5px 5px #a1a29c;

  width: 100%;
  height: 100%;
  max-height: 142px;

  /* background-color: red; */
  /* background-color: inherit; */

  padding: 1rem 1rem;

  /* margin: 2.5rem 0 4rem; */

  div:first-of-type {
    display: flex;
    align-items: flex-start;

    height: 60px;
    /* background-color: yellow; */

    padding-bottom: 4rem;
    /* background-color: red; */

    img {
      max-width: 60px;
      min-height: 60px;
      width: auto;
      height: auto;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 8px;
    }

    textarea {
      display: flex;

      width: 100%;
      height: 100%;
      min-height: 60px;

      font-size: 16px;
      font-weight: lighter;

      resize: none;

      border: none;
      background-color: inherit;
      color: #72808e;

      padding: 1rem 11px;

      &:focus {
        outline: none;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  div:last-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* background-color: blue; */

    padding: 0rem 1rem;
    margin-top: 1rem;

    button {
      height: 40px;
      width: 80px;

      font-size: 12px;
      /* font-weight: lighter; */
      text-transform: uppercase;

      background-color: #7d1d39;
      color: #fff;

      border: none;
      border-radius: 5px;
    }
  }
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 1rem 0rem 0.4rem;

  background-color: inherit;
`;

//caso não haja posts

export const NoPosts = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 500px;
  /* background-color: red; */

  font-size: 36px;
  text-align: center;

  margin-top: 5rem;
  padding: 0 2rem;

  a {
    color: #fff;
  }
`;
