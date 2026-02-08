"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/mode-toggle";

const routes = [
  { href: "/about", label: "About" },
  // { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 bg-background/95 backdrop-blur">
        <SheetHeader className="text-left px-7">
          <SheetTitle>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center"
            >
              <span className="font-mono text-lg font-bold">
                deanmorgan<span className="text-blue-600">.dev</span>
              </span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-3 mt-8 px-7">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium transition-colors hover:text-blue-600"
            >
              {route.label}
            </Link>
          ))}
          <div className="pt-4 mt-4 border-t border-muted">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground uppercase font-mono tracking-wider">
                Appearance
              </span>
              <ModeToggle />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
