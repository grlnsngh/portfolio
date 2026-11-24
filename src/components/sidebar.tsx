"use client";
import { Home, User, Folder, Mail, Star } from "lucide-react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export const navLinks = [
  { anchor: "hero", label: "Home", icon: Home },
  { anchor: "about", label: "About", icon: User },
  { anchor: "projects", label: "Projects", icon: Folder },
  { anchor: "skills", label: "Skills", icon: Star },
  { anchor: "contact", label: "Contact", icon: Mail },
];

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const handleNavClick = (anchor: string) => {
    onSectionChange(anchor);
  };

  return (
    // bg-sidebar / text-sidebar-foreground rather than primary: primary turns
    // near-white in dark mode, which made this rail the brightest thing on an
    // otherwise dark page. The sidebar tokens are defined per theme in
    // globals.css.
    <aside className="fixed top-0 left-0 h-screen w-20 hidden lg:flex flex-col items-center justify-center py-8 z-50 bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
      <nav className="flex flex-col items-center gap-8">
        <TooltipProvider>
          {navLinks.map((link) => (
            <Tooltip key={link.anchor} delayDuration={0}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => handleNavClick(link.anchor)}
                  aria-current={activeSection === link.anchor ? "true" : undefined}
                  className={cn(
                    "group p-3 rounded-full text-sidebar-foreground/70 transition-colors hover:bg-sidebar-foreground/10 hover:text-sidebar-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-foreground/70 relative",
                    activeSection === link.anchor && "text-sidebar-foreground"
                  )}
                >
                  <link.icon className="h-6 w-6" aria-hidden="true" />
                  <span className="sr-only">{link.label}</span>
                  {activeSection === link.anchor && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-sidebar-foreground rounded-full" />
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{link.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </nav>
    </aside>
  );
}
