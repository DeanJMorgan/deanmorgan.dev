import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <span className="font-mono text-lg font-bold">
              deanmorgan
              <span className="text-blue-600 dark:text-blue-400">.dev</span>
            </span>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Engineering High-Performance eCommerce & AI-Driven Business
              Strategy.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Connect
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://www.linkedin.com/in/dean-morgan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/deanjmorgan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:hello@deanmorgan.dev"
                  className="hover:text-primary"
                >
                  hello@deanmorgan.dev
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Inquiry Form
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground md:flex md:items-center md:justify-between md:text-left">
          <p>© {new Date().getFullYear()} Dean Morgan. All rights reserved.</p>
          <p className="mt-4 md:mt-0 font-mono text-[10px]">
            Built with Next.js 16, React and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
