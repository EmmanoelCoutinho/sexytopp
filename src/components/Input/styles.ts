import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  &.field-holder {
    position: relative;
    transition: all 0.3s ease-in-out;

    .error-message {
      font-size: 10px;
      line-height: 14px;
      color: #c23f3b;
      margin-left: 6px;
    }
  }

  &.field-holder-invalid {
    input {
      border-color: #c23f3b;
      background-color: rgba(224, 159, 157, 0.25);
    }
  }

  label {
    color: #666;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    margin: .2rem .5rem;

    display: block;
    line-height: 22px;
  }

  input {
    box-shadow: 0 0 0 1px rgb(130 136 148 / 16%), 0 1px 2px -1px rgb(130 136 148 / 48%);
    border-radius: 8px;
    background-color: #fff;
    display: block;
    padding: 13px 16px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    text-align: left;
    outline: none;
    appearance: none;
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #fff;
  }
`;
