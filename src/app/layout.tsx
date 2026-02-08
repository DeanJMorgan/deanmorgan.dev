import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dean Morgan | Senior Frontend Developer & Technical Consultant",
  description:
    "Engineering High-Performance eCommerce & AI-Driven Business Strategy. Specialist in Hyva-certified Adobe Commerce and Shopify builds.",
  openGraph: {
    title: "Dean Morgan | Senior Frontend Developer & Technical Consultant",
    description:
      "Engineering High-Performance eCommerce & AI-Driven Business Strategy.",
    url: "https://deanmorgan.dev",
    siteName: "Dean Morgan Portfolio",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dean Morgan | Senior Frontend Developer & Technical Consultant",
    description:
      "Engineering High-Performance eCommerce & AI-Driven Business Strategy.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
