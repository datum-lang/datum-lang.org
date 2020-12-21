import { getAllPosts } from "../../lib/api"
import Link from 'next/link'
import Head from "next/head"
import Header from '../../components/Header'

interface Post {
  title: string
  date: string
  slug: string
  snippet: string
}

interface Props {
  allPosts: Post[]
}

const Blog = ({allPosts}: Props) => (
  <>
    <Head><title>Blog | Charj - 语言的语言 && 下一代企业级编程语言</title></Head>
    <Header />
    <div className="bg-white pt-8 pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-28 lg:px-8">
      <div className="relative max-w-screen-lg mx-auto">
      <div className="mt-6 grid gap-16 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">
        {allPosts.map(post => {
          const date = new Date(post.date)
          const format = new Intl.DateTimeFormat(undefined, {
            month: "long",
            day: "numeric",
            year: "numeric",
          })
          return (
            <div key={post.title}>
              <p className="text-sm leading-5 text-gray-500">
                      <time dateTime={post.date}>
                        {format.format(date)}
                      </time>
                    </p>
                    <Link href={`/blog/${post.slug}`}>
                      <a className="block">
                        <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                          {post.title}
                        </h3>
                        <p className="mt-3 text-base leading-6 text-gray-500">
                          {post.snippet}
                        </p>
                      </a>
                    </Link>
                    <div className="mt-3">
                      <Link href={`/blog/${post.slug}`}>
                        <a className="text-base leading-6 font-semibold text-blue-600 hover:text-blue-500 transition ease-in-out duration-150">
                          Read post
                        </a>
                      </Link>
                    </div>
            </div>
          )
        })}
      </div>
      </div>
    </div>
  </>
)

export default Blog

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'snippet'])
  return {
    props: { allPosts }
  }
}