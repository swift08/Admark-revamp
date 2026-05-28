type TeamPhotoProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/** Avoids SSR/client src mismatch from Vite dev HMR cache-busting (?t=…) on imported assets. */
export function TeamPhoto({ src, alt, className, priority = false }: TeamPhotoProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={768}
      height={960}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      className={className}
      suppressHydrationWarning
    />
  );
}
