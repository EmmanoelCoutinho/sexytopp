import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
  height: 0vh;
  }
  to {
  height: 100vh;
  }
`;

export const SandwichContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: absolute;
  top: 2.9rem;
  right: 0;

  width: 100vw;

  background-color: #fff;

  animation: ${appear} 1s forwards;
  overflow: hidden;

  border-bottom: 1px solid black;

  padding: 1.5rem 2rem 0;

  @media (min-width: 768px) {
    padding: 1.5rem 8rem 0;
  }
`;

export const Login = styled.button`
  width: 95%;
  max-width: 250px;
  height: 42px;

  background-color: inherit;
  color: black;
  border: 2px solid #3d404a33;
  border-radius: 5px;

  font-size: 14.4px;
  font-weight: 700;

  margin: 0.5rem 1rem;

  padding: 0;
`;

export const Register = styled(Login)`
  color: #7d1d39;
  border-color: #7d1d3959;
`;

export const LinkContainer = styled.div`
  background-color: inherit;

  width: 95%;
  height: 60%;

  margin: 0 auto;
`;
