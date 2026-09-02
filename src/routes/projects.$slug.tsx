import { createFileRoute, notFound } from "@tanstack/react-router";
import { ClosingCta, Cta, Eyebrow, PageHero } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable — SKY SPACE" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — SKY SPACE Projects`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary.slice(0, 155) },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/projects/${project.slug}` }],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <main className="section-pad">
      <div className="shell max-w-2xl pt-32">
        <Eyebrow>Not found</Eyebrow>
        <h1 className="display mt-5 text-4xl md:text-5xl">This project does not exist.</h1>
        <div className="mt-8">
          <Cta to="/projects">All projects</Cta>
        </div>
      </div>
    </main>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <main>
      <PageHero
        eyebrow={`Project ${project.index}`}
        title={project.title}
        intro={project.summary}
        image={project.image}
      />

      <section className="section-pad">
        <div className="shell grid gap-14 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Before</Eyebrow>
            <img
              src={project.before}
              alt={`${project.title} rooftop before transformation`}
              className="mt-5 aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <p className="mt-5 text-muted-foreground">{project.startingPoint}</p>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>After</Eyebrow>
            <img
              src={project.after}
              alt={`${project.title} rooftop after transformation`}
              className="mt-5 aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <p className="mt-5 text-muted-foreground">{project.result}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="shell grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <h2 className="display text-3xl md:text-4xl">The vision</h2>
            <p className="mt-5 text-muted-foreground">{project.vision}</p>
            <h2 className="display mt-12 text-3xl md:text-4xl">The transformation</h2>
            <p className="mt-5 text-muted-foreground">{project.transformation}</p>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Considerations</Eyebrow>
            <ul className="mt-6 space-y-4">
              {project.considerations.map((c) => (
                <li key={c} className="border-b border-border pb-4 text-muted-foreground">
                  {c}
                </li>
              ))}
            </ul>
            <dl className="mt-10 grid grid-cols-2 gap-6 text-sm">
              <div>
                <dt className="eyebrow text-accent">Type</dt>
                <dd className="mt-2">{project.type}</dd>
              </div>
              <div>
                <dt className="eyebrow text-accent">Location</dt>
                <dd className="mt-2">{project.location}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="shell grid gap-4 md:grid-cols-3">
          {project.gallery.map((g, i) => (
            <Reveal key={`${project.slug}-${i}`} delay={i * 80}>
              <img
                src={g}
                alt={`${project.title} gallery image ${i + 1}`}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <ClosingCta />
    </main>
  );
}
