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
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
      <div className="flex items-center justify-around px-2 py-2">
        {navLinks.map((link) => (
          <button
            key={link.anchor}
            onClick={() => handleNavClick(link.anchor)}
            className={cn(
              "flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 min-h-[48px] min-w-[48px]",
              activeSection === link.anchor
                ? "text-primary bg-primary/10 scale-105"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            )}
          >
            <link.icon className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">{link.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
