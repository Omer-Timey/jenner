import { useInView } from "framer-motion";
import { useRef } from "react";
import { Timeline } from "@/components/ui/timeline";
import { EtheralShadow } from "@/components/ui/ethereal-shadow";
import { TextEffect } from "@/components/ui/text-effect";

const imageGridClass = "grid grid-cols-2 gap-3 max-w-2xl";
const imageClass = "rounded-lg object-cover aspect-square w-full shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-shadow duration-300";

const timelineData = [
  {
    title: "סוף 2023",
    content: (
      <div>
        <h4 className="text-2xl md:text-4xl font-normal text-foreground mb-6 text-right">לחימה בעזה</h4>
        <div className={imageGridClass}>
          <img src="/timeline-media/end-of-2023/1.JPG" alt="לחימה בעזה" className={imageClass} loading="lazy" />
          <img src="/timeline-media/end-of-2023/2.JPG" alt="לחימה בעזה" className={imageClass} loading="lazy" />
          <img src="/timeline-media/end-of-2023/3.JPG" alt="לחימה בעזה" className={imageClass} loading="lazy" />
          <img src="/timeline-media/end-of-2023/4.JPG" alt="לחימה בעזה" className={imageClass} loading="lazy" />
        </div>
      </div>
    ),
  },
  {
    title: "אפר׳ 2024",
    content: (
      <div>
        <h4 className="text-2xl md:text-4xl font-normal text-foreground mb-6 text-right">חולה בסרטן</h4>
        <div className={imageGridClass}>
          <img src="/timeline-media/april-2024/1.JPG" alt="חולה בסרטן" className={imageClass} loading="lazy" />
          <img src="/timeline-media/april-2024/2.JPG" alt="חולה בסרטן" className={imageClass} loading="lazy" />
          <img src="/timeline-media/april-2024/3.jpg" alt="חולה בסרטן" className={imageClass} loading="lazy" />
          <img src="/timeline-media/april-2024/4.jpg" alt="חולה בסרטן" className={imageClass} loading="lazy" />
        </div>
      </div>
    ),
  },
  {
    title: "יול׳ 2024",
    content: (
      <div>
        <h4 className="text-2xl md:text-4xl font-normal text-foreground mb-6 text-right">רץ 60 ק"מ יום אחרי טיפולים</h4>
        <div className={imageGridClass}>
          <img src="/timeline-media/july-2024/1.jpg" alt="ריצה 60 קמ" className={imageClass} loading="lazy" />
          <img src="/timeline-media/july-2024/2.JPEG" alt="ריצה 60 קמ" className={imageClass} loading="lazy" />
          <img src="/timeline-media/july-2024/3.JPEG" alt="ריצה 60 קמ" className={imageClass} loading="lazy" />
          <img src="/timeline-media/july-2024/4.JPEG" alt="ריצה 60 קמ" className={imageClass} loading="lazy" />
        </div>
      </div>
    ),
  },
  {
    title: "נוב׳ 2024",
    content: (
      <div>
        <h4 className="text-2xl md:text-4xl font-normal text-foreground mb-6 text-right">שיא ישראל לחצי המרתון הכבד ביותר</h4>
        <div className={imageGridClass}>
          <img src="/timeline-media/november-2024/1.JPG" alt="שיא ישראל" className={imageClass} loading="lazy" />
          <img src="/timeline-media/november-2024/2.JPEG" alt="שיא ישראל" className={imageClass} loading="lazy" />
          <img src="/timeline-media/november-2024/3.JPEG" alt="שיא ישראל" className={imageClass} loading="lazy" />
          <img src="/timeline-media/november-2024/4.JPEG" alt="שיא ישראל" className={imageClass} loading="lazy" />
        </div>
      </div>
    ),
  },
  {
    title: "דצמ׳ 2024",
    content: (
      <div>
        <h4 className="text-2xl md:text-4xl font-normal text-foreground mb-6 text-right">הסרטן התפשט לריאה</h4>
        <div className={imageGridClass}>
          <img src="/timeline-media/december-2024/1.HEIC" alt="הסרטן התפשט" className={imageClass} loading="lazy" />
          <img src="/timeline-media/december-2024/2.HEIC" alt="הסרטן התפשט" className={imageClass} loading="lazy" />
          <img src="/timeline-media/december-2024/3.HEIC" alt="הסרטן התפשט" className={imageClass} loading="lazy" />
          <img src="/timeline-media/december-2024/4.HEIC" alt="הסרטן התפשט" className={imageClass} loading="lazy" />
        </div>
      </div>
    ),
  },
  {
    title: "ינו׳ 2025",
    content: (
      <div>
        <h4 className="text-2xl md:text-4xl font-normal text-foreground mb-6 text-right">טס לאליפות העולם בשחייה במי קרח</h4>
        <div className={imageGridClass}>
          <img src="/timeline-media/january-2025/1.PNG" alt="אליפות עולם" className={imageClass} loading="lazy" />
          <img src="/timeline-media/january-2025/2.jpg" alt="אליפות עולם" className={imageClass} loading="lazy" />
          <img src="/timeline-media/january-2025/3.PNG" alt="אליפות עולם" className={imageClass} loading="lazy" />
          <img src="/timeline-media/january-2025/4.HEIC" alt="אליפות עולם" className={imageClass} loading="lazy" />
        </div>
      </div>
    ),
  },
  {
    title: "יול׳ 2025",
    content: (
      <div>
        <h4 className="text-2xl md:text-4xl font-normal text-foreground mb-6 text-right">קובע שיא ישראל למרתון הכבד ביותר שבוצע בישראל</h4>
        <div className={imageGridClass}>
          <img src="/timeline-media/july-2025/1.JPG" alt="שיא ישראל מרתון" className={imageClass} loading="lazy" />
          <img src="/timeline-media/july-2025/2.jpg" alt="שיא ישראל מרתון" className={imageClass} loading="lazy" />
          <img src="/timeline-media/july-2025/3.jpg" alt="שיא ישראל מרתון" className={imageClass} loading="lazy" />
          <img src="/timeline-media/july-2025/4.jpg" alt="שיא ישראל מרתון" className={imageClass} loading="lazy" />
        </div>
      </div>
    ),
  },
  {
    title: "אוג׳ 2025",
    content: (
      <div>
        <h4 className="text-2xl md:text-4xl font-normal text-foreground mb-6 text-right">הסרטן מתפשט שוב פעם</h4>
        <div className={imageGridClass}>
          <img src="/timeline-media/august-2025/1.heic" alt="הסרטן מתפשט" className={imageClass} loading="lazy" />
        </div>
      </div>
    ),
  },
  {
    title: "נוב׳ 2025",
    content: (
      <div>
        <h4 className="text-2xl md:text-4xl font-normal text-foreground mb-6 text-right">הקמת ג'נר</h4>
        <div className={imageGridClass}>
          <img src="/timeline-media/november-2025/1.JPG" alt="הקמת ג'נר" className={imageClass} loading="lazy" />
          <img src="/timeline-media/november-2025/2.jpg" alt="הקמת ג'נר" className={imageClass} loading="lazy" />
        </div>
      </div>
    ),
  },
];

const TimelineSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative w-full py-24 md:py-32 bg-background">
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
        <div
          ref={headerRef}
          className="text-center mb-6"
        >
          <TextEffect
            preset="blur"
            per="word"
            trigger={isHeaderInView}
            className="text-5xl md:text-6xl lg:text-8xl font-bold text-foreground"
          >
            מי אני?
          </TextEffect>
          <TextEffect
            preset="blur"
            per="line"
            trigger={isHeaderInView}
            delay={0.3}
            className="text-lg md:text-xl text-muted-foreground mt-8 max-w-4xl mx-auto leading-relaxed"
          >
            אני יואב שריקר, לוחם לשעבר שאובחן בסרטן בגיל 21, והמחלה סימנה עבורי נקודת מפנה פיזית ותודעתית. כיום אני עוסק במחקר, בעשייה פיזית קיצונית ובפיתוח כלים וידע לאנשים המתמודדים עם מחלה ואתגר, מתוך מטרה להבין מה באמת אפשרי בזמן משבר.
          </TextEffect>
        </div>

        {/* Timeline */}
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default TimelineSection;
