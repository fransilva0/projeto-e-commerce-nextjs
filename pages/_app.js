import { ThemeProvider } from "styled-components"
import GlobalCSS from "../public/css/Global-CSS.js"
import { Theme } from "../src/theme/Theme"

export default function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={Theme.dark}>
      <GlobalCSS />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
