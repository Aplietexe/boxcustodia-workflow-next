import {
  Open_Sans as loadOpenSans,
  Poppins as loadPoppins,
  Raleway as loadRaleway,
} from "@next/font/google"
import type { AppProps } from "next/app"
import Head from "next/head"
import "styles/bootstrap.css"

import GlobalStyle from "styles/GlobalStyle"

const openSans = loadOpenSans({
  display: "swap",
  fallback: ["sans-serif"],
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "800"],
})

const poppins = loadPoppins({
  display: "swap",
  fallback: ["sans-serif"],
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "500", "600"],
})

const raleway = loadRaleway({
  display: "swap",
  fallback: ["sans-serif"],
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400"],
})

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <GlobalStyle />
    <div
      className={`${openSans.variable} ${poppins.variable} ${raleway.variable}`}
    >
      <Component {...pageProps} />
    </div>
  </>
)

export default MyApp
