import styled from 'styled-components';

export const MaxContainer = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  min-width: 100vw;
  height: 3rem;
  background-color: #fff;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;

  width: 100%;
  max-width: 1440px;
  height: 3rem;
  padding: 0 1.5rem;

  background-color: #fff;

  z-index: 3;

  @media (min-width: 1024px) {
    justify-content: around;
    // border: 1px solid #000;
  }

  .sandwich_menu {
    @media (min-width: 1024px) {
      display: none;
    }
  }
`;

export const ImageContainer = styled.div`
  max-height: 100%;

  background-color: inherit;

  cursor: pointer;

  // margin-right: 12rem;
`;

export const Logo = styled.img`
  width: 7rem;
`;

export const LinksContainer = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    // margin-right: 12rem;

    button {
      // width: 5rem;
      width: 160px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;

  width: fit-content;
  height: 100%;

  button {
    white-space: nowrap;
    width: 118px;
    height: 40px;

    border: 2px solid #7d1d39;

    margin: auto;

    :hover {
      color: #fff !important;

      background-color: #7d1d39 !important;
    }
  }

  &:focus {
    border: none;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const HamburgMenu = styled.button`
  // height: 2.5rem;
`;
