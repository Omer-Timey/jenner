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
      className="w-full bg-transparent font-sans"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-32 md:gap-10"
          >
            {/* Pin and title - sticky on scroll */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Pin - positioned on the line */}
              <div className="h-12 w-12 absolute left-[19px] md:left-[19px] rounded-full bg-background border-4 border-muted-foreground/20 flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-white" />
              </div>
              {/* Title next to pin */}
              <h3 className="hidden md:block text-xl md:text-5xl font-bold text-muted-foreground/60 mr-0 md:mr-0 md:pl-24 pl-24">
                {item.title}
              </h3>
            </div>

            {/* Content area */}
            <div className="relative pr-4 pl-20 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-right font-bold text-muted-foreground/60">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        
        {/* Vertical line with animated gradient */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-10 top-0 overflow-hidden w-[2px] bg-muted-foreground/20 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
