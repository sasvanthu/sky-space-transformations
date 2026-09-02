import { createFileRoute, notFound } from "@tanstack/react-router";
import { ClosingCta, Cta, Eyebrow, PageHero } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { products } from "@/data/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable — SKY SPACE" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} — SKY SPACE Products`;
    return {
      meta: [
        { title },
        { name: "description", content: product.description.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: product.description.slice(0, 155) },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/products/${product.slug}` }],
    };
  },
  notFoundComponent: ProductNotFound,
  component: ProductDetail,
});

function ProductNotFound() {
  return (
    <main className="section-pad">
      <div className="shell max-w-2xl pt-32">
        <Eyebrow>Not found</Eyebrow>
        <h1 className="display mt-5 text-4xl md:text-5xl">This product does not exist.</h1>
        <div className="mt-8">
          <Cta to="/products">All products</Cta>
        </div>
      </div>
    </main>
  );
}

function ProductDetail() {
  const { product } = Route.useLoaderData();

  return (
    <main>
      <PageHero
        eyebrow={product.category}
        title={product.name}
        intro={product.description}
        image={product.image}
      />

      <section className="section-pad">
        <div className="shell grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Features</Eyebrow>
            <ul className="mt-6 space-y-4">
              {product.features.map((f) => (
                <li key={f} className="border-b border-border pb-4 text-muted-foreground">
                  {f}
                </li>
              ))}
            </ul>
            <h2 className="display mt-12 text-3xl">Technical</h2>
            <p className="mt-4 text-muted-foreground">{product.technical}</p>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Applications</Eyebrow>
            <ul className="mt-6 flex flex-wrap gap-2">
              {product.applications.map((a) => (
                <li
                  key={a}
                  className="border border-border px-4 py-2 text-xs uppercase tracking-[0.14em] text-muted-foreground"
                >
                  {a}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Cta to="/contact">Enquire about this range</Cta>
            </div>
          </Reveal>
        </div>
      </section>

      <ClosingCta />
    </main>
  );
}
