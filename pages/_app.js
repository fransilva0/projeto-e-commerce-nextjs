import { ThemeProvider } from "styled-components"
import GlobalCSS from "../public/css/Global-CSS.js"

export default function MyApp({ Component, pageProps }) {
  const theme = {
    mainStyles: {
      mainSource: "Montserrat",
    },
    light: {
      lightBlue1: "#628FD9",
      darkBlue1: "#26539B",
      lightBlue2: "#EBF1FA",
      white: "#fff",
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
