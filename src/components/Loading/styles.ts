import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background-color: #fff;

  z-index: 5;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 150px;
    height: 150px;

    border-radius: 50%;
    border: 6px solid white;
    border-left: 6px solid #7d1d39;
    border-right: 6px solid #7d1d39;

    animation: spin 0.6s linear infinite;

    /* background-color: red; */
  }

  div {
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);

    font-size: 20px;
    color: #7d1d39;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
