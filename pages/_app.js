import GlobalCSS from "../public/css/Global-CSS.js"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalCSS />
      <Component {...pageProps} />
    </>
  )
}
