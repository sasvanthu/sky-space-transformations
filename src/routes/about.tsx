import { createFileRoute } from "@tanstack/react-router";
import { ClosingCta, PageHero, SectionHeading } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import hero from "@/assets/design-process.jpg";
import materials from "@/assets/materials.jpg";
import climate from "@/assets/climate.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SKY SPACE — Architecture for the Roof Level" },
      {
        name: "description",
        content:
          "SKY SPACE is an architecture and roof-space transformation studio designing rooftops as considered, usable and lasting environments.",
      },
      { property: "og:title", content: "About SKY SPACE" },
      {
        property: "og:description",
        content: "An architecture studio dedicated to the last floor of the building.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const beliefs = [
  { t: "Unused space is an unfinished building.", c: "A roof without programme is capacity left on the table." },
  { t: "Technical honesty enables beauty.", c: "Waterproofing, load and drainage are the foundation of atmosphere." },
  { t: "Design must survive the weather.", c: "Every material is selected for exposure, not for a photograph." },
  { t: "Space should be used daily.", c: "A rooftop only succeeds when people return to it without occasion." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We design the last floor of the building."
        intro="SKY SPACE is an architecture and roof-space transformation studio working at the intersection of structure, climate and everyday life."
        image={hero}
      />

      <section className="section-pad">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <SectionHeading eyebrow="Who we are" title="A studio with a single obsession." />
          <Reveal delay={120} className="max-w-xl self-end space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              We work exclusively above the building line — terraces, roof decks, podiums and
              service levels that have never been asked to do anything.
            </p>
            <p className="leading-relaxed">
              That focus lets us move quickly through the parts of a roof project that usually stall
              it: structural capacity, water, access, safety and the reality of sun and wind at
              height. What remains is the part clients feel — proportion, shade, planting, material
              and quiet.
            </p>
            <p className="leading-relaxed">
              Our work spans private residences, corporate headquarters, hospitality venues,
              wellness environments and mixed-use developments.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="shell grid gap-6 md:grid-cols-2">
          {[materials, climate].map((img, i) => (
            <Reveal key={i} delay={i * 120} className="img-zoom">
              <img
                src={img}
                alt="SKY SPACE material and climate studies"
                className="h-80 w-full object-cover md:h-[28rem]"
                loading="lazy"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-secondary/50">
        <div className="shell">
          <SectionHeading eyebrow="What we believe" title="Four convictions." />
          <div className="mt-14 grid gap-px bg-line md:grid-cols-2">
            {beliefs.map((b, i) => (
              <Reveal key={b.t} delay={(i % 2) * 90} className="bg-background p-8 md:p-12">
                <span className="eyebrow text-accent">{`0${i + 1}`}</span>
                <h3 className="display mt-6 text-2xl md:text-3xl">{b.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{b.c}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta title="Let's look at your roof." />
    </>
  );
}
