import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/main.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dean Morgan - Web Developer and e-Commerce Specialist",
  description: "Hi there, welcome to my site. I'm a web developer and e-commerce specialist based in the UK.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <SpeedInsights/>
      </body>
    </html>
  );
}
