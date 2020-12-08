import Head from "next/head"
import { ReactElement } from "react"
import "../styles/globals.css"
import type {AppProps} from "next/app"

function MyApp ({ Component, pageProps }: AppProps): ReactElement {
  return (
    <div className='h-screen'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
