import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;

  background-color: rgba(0, 0, 0, 0.5);

  z-index: 4;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 95%;
  height: 500px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 1px solid rgb(232, 232, 233);
  border-radius: 4px;

  background-color: #fff;

  @media (min-width: 768px) {
    width: 600px;
  }

  @media (min-width: 1440px) {
    width: 720px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 90%;

  .closeButton {
    cursor: pointer;
  }

  /* background-color: green; */
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;

  padding: 0 20px 1.2rem;

  label {
    font-size: 16px;
    font-weight: 600;
    color: rgb(114, 128, 142);

    margin-bottom: 8px;
  }

  input {
    height: 50px;

    font-size: 16px;
    border: 2px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;

    padding: 1rem;
    margin-bottom: 1rem;
  }

  div {
    input {
      height: auto;
      margin: 0 1rem 0 0;
    }
  }
`;

export const ErrorNotification = styled.div`
  width: 100%;

  border: 2px solid #7d1d39;
  border-radius: 4px;

  background-color: #7d1d3959;
  color: #7d1d39;

  margin-top: 10px;
  padding: 5px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  /* background-color: blue; */

  button {
    width: 90%;
    height: 50px;

    font-size: 14px;
    border: 10px solid #7d1d3959;
    border-radius: 4px;

    text-transform: uppercase;

    margin: 0 auto 2.5rem;
    padding: 0;

    background-color: #7d1d39;
    color: #fff;
  }

  div {
    display: flex;
    justify-content: space-between;

    width: 100%;

    /* background-color: yellow; */

    button {
      max-width: 144px;

      font-size: 14px;
      font-weight: 600;
      color: rgb(114, 128, 142);

      border: none;
      background-color: inherit;

      margin: 0;

      @media (min-width: 768px) {
        font-size: 16px;
      }
    }

    button:last-child {
      @media (min-width: 768px) {
        min-width: 200px;
      }
    }
  }
`;
