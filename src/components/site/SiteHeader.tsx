import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-admark.webp";
import { SiteContainer } from "@/components/site/SiteContainer";
import { SERVICE_GROUPS } from "@/data/services";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/#process", label: "How we work", isRoute: false },
  { to: "/work", label: "Work", isRoute: true },
  { to: "/careers", label: "Careers", isRoute: true },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setScrolled(y > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-[background-color,border-color,box-shadow] duration-300",
          scrolled || menuOpen
            ? "border-b border-border-dim bg-black shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
            : "border-b border-transparent bg-transparent shadow-none",
        )}
      >
        <SiteContainer className="flex min-h-[6rem] py-2 items-center justify-between gap-4">
<Link
             to="/"
             className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
             onClick={(e: React.MouseEvent) => {
               closeMenu();
               const currentPath = useRouterState({ select: (s) => s.location.pathname });
               if (currentPath === "/") {
                 e.preventDefault();
                 const hero = document.getElementById("top");
                 hero?.scrollIntoView({ behavior: "smooth" });
               }
             }}
           >
            <img
              src={logo}
              alt="AdMark Digitals"
              className="h-20 w-20 shrink-0 object-contain sm:h-[6rem] sm:w-[6rem] drop-shadow-md"
              suppressHydrationWarning
            />
            <div className="min-w-0 flex flex-col leading-tight">
              <span className="truncate font-display text-lg font-semibold tracking-tight sm:text-2xl">
                AdMark Digitals
              </span>
              <span className="hidden text-xs text-muted-foreground mt-0.5 sm:block truncate">
                Mysuru · Bengaluru · Hyderabad
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm text-muted-foreground">
            <div className="relative group">
              <a
                href="/#services"
                className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
              >
                Services
                <span className="text-[10px] opacity-60" aria-hidden>
                  ▾
                </span>
              </a>
              <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-150">
                <div className="w-64 border border-border-dim bg-background shadow-lg py-2">
                  {SERVICE_GROUPS.map((group) => (
                    <Link
                      key={group.slug}
                      to="/services/$slug"
                      params={{ slug: group.slug }}
                      className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                    >
                      {group.navLabel}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {NAV_LINKS.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.to}
                  to={link.to}
                  className="hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ),
            )}
            <a
              href="/#contact"
              className="px-4 py-2.5 bg-foreground text-background text-sm font-medium hover:bg-brand-red transition-colors"
            >
              Start a project
            </a>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href="/#contact"
              className="inline-flex min-h-11 items-center px-3 py-2 text-xs font-medium bg-brand-red text-white sm:text-sm"
            >
              Contact
            </a>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center border border-border-dim bg-background/80 text-foreground"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((open) => !open)}
              suppressHydrationWarning
            >
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
              <span className="relative block h-3.5 w-4" aria-hidden>
                <span
                  className={cn(
                    "absolute left-0 top-0 block h-px w-full bg-current transition-transform duration-200",
                    menuOpen && "top-1.5 rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-1.5 block h-px w-full bg-current transition-opacity duration-200",
                    menuOpen && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-3 block h-px w-full bg-current transition-transform duration-200",
                    menuOpen && "top-1.5 -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </SiteContainer>
      </header>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-[visibility,opacity] duration-300",
          menuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none",
        )}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/70"
          aria-label="Close menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={closeMenu}
        />
        <nav
          className={cn(
            "absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-border-dim bg-background pt-[4.25rem] transition-transform duration-300 ease-out",
            menuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex flex-1 flex-col overflow-y-auto overscroll-contain px-5 py-6">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Services
            </p>
            <ul className="mb-6 space-y-1 border-b border-border-dim pb-6">
              {SERVICE_GROUPS.map((group) => (
                <li key={group.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: group.slug }}
                    className="block min-h-11 py-2.5 text-sm text-foreground hover:text-brand-red transition-colors"
                    onClick={closeMenu}
                  >
                    {group.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
            {NAV_LINKS.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.to}
                  to={link.to}
                  className="min-h-11 py-3 text-base text-foreground border-b border-border-dim hover:text-brand-red transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="min-h-11 py-3 text-base text-foreground border-b border-border-dim hover:text-brand-red transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ),
            )}
            <a
              href="/#contact"
              className="mt-8 flex min-h-12 items-center justify-center bg-brand-red px-4 py-3 text-sm font-medium text-white hover:bg-foreground hover:text-background transition-colors"
              onClick={closeMenu}
            >
              Start a project
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
