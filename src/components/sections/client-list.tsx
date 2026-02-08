import { Container } from "@/components/container";

const clients = [
  "Casio",
  "Liverpool FC",
  "Leeds United",
  "Vampire Vape",
  "Wayne Goss",
  "Leekes",
  "Leyland SDM",
  "Badgemaster",
  "Lawsons",
  "Flavour Warehouse",
  "Beanbag Bazaar",
  "Elesi",
  "Magrigg",
  "Happy Snap Gifts",
  "WheatyBags",
  "Clear Prospects",
  "Butterflies Fashions",
];

export function ClientList() {
  return (
    <section className="py-20 border-t bg-muted/20">
      <Container>
        <div className="max-w-3xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted by industry leaders.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              From global electronic giants and Premier League football clubs to
              market-leading retailers, I have engineered high-performance
              digital solutions for a diverse roster of ambitious brands.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
            {clients.map((client) => (
              <div
                key={client}
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-3 shrink-0" />
                {client}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
