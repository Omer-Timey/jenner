import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";

const ChangingGameSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="research"
      className="relative min-h-screen w-full overflow-hidden flex items-center"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/2 section video.mp4" type="video/mp4" />
      </video>

      {/* Right-to-left gradient for right-aligned content */}
      <div className="section-overlay-right" />

      {/* Content */}
      <div ref={ref} className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-xl mr-0 ml-auto text-right">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 uppercase tracking-wide"
          >
            משנים את חוקי המשחק
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8"
          >
            הופכים את המלחמה המחודשת בסרטן לחלק מהשגרה: מה עושים ביום-יום, 
            איך מדברים עם הצוות הרפואי, ואיך לוקחים את המושכות לידינו - 
            בלי להחליף רופאים.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-end"
          >
            <a 
              href="#community" 
              className="inline-flex items-center gap-3 bg-black/60 backdrop-blur-sm border border-white/20 
                         hover:bg-black/80 transition-all duration-300
                         px-6 py-3 text-sm font-medium text-white uppercase tracking-widest"
            >
              למדו עוד
              <ArrowLeft className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChangingGameSection;
