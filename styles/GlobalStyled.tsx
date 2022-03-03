import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle<any>`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    /* h5端开启，开启后使用rem代替px*/
    //font-size: calc(100vw / 7.5);
  }

  body {
    font-family: 'PingFangSC-Semibold,Alata,Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.color};
    font-size: 16px;
    width: 100%;
  }

  html, body {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  a {
    color: ${(props) => props.theme.color};
    text-decoration: none;
    cursor: pointer;

    &:hover, :active {
      color: inherit;
    }
  }
`;
