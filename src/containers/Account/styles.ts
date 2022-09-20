import styled from 'styled-components';

export const AccountContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  margin-bottom: 55px;

  .account_banner {
    width: 100%;
    height: 220px;

    background-size: cover;
  }

  .account_avatar {
    position: absolute;
    top: 150px;

    width: 140px;
    height: 140px;

    margin-left: 20px;

    border: 4px solid #fff;
    border-radius: 50%;
  }
`;

export const AccountHeader = styled.div`
  display: flex;
  align-items: center;

  margin-left: 180px;

  // background-color: red;

  .followers_container {
    display: flex;
    flex-direction: row;

    gap: 20px;
  }
`;

export const AccountMenu = styled.div`
  display: flex;
  width: 100%;
  height: 50px;

  gap: 20px;

  margin-top: 20px;
  padding: 0 1rem 10px;

  border-bottom: 1px solid #7d1d39;

  .selected {
    color: #7d1d39;
  }

  button {
    width: 100%;
    border: none;
    background-color: transparent;

    font-size: 1rem;
    font-weight: bold;
  }
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  padding-bottom: 0.4rem;

  background-color: #fff;
`;
