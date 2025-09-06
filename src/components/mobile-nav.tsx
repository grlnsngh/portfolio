"use client";
import { Home, User, Folder, Mail, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { anchor: "hero", label: "Home", icon: Home },
  { anchor: "about", label: "About", icon: User },
  { anchor: "projects", label: "Projects", icon: Folder },
  { anchor: "skills", label: "Skills", icon: Star },
  { anchor: "contact", label: "Contact", icon: Mail },
];

interface MobileNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function MobileNav({ activeSection, onSectionChange }: MobileNavProps) {
  const handleNavClick = (anchor: string) => {
    onSectionChange(anchor);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
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
