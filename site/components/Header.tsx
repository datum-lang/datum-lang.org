import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link href='/'><a>Home</a></Link>
        </li>
        <li>
          <Link href='/blog'><a>Blog</a></Link>
        </li>
        <li>
          <Link href='/docs'><a>Docs</a></Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
