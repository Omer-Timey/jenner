import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { TextEffect } from "@/components/ui/text-effect";


export function HeroSection() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/1 section video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Inner shadow from bottom - weaker gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />
      </div>
      
      <section className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
            <TextEffect
              preset="blur"
              as="h1"
              className="text-5xl font-bold tracking-tight text-balance md:text-7xl lg:text-8xl text-white"
            >
              המלחמה המחודשת בסרטן
            </TextEffect>

            <TextEffect
              per="line"
              preset="blur"
              delay={0.5}
              as="p"
              className="mx-auto mt-8 max-w-3xl text-xl md:text-2xl text-balance text-white/80"
            >
              סערה מטבולית הוקמה מתוך האמונה שהמלחמה בסרטן זקוקה לחזית חדשה - שמבוססת על ביולוגיה, חשיבה מחודשת והבנה עמוקה של מנגנוני המחלה.
            </TextEffect>

            <AnimatedGroup 
              variants={{
                container: {
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15, delayChildren: 0.8 },
                  },
                },
                item: {
                  hidden: { opacity: 0, filter: 'blur(12px)', y: 12 },
                  visible: { 
                    opacity: 1, 
                    filter: 'blur(0px)', 
                    y: 0,
                    transition: { type: 'spring', bounce: 0.3, duration: 1.5 }
                  },
                },
              }}
              className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a
                href="#about"
                className="glass-button-primary inline-flex items-center justify-center gap-3"
              >
                גלו עוד
              </a>
              <a
                href="#community"
                className="glass-button inline-flex items-center justify-center gap-3"
              >
                הצטרפו לקהילה
              </a>
            </AnimatedGroup>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HeroSection;
