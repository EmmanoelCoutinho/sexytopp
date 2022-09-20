import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;

  max-width: 100vw;
  height: 100px;

  background-color: #fff;
  border-bottom: 1px solid #7d1d39;

  padding: 10px;

  .left {
    width: 60px;
    height: 100%;

    img {
      max-width: 60px;
      min-height: 60px;
      width: auto;
      height: auto;

      object-fit: cover;
      border-radius: 50%;
    }
  }

  .middle {
    display: flex;
    flex-direction: column;
    align-items: center;

    // background-color: blue;

    width: 100%;
    max-width: 220px;
    height: 100%;

    gap: 20px;

    strong {
      font-size: 19px;

      color: #7d1d39;
    }

    .specs {
      display: flex;
      justify-content: center;
      gap: 20px;
      padding: 0 10px;

      width: 100%;
    }

    span: last-child {
      white-space: nowrap;
    }
  }

  .right {
    display: flex;
    justify-content: space-between;
    aling-items: center;
    // background-color: red;

    position: relative;

    button {
      width: fit-content;
      height: fit-content;

      border: none;
      border-radius: 10px;
      background-color: #7d1d39;
      color: #fff;

      padding: 10px;
    }

    svg {
      margin-top: 8px;
    }
  }
`;
