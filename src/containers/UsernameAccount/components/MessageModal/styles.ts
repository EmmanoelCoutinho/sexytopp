import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  z-index: 3;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 90vw;
  max-width: 500px;
  height: fit-content;

  border-radius: 14px;

  background-color: #fff;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 18px;
  color: #7d1d39;

  width: 100%;
  height: 50px;

  border-bottom: 1px solid #7d1d39;

  padding: 0 12px;
`;

export const Body = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;

  span {
    font-size: 14px;
    margin-bottom: 20px;

    a {
      color: #7d1d39;
    }
  }

  label {
    font-size: 16px;
  }

  textarea {
    resize: none;
    margin: 4px 0 20px;
    border: none;
    border-radius: 14px;
    padding: 12px;
    background-color: #ececec;

    font-size: 16px;

    :focus {
      outline: none;
    }
  }

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
      color: #7d1d39;
      font-size: 14px;
      font-weight: bold;
      border: 2px solid #7d1d39;
      padding: 8px 12px;
      border-radius: 10px;
    }
  }
`;
