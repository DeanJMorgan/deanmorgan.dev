import { Container } from "@/components/container";
import InlineSVG from "@/components/ui/inline-svg";
import { TechnologyCard } from "./technology-card";

const categories = [
  {
    title: "Architecture & DevOps",
    techs: [
      { name: "Next.js", logo: "/icons/tech/nextdotjs.svg" },
      { name: "React", logo: "/icons/tech/react.svg" },
      { name: "TypeScript", logo: "/icons/tech/typescript.svg" },
      { name: "Node.js", logo: "/icons/tech/nodedotjs.svg" },
      { name: "Vercel", logo: "/icons/tech/vercel.svg" },
      { name: "Docker", logo: "/icons/tech/docker.svg" },
      { name: "Git", logo: "/icons/tech/git.svg" },
      { name: "GitHub", logo: "/icons/tech/github.svg" },
      { name: "AWS", logo: "/icons/tech/aws.svg" },
      { name: "PHP", logo: "/icons/tech/php.svg" },
    ],
  },
  {
    title: "E-commerce & Platforms",
    techs: [
      { name: "Adobe Commerce", logo: "/icons/tech/adobe-commerce.svg" },
      { name: "Shopify", logo: "/icons/tech/shopify.svg" },
      { name: "Hyvä Themes", logo: "/icons/tech/hyva-themes.svg" },
      { name: "Magento 2", logo: "/icons/tech/magento.svg" },
      { name: "Drupal", logo: "/icons/tech/drupal.svg" },
      { name: "WordPress", logo: "/icons/tech/wordpress.svg" },
    ],
  },
  {
    title: "Design & Styles",
    techs: [
      { name: "Figma", logo: "/icons/tech/figma.svg" },
      { name: "Photoshop", logo: "/icons/tech/adobephotoshop.svg" },
      { name: "Illustrator", logo: "/icons/tech/adobeillustrator.svg" },
      { name: "Tailwind CSS", logo: "/icons/tech/tailwindcss.svg" },
      { name: "SCSS", logo: "/icons/tech/sass.svg" },
      { name: "Less", logo: "/icons/tech/less.svg" },
    ],
  },
  {
    title: "AI & Insights",
    techs: [
      { name: "OpenAI", logo: "/icons/tech/openai.svg" },
      { name: "Google Analytics", logo: "/icons/tech/googleanalytics.svg" },
    ],
  },
];

// Flatten the categories into a single list for a unified grid
const allTechs = categories.flatMap((cat) =>
  cat.techs.map((tech) => ({
    ...tech,
    category: cat.title,
  })),
);

export function Technology() {
  return (
    <section className="py-24 bg-background border-t">
      <Container>
        <div className="space-y-16">
          <div className="max-w-2xl">
            <h2 className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground mb-4">
              Technographic Stack
            </h2>
            <h3 className="text-3xl font-bold tracking-tight">
              A robust ecosystem of{" "}
              <span className="text-blue-600 dark:text-blue-400 italic">
                modern tools.
              </span>
            </h3>
            <p className="mt-4 text-muted-foreground text-sm max-w-xl">
              A diverse toolkit spanning a decade of professional development,
              from core architecture to creative design and strategic AI
              insights.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-px bg-muted/20 border border-muted/20">
            {allTechs.map((tech, idx) => (
              <TechnologyCard
                key={tech.name}
                name={tech.name}
                category={tech.category}
                delay={idx * 0.02}
                icon={
                  <InlineSVG
                    path={tech.logo}
                    className="w-full h-full text-foreground fill-current"
                  />
                }
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
