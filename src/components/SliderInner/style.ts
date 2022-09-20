import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 14rem;
  height: 18rem;

  border: 1px solid red;

  background-color: inherit;

  span {
    margin-top: 1rem;

    font-size: 16px;
    font-weight: 700;
    text-align: center;
  }

  span:last-child {
    color: rgba(0, 0, 0, 0.4);
    font-size: 11px;
    font-weight: 800;

    text-transform: uppercase;
    margin: 0.8rem 0 0;
  }

  /* &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  } */
`;

export const MainImage = styled.img`
  max-width: auto;
  width: 7rem;
  max-height: auto;
  height: 7rem;

  border-radius: 50%;

  /* z-index: 3; */
`;
