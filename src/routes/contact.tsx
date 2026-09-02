import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Eyebrow, PageHero } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { solutions } from "@/data/solutions";
import hero from "@/assets/blueprint.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Start a Roof Conversation | SKY SPACE" },
      {
        name: "description",
        content:
          "Tell SKY SPACE about your rooftop or terrace. Share the building, the intent and the space, and we will respond with a considered direction.",
      },
      { property: "og:title", content: "Contact — SKY SPACE" },
      { property: "og:description", content: "Tell us about the space. We will tell you what it could become." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const field =
  "mt-2 w-full border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-navy";

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Tell us about the space."
        intro="Share the building, the roof and what you would like it to become. We will come back with a considered direction."
        image={hero}
      />

      <section className="section-pad">
        <div className="shell grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                toast.success("Thank you — your enquiry has been noted.", {
                  description: "A SKY SPACE designer will be in touch shortly.",
                });
                (e.currentTarget as HTMLFormElement).reset();
              }}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Name
                  <input required name="name" className={field} placeholder="Your name" />
                </label>
                <label className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    className={field}
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Phone
                  <input name="phone" className={field} placeholder="Optional" />
                </label>
                <label className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Location
                  <input name="location" className={field} placeholder="City" />
                </label>
              </div>
              <label className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Interested in
                <select name="solution" className={field} defaultValue="">
                  <option value="">Not sure yet</option>
                  {solutions.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                About the roof
                <textarea
                  required
                  name="message"
                  rows={6}
                  className={field}
                  placeholder="Approximate area, building type, current condition and what you have in mind."
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-navy px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-navy-foreground transition-colors hover:bg-navy-soft"
              >
                Send enquiry <span aria-hidden>&rarr;</span>
              </button>
              {sent ? (
                <p className="text-sm text-muted-foreground">
                  Enquiry received. We will respond by email.
                </p>
              ) : null}
            </form>
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow>What happens next</Eyebrow>
            <ol className="mt-6 space-y-6">
              {[
                ["01", "We read the brief", "Your notes and the roof's basic conditions."],
                ["02", "We ask the right questions", "Structure, access, drainage, intent."],
                ["03", "We propose a direction", "A programme, a feel and a realistic scope."],
              ].map(([n, t, c]) => (
                <li key={n} className="border-b border-border pb-6">
                  <span className="eyebrow text-accent">{n}</span>
                  <h3 className="mt-2 text-lg">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
