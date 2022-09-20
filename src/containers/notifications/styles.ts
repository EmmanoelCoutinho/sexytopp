import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const NotfContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  min-height: 100px;

  // background-color: black;

  border-bottom: 1px solid #7d1d39;

  .buttons {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .notf-left {
    display: flex;
    justify-content: center;

    padding: 8px;

    img {
      width: auto;
      max-width: 48px;
      height: auto;
      max-height: 48px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .notf-right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 100%;

    padding: 8px;

    // background-color: yellow;

    .post-content {
      margin: 1.2rem 0;
    }

    a {
      margin-right: 8px;
    }

    button {
      width: 80px;
      height: 30px;

      border: none;
      border-radius: 5px;

      background-color: #7d1d39;
      color: #fff;

      margin-right: 8px;
    }

    button: last-of-type {
      background-color: #fff;
      color: #7d1d39;
      border: 1px solid #7d1d39;
    }
  }
`;

export const EmptyNotf = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #aaa;
  font-size: 1.5rem;

  margin: auto;
`;
