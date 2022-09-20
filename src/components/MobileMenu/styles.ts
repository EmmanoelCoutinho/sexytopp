import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;

  width: 80%;
  height: auto;

  /* background-color: inherit; */
  /* box-shadow: 0px 5px 5px #a1a29c; */
  border-radius: 12px;

  cursor: pointer;

  img {
    max-width: 35px;
    min-height: 35px;
    width: auto;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 16px;
  }

  @media (min-width: 500px) {
    display: none;
  }
`;

export const Overlay = styled.div`
  width: 40%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  // justify-content: center;

  position: fixed;
  top: 0;
  right: 0;

  // background-color: blue;

  width: 100vw;
  height: 100vh;

  font-size: 1.4rem;
`;

export const ModalSettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 60%;
  height: 100vh;

  background-color: #fff;
  color: #72808e;

  padding: 60px 10px 0;

  .page-title {
    position: absolute;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 60%;
    height: 50px;

    padding: 0 10px;
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    width: 100%;

    img {
      max-width: 35px;
      min-height: 35px;
      width: auto;
      height: auto;
      border-radius: 50%;
      object-fit: cover;
    }

    h3 {
      font-size: 1.3rem;
      margin-top: 10px;
    }
    h4 {
      font-size: 1.2rem;
      font-weight: normal;
    }

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;

      margin-top: 10px;

      span {
        font-size: 1rem;
        font-weight: 100;

        strong {
          font-size: 1.2rem;
          margin-right: 3px;
          color: #7d1d39;
        }
      }
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: fit-content;

    margin-top: 20px;

    button {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 5px;

      width: 100%;
      height: 40px;

      border: none;
      background-color: inherit;

      font-size: 1.2rem;
      font-weight: bold;
    }
  }
`;
