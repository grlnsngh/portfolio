"use client";
import { cn } from "@/lib/utils";
// Shared with the desktop sidebar so the two navigations cannot drift apart.
import { navLinks } from "./sidebar";

interface MobileNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function MobileNav({ activeSection, onSectionChange }: MobileNavProps) {
  const handleNavClick = (anchor: string) => {
    onSectionChange(anchor);
  };

  return (
    <nav className="site-bottom-nav fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
      {/* h-full rather than padding: the bar's height is --bottom-nav-h, which
          shrinks on a landscape phone, and the row follows it. */}
      <div className="flex h-full items-center justify-around px-2">
        {navLinks.map((link) => (
          <button
            key={link.anchor}
            onClick={() => handleNavClick(link.anchor)}
            aria-current={activeSection === link.anchor ? "true" : undefined}
            className={cn(
              "flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 min-h-[48px] min-w-[48px]",
              // Sideways on a phone there is no room to stack the label under
              // the icon; put them side by side and trim the height.
              "landscape-short:min-h-[44px] landscape-short:flex-row landscape-short:gap-2 landscape-short:py-1",
              activeSection === link.anchor
                ? "text-primary bg-primary/10 scale-105"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            )}
          >
            <link.icon className="h-5 w-5 mb-1 landscape-short:mb-0" />
            <span className="text-xs font-medium">{link.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
