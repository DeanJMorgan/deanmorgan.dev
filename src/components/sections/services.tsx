"use client";

import { Container } from "@/components/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Cpu, Gauge, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Performance Consulting",
    description:
      "Auditing site speed and user experience to identify improvements that help your business grow through better performance and higher conversion rates.",
    icon: Gauge,
    tag: "Optimisation",
  },
  {
    title: "Enterprise eCommerce",
    description:
      "Building fast, reliable online stores on Adobe Commerce and Shopify using scalable architectures to support your brand's growth.",
    icon: ShoppingBag,
    tag: "Architecture",
  },
  {
    title: "AI Strategy",
    description:
      "Integrating AI and Large Language Models into your business processes and applications to improve efficiency and drive innovation.",
    icon: Cpu,
    tag: "Intelligence",
  },
];

export function Services() {
  return (
    <section className="py-20 border-t bg-muted/30">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="rounded-none border-none bg-transparent shadow-none">
                <CardHeader className="space-y-4 px-0">
                  <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground">
                      {service.tag}
                    </p>
                    <CardTitle className="text-2xl font-bold tracking-tight">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-0">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
