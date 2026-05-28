export function BackgroundGrid() {
  return (
    <>
      <div className="fixed inset-0 -z-10 blueprint-grid pointer-events-none opacity-[0.18]" />
      <div className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(225,29,72,0.08),transparent_55%)]" />
    </>
  );
}
