import Head from 'next/head'
import { FunctionComponent } from 'react'
import Header from '../components/Header'

const Home: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Charj</title>
      </Head>
      <div className='bg-white'>
        <div className='bg-gray-50 border-b border-gray-200'>
          <Header />
          <div className='max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-20 flex flex-col items-center'>
            <h1 className='font-extrabold text-5xl leading-10 tracking-tight text-gray-900'>
              Charj
            </h1>
            <h2 className='mt-4 sm:mt-5 font-light text-2xl text-center leading-tight text-gray-900'>
              Charj Lang 是一个使用<strong className='font-semibold'>Rust</strong>编写的<strong className='font-semibold'>描述式、中间</strong>编程语言
            </h2>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home
