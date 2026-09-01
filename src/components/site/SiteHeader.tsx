import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/solutions", label: "Solutions" },
  { to: "/projects", label: "Projects" },
  { to: "/products", label: "Products" },
  { to: "/approach", label: "Approach" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-navy/95 backdrop-blur-md py-3 border-b border-line-inverse"
          : "bg-transparent py-6",
      )}
    >
      <div className="shell flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none text-navy-foreground">
          <span className="display text-2xl tracking-tight md:text-[1.6rem]">SKY SPACE</span>
          <span className="eyebrow mt-1 text-[0.55rem] text-navy-foreground/55">
            Roof Space Architecture
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-[0.7rem] uppercase tracking-[0.18em] text-navy-foreground/65 transition-colors hover:text-navy-foreground data-[status=active]:text-navy-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="border border-navy-foreground/35 px-6 py-2.5 text-[0.7rem] uppercase tracking-[0.18em] text-navy-foreground transition-colors hover:bg-navy-foreground hover:text-navy"
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-navy-foreground lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="shell lg:hidden">
          <nav className="mt-6 flex flex-col gap-1 border-t border-line-inverse pt-5 pb-4">
            {[...nav, { to: "/contact", label: "Contact" } as const].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="py-3 text-lg text-navy-foreground/80 transition-colors hover:text-navy-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
