import { createFileRoute, Link } from "@tanstack/react-router";
import { ClosingCta, PageHero, SectionHeading } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { products } from "@/data/products";
import hero from "@/assets/materials.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Roof Systems & Elements | SKY SPACE" },
      {
        name: "description",
        content:
          "The SKY SPACE product framework: roof structures, pergola systems, shade, flooring, planting and lighting elements for roof-level environments.",
      },
      { property: "og:title", content: "Products — SKY SPACE" },
      { property: "og:description", content: "Systems and elements for roof-level environments." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Products"
        title="The elements a roof is made of."
        intro="A product framework organised by role in the space. Detailed specifications are published as each range is confirmed."
        image={hero}
      />

      <section className="section-pad">
        <div className="shell">
          <SectionHeading eyebrow="Catalogue" title="Systems and elements." />
          <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 90}>
                <Link to="/products/$slug" params={{ slug: p.slug }} className="group block">
                  <div className="img-zoom aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={p.image}
                      alt={`${p.name} — SKY SPACE roof product category`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline gap-4">
                    <span className="eyebrow text-accent">{p.index}</span>
                    <h3 className="text-xl">{p.name}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </main>
  );
}
