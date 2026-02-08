"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center py-20">
      <Container>
        <div className="text-center space-y-6 max-w-xl mx-auto">
          <h1 className="text-8xl font-black tracking-tighter text-muted/20">
            404
          </h1>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Page not found.
            </h2>
            <p className="text-muted-foreground">
              The page you are looking for doesn&apos;t exist or has been moved.
            </p>
          </div>
          <div className="pt-4">
            <Button asChild size="lg" className="rounded-none px-12">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
