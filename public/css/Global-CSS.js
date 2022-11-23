import { createGlobalStyle } from 'styled-components';

const GlobalCSS = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300&display=swap');

  * {
    padding: 0;
    margin: 0;
    text-decoration: none;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--cor-3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--cor-1);
    border-radius: 10px;
  }
`;

export default GlobalCSS;
