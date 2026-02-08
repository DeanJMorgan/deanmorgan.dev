import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/container";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function BlogPostPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <article className="py-20 md:py-32">
          <Container>
            <div className="max-w-2xl mx-auto space-y-8">
              <Link
                href="/blog"
                className="flex items-center text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>

              <div className="space-y-4">
                <p className="text-sm font-mono text-muted-foreground">
                  February 7, 2026
                </p>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  The Future of eCommerce Performance
                </h1>
              </div>

              <div className="prose prose-zinc dark:prose-invert max-w-none text-lg leading-relaxed text-muted-foreground space-y-6">
                <p className="text-xl text-foreground font-medium italic border-l-4 border-primary pl-6 py-2">
                  &quot;Why Next.js 16 and Hyva are revolutionising the way we
                  build for speed and scalability.&quot;
                </p>
                <p>
                  In the world of enterprise commerce, milliseconds equal
                  millions. As a Senior Frontend Developer specialising in
                  high-performance architectures, I&apos;ve seen firsthand how
                  the right tech stack can transform a business&apos;s
                  conversion rate.
                </p>
                <h2 className="text-2xl font-bold text-foreground pt-4">
                  Why Next.js 16?
                </h2>
                <p>
                  Next.js 16 introduces several improvements that make it the
                  ideal choice for modern eCommerce:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Enhanced Partial Prerendering (PPR)</strong>:
                    Delivering static shells with dynamic holes for the fastest
                    possible TTFB.
                  </li>
                  <li>
                    <strong>Server Actions Stability</strong>: Simplifying the
                    way we handle data mutations and form submissions.
                  </li>
                  <li>
                    <strong>Improved Caching Policies</strong>: Giving us more
                    control over how content is served and invalidated.
                  </li>
                </ul>
                <h2 className="text-2xl font-bold text-foreground pt-4">
                  The Hyva Advantage
                </h2>
                <p>
                  For Magento (Adobe Commerce) merchants, Hyva is no longer a
                  luxury—it&apos;s a requirement for staying competitive. By
                  stripping away the legacy bloat and focusing on utility-first
                  utility (Tailwind), Hyva allows us to achieve perfect Core Web
                  Vitals scores out of the box.
                </p>
              </div>
            </div>
          </Container>
        </article>
      </main>
      <Footer />
    </div>
  );
}
