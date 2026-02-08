import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/container";
import { Timeline } from "@/components/sections/timeline";
import { ClientList } from "@/components/sections/client-list";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <Container>
            <div className="max-w-3xl space-y-8">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                A decade of engineering{" "}
                <span className="text-blue-600 dark:text-blue-400 italic">
                  excellence
                </span>{" "}
                in digital commerce.
              </h1>
              <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
                <p>
                  I am a Senior Frontend Developer and Technical Consultant
                  operating at the intersection of{" "}
                  <strong className="text-foreground font-semibold">
                    Enterprise eCommerce
                  </strong>
                  ,{" "}
                  <strong className="text-foreground font-semibold">
                    Artificial Intelligence
                  </strong>
                  , and{" "}
                  <strong className="text-foreground font-semibold">
                    Web Performance
                  </strong>
                  . My mission is to build digital experiences that are not just
                  visually stunning, but strictly optimised for speed,
                  conversion, and scalability.
                </p>
                <p>
                  At <span className="text-foreground font-semibold">AYKO</span>
                  , I leverage deep technical expertise—from forensic
                  performance auditing to modern AI integration—to give global
                  brands a competitive edge. While my foundation is built on
                  robust engineering principles and scalable CSS architectures,
                  my primary focus is on delivering high-impact business
                  outcomes.
                </p>
                <p>
                  Beyond code, I am committed to elevating engineering
                  standards. I actively mentor junior developers, lead peer code
                  reviews, and pioneer bespoke tooling—such as custom
                  rapid-prototyping frameworks and starter themes—specifically
                  designed to accelerate development cycles and maximise agency
                  efficiency.
                </p>
              </div>
            </div>
          </Container>
        </section>
        <ClientList />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}
