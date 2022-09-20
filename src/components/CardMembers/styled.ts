import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 250px;
  height: 250px;
  border-radius: 10px;
  border: solid 1px #e5e5e5;
  box-shadow: 0 20px 20px rgb(0 0 0 / 4%);

  gap: 1rem;

  ovelflow: hidden;

  &:hover {
    transition: all 0.4s ease;
    transform: translate3d(0, -6px, 0);
  }
`;

export const Imagem = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  min-height: 50%;
  height: auto;
`;

export const Description = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;

  // background: red;

  padding: 0 0.5rem 1rem;

  a {
    color: #3d404a;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p.location {
  }

  p {
    color: #72808e;
    font-size: 16px;
    font-weight: 500;
  }
`;
