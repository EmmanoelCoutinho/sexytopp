import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 80px;

  :hover {
  }
`;

export const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 15%;
  height: 100%;

  img {
    width: auto;
    height: auto;
    max-width: 48px;
    max-height: 48px;

    border-radius: 50%;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 45%;
  height: 100%;

  padding-top: 1rem;

  strong {
    font-size: 1.1rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 40%;
  height: 20px;

  padding: 1rem 1rem 0 0;

  div {
    display: flex;

    width: 10px;
    height: 10px;

    border-radius: 50%;
    background-color: #7d1d39;

    margin-left: 0.5rem;
  }
`;
