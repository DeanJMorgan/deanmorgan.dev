import { Container } from "@/components/container";

const timeline = [
  {
    year: "Apr 2025 — Present",
    role: "Senior Frontend Developer",
    company: "AYKO",
    description:
      "Optimising eCommerce ecosystems for enterprise clients using Adobe Commerce (Magento 2). delivering seamless digital experiences and providing comprehensive technical guidance.",
  },
  {
    year: "Feb 2024 — Apr 2025",
    role: "Senior Developer",
    company: "Big Eye Deers Ltd.",
    description:
      "Executed detailed web performance audits and modernised Magento 2 frontends. Led peer code reviews and delivered complex sites across Adobe Commerce, Shopify, and WordPress.",
  },
  {
    year: "Jan 2023 — Feb 2024",
    role: "Senior Frontend Developer",
    company: "Pinpoint",
    description:
      "Spearheaded a complex, award-winning Klevu Search integration and pioneered a bespoke SCSS-based Adobe Commerce starter theme. Delivered internal talks on Web Performance and mentored junior developers.",
  },
  {
    year: "Jun 2021 — Dec 2022",
    role: "Frontend Developer",
    company: "Pinpoint",
    description:
      "Lead Frontend Developer on multiple Magento 2 builds. Facilitated client communication and accurate project scoping while ensuring high-quality delivery.",
  },
  {
    year: "Jun 2020 — Jun 2021",
    role: "Frontend Developer",
    company: "Flavour Warehouse",
    description:
      "Lead Developer on the B2B 'Batch Ordering System' rebuild. Merged standalone sites into a unified multisite system and introduced branch-based git methodologies.",
  },
  {
    year: "Feb 2019 — Jun 2020",
    role: "Technical SEO",
    company: "Flavour Warehouse",
    description:
      "Managed SEO for a portfolio of global sites. Transitioned into frontend development to implement critical UI/UX improvements driven by SEO needs.",
  },
  {
    year: "Feb 2017 — Feb 2019",
    role: "Ecommerce Specialist",
    company: "Clear Prospects Ltd",
    description:
      "Redesigned and built websites for B2B/B2C sectors. Led the migration project from Drupal 6 to Drupal 8, optimising for both user experience and search performance.",
  },
  {
    year: "Oct 2013 — Feb 2017",
    role: "Search Marketing Executive",
    company: "EKM",
    description:
      "Managed SEO and content strategies for the UK's largest cloud-based eCommerce platform. Lead a successful domain migration project that increased organic traffic.",
  },
];

export function Timeline() {
  return (
    <section className="py-20 bg-muted/30 border-t">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight mb-12 uppercase font-mono text-muted-foreground/50 text-sm tracking-widest">
            Professional Evolution
          </h2>
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8"
              >
                <div className="text-sm font-mono text-muted-foreground pt-1">
                  {item.year}
                </div>
                <div className="md:col-span-3 space-y-2">
                  <h3 className="text-xl font-bold tracking-tight">
                    {item.role} @{" "}
                    <span className="text-primary">{item.company}</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
