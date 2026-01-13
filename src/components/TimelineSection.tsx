import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2018",
    title: "תחילת המסע",
    description: "התחלתי את המחקר לאחר אבחנה אישית. הבנתי שיש דרך אחרת להתמודד.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
  },
  {
    year: "2020",
    title: "פריצת הדרך",
    description: "גילויים ראשונים בתחום המטבוליזם של תאים סרטניים שינו את הכל.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
  },
  {
    year: "2022",
    title: "הקמת הקהילה",
    description: "אלפי אנשים הצטרפו למסע. יחד אנחנו חזקים יותר.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80",
  },
  {
    year: "2024",
    title: "סערה מטבולית",
    description: "הקמת העמותה והפיכת המחקר לכלי נגיש לכל מי שצריך.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
  },
];

const TimelineItem = ({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`flex flex-col md:flex-row items-center gap-8 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Content */}
      <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} text-center`}>
        <span className="text-sm font-medium text-muted-foreground tracking-widest">
          {item.year}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
          {item.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed max-w-md mx-auto md:mx-0">
          {item.description}
        </p>
      </div>

      {/* Timeline dot */}
      <div className="hidden md:flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-foreground" />
        {index < timelineData.length - 1 && (
          <div className="w-px h-32 bg-border" />
        )}
      </div>

      {/* Image */}
      <div className="flex-1">
        <div className="relative overflow-hidden rounded-2xl glass p-1">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 md:h-64 object-cover rounded-xl"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
};

const TimelineSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative min-h-screen w-full py-24 md:py-32"
      style={{
        background: "var(--gradient-radial)",
      }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            מי אני?
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto space-y-16 md:space-y-0">
          {timelineData.map((item, index) => (
            <TimelineItem key={item.year} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
