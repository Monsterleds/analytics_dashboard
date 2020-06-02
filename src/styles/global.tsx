import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #f5f6fb;
    -webkit-font-smoothing-: antialiased;
    font-size: 16px;
  }

  body, input, button, select {
    font-family: 'Montserrat', sans-serif;
  }

  button, a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
