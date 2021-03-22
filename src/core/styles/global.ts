import { createGlobalStyle } from 'styled-components';

import * as Colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    background: ${Colors.dark};
    color: ${Colors.white};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
