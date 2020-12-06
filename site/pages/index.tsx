import Head from 'next/head'
import { FunctionComponent } from 'react'

const Home: FunctionComponent = () => {
  return (
    <main>
      <Head>
        <title>Charj</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <p>Welcome to Charj</p>
    </main>
  )
}

export default Home
