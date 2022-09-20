import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  height: 100%;
  width: 100%;
  max-width: 275px;

  // background-color: red;

  .actived {
    border-radius: 12px 12px 0 0;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  aling-items: center;

  width: fit-content;
  height: fit-content;

  gap: 0.6rem;
  padding: 0 1rem;
  margin-top: 2rem;
  // background-color: blue;

  img {
    max-width: 30px;
    @media (max-width: 1439px) {
      margin: 0 auto;
    }
  }

  @media (max-width: 1439px) {
    span {
      display: none;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;

  border-radius: 25px;

  min-width: 50px;
  width: fit-content;
  height: 50px;
  color: #7d1d39;

  // background-color: green;

  padding: 0 0.5rem;

  cursor: pointer;
  span {
    margin-left: 0.5rem;
  }

  :hover {
    background-color: #e8e8e8;
  }

  .notification {
    position: absolute;
    margin-left: 12px;
    margin-bottom: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 18px;
    height: 18px;

    background-color: #fff;
    border: 2px solid #7d1d39;

    font-size: 11px;
    font-weight: bold;

    border-radius: 50%;
  }

  @media (max-width: 1439px) {
    width: 100%;
    border-radius: 50%;
    justify-content: center;
    padding: 0;
  }
`;
