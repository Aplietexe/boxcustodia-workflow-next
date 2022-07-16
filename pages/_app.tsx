import "bootstrap/dist/css/bootstrap.css"
import type { AppProps } from "next/app"

import GlobalStyle from "styles/GlobalStyle"

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
)

export default MyApp
