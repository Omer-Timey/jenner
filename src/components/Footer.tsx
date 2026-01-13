import { Facebook, Instagram, Youtube, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:info@metabolicstorm.org", label: "Email" },
];

const footerLinks = [
  { label: "תנאי שימוש", href: "#" },
  { label: "מדיניות פרטיות", href: "#" },
  { label: "נגישות", href: "#" },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Description */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold text-foreground mb-2">
              סערה מטבולית
            </h3>
            <p className="text-muted-foreground text-sm">
              המלחמה המחודשת בסרטן
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} סערה מטבולית. כל הזכויות שמורות.
          </p>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground/60 text-center mt-8 max-w-2xl mx-auto">
          המידע באתר זה נועד למטרות חינוכיות בלבד ואינו מהווה ייעוץ רפואי. 
          יש להתייעץ עם רופא מוסמך לפני ביצוע כל שינוי בטיפול.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
