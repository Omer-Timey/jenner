'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { createPortal } from 'react-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { LucideIcon } from 'lucide-react';
import {
  Users,
  Flame,
  MessageCircle,
  Heart,
  Target,
  BookOpen,
  Sparkles,
} from 'lucide-react';

type LinkItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  description?: string;
};

export function Header() {
  const [open, setOpen] = React.useState(false);
  const { isVisible, scrolled } = useScrollDirection(10);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header>
      <nav
        className={cn(
          "fixed z-50 w-full px-2 transition-all duration-300",
          !isVisible && !open && "-translate-y-full"
        )}
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            (scrolled || open) &&
              "bg-background/90 max-w-4xl rounded-2xl border border-border backdrop-blur-lg lg:px-5 lg:rounded-full"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full items-center justify-between lg:w-auto">
              <a href="/" aria-label="home" className="flex items-center gap-2">
                <span className="text-xl font-bold text-foreground tracking-tight">
                  סערה מטבולית
                </span>
              </a>

              <NavigationMenu className="hidden lg:block">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-foreground hover:bg-muted">
                      מי אנחנו
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 bg-popover">
                        {aboutLinks.map((item, i) => (
                          <NavigationMenuLink key={i} asChild>
                            <ListItem {...item} />
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-foreground hover:bg-muted">
                      סערה מטבולית
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 bg-popover">
                        {researchLinks.map((item, i) => (
                          <NavigationMenuLink key={i} asChild>
                            <ListItem {...item} />
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="#community"
                      className={cn(
                        "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none"
                      )}
                    >
                      פורום וקהילה
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="hidden lg:flex lg:items-center lg:gap-3">
              <Button asChild className="rounded-full">
                <a href="#community">הצטרפו אלינו</a>
              </Button>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden relative z-50"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              <MenuToggleIcon open={open} className="size-6 text-foreground" />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu open={open}>
        <div className="space-y-6 text-center">
          <h3 className="text-lg font-semibold text-muted-foreground">מי אנחנו</h3>
          {aboutLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-xl font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.title}
            </a>
          ))}
          
          <h3 className="text-lg font-semibold text-muted-foreground pt-4">סערה מטבולית</h3>
          {researchLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-xl font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.title}
            </a>
          ))}

          <a
            href="#community"
            onClick={() => setOpen(false)}
            className="block text-xl font-medium text-foreground hover:text-primary transition-colors pt-4"
          >
            פורום וקהילה
          </a>
        </div>

        <div className="mt-12 flex flex-col gap-4 px-6">
          <Button asChild size="lg" className="rounded-full w-full">
            <a href="#community" onClick={() => setOpen(false)}>
              הצטרפו אלינו
            </a>
          </Button>
        </div>
      </MobileMenu>
    </header>
  );
}

type MobileMenuProps = React.ComponentProps<'div'> & {
  open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
  if (!open || typeof window === 'undefined') return null;

  return createPortal(
    <div
      className={cn(
        "fixed inset-0 z-40 flex flex-col bg-background/95 backdrop-blur-lg pt-20",
        className
      )}
      {...props}
    >
      <div className="flex flex-1 flex-col justify-start overflow-auto px-6 py-8">
        {children}
      </div>
    </div>,
    document.body
  );
}

function ListItem({
  title,
  description,
  icon: Icon,
  className,
  href,
  ...props
}: React.ComponentProps<'a'> & LinkItem) {
  return (
    <a
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-muted",
        className
      )}
      {...props}
    >
      <div className="flex size-10 shrink-0 items-center justify-center rounded-md border bg-background">
        <Icon className="size-5 text-foreground" />
      </div>
      <div className="text-right">
        <div className="text-sm font-medium text-foreground">{title}</div>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </a>
  );
}

const aboutLinks: LinkItem[] = [
  {
    title: 'הסיפור שלי',
    href: '#about',
    description: 'הכירו את המסע והחזון',
    icon: Heart,
  },
  {
    title: 'הגישה שלנו',
    href: '#about',
    description: 'שיטת העבודה הייחודית',
    icon: Target,
  },
  {
    title: 'תוצאות',
    href: '#about',
    description: 'סיפורי הצלחה של לקוחות',
    icon: Sparkles,
  },
];

const researchLinks: LinkItem[] = [
  {
    title: 'מחקר ומדע',
    href: '#research',
    description: 'הבסיס המדעי לשיטה',
    icon: BookOpen,
  },
  {
    title: 'התוכנית',
    href: '#research',
    description: 'פרטים על התהליך',
    icon: Flame,
  },
  {
    title: 'שאלות נפוצות',
    href: '#research',
    description: 'תשובות לשאלות שלכם',
    icon: MessageCircle,
  },
];

function useScrollDirection(threshold: number) {
  const [isVisible, setIsVisible] = React.useState(true);
  const [scrolled, setScrolled] = React.useState(false);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  const onScroll = React.useCallback(() => {
    const currentScrollY = window.scrollY;
    
    setScrolled(currentScrollY > threshold);
    
    if (Math.abs(currentScrollY - lastScrollY) < threshold) {
      return;
    }
    
    if (currentScrollY <= 0) {
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY, threshold]);

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  React.useEffect(() => {
    onScroll();
  }, []);

  return { isVisible, scrolled };
}

export default Header;
