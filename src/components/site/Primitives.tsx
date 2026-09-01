import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("eyebrow inline-flex items-center gap-3 text-accent", className)}>
      <span className="h-px w-8 bg-current opacity-60" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        invert && "text-navy-foreground",
      )}
    >
      {eyebrow ? (
        <Eyebrow className={cn(invert && "text-navy-foreground/70", align === "center" && "justify-center")}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2 className="display mt-5 text-4xl md:text-5xl lg:text-[3.4rem]">{title}</h2>
      {intro ? (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed md:text-lg",
            invert ? "text-navy-foreground/70" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}

type CtaProps = {
  to: string;
  params?: Record<string, string>;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
};

export function Cta({ to, params, children, variant = "solid", className }: CtaProps) {
  const base =
    "group inline-flex items-center gap-3 px-7 py-3.5 text-xs uppercase tracking-[0.18em] font-medium transition-colors duration-300";
  const styles = {
    solid: "bg-navy text-navy-foreground hover:bg-navy-soft",
    outline: "border border-current text-foreground hover:bg-navy hover:text-navy-foreground hover:border-navy",
    ghost: "text-current hover:opacity-70 px-0 py-0",
  }[variant];

  return (
    <Link to={to as never} params={params as never} className={cn(base, styles, className)}>
      {children}
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
        &rarr;
      </span>
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
}) {
  return (
    <section className="relative isolate flex min-h-[62vh] items-end overflow-hidden bg-navy pb-16 pt-40 md:min-h-[70vh] md:pb-24 md:pt-52">
      <img
        src={image}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-navy/70 to-navy/30" />
      <div className="shell">
        <Reveal>
          <Eyebrow className="text-navy-foreground/70">{eyebrow}</Eyebrow>
          <h1 className="display mt-6 max-w-4xl text-5xl text-navy-foreground md:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-navy-foreground/70 md:text-lg">
            {intro}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function ClosingCta({
  title = "Your roof is waiting.",
  copy = "Tell us about the space. We will tell you what it could become.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="section-pad bg-navy text-navy-foreground">
      <div className="shell grid gap-10 md:grid-cols-2 md:items-end">
        <Reveal>
          <Eyebrow className="text-navy-foreground/70">Begin</Eyebrow>
          <h2 className="display mt-5 text-4xl md:text-6xl">{title}</h2>
        </Reveal>
        <Reveal delay={120} className="md:justify-self-end">
          <p className="max-w-md text-navy-foreground/70">{copy}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Cta to="/contact" className="bg-navy-foreground text-navy hover:bg-stone">
              Start a conversation
            </Cta>
            <Cta to="/solutions" variant="outline" className="border-navy-foreground/40 text-navy-foreground">
              Explore solutions
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
