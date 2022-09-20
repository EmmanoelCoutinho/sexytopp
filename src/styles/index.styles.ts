import styled from 'styled-components';

export const Container = styled.div`
  overflow-x: hidden;
`;

export const ContainerVideo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  // vai ter que ser refeito para por o video em baixo!
  background: linear-gradient(90deg, rgba(125, 29, 57, 0.9) 35%, rgba(113, 121, 142, 0) 100%),
    url('/assets/images/banner_new.jpg');
  background-repeat: no-repeat;
  background-size: 1000px 466px;
  background-size: cover;
  width: 100%;
  height: 100%;
  margin-top: 42px;
  padding: 4rem 15px 2rem;

  h1 {
    color: #fff;
    font-size: 32px;
    font-weight: 800;

    span {
      font-weight: 100;
    }
  }

  p {
    color: rgba(255, 255, 255, 0.85);
    border-left: 2px solid currentColor;
    font-size: 16px;
    font-weight: lighter;
    margin-top: 1.5rem;
    padding-top: 0;
    padding-left: 1rem;
    width: auto;
  }

  button {
    height: 54px;
    width: 239px;

    font-size: 14.7px;
    font-weight: 800;
    text-transform: uppercase;

    background-color: #7d1d39;
    border: 2px solid #f26e93;
    border-radius: 5px;

    margin-top: 1.5rem;

    &:hover {
      background-color: #fff;
      border-color: #fff;
      color: #7d1d39;
    }
  }

  @media (min-width: 1024px) {
    height: 600px;
  }
  @media (min-width: 1240px) {
    margin-top: 48px;
  }
`;

export const Paragraph = styled.p`
  font-size: 23px;
  font-weight: lighter;
  line-height: 27px;

  color: #3d404a;

  padding: 3rem 1rem 2rem;

  text-align: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    /* background-color: tomato; */
    gap: 1rem;
    padding: 0 1rem;
    flex-direction: row;
  }
`;

export const TitleSlider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  height: 100%;
  width: 100%;

  padding: 3rem 1rem 1.5rem;

  background-color: inherit;

  span {
    font-size: 22px;
    font-weight: lighter;
    line-height: 27px;

    margin-bottom: 1.2rem;

    ins {
      text-decoration: none;
      border-bottom: 4px solid #7d1d39;
      font-weight: 700;
    }
  }

  h3 {
    font-weight: lighter;
    font-size: 16px;
    color: #9b9696;
  }
`;

export const HqContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 310px;
  width: 100vw;

  background-color: rgba(247, 245, 250, 0.59);

  span {
    font-size: 22.8px;
    color: #3d404a;
    font-weight: 400;

    ins {
      text-decoration: none;

      border-bottom: 4px solid #7d1d39;
    }
  }

  span:last-of-type {
    font-weight: 700;
  }

  p {
    font-size: 16px;
    color: #9b9696;

    margin: 2rem 0 3rem;
  }

  button {
    height: 54px;
    width: 239px;

    font-size: 14.7px;
    font-weight: 800;
    text-transform: uppercase;

    background-color: #7d1d39;
    border: 2px solid #f26e93;
    border-radius: 5px;

    &:hover {
      background-color: #fff;
      border-color: #7d1d39;
      color: #7d1d39;
    }
  }
`;

export const FindContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 473px;
  width: 100vw;

  background-color: rgba(125, 29, 57, 0.92);
  color: #fff;
  line-height: 26.4px;
  padding: 0 1.2rem;

  span {
    font-size: 29px;
    font-weight: 400;

    line-height: 34px;
    text-align: center;
  }

  span:last-of-type {
    font-weight: 700;
    border-bottom: 4px solid #7d1d39;
  }

  p {
    text-align: center;
    margin: 2rem 0;

    font-size: 17.6px;
    font-weight: 400;
  }

  button {
    width: 210px;
    height: 54px;

    font-size: 14.7px;
    font-weight: 800;

    background-color: #7d1d39;
    border: 2px solid #f26e93;
    border-radius: 5px;

    text-transform: uppercase;

    &:hover {
      background-color: #fff;
      border-color: #fff;
      color: #7d1d39;
    }
  }
`;
