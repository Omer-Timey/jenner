import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";

const menuItems = [
  { name: "מי אנחנו", href: "#about" },
  { name: "סערה מטבולית", href: "#research" },
  { name: "פורום וקהילה", href: "#community" },
];

const Logo = ({ className }: { className?: string }) => {
  return (
    <span className={cn("text-xl font-bold text-foreground tracking-tight", className)}>
      סערה מטבולית
    </span>
  );
};

function useScrollDirection(threshold: number = 10) {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Check if scrolled past threshold for background styling
    setIsScrolled(currentScrollY > 50);
    
    // Determine scroll direction
    if (Math.abs(currentScrollY - lastScrollY) < threshold) {
      return;
    }
    
    if (currentScrollY <= 0) {
      // At top of page - always show
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down - hide
      setIsVisible(false);
    } else {
      // Scrolling up - show
      setIsVisible(true);
    }
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY, threshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { isVisible, isScrolled };
}

type MobileMenuProps = React.ComponentProps<'div'> & {
  open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
  if (!open || typeof window === 'undefined') return null;

  return createPortal(
    <div
      className={cn(
        "fixed inset-0 z-40 flex flex-col bg-background/95 backdrop-blur-lg",
        className
      )}
      {...props}
    >
      <div className="flex flex-1 flex-col justify-center px-6">
        {children}
      </div>
    </div>,
    document.body
  );
}

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);
  const { isVisible, isScrolled } = useScrollDirection();

  useEffect(() => {
    if (menuState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuState]);

  return (
    <header>
      <nav
        data-state={isScrolled ? "scrolled" : undefined}
        className={cn(
          "fixed z-50 w-full px-2 transition-transform duration-300",
          !isVisible && !menuState && "-translate-y-full"
        )}
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            (isScrolled || menuState) &&
              "bg-background/90 max-w-4xl rounded-2xl border border-border backdrop-blur-lg lg:px-5 lg:rounded-full"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full items-center justify-between lg:w-auto">
              <Link
                to="/"
                aria-label="home"
                className="flex items-center gap-2"
              >
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "סגור תפריט" : "פתח תפריט"}
                aria-expanded={menuState}
                aria-controls="mobile-menu"
                className="relative z-50 -m-2.5 -ml-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <MenuToggleIcon open={menuState} className="size-6 text-foreground" />
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:block">
              <ul className="flex gap-8 text-sm font-medium">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 block"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex lg:w-fit lg:gap-6">
              <Button asChild size="default" className="rounded-full">
                <a href="#community">הצטרפו אלינו</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu portal */}
      <MobileMenu open={menuState}>
        <nav className="space-y-8 text-center">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setMenuState(false)}
              className="block text-2xl font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="mt-12 flex flex-col gap-4 px-6">
          <Button
            asChild
            size="lg"
            className="rounded-full w-full"
            onClick={() => setMenuState(false)}
          >
            <a href="#community">הצטרפו אלינו</a>
          </Button>
        </div>
      </MobileMenu>
    </header>
  );
};

export default Navbar;
