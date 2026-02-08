import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Technology } from "@/components/sections/technology";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Technology />
      </main>
      <Footer />
    </div>
  );
}
