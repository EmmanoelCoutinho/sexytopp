import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  aling-items: center;

  width: 100%;
  max-width: 300px;
  height: fit-content;

  border-radius: 10px;

  margin-top: 30px;

  background-color: #efefef;

  padding: 0 0.5rem 0;

  .title {
    font-size: 1.4rem;

    margin: 1rem auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 300px;

  background-color: #efefef;
  // color: #7d1d39;

  // border: 1px solid #7d1d39;
  border-radius: 10px;

  margin: 0 auto 1rem;
  padding: 0 0.5rem;

  span {
    font-size: 1.2rem;
    color: #7d1d39;
  }

  p {
    font-size: 1.1rem;
    font-height: 1.1rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  button {
    height: 2rem !important;
    margin-top: 0.5rem;
  }
`;
