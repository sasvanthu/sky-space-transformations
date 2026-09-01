import { createFileRoute } from "@tanstack/react-router";
import { ClosingCta, PageHero, SectionHeading } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import blueprint from "@/assets/blueprint.jpg";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Our Approach — How SKY SPACE Designs a Roof" },
      {
        name: "description",
        content:
          "From site study to handover: the six-stage SKY SPACE process for turning a rooftop into a resolved, usable architectural space.",
      },
      { property: "og:title", content: "Our Approach — SKY SPACE" },
      {
        property: "og:description",
        content: "A six-stage process from site study to a finished, usable roof.",
      },
      { property: "og:url", content: "/approach" },
    ],
    links: [{ rel: "canonical", href: "/approach" }],
  }),
  component: Approach,
});

const stages = [
  {
    n: "01",
    t: "Site & Structure Study",
    c: "We assess the slab, existing loads, access routes, drainage falls and services before drawing anything. This stage determines what the roof can carry and where.",
  },
  {
    n: "02",
    t: "Brief & Programme",
    c: "We define how the space will actually be used — by whom, at what hours, in which seasons — and translate that into zones, capacities and adjacencies.",
  },
  {
    n: "03",
    t: "Spatial Concept",
    c: "Plan, section and sightlines. Shade structures, planting mass, thresholds and circulation are composed as a single architectural idea.",
  },
  {
    n: "04",
    t: "Climate & Comfort",
    c: "Sun path, prevailing wind, glare and rain are resolved with orientation, louvres, screens, planting and surface selection.",
  },
  {
    n: "05",
    t: "Technical Resolution",
    c: "Waterproofing continuity, drainage, fixings, edge protection, balustrade heights, fire access and maintenance are detailed and coordinated.",
  },
  {
    n: "06",
    t: "Delivery & Handover",
    c: "Specification, contractor coordination, site review and a completed space with clear guidance on care and longevity.",
  },
];

const considerations = [
  "Structural capacity and load distribution",
  "Waterproofing and drainage continuity",
  "Wind exposure and fixing strategy",
  "Balustrades, edges and safe circulation",
  "Shade, glare and thermal comfort",
  "Irrigation, growing medium and plant weight",
  "Services, screening and maintenance access",
  "Material durability under UV and rain",
];

function Approach() {
  return (
    <>
      <PageHero
        eyebrow="Our approach"
        title="Rigour first. Atmosphere follows."
        intro="A roof is the most exposed surface of a building. Our process resolves the hard constraints early so the finished space can feel simple."
        image={blueprint}
      />

      <section className="section-pad">
        <div className="shell">
          <SectionHeading eyebrow="Process" title="Six stages." />
          <div className="mt-14 space-y-px bg-line">
            {stages.map((s, i) => (
              <Reveal key={s.n} delay={i * 60} className="bg-background">
                <div className="grid gap-6 py-10 md:grid-cols-[6rem_1fr_1.4fr] md:items-start">
                  <span className="display text-4xl text-accent">{s.n}</span>
                  <h3 className="display text-2xl md:text-3xl">{s.t}</h3>
                  <p className="leading-relaxed text-muted-foreground">{s.c}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy text-navy-foreground">
        <div className="shell">
          <SectionHeading
            eyebrow="Always considered"
            title="What we resolve on every roof."
            invert
          />
          <ul className="mt-14 grid gap-x-12 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {considerations.map((c, i) => (
              <Reveal as="li" key={c} delay={(i % 3) * 70}>
                <div className="rule-line bg-line-inverse" />
                <span className="mt-4 block text-sm text-navy-foreground/75">{c}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCta title="Start with a site study." />
    </>
  );
}
