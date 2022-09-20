import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100%;

  background-color: red;
  background-color: #3d404a;

  border-top: 10px solid #515361;

  padding: 3rem 1rem 2.5rem;

  div:last-child {
    margin: 0;

    @media (min-width: 768px) {
      padding: 1.2rem 0;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  background-color: green;
  background-color: #3d404a;
  color: #f8f8f9;

  margin-bottom: 2.5rem;

  span {
    font-size: 17.6px;
    margin-bottom: 1.2rem;
  }

  a {
    display: flex;
    align-items: center;
    margin: 5.6px 0;
  }

  svg {
    margin-right: 0.5rem;
  }

  button {
    width: 187.89px;
    height: 48px;

    border: 1px solid #f26e93;
    border: none;
    border-radius: 5px;

    background-color: #7d1d39;

    margin-top: 1.5rem;
    padding: 0;

    &:hover {
      background-color: #fff;
      border-color: #fff;
      color: #7d1d39;
    }
  }

  span,
  a {
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    margin-right: 1.2rem !important;
    /* min-width: 200px; */
    max-width: 300px;
    margin: 1.5rem auto auto;
  }
`;

export const LogoFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 192.38px;

  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: center !important;

  background-color: #373843;

  padding: 0 1rem;

  P {
    padding: 24px 0 8px;
  }
`;
