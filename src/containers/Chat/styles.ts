import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  padding: 0.6rem 0;

  width: 100vw;
  height: 100vh;

  background-color: #fff;
`;

export const ModalHeader = styled.div`
  display: flex;

  width: 100%;
  height: 54px;

  background-color: rgba(255, 255, 255, 0.8);

  button {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
  }

  .back_button {
    width: 60px;
  }

  .content_area {
    display: flex;
    align-items: center;
    width: 100%;

    font-size: 1.2rem;

    padding: 0 1rem;

    img {
      width: auto;
      max-width: 48px;
      height: auto;
      max-height: 48px;
      border-radius: 50%;
      margin-right: 1rem;
    }
  }

  .options_button {
    width: 60px;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  overflow-y: scroll;

  padding: 1rem;
`;

export const ModalFooter = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 70px;

  padding: 0 1rem;

  textarea {
    width: 100%;
    height: 50px;
    border-radius: 15px;
    border: 2px solid #7d1d39;
    padding: 1.1rem 3.4rem;
    resize: none;

    :focus {
      outline: none;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background-color: transparent;

    position: absolute;
    right: 35px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background-color: transparent;

    position: absolute;
    left: 35px;
  }
`;
