"use client";

import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import Reveal from "./reveal";

type HeroSectionProps = {
  title: ReactNode;
  subtitle: ReactNode;
  children?: ReactNode;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageHint?: string;
  scrollingText?: string;
  align?: "center" | "left";
  size?: "default" | "large";
};

export default function HeroSection({
  title,
  subtitle,
  children,
  className,
  imageSrc,
  imageAlt,
  imageHint,
  scrollingText,
  align = "center",
  size = "default",
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative flex flex-col justify-center py-20 md:py-32 overflow-hidden",
        size === "large" ? "min-h-[85vh]" : "min-h-[60vh]",
        className
      )}
    >
      {/* Scrolling Text Background - The "Creative" Juice */}
      {scrollingText && (
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full opacity-[0.04] pointer-events-none select-none z-0">
          <Marquee duration="60s">
            <span className="text-[15vh] md:text-[25vh] font-black font-headline uppercase leading-none px-8 whitespace-nowrap">
              {scrollingText}
            </span>
          </Marquee>
        </div>
      )}

      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        {/* Gradient Mesh Effect */}
        <div className="absolute -top-[10%] -right-[10%] w-[60vw] h-[60vw] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-[100px]" />
        <div className="absolute top-[30%] -left-[10%] w-[50vw] h-[50vw] bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-[120px]" />

        {imageSrc && (
          <div className="absolute inset-0 z-0">
            <Image
              src={imageSrc}
              alt={imageAlt || "Background image"}
              fill
              className="object-cover opacity-[0.08] grayscale contrast-125 mix-blend-overlay"
              data-ai-hint={imageHint}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>
        )}
      </div>

      <div
        className={cn(
          "container relative z-10 px-4",
          align === "center" ? "text-center" : "text-left"
        )}
      >
        <Reveal y={30}>
          <h1
            className={cn(
              "font-bold font-headline leading-[0.9] tracking-tighter text-foreground mb-6",
              size === "large"
                ? "text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
                : "text-5xl sm:text-6xl md:text-7xl"
            )}
          >
            {title}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className={cn(
              "text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl",
              align === "center" ? "mx-auto" : ""
            )}
          >
            {subtitle}
          </div>
        </Reveal>

        {children && (
          <Reveal
            delay={0.2}
            className={cn(
              "mt-10",
              align === "center" ? "flex justify-center" : ""
            )}
          >
            {children}
          </Reveal>
        )}
      </div>

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"
      />
    </section>
  );
}