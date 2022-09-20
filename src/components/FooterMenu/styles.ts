import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: #fff;

  width: 100vw;
  height: 55px;

  position: fixed;
  bottom: 0;

  padding: 0 1rem;

  border-top: 1px solid #eee;
  border-radius: 15px 15px 0 0;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    background-color: transparent;

    width: 60px;
    height: 100%;

    /* background-color: yellow; */
  }

  @media (min-width: 500px) {
    display: none;
  }

  .notification {
    position: absolute;
    margin-left: 16px;
    margin-bottom: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 18px;
    height: 18px;

    background-color: #fff;
    border: 2px solid #7d1d39;

    font-size: 11px;
    font-weight: bold;

    border-radius: 50%;
  }
`;
