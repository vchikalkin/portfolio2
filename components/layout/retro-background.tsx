export function RetroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-32 right-0 size-[min(80vw,640px)] rounded-full opacity-[0.18] blur-[120px] dark:opacity-[0.22]"
        style={{ background: 'var(--glow-purple)' }}
      />
      <div
        className="absolute top-[38%] -left-32 size-[min(70vw,520px)] rounded-full opacity-[0.12] blur-[100px] dark:opacity-[0.16]"
        style={{ background: 'var(--glow-pink)' }}
      />
      <div
        className="absolute right-1/4 bottom-0 size-[min(60vw,400px)] rounded-full opacity-[0.08] blur-[90px] dark:opacity-[0.1]"
        style={{ background: 'var(--glow-cyan)' }}
      />
    </div>
  );
}
