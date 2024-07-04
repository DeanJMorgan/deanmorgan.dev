import Link from "next/link"
import { Navigation } from "@/components/navigation"

export const Header = () => {
  return (
    <header className="header">
      <div className="header__primary">
        <Link href="/">
          <h1 className="header__title">DeanMorgan<span>.dev</span></h1>
        </Link>
        <h2 className="header__sub-title">Senior Developer at <strong>BigEyeDeers</strong></h2>
      </div>
      <div className="header__secondary">
        <Navigation />
      </div>
    </header>
  )
}
