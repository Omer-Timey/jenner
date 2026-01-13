import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { TextEffect } from "@/components/ui/text-effect";

export function HeroSection() {
  return (
    <main className="overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
      >
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>
      <section>
        <div className="relative pt-24 md:pt-36">
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    delayChildren: 1,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 2,
                  },
                },
              },
            }}
            className="absolute inset-0 -z-20"
          >
            <img
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=2940&q=80"
              alt="רקע מדעי"
              className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 lg:block"
              width="3276"
              height="1500"
            />
          </AnimatedGroup>
          <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]" />
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
              <AnimatedGroup preset="fade">
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
                preset="fade"
                delay={0.5}
                as="p"
                className="mx-auto mt-8 max-w-2xl text-lg text-balance text-muted-foreground"
              >
                סערה מטבולית הוקמה מתוך האמונה שהמלחמה בסרטן זקוקה לחזית חדשה - שמבוססת על ביולוגיה, חשיבה מחודשת והבנה עמוקה של מנגנוני המחלה.
              </TextEffect>

              <AnimatedGroup preset="blur-slide" className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
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

          {/* Video placeholder section - prepared for future video */}
          <AnimatedGroup preset="blur-slide">
            <div className="relative mx-auto mt-16 max-w-6xl px-6 lg:mt-20">
              <div className="relative">
                <div className="bg-linear-to-b absolute inset-0 z-10 from-transparent from-35% to-background" />
                {/* Video placeholder - replace with actual video element when ready */}
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm">
                  <img
                    className="size-full object-cover"
                    src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=2000&q=80"
                    alt="מחקר סרטן"
                  />
                  {/* Future video element will go here */}
                </div>
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </section>
    </main>
  );
}

export default HeroSection;
