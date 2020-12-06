import Head from 'next/head'
import { ReactElement } from 'react'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }): ReactElement {
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
