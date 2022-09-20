import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

html {
  background-color: #fff;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%; /* == 15px */
  }
}
@media (max-width: 720px) {
  html {
    font-size: 87.5%; /* == 14px */
  }
}

input {
  outline: none;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
}

a {
  color: inherit;
  text-decoration: none;
}
button,a {
  cursor: pointer;
}
div:focus {
  outline: none;
}

.closeButton {
  position: absolute;
  top: 20px;
  right: 20px;
}

// ##############################################################################
// Container Styles
// ##############################################################################

.main_container {
  display: flex;
  justify-content: center;

  max-width: 100vw;
  height: 100%;
  min-height: 100vh;

  background-color: #fff;

  overflow: hidden !important;

  // padding-top: 40px;

  

  @media (max-width: 1023px) {
    display: flex;
    justify-content: center;

    padding-bottom: 55px;
  }

  @media (max-width: 767px) {
    padding: 0;
    /* background-color: red; */
  }

  .page_title {
    position: fixed;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 599px;
    height: 40px;

    font-size: 1.6rem;
    font-weight: bold;
    color: #7d1d39;

    padding-left: 1rem;
    margin-right: 100px;

    background-color: rgba(255, 255, 255, 0.8);
    // background-color: red;
  }
}

.left_container {
  display: flex;
  justify-content: flex-end;

  background-color: #fff;
  min-width: 68px;
  width: 20%;
  min-height: 100vh;
  height: 100%;

  @media (max-width: 499px) {
    display: none;
  }
}

.middle_container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  border-right: 1px solid #7d1d39;

  padding-top: 40px;
  padding-bottom: 55px;

  @media (max-width: 499px) {
    border-right: none;
  }

  @media (min-width: 499px) {
    border-left: 1px solid #7d1d39;
  }

  @media (min-width: 1024px) {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    //  background-color: blue;
    padding-bottom: 2rem;
    
  }
}

.right_container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 30%;
  height: 100vh;

  // background-color: red;

  // border-left: 1px solid  #7d1d39;

  padding: 0 1rem;

  @media (max-width: 1023px) {
    display: none;
}
`;
