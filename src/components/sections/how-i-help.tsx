"use client";

import { Container } from "@/components/container";
import { motion } from "framer-motion";

export function HowIHelp() {
  const coreServices = [
    {
      id: "01.",
      title: "Performance Consulting",
      description:
        "I conduct forensic performance audits to identify bottlenecks and optimise site speed, directly impacting your conversion rates and organic search ranking (SEO).",
    },
    {
      id: "02.",
      title: "Enterprise eCommerce",
      description:
        "Specialising in Adobe Commerce (Magento 2) and Shopify, I build scalable, high-conversion technical architectures designed for long-term business growth.",
    },
    {
      id: "03.",
      title: "AI Strategy & Integration",
      description:
        "I help businesses leverage Large Language Models and AI automation to streamline internal workflows and create smarter, more intuitive customer experiences.",
    },
  ];

  return (
    <section className="py-20 border-t">
      <Container>
        <div className="max-w-3xl space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              How I can help your business.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I provide specialised technical leadership that bridges the gap
              between complex engineering and commercial success.
            </p>
          </motion.div>

          <div className="space-y-10">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-2"
              >
                <h3 className="text-xl font-bold tracking-tight flex items-center gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-mono text-sm font-medium">
                    {service.id}
                  </span>
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-8 border-t border-muted/20"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Complementing my core engineering focus, I bring a holistic
              understanding of the digital ecosystem—including extensive
              experience in{" "}
              <strong className="text-foreground font-semibold">
                marketing strategy
              </strong>
              ,{" "}
              <strong className="text-foreground font-semibold">SEO</strong>,{" "}
              <strong className="text-foreground font-semibold">
                paid advertising
              </strong>
              ,{" "}
              <strong className="text-foreground font-semibold">
                social media
              </strong>
              , and{" "}
              <strong className="text-foreground font-semibold">
                graphic design
              </strong>
              .
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
