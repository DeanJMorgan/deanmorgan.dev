import Link from "next/link"
import { IconLinks } from "@/components/icon-links"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__signature">
        Built by <span className="font-bold">Dean Morgan</span> using{" "}
        <Link href="https://nextjs.org">NextJS</Link> and{" "}
        <Link href="https://reactjs.org">React</Link>.
      </div>
      <IconLinks />
    </footer>
  )
}
