import Link from "next/link";
import { cn } from "@/lib/utils";

const routes = [
  { href: "/about", label: "About" },
  // { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar({ className }: { className?: string }) {
  return (
    <nav
      className={cn("hidden gap-8 md:flex items-center", className)}
      aria-label="Desktop Navigation"
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className="text-[10px] uppercase font-bold tracking-widest transition-colors hover:text-blue-600 dark:hover:text-blue-400"
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
