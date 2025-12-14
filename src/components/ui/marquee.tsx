"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  repeat?: number;
  duration?: string;
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  repeat = 4,
  duration = "30s",
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !reverse,
          "flex-row-reverse": reverse,
        },
        className
      )}
      style={{ "--duration": duration } as React.CSSProperties}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around [gap:var(--gap)] animate-marquee",
              {
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "[animation-direction:reverse]": reverse,
              }
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}