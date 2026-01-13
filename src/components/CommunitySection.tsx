import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, MessageCircle, Mail } from "lucide-react";

const CommunitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="community"
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
        <source src="/3 section video.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      {/* Bottom-to-top gradient for centered content */}
      <div className="section-overlay-center" />

      {/* Content */}
      <div ref={ref} className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8"
          >
            הצטרפו לקהילה
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            זה המקום שבו ידע הופך לכוח. הצטרפו לשיח פתוח על מחקרים פורצי דרך, 
            שתפו תובנות וקבלו כלים מעשיים. בקהילה שלנו, המדע והאנושיות נפגשים 
            כדי ליצור חזית מאוחדת, חוקרת ותומכת.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#"
              className="glass-button-primary inline-flex items-center justify-center gap-3"
            >
              <Users className="w-5 h-5" />
              הצטרפו לפורום
            </a>
            <a
              href="#contact"
              className="glass-button inline-flex items-center justify-center gap-3"
            >
              <Mail className="w-5 h-5" />
              צרו קשר
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20"
          >
            {[
              { number: "5,000+", label: "חברי קהילה" },
              { number: "200+", label: "מאמרים" },
              { number: "50+", label: "מחקרים" },
            ].map((stat, index) => (
              <div key={index} className="glass rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
