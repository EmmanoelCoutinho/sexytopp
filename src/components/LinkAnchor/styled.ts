import styled from 'styled-components';

export const LinkAnchor = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 3rem;
  width: 100%;

  text-align: start;
  padding-left: 1rem;
  margin-bottom: 0.5rem;

  font-size: 1.1rem;
  font-weight: 500;

  background-color: inherit;
  /* border-right: 1px solid black; */

  color: #3d404a;

  border: none;

  &:hover {
    border-bottom: 2px solid #7c1d39;
    color: #7c1d39;
  }

  @media (min-width: 1025px) {
    padding: 0;
    margin: 0;

    text-align: center;
    width: 11rem;
  }
`;
