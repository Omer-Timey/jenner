"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data
}: {
  data: TimelineEntry[];
}) => {
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
    offset: ["start 10%", "end 50%"]
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-transparent font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex pt-10 md:pt-32 relative">
            {/* Pin - positioned on the left, centered on the line */}
            <div className="absolute left-[13px] md:left-[13px] top-10 md:top-32 h-10 w-10 rounded-full bg-background flex items-center justify-center z-10">
              <div className="h-4 w-4 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5),0_0_20px_rgba(59,130,246,0.3)]" />
            </div>

            {/* Content wrapper - starts after the pin area */}
            <div className="mr-16 md:mr-20 flex-1">
              {/* Year/Date title */}
              <h3 className="text-2xl md:text-5xl font-bold text-white whitespace-nowrap mb-4">
                {item.title}
              </h3>
              
              {/* Content area */}
              <div className="w-full">
                {item.content}
              </div>
            </div>
          </div>
        ))}
        
        {/* Vertical line with animated gradient - positioned on the left */}
        <div 
          style={{ height: height + "px" }} 
          className="absolute left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div 
            style={{
              height: heightTransform,
              opacity: opacityTransform
            }} 
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-emerald-500 via-green-400 to-transparent from-[0%] via-[10%] rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5),0_0_16px_rgba(74,222,128,0.3)]" 
          />
        </div>
      </div>
    </div>
  );
};
