import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ClosingCta, PageHero, SectionHeading } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { solutionFilters, solutions } from "@/data/solutions";
import { cn } from "@/lib/utils";
import hero from "@/assets/sol-luxury.jpg";

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title: "Solutions — 20 Ways to Use a Roof | SKY SPACE" },
      {
        name: "description",
        content:
          "Twenty rooftop solution categories from SKY SPACE: fitness, wellness, work, leisure, family, hospitality, green roofs, luxury lounges and revenue-generating spaces.",
      },
      { property: "og:title", content: "Solutions — SKY SPACE" },
      {
        property: "og:description",
        content: "Twenty rooftop solution categories, each designed for real use above the city.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  const [active, setActive] = useState<string | null>(null);

  const list = useMemo(
    () => (active ? solutions.filter((s) => s.filters.includes(active)) : solutions),
    [active],
  );

  return (
    <main>
      <PageHero
        eyebrow="Solutions"
        title="Twenty ways to use a roof."
        intro="Every category below is a considered architectural programme — structurally aware, climate-tested and shaped around how the space will actually be lived in."
        image={hero}
      />

      <section className="section-pad">
        <div className="shell">
          <SectionHeading
            eyebrow="Catalogue"
            title="Find the programme that fits your building."
            intro="Filter by intent, then open a category to see its benefits and the spaces it can contain."
          />

          <Reveal className="mt-10 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActive(null)}
              className={cn(
                "border px-4 py-2 text-xs uppercase tracking-[0.16em] transition-colors",
                active === null
                  ? "border-navy bg-navy text-navy-foreground"
                  : "border-border text-muted-foreground hover:border-navy hover:text-foreground",
              )}
            >
              All ({solutions.length})
            </button>
            {solutionFilters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f === active ? null : f)}
                className={cn(
                  "border px-4 py-2 text-xs uppercase tracking-[0.16em] transition-colors",
                  active === f
                    ? "border-navy bg-navy text-navy-foreground"
                    : "border-border text-muted-foreground hover:border-navy hover:text-foreground",
                )}
              >
                {f}
              </button>
            ))}
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {list.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 90}>
                <Link
                  to="/solutions/$slug"
                  params={{ slug: s.slug }}
                  className="group block"
                  aria-label={s.title}
                >
                  <div className="img-zoom aspect-[4/5] overflow-hidden bg-muted">
                    <img
                      src={s.image}
                      alt={`${s.title} — rooftop concept by SKY SPACE`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline gap-4">
                    <span className="eyebrow text-accent">{s.number}</span>
                    <h3 className="text-xl leading-snug">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.headline}</p>
                  <span className="mt-4 inline-block text-xs uppercase tracking-[0.18em] text-accent transition-transform duration-300 group-hover:translate-x-1">
                    View category &rarr;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          {list.length === 0 ? (
            <p className="mt-16 text-muted-foreground">No categories match that filter.</p>
          ) : null}
        </div>
      </section>

      <ClosingCta />
    </main>
  );
}
