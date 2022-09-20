import styled from 'styled-components';

import { Form as FormFormik } from 'formik';

export const Container = styled.div`
  display: flex;

  width: 100vw;
  min-height: 100vh;

  /* overflow: hidden; */

  @media (max-width: 1023px) {
    justify-content: center;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100vh;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const ImageLogin = styled.img`
  width: 100%;
  max-width: auto;
  height: 100%;
  max-width: auto;
`;

export const FormContainer = styled.div`
  width: 75vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 14rem;
    margin: 0 auto 1.5rem;
  }

  @media (max-width: 1023px) {
    width: 100%;
  }

  // pra ficar bonito no 4k ^^
  @media (min-width: 1249px) {
    width: 65vw;
  }

  @media (max-height: 800px) {
    height: 100%;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 90vw;
  max-width: 422px;
  height: 100%;
  max-height: 700px;
  margin: 0 auto 24px;
  padding: 40px;

  border-radius: 14px;
  box-shadow: 0 0 0 1px rgb(130 136 148 / 16%), 0 8px 10px -4px rgb(130 136 148 / 28%);
  background-color: #fff;

  .text-login {
    display: flex;
    flex-direction: column;
    /* justify-content: baseline; */
    width: 90vw;
    padding-left: 1rem;

    margin: 0 0 12px 10px;

    span {
      color: #2d3748;
      font-size: 1rem;
      font-weight: 500;
      text-align: left;
    }

    h2 {
      color: #1a202c;
      font-size: 1.5rem;
      font-weight: 700;
    }

    @media (min-width: 400px) {
      width: 100%;
      padding: 0;
    }
  }

  @media (min-width: 844px) {
    width: 100%;
  }
`;

export const Form = styled(FormFormik)`
  width: 120%;
  height: fit-content;

  @media (min-width: 400px) {
    width: 100%;

    /* input{
      width: 80%;
       margin: 0 auto;
    } */
  }
  /* background-color: black; */
`;
``;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;

  padding-top: 1rem;
  /* background-color: red; */

  button {
    margin-top: 0.5rem;
    height: 3rem;
    border: none;
  }

  @media (min-width: 400px) {
    margin: auto;
    width: 90%;
    button {
      margin: 0.6rem auto 0;
      width: 100%;
    }
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  width: 80vw;
  height: fit-content;
  padding: 1rem;
`;
