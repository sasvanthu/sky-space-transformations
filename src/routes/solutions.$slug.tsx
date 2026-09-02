import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ClosingCta, Cta, Eyebrow, PageHero } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { getSolution, solutions } from "@/data/solutions";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const solution = getSolution(params.slug);
    if (!solution) throw notFound();
    return { solution };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable — SKY SPACE" }, { name: "robots", content: "noindex" }],
      };
    }
    const { solution } = loaderData;
    const title = `${solution.title} — SKY SPACE`;
    return {
      meta: [
        { title },
        { name: "description", content: solution.description.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: solution.headline },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/solutions/${solution.slug}` }],
    };
  },
  notFoundComponent: SolutionNotFound,
  component: SolutionDetail,
});

function SolutionNotFound() {
  return (
    <main className="section-pad">
      <div className="shell max-w-2xl pt-32">
        <Eyebrow>Not found</Eyebrow>
        <h1 className="display mt-5 text-4xl md:text-5xl">This category does not exist.</h1>
        <p className="mt-5 text-muted-foreground">
          The solution you are looking for may have been renamed. Browse the full catalogue instead.
        </p>
        <div className="mt-8">
          <Cta to="/solutions">All solutions</Cta>
        </div>
      </div>
    </main>
  );
}

function SolutionDetail() {
  const { solution } = Route.useLoaderData();
  const index = solutions.findIndex((s) => s.slug === solution.slug);
  const next = solutions[(index + 1) % solutions.length] ?? solutions[0]!;

  return (
    <main>
      <PageHero
        eyebrow={`Solution ${solution.number}`}
        title={solution.title}
        intro={solution.headline}
        image={solution.image}
      />

      <section className="section-pad">
        <div className="shell grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <Eyebrow>The idea</Eyebrow>
            <p className="mt-6 text-lg leading-relaxed md:text-xl">{solution.description}</p>

            <h2 className="display mt-14 text-3xl md:text-4xl">Benefits</h2>
            <ul className="mt-6 space-y-4">
              {solution.benefits.map((b) => (
                <li key={b} className="flex gap-4 border-b border-border pb-4 text-muted-foreground">
                  <span aria-hidden className="text-accent">
                    &mdash;
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="img-zoom aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={solution.image}
                alt={`${solution.title} rooftop environment designed by SKY SPACE`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-10 border-t border-border pt-8">
              <Eyebrow>Spaces this can contain</Eyebrow>
              <ul className="mt-6 flex flex-wrap gap-2">
                {solution.spaces.map((s) => (
                  <li
                    key={s}
                    className="border border-border px-4 py-2 text-xs uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="shell flex flex-wrap items-center justify-between gap-6">
          <Link
            to="/solutions"
            className="text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
          >
            &larr; All solutions
          </Link>
          <Link
            to="/solutions/$slug"
            params={{ slug: next.slug }}
            className="group text-right"
          >
            <span className="eyebrow text-accent">Next</span>
            <span className="mt-2 block text-xl transition-transform duration-300 group-hover:-translate-x-1">
              {next.title} &rarr;
            </span>
          </Link>
        </div>
      </section>

      <ClosingCta />
    </main>
  );
}
