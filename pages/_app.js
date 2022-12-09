import { ThemeProvider } from "styled-components"
import GlobalCSS from "../public/css/Global-CSS.js"

export default function MyApp({ Component, pageProps }) {
  const theme = {
    mainStyles: {
      mainSource: "Montserrat",
      white: "#fff",
    },
    light: {
      lightBlue1: "#628FD9",
      darkBlue1: "#26539B",
      lightBlue2: "#EBF1FA",
    },
    dark: {
      darkBlue2: "#070F1C",
      lightBlue3: "#F4F7FC",
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
