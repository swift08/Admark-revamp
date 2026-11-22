import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";
import { isGtmConfigured, pushGtmPageView } from "@/lib/gtm";

/**
 * Pushes a custom page_view to dataLayer on initial load and SPA navigations
 * (including back/forward), after the router is idle so title/route are settled.
 */
export function GtmRouteTracker() {
  const lastRouteKeyRef = useRef<string | null>(null);
  const { pathname, search, status } = useRouterState({
    select: (state) => ({
      pathname: state.location.pathname,
      search: state.location.searchStr,
      status: state.status,
    }),
  });

  useEffect(() => {
    if (!isGtmConfigured()) return;
    if (typeof window === "undefined") return;
    if (status !== "idle") return;

    let cancelled = false;
    // Defer so HeadContent can flush the route title before we read document.title.
    const timer = window.setTimeout(() => {
      if (cancelled) return;

      // Key by path+search so hash-only changes (e.g. /#contact) do not duplicate page_view.
      const routeKey = `${window.location.pathname}${window.location.search}`;
      if (lastRouteKeyRef.current === routeKey) return;
      lastRouteKeyRef.current = routeKey;

      pushGtmPageView({
        event: "page_view",
        page_path: window.location.pathname,
        page_title: document.title,
        page_location: window.location.href,
      });
    }, 0);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [pathname, search, status]);

  return null;
}
