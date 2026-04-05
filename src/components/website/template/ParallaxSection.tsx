"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  overlay?: boolean;
  speed?: number;
}

const ParallaxSection = ({
  children,
  className = "",
  imageSrc,
  imageAlt = "",
  overlay = true,
  speed = 0.3,
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${speed * 100}px`, `${speed * 100}px`],
  );

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      {imageSrc && (
        <motion.div className="absolute inset-0" style={{ y }}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-[120%] w-full object-cover"
            loading="lazy"
          />
          {overlay && (
            <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/60 to-background/80" />
          )}
        </motion.div>
      )}
      <div className="relative">{children}</div>
    </section>
  );
};

export default ParallaxSection;
