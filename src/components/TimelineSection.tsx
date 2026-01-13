import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Timeline } from "@/components/ui/timeline";
import { EtheralShadow } from "@/components/ui/ethereal-shadow";

const timelineData = [
  {
    title: "2018",
    content: (
      <div>
        <h4 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-right">
          תחילת המסע
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=500&fit=crop&q=80"
            alt="תחילת המחקר"
            className="rounded-lg object-cover h-32 md:h-48 w-full shadow-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500&h=500&fit=crop&q=80"
            alt="מעבדה"
            className="rounded-lg object-cover h-32 md:h-48 w-full shadow-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=500&h=500&fit=crop&q=80"
            alt="מחקר"
            className="rounded-lg object-cover h-32 md:h-48 w-full shadow-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=500&h=500&fit=crop&q=80"
            alt="גילויים ראשונים"
            className="rounded-lg object-cover h-32 md:h-48 w-full shadow-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2020",
    content: (
      <div>
        <h4 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-right">
          פריצת הדרך
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&h=500&fit=crop&q=80"
            alt="פריצת דרך מדעית"
            className="rounded-lg object-cover h-32 md:h-48 w-full shadow-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=500&h=500&fit=crop&q=80"
            alt="מחקר מתקדם"
            className="rounded-lg object-cover h-32 md:h-48 w-full shadow-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=500&h=500&fit=crop&q=80"
            alt="תוצאות מחקר"
            className="rounded-lg object-cover h-32 md:h-48 w-full shadow-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <h4 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-right">
          הקמת הקהילה
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&h=500&fit=crop&q=80"
            alt="קהילה"
            className="rounded-lg object-cover h-32 md:h-48 w-full shadow-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=500&fit=crop&q=80"
            alt="מפגש קהילתי"
            className="rounded-lg object-cover h-32 md:h-48 w-full shadow-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=500&h=500&fit=crop&q=80"
            alt="תמיכה הדדית"
            className="rounded-lg object-cover h-32 md:h-48 w-full shadow-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=500&h=500&fit=crop&q=80"
            alt="צמיחה"
            className="rounded-lg object-cover h-32 md:h-48 w-full shadow-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <h4 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-right">
          סערה מטבולית
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=500&fit=crop&q=80"
            alt="הקמת העמותה"
            className="rounded-lg object-cover h-32 md:h-48 w-full shadow-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=500&fit=crop&q=80"
            alt="מחקר נגיש"
            className="rounded-lg object-cover h-32 md:h-48 w-full shadow-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500&h=500&fit=crop&q=80"
            alt="כלים מעשיים"
            className="rounded-lg object-cover h-32 md:h-48 w-full shadow-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
        </div>
      </div>
    ),
  },
];

const TimelineSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative w-full py-24 md:py-32 bg-background"
    >
      {/* Ethereal Shadow Background */}
      <EtheralShadow
        className="absolute inset-0 z-0 opacity-40"
        color="rgba(128, 128, 128, 0.5)"
        animation={{ scale: 100, speed: 90 }}
        noise={{ opacity: 0.3, scale: 1.2 }}
        sizing="fill"
      />

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
            מי אני?
          </h2>
        </motion.div>

        {/* Timeline */}
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default TimelineSection;
