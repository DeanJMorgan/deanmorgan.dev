import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/container";
import Link from "next/link";

const posts = [
  {
    title: "The Future of eCommerce Performance",
    date: "2026-02-07",
    excerpt:
      "Why Next.js 16 and Hyva are revolutionising the way we build for speed and scalability.",
    slug: "hello-world",
  },
];

export default function BlogListingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <Container>
            <div className="max-w-3xl space-y-12">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-mono">
                  Writing &{" "}
                  <span className="text-muted-foreground italic">Insights</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Deep dives into technical architecture, performance forensics,
                  and AI strategy.
                </p>
              </div>

              <div className="grid gap-12 pt-12 border-t">
                {posts.map((post) => (
                  <article key={post.slug} className="group space-y-4">
                    <div className="space-y-2">
                      <p className="text-sm font-mono text-muted-foreground">
                        {post.date}
                      </p>
                      <Link href={`/blog/${post.slug}`}>
                        <h2 className="text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                      </Link>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-block text-sm font-bold uppercase tracking-widest border-b-2 border-primary pb-1 group-hover:text-primary transition-colors"
                    >
                      Read Article
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
