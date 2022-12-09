import React from "react";
import { ThemeProvider } from "styled-components"
import GlobalCSS from "../public/css/Global-CSS.js"
import ColorModeProvider, { ColorModeContext } from "../src/components/Header/DarkModeSwitch/ColorMode.js"
import { Theme } from "../src/theme/Theme"

function ProviderWrapper(props) {
  return (
      <ColorModeProvider initialMode={"dark"}>
          {props.children}
      </ColorModeProvider>
  )
}

function Root({ Component, pageProps }) {
  const contexto = React.useContext(ColorModeContext);
  return (
      <ThemeProvider theme={Theme[contexto.mode]}>
          <GlobalCSS />
          <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default function _App(props) {
  return (
      <ProviderWrapper>
          <Root {...props} />
      </ProviderWrapper>
  )
};
