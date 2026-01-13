import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TextEffect } from "@/components/ui/text-effect";
const ChangingGameSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="research" className="relative min-h-screen w-full overflow-hidden flex items-start">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/2-section-video.mp4" type="video/mp4" />
      </video>

      {/* Right-to-left gradient for right-aligned content */}
      <div className="section-overlay-right" />

      {/* Content - aligned to top */}
      <div ref={ref} className="relative z-10 container mx-auto px-8 md:px-12 lg:px-16 pt-32 pb-24">
        <div className="max-w-2xl mr-0 ml-auto text-right">
          <div className="text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 tracking-wide">
            <TextEffect
              preset="blur"
              trigger={isInView}
              as="span"
              className="font-light block"
            >
              משנים את
            </TextEffect>
            <TextEffect
              preset="blur"
              trigger={isInView}
              delay={0.2}
              as="span"
              className="font-extrabold block"
            >
              חוקי המשחק
            </TextEffect>
          </div>

          <TextEffect
            per="line"
            preset="blur"
            trigger={isInView}
            delay={0.5}
            as="p"
            className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8"
          >
            הופכים את המלחמה המחודשת בסרטן לחלק מהשגרה: מה עושים ביום-יום, איך מדברים עם הצוות הרפואי, ואיך לוקחים את המושכות לידינו - בלי להחליף רופאים.
          </TextEffect>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.8,
          delay: 0.4
        }}>
            <a href="#community" className="glass-button-primary inline-flex items-center justify-center gap-3">
              למדו עוד
            </a>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ChangingGameSection;