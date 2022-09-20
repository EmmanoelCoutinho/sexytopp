import styled from 'styled-components';

export const Container = styled.button`
  background-color: #2d3748;
  color: #ffffff;

  /* font-family: ;  */
  font-size: 1rem;
  border-radius: 10px;
  line-height: 22px;
  padding: 15px 25px;
  transition: all 0.3s ease-in-out;
  text-align: center;

  &.white {
    background-color: #ffffff;
    color: black;
    border: 2px solid #7d1d3959;
    &:hover {
      background-color: transparent;
      color: black;
    }
  }

  /* &.green {
    background-color: #04c35c;
    border: solid 2px #04c35c;

    color: #fff;
    &:hover {
      background-color: transparent;
      color: black;
      border: solid 2px black;
    }
  } */

  &.fontBold {
    font-weight: 700;
  }

  &.outlined {
    background-color: transparent;
    color: black;
    border: none;

    &:hover {
      background-color: transparent;
      color: black;
    }
  }

  &.disabled {
    cursor: not-allowed;
    border: #d4c7de;
    background-color: #d4c7de;

    &:hover {
      background-color: #d4c7de;
      color: white;

      svg {
        path {
          fill: white;
        }
      }
    }
  }

  &.uppercase {
    text-transform: uppercase;
  }

  &.loading {
    background-color: #56637a;
    color: transparent;
    position: relative;
    pointer-events: none;

    .loading-wrapper {
      img {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 0;
        right: 0;
        top: 6px;
        bottom: 0;
        width: 35px !important;
      }
    }
  }

  &.full {
    width: 100%;
    max-width: none;
  }

  &.small {
    font-size: 13px;
    line-height: 18px;
    min-height: 32px;
    padding: 0 21px;
  }

  &.flex {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7.5px;
  }

  &:hover {
    background-color: #56637a;
    color: white;

    svg {
      path {
        fill: black;
      }
    }
  }

  svg {
    path {
      transition: all 0.3s ease-in-out;
    }
  }
`;
