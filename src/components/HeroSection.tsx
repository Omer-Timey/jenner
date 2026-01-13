import { useRef, useEffect, useCallback } from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { TextEffect } from "@/components/ui/text-effect";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isReversing = useRef(false);
  const animationRef = useRef<number>();

  const reversePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    const step = 1 / 30; // ~30fps backwards
    video.currentTime = Math.max(0, video.currentTime - step);

    if (video.currentTime > 0) {
      animationRef.current = requestAnimationFrame(reversePlay);
    } else {
      // Reached start, play forward again
      isReversing.current = false;
      video.play();
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      if (!isReversing.current) {
        isReversing.current = true;
        video.pause();
        reversePlay();
      }
    };

    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("ended", handleEnded);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [reversePlay]);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/1 section video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Inner shadow from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      
      <section className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
            <TextEffect
              preset="blur"
              as="h1"
              className="text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl text-white"
            >
              המלחמה המחודשת בסרטן
            </TextEffect>

            <TextEffect
              per="line"
              preset="blur"
              delay={0.5}
              as="p"
              className="mx-auto mt-8 max-w-2xl text-lg text-balance text-white/80"
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
