"use client";

import Link from "next/link";
import { Navbar } from "./navbar";
import { Toggle } from "./toggle";
import { MobileNav } from "./mobile-nav";
import { Container } from "@/components/container";

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
      aria-label="Main Navigation"
    >
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 items-center h-16">
          {/* Logo - Left */}
          <div className="flex items-center gap-4">
            <MobileNav />
            <Link href="/" className="flex items-center">
              <span className="font-mono text-lg font-bold tracking-tight">
                deanmorgan
                <span className="text-blue-600 dark:text-blue-400">.dev</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Centre */}
          <Navbar className="justify-self-center" />

          {/* Actions - Right */}
          <div className="flex items-center justify-end gap-2">
            <div className="hidden md:block">
              <Toggle />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
