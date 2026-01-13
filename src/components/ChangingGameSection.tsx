import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
        poster="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1920&q=80"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-laboratory-scientist-4180/1080p.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlay */}
      <div className="section-overlay" />

      {/* Content */}
      <div ref={ref} className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-3xl mr-0 ml-auto text-right">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8"
          >
            משנים את חוקי המשחק
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
          >
            הופכים את המלחמה המחודשת בסרטן לחלק מהשגרה: מה עושים ביום-יום, 
            איך מדברים עם הצוות הרפואי, ואיך לוקחים את המושכות לידינו - 
            בלי להחליף רופאים.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-end"
          >
            <a href="#community" className="glass-button">
              למדו עוד
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChangingGameSection;
