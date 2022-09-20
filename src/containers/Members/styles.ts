import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  height: 100%;
  width: 100%;

  gap: 1rem;

  padding: 1rem;

  // background: red;
  overflow-x: hidden;

  @media (min-width: 652px) {
    background-color: red;
    justify-content: space-between;
  }
`;
