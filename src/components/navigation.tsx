import Link from "next/link"

export const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__item">
        <Link href="/about">About</Link>
      </div>
      <div className="navigation__item">
        <Link href="/blog">Articles</Link>
      </div>
      <div className="navigation__item">
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
