import { useEffect, useRef, useState } from "react";

type Options = IntersectionObserverInit & { once?: boolean };

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options?: Options) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  const { once = true, ...observerOptions } = options ?? {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        if (once) observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px", ...observerOptions },
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- observer options are stable per mount
  }, [once]);

  return { ref, visible };
}
