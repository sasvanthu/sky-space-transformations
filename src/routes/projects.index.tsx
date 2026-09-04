import { createFileRoute, Link } from "@tanstack/react-router";
import { ClosingCta, PageHero, SectionHeading } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/data/projects";
import hero from "@/assets/after-rooftop.jpg";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Rooftop Transformations | SKY SPACE" },
      {
        name: "description",
        content:
          "Selected SKY SPACE rooftop transformation concepts: the starting point, the vision, the transformation and the result.",
      },
      { property: "og:title", content: "Projects — SKY SPACE" },
      { property: "og:description", content: "Selected rooftop transformation concepts." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Projects"
        title="Before was empty. After is lived in."
        intro="A selection of rooftop transformation concepts, each shown as a placeholder case study until client media is released."
        image={hero}
      />

      <section className="section-pad">
        <div className="shell">
          <SectionHeading eyebrow="Case studies" title="Selected transformations." />
          <div className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 100}>
                <Link to="/projects/$slug" params={{ slug: p.slug }} className="group block">
                  <div className="img-zoom aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={p.image}
                      alt={`${p.title} — rooftop transformation by SKY SPACE`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline gap-4">
                    <span className="eyebrow text-accent">{p.index}</span>
                    <h3 className="text-xl">{p.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {p.category} · {p.location}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
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
