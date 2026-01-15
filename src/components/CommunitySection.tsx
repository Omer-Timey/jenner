import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Mail } from "lucide-react";
import { TextEffect } from "@/components/ui/text-effect";
const CommunitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="community" className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/3-section-video.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      {/* Bottom-to-top gradient for centered content */}
      <div className="section-overlay-center" />

      {/* Content */}
      <div ref={ref} className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <TextEffect preset="blur" trigger={isInView} as="h2" className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8">
            הצטרפו לקהילה
          </TextEffect>

          <TextEffect per="line" preset="blur" trigger={isInView} delay={0.3} as="p" className="text-lg md:text-xl text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto">
            זה המקום שבו ידע הופך לכוח. הצטרפו לשיח פתוח על מחקרים פורצי דרך, שתפו תובנות וקבלו כלים מעשיים. בקהילה שלנו, המדע והאנושיות נפגשים כדי ליצור חזית מאוחדת, חוקרת ותומכת.
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
        }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="glass-button-primary inline-flex items-center justify-center gap-3">
              <Users className="w-5 h-5" />
              הצטרפו לפורום
            </a>
            <a href="#contact" className="glass-button inline-flex items-center justify-center gap-3">
              <Mail className="w-5 h-5" />
              צרו קשר
            </a>
          </motion.div>

          {/* Stats */}
          
        </div>
      </div>
    </section>;
};
export default CommunitySection;