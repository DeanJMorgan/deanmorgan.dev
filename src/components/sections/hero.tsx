"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="py-20 md:py-32 lg:py-48">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl space-y-8"
        >
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
            Engineering High-Performance{" "}
            <span className="text-blue-600 dark:text-blue-400">eCommerce</span>{" "}
            & <span className="text-primary italic">AI-Driven</span> Business
            Strategy.
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="max-w-2xl text-xl text-muted-foreground sm:text-2xl font-mono leading-relaxed"
          >
            Bespoke technical leadership and high-performance engineering
            tailored for modern brands. I help businesses scale through
            efficient architecture and data-driven strategy.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button
              asChild
              size="lg"
              className="rounded-none h-14 px-8 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 border-none"
            >
              <Link href="/contact">Get in touch</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-none h-14 px-8 text-lg font-semibold"
            >
              <Link href="/about">About my approach</Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
