import { createGlobalStyle } from 'styled-components';

const GlobalCSS = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    text-decoration: none;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    font-family: ${({theme}) => theme.mainStyles.mainSource || "sans-serif"};
    background: ${({theme}) => theme.mainStyles.backgroundBody || "#fff"};
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({theme}) => theme.TerciaryColorBlue || "var(--cor-3)"};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.PrimaryColorBlue || "var(--cor-1)"};
    border-radius: 10px;
  }

  :root {
    --cor-1: #628FD9;
    --cor-2: #26539B;
    --cor-3: #EBF1FA;
    --font-1: 'Montserrat', sans-serif;
  }
`;

export default GlobalCSS;
