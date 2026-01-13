import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { TextEffect } from "@/components/ui/text-effect";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background image placeholder - will be replaced with video in future */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroBg}
          alt="רקע"
          className="h-full w-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>
      {/* 
        Future video implementation:
        Replace the background <img> above with:
        <video autoPlay muted loop playsInline className="size-full object-cover">
          <source src="/video.mp4" type="video/mp4" />
        </video>
      */}
      
      <section className="flex min-h-screen items-center justify-center">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
            <AnimatedGroup 
              variants={{
                container: {
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 },
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
            >
              <Link
                to="#about"
                className="hover:bg-muted dark:hover:border-t-primary/30 bg-muted/50 group mx-auto flex w-fit items-center gap-4 rounded-full border border-border p-1 pr-3 shadow-md shadow-zinc-950/5 transition-all duration-300 hover:shadow-lg dark:border-t-white/5 dark:shadow-zinc-950/50"
              >
                <span className="bg-primary text-primary-foreground block rounded-full px-4 py-0.5 text-sm font-medium shadow shadow-primary/10">
                  מחקר חדש
                </span>
                <span className="text-muted-foreground flex items-center gap-2 text-sm font-medium">
                  הגישה המטבולית לסרטן
                  <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
                </span>
              </Link>
            </AnimatedGroup>

            <TextEffect
              preset="blur"
              as="h1"
              className="mt-8 text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl text-foreground"
            >
              המלחמה המחודשת בסרטן
            </TextEffect>

            <TextEffect
              per="line"
              preset="blur"
              delay={0.5}
              as="p"
              className="mx-auto mt-8 max-w-2xl text-lg text-balance text-muted-foreground"
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
              <div className="bg-foreground/10 rounded-xl p-0.5">
                <Button
                  asChild
                  size="lg"
                  className="rounded-[10px] px-6 text-base"
                >
                  <Link to="#about">גלו עוד</Link>
                </Button>
              </div>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="rounded-xl px-6 text-base hover:bg-muted"
              >
                <Link to="#community">הצטרפו לקהילה</Link>
              </Button>
            </AnimatedGroup>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HeroSection;
