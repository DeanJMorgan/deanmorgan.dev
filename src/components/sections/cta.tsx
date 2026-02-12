"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

interface CallToActionProps {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function CallToAction({
  heading = "Have a project in mind?",
  subheading = "I'm always open to discussing new ideas, creative projects or opportunities to be part of your vision.",
  ctaText = "Get in touch",
  ctaHref = "/contact",
}: CallToActionProps) {
  return (
    <section className="py-20 md:py-32 border-t border-muted/20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="max-w-2xl text-xl text-muted-foreground font-mono leading-relaxed">
              {subheading}
            </p>
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="rounded-none h-14 px-8 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 border-none"
              >
                <Link href={ctaHref}>{ctaText}</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
