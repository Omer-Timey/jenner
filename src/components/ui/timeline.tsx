"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {/* Vertical line with animated gradient - positioned to align with pins */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute right-[calc(50%-1px)] md:right-[calc(50%+120px)] top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>

        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-center pt-10 md:pt-40 md:gap-10"
          >
            {/* Content area - on the left */}
            <div className="relative w-full md:w-1/2 md:pr-8">
              <h3 className="md:hidden block text-2xl mb-4 text-right font-bold text-white">
                {item.title}
              </h3>
              {item.content}
            </div>

            {/* Pin and title container - sticky, centered on line */}
            <div className="sticky flex flex-row z-40 items-center top-40 self-start gap-4">
              {/* Pin - centered on line with glow effect */}
              <div className="h-12 w-12 rounded-full bg-background flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                <div className="h-4 w-4 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </div>
              {/* Title - to the right of pin */}
              <h3 className="hidden md:block text-xl md:text-5xl font-bold text-white whitespace-nowrap">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
