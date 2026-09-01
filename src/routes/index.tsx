import { createFileRoute, Link } from "@tanstack/react-router";
import { Cta, Eyebrow, SectionHeading, ClosingCta } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { featuredSolutions, solutions } from "@/data/solutions";
import { projects } from "@/data/projects";
import { products } from "@/data/products";
import hero from "@/assets/hero-rooftop.jpg";
import before from "@/assets/before-rooftop.jpg";
import after from "@/assets/after-rooftop.jpg";
import blueprint from "@/assets/blueprint.jpg";
import climate from "@/assets/climate.jpg";
import materials from "@/assets/materials.jpg";
import designProcess from "@/assets/design-process.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SKY SPACE — Rooftops Reimagined as Living Architecture" },
      {
        name: "description",
        content:
          "SKY SPACE turns unused rooftops and terraces into gyms, gardens, studios, lounges and revenue-generating spaces. Architecture for the top of your building.",
      },
      { property: "og:title", content: "SKY SPACE — Rooftops Reimagined as Living Architecture" },
      {
        property: "og:description",
        content:
          "A roof is no longer the end of a building. It is the beginning of opportunity.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const pillars = [
  {
    title: "Architecture",
    copy: "Roof levels designed with the same rigour as any other floor of the building.",
  },
  {
    title: "Space Transformation",
    copy: "Unused surface converted into programme, comfort and daily usefulness.",
  },
  {
    title: "Lifestyle Design",
    copy: "Environments shaped around how people actually live, work and gather.",
  },
];

const process = [
  { n: "01", t: "Understand", c: "Site, structure, orientation, climate and intent." },
  { n: "02", t: "Design", c: "Spatial concept, materials, shade and circulation." },
  { n: "03", t: "Resolve", c: "Waterproofing, load, drainage, safety and detail." },
  { n: "04", t: "Realise", c: "Delivery coordination and finished, usable space." },
];

const values = [
  { t: "Restraint", c: "Fewer elements, better resolved." },
  { t: "Responsibility", c: "Structure, water and safety come first." },
  { t: "Longevity", c: "Materials chosen for exposure and time." },
  { t: "Atmosphere", c: "Light, shade and proportion do the work." },
];

function Index() {
  return (
    <>
      {/* 01 — Hero */}
      <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-navy">
        <img
          src={hero}
          alt="A designed rooftop terrace at dusk overlooking a city skyline"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-navy/60 to-navy/40" />
        <div className="shell pt-32 pb-20">
          <Reveal>
            <Eyebrow className="text-navy-foreground/70">Roof Space Architecture</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="display mt-8 max-w-5xl text-[3.25rem] leading-[0.92] text-navy-foreground sm:text-7xl lg:text-[7.5rem]">
              A roof is no longer the end of a building.
              <span className="block italic opacity-80">It is the beginning of opportunity.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-10 max-w-xl text-base leading-relaxed text-navy-foreground/70 md:text-lg">
              SKY SPACE transforms unused rooftops and terraces into meaningful, functional and
              beautiful environments — designed, detailed and built to last.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Cta to="/solutions" className="bg-navy-foreground text-navy hover:bg-stone">
                Explore solutions
              </Cta>
              <Cta
                to="/contact"
                variant="outline"
                className="border-navy-foreground/40 text-navy-foreground"
              >
                Start a project
              </Cta>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 — Brand statement */}
      <section className="section-pad">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <SectionHeading
            eyebrow="The idea"
            title={
              <>
                Most buildings stop
                <span className="italic"> one floor too early.</span>
              </>
            }
          />
          <Reveal delay={120} className="max-w-xl self-end">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Across every city, the largest unused surface sits at the very top. SKY SPACE treats
              that surface as architecture: a place with programme, proportion, shade, planting and
              purpose — not leftover space.
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              We work at the intersection of architecture, space transformation and lifestyle
              design, resolving the technical realities of a roof so the experience above it feels
              effortless.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 03 — Three pillars */}
      <section className="pb-4">
        <div className="shell grid gap-px border-y border-line bg-line md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} className="bg-background p-8 md:p-12">
              <span className="eyebrow text-accent">{`0${i + 1}`}</span>
              <h3 className="display mt-6 text-3xl">{p.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 04 — Before / After */}
      <section className="section-pad">
        <div className="shell">
          <SectionHeading
            eyebrow="Transformation"
            title="Before, and after."
            intro="The same square metres. An entirely different building."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              { img: before, label: "Before", copy: "Exposed slab, services, no shade, no use." },
              { img: after, label: "After", copy: "Structured shade, planting, seating, daily use." },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 120} className="img-zoom">
                <img
                  src={item.img}
                  alt={`${item.label} rooftop transformation`}
                  className="h-[24rem] w-full object-cover md:h-[32rem]"
                  loading="lazy"
                />
                <div className="mt-5 flex items-baseline justify-between gap-6">
                  <span className="eyebrow text-accent">{item.label}</span>
                  <p className="text-sm text-muted-foreground">{item.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Cinematic band */}
      <section className="relative isolate overflow-hidden bg-navy py-28 md:py-40">
        <img
          src={designProcess}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="shell text-center">
          <Reveal>
            <p className="display mx-auto max-w-4xl text-3xl leading-tight text-navy-foreground md:text-5xl">
              “We do not decorate rooftops. We design the last floor of the building.”
            </p>
          </Reveal>
        </div>
      </section>

      {/* 06 — Featured solutions */}
      <section className="section-pad">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="What a roof can become"
              title="Six of twenty possibilities."
            />
            <Reveal delay={120}>
              <Cta to="/solutions" variant="outline">
                All 20 solutions
              </Cta>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredSolutions.map((f, i) => (
              <Reveal key={f.label} delay={(i % 3) * 90}>
                <Link
                  to="/solutions/$slug"
                  params={{ slug: f.slug }}
                  className="img-zoom group block"
                >
                  <img
                    src={f.image}
                    alt={f.label}
                    className="h-72 w-full object-cover"
                    loading="lazy"
                  />
                  <h3 className="display mt-6 text-2xl">{f.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.copy}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — Solutions index strip */}
      <section className="border-y border-line bg-secondary/60 py-20">
        <div className="shell">
          <Eyebrow>The full catalogue</Eyebrow>
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {solutions.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/solutions/$slug"
                  params={{ slug: s.slug }}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 08 — Process */}
      <section className="section-pad">
        <div className="shell">
          <SectionHeading
            eyebrow="Our approach"
            title="A considered, four-stage process."
            intro="Every roof begins as a technical problem and ends as a place people use."
          />
          <div className="mt-14 grid gap-px bg-line md:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 80} className="bg-background p-8">
                <span className="display text-4xl text-accent">{p.n}</span>
                <h3 className="mt-6 text-lg font-medium">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.c}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-12">
            <Cta to="/approach" variant="outline">
              See the full approach
            </Cta>
          </Reveal>
        </div>
      </section>

      {/* 09 — Technical trio */}
      <section className="pb-20 md:pb-28">
        <div className="shell grid gap-8 md:grid-cols-3">
          {[
            { img: blueprint, t: "Structure first", c: "Load, span and slab capacity govern the design." },
            { img: climate, t: "Climate control", c: "Shade, ventilation and orientation, resolved early." },
            { img: materials, t: "Material honesty", c: "Timber, stone, steel and planting chosen for exposure." },
          ].map((item, i) => (
            <Reveal key={item.t} delay={i * 90} className="img-zoom">
              <img src={item.img} alt={item.t} className="h-64 w-full object-cover" loading="lazy" />
              <h3 className="display mt-5 text-2xl">{item.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.c}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 10 — Projects */}
      <section className="section-pad bg-secondary/50">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading eyebrow="Selected work" title="Concepts and completed thinking." />
            <Reveal delay={120}>
              <Cta to="/projects" variant="outline">
                All projects
              </Cta>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {projects.slice(0, 4).map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 100}>
                <Link to="/projects/$slug" params={{ slug: p.slug }} className="img-zoom block">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-80 w-full object-cover md:h-[26rem]"
                    loading="lazy"
                  />
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <h3 className="display text-2xl md:text-3xl">{p.title}</h3>
                    <span className="eyebrow text-muted-foreground">{p.category}</span>
                  </div>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    {p.summary}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11 — Products */}
      <section className="section-pad">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="Products & systems"
              title="The components behind the space."
            />
            <Reveal delay={120}>
              <Cta to="/products" variant="outline">
                View catalogue
              </Cta>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 70} className="bg-background">
                <Link to="/products/$slug" params={{ slug: p.slug }} className="block p-8">
                  <span className="eyebrow text-accent">{p.index}</span>
                  <h3 className="mt-5 text-lg font-medium">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 12 — Values */}
      <section className="section-pad bg-navy text-navy-foreground">
        <div className="shell">
          <SectionHeading eyebrow="What we hold to" title="Four principles." invert />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 80}>
                <div className="rule-line bg-line-inverse" />
                <h3 className="display mt-6 text-3xl">{v.t}</h3>
                <p className="mt-3 text-sm text-navy-foreground/65">{v.c}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 13 — Closing */}
      <ClosingCta />
    </>
  );
}
