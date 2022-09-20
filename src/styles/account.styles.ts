import styled from 'styled-components';

export const AccountContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  .baubau {
    position: absolute;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 80px;

    background-color: inherit;

    z-index: 2;

    p {
      font-size: 1.5rem;
      color: #fff;
    }
  }

  .header-img {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 450px;
    background-position: center;
    background-repeat: no-repeat, repeat;
    h2 {
      font-size: 2.4rem;
      z-index: 2;
      color: #ffffff;
      position: absolute;
      bottom: 90px;
    }

    span {
      font-size: 1rem;
      z-index: 2;
      color: #fff;
      position: absolute;
      bottom: 70px;
    }
  }
`;

export const OverLay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(69, 71, 72, 0.8);
  z-index: 1;
`;

export const WrapperHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .button-follow {
    width: fit-content;
    height: 40px;

    font-size: 16px;
    color: #7d1d39;

    cursor: pointer;

    border: 2px solid #7d1d39;
    border-radius: 15px;

    background-color: inherit;

    padding: 0 2.5rem;
  }

  img {
    position: absolute;
    z-index: 2;
    top: 100px;
    width: 200px;
    height: 200px;
    border-radius: 9999px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 60px;

    /* background-color: rgba(125, 29, 57, 0.2); */
    padding-left: 2rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 40px;
      height: 40px;

      cursor: pointer;

      border: 2px solid #7d1d39;
      border-radius: 50%;

      /* background-color: blue; */

      margin-right: 1rem;
    }
  }

  .Seguindo {
    background-color: #7d1d39;
    color: #fff;

    p {
      display: none;
    }

    ::after {
      content: 'Seguindo';
    }

    :hover {
       {
        border: 2px solid #7d1d39;
        background-color: #fff;
        color: #7d1d39;
      }

      p {
        display: block;
      }
      :: after {
        display: none;
      }
    }
  }

  .Solicitado {
    background-color: #7d1d39;
    color: #fff;

    p {
      display: none;
    }

    ::after {
      content: 'Solicitado';
    }

    :hover {
       {
        border: 2px solid #7d1d39;
        background-color: #fff;
        color: #7d1d39;
      }

      p {
        display: block;
      }
      :: after {
        display: none;
      }
    }
  }

  .Seguir {
    color: #7d1d39;
    baksground-color: #fff;

    p {
      display: none;
    }

    ::after {
      content: 'Seguir';
    }

    :hover {
      border: 2px solid #7d1d39;
      background-color: #7d1d39;
      color: #fff;
    }
  }
`;

export const WrapperMenu = styled.div`
  display: flex;
  flex-direction: column;

  .menu-drawer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 2px solid #7d1d39;

    width: 100%;
    padding: 14px 12px;
    span {
      font-weight: 700;
      font-size: 18px;
      color: #7d1d39;
    }
    img {
      width: 10px;
    }
  }

  nav {
    margin-left: 24px;
    margin-top: 12px;

    ul {
      display: flex;
      flex-direction: column;
      list-style: none;
      display: flex;
      gap: 13px;
      font-size: 16px;
      font-weight: 700;
      color: #3d404a;
    }
  }

  .active {
    color: #7d1d39;
  }

  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;

    height: 45px;

    .menu-drawer {
      display: none;
    }

    nav {
      ul {
        flex-direction: row;
      }
    }
  }
`;

export const WrapperContent = styled.div`
  padding: 16px;
  margin-top: 20px;
  max-width: 920px;
  input {
    width: 100%;
    height: 45px;
    font-size: 14px;
    padding: 25px;
    border: none;
    border-radius: 0.3rem;
    border-width: 14px;
    border-style: solid;
    border-color: rgb(125, 29, 57, 0.2);
    outline: none;
  }

  div.item-list-tabs {
    display: flex;
    flex-direction: column;

    margin-top: 16px;
    height: 230px;
    border: 1px solid #e8e8e9;
    border-radius: 5px;
    padding: 3px;
    max-width: 482px;

    button.group-button-icon {
      display: flex;
      align-items: center;
      border-radius: 5px;
      position: relative;
      border: none;

      border: none;
      width: 100%;

      background-color: transparent;
      color: #454748;
      font-size: 15px;
      padding: 12px;
      padding-left: 30px;

      img {
        width: 14px;
        position: absolute;
        left: 5px;
      }

      :focus {
        background-color: #7d1d39;
        padding-left: 30px;

        color: #fff;
      }
    }

    @media (min-width: 768px) {
      flex-direction: row;
      height: 45px;
      button.group-button-icon {
        width: 95px;
      }
    }
  }

  .media-user {
    display: flex;
    align-items: center;
    margin-top: 45px;

    img {
      margin-right: 10px;
    }

    span {
      color: #72808e;
      font-size: 18px;
      font-weight: 400;
    }
  }
`;
