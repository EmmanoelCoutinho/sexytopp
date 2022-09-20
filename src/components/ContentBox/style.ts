import styled from 'styled-components';

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 90%;
  height: 100%;
  /* min-height: 364px; */

  border: 1px solid #e8e8e9;
  border-radius: 5px;

  padding: 2rem 1rem;
  margin: 2rem auto;

  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 6.5rem;
    height: 6.5rem;

    border-radius: 50%;

    z-index: auto;

    &::after {
      content: '';
      width: 100px;
      height: 100px;

      position: absolute;
      margin-right: 3rem;

      opacity: 0.4;

      background-color: inherit;

      border-radius: 50%;

      z-index: -1;
    }

    &::before {
      content: '';
      width: 100px;
      height: 100px;

      position: absolute;
      margin-left: 3rem;

      opacity: 0.4;

      background-color: inherit;

      border-radius: 50%;

      z-index: -1;
    }
  }

  span {
    font-size: 16px;
    font-weight: bold;

    margin: 1.2rem 0;
  }

  p {
    font-size: 16px;
    font-weight: lighter;
    line-height: 25px;

    color: #72808e;
  }

  @media (min-width: 768px) {
    height: 384px;
  }
`;
