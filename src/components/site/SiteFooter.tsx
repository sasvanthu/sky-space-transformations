import { Link } from "@tanstack/react-router";

const columns = [
  {
    title: "Navigate",
    links: [
      { to: "/", label: "Home" },
      { to: "/about", label: "About" },
      { to: "/approach", label: "Our Approach" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Explore",
    links: [
      { to: "/solutions", label: "Solutions" },
      { to: "/projects", label: "Projects" },
      { to: "/products", label: "Products" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-line-inverse bg-navy text-navy-foreground">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <span className="display text-3xl">SKY SPACE</span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-foreground/60">
              A roof is no longer the end of a building. It is the beginning of opportunity.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="eyebrow text-navy-foreground/50">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-navy-foreground/75 transition-colors hover:text-navy-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="eyebrow text-navy-foreground/50">Enquiries</h3>
            <ul className="mt-5 space-y-3 text-sm text-navy-foreground/75">
              <li>studio@skyspace.design</li>
              <li>Consultations by appointment</li>
              <li>Residential · Commercial · Hospitality</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line-inverse pt-8 text-xs text-navy-foreground/45 md:flex-row md:items-center md:justify-between">
          <span>&copy; {new Date().getFullYear()} SKY SPACE. All rights reserved.</span>
          <span className="uppercase tracking-[0.18em]">
            Architecture · Space Transformation · Lifestyle Design
          </span>
        </div>
      </div>
    </footer>
  );
}
