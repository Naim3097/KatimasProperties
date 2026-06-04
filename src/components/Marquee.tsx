import { cn } from "@/lib/cn";

/** Edge-faded, infinitely scrolling text strip (pure CSS, pauses on hover). */
export function Marquee({
  items,
  className,
  big = false,
}: {
  items: string[];
  className?: string;
  big?: boolean;
}) {
  const Track = () => (
    <div className="flex shrink-0 items-center">
      {items.map((t, i) => (
        <span
          key={i}
          className={cn(
            "inline-flex items-center whitespace-nowrap",
            big
              ? "mx-6 gap-6 font-[var(--font-display)] text-3xl text-ink/90 sm:text-4xl lg:text-5xl"
              : "mx-7 gap-7 text-sm font-medium uppercase tracking-[0.18em] text-muted",
          )}
        >
          <span className={cn(big && "display")}>{t}</span>
          <span
            className={cn("rounded-full bg-clay", big ? "h-2.5 w-2.5" : "h-1.5 w-1.5 bg-clay/60")}
          />
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("marquee", className)} aria-hidden="true">
      <div className="marquee__move">
        <Track />
        <Track />
      </div>
    </div>
  );
}
