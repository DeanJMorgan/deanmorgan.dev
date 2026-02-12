"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center py-20">
      <Container>
        <div className="text-center space-y-6 max-w-xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight">
            Something went wrong.
          </h2>
          <p className="text-muted-foreground">
            An unexpected error occurred. We&apos;ve been notified and are
            looking into it.
          </p>
          <div className="pt-4 flex items-center justify-center gap-4">
            <Button
              onClick={() => reset()}
              size="lg"
              className="rounded-none px-12"
            >
              Try again
            </Button>
            <Button
              variant="outline"
              asChild
              size="lg"
              className="rounded-none px-12"
            >
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
