import { useInView } from "framer-motion";
import { useRef } from "react";
import { Timeline } from "@/components/ui/timeline";
import { EtheralShadow } from "@/components/ui/ethereal-shadow";
import { TextEffect } from "@/components/ui/text-effect";

const timelineData = [
  {
    title: "2023",
    content: (
      <div>
        <h4 className="text-xl md:text-2xl font-bold text-foreground mb-4 text-right">לחימה בעזה</h4>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1580130732478-4e339fb6836f?w=500&h=500&fit=crop&q=80"
            alt="לחימה בעזה"
            className="rounded-lg object-cover aspect-square w-full shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1579912437766-7896df6d3cd3?w=500&h=500&fit=crop&q=80"
            alt="לחימה"
            className="rounded-lg object-cover aspect-square w-full shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
        </div>
      </div>
    ),
  },
  {
    title: "אפריל 2024",
    content: (
      <div>
        <h4 className="text-xl md:text-2xl font-bold text-foreground mb-4 text-right">חולה בסרטן</h4>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=500&h=500&fit=crop&q=80"
            alt="אבחון"
            className="rounded-lg object-cover aspect-square w-full shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=500&fit=crop&q=80"
            alt="טיפול"
            className="rounded-lg object-cover aspect-square w-full shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
        </div>
      </div>
    ),
  },
  {
    title: "יולי 2024",
    content: (
      <div>
        <h4 className="text-xl md:text-2xl font-bold text-foreground mb-4 text-right">רץ 60 ק"מ יום אחרי טיפולים</h4>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=500&h=500&fit=crop&q=80"
            alt="ריצה"
            className="rounded-lg object-cover aspect-square w-full shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=500&h=500&fit=crop&q=80"
            alt="אתגר"
            className="rounded-lg object-cover aspect-square w-full shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
        </div>
      </div>
    ),
  },
  {
    title: "נובמבר 2024",
    content: (
      <div>
        <h4 className="text-xl md:text-2xl font-bold text-foreground mb-4 text-right">שיא ישראל לחצי המרתון הכבד ביותר</h4>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1594882645126-14020914d58d?w=500&h=500&fit=crop&q=80"
            alt="מרתון"
            className="rounded-lg object-cover aspect-square w-full shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1461896836934-480b97cb1a03?w=500&h=500&fit=crop&q=80"
            alt="שיא"
            className="rounded-lg object-cover aspect-square w-full shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
        </div>
      </div>
    ),
  },
  {
    title: "דצמבר 2024",
    content: (
      <div>
        <h4 className="text-xl md:text-2xl font-bold text-foreground mb-4 text-right">הסרטן התפשט לריאה</h4>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=500&fit=crop&q=80"
            alt="התמודדות"
            className="rounded-lg object-cover aspect-square w-full shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500&h=500&fit=crop&q=80"
            alt="אתגר חדש"
            className="rounded-lg object-cover aspect-square w-full shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
        </div>
      </div>
    ),
  },
  {
    title: "ינואר 2025",
    content: (
      <div>
        <h4 className="text-xl md:text-2xl font-bold text-foreground mb-4 text-right">טס לאליפות העולם בשחייה במי קרח</h4>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500&h=500&fit=crop&q=80"
            alt="שחייה במי קרח"
            className="rounded-lg object-cover aspect-square w-full shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=500&fit=crop&q=80"
            alt="אליפות עולם"
            className="rounded-lg object-cover aspect-square w-full shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
        </div>
      </div>
    ),
  },
  {
    title: "יולי 2025",
    content: (
      <div>
        <h4 className="text-xl md:text-2xl font-bold text-foreground mb-4 text-right">קובע שיא ישראל למרתון הכבד ביותר שבוצע בישראל</h4>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=500&h=500&fit=crop&q=80"
            alt="מרתון כבד"
            className="rounded-lg object-cover aspect-square w-full shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=500&h=500&fit=crop&q=80"
            alt="שיא ישראל"
            className="rounded-lg object-cover aspect-square w-full shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
        </div>
      </div>
    ),
  },
  {
    title: "אוגוסט 2025",
    content: (
      <div>
        <h4 className="text-xl md:text-2xl font-bold text-foreground mb-4 text-right">הסרטן מתפשט שוב פעם</h4>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500&h=500&fit=crop&q=80"
            alt="התמודדות נוספת"
            className="rounded-lg object-cover aspect-square w-full shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=500&fit=crop&q=80"
            alt="המשך המאבק"
            className="rounded-lg object-cover aspect-square w-full shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
        </div>
      </div>
    ),
  },
  {
    title: "נובמבר 2025",
    content: (
      <div>
        <h4 className="text-xl md:text-2xl font-bold text-foreground mb-4 text-right">הקמת ג'נר</h4>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&h=500&fit=crop&q=80"
            alt="הקמת ג'נר"
            className="rounded-lg object-cover aspect-square w-full shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-shadow duration-300"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=500&fit=crop&q=80"
            alt="קהילה"
            className="rounded-lg object-cover aspect-square w-full shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-shadow duration-300"
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
