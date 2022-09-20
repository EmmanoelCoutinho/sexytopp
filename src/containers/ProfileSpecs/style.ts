import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  height: fit-content;
  padding: 1rem;
  padding-top: 0;

  background-color: #7d1d39;
  border-radius: 0.5rem;

  margin: auto;
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;

  margin-top: 1rem;

  color: white;

  h3 {
    margin-bottom: 8px;
  }

  select {
    height: 2rem;
    color: #7d1d39;

    margin-top: 1rem;

    outline: none;
  }

  option {
    color: #7d1d39;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;

  margin-top: 1rem;

  img {
    width: 199px;
    opacity: 0.8;
  }

  .input {
    position: absolute;
    width: 199px;

    margin-top: 100px;

    span {
      margin: 0 12px;
    }
  }
`;
