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

declare global {
  interface Window {
    fullpage_api?: {
      moveTo: (section: string) => void;
    };
  }
}

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const handleNavClick = (anchor: string) => {
    onSectionChange(anchor);
  };

  return (
    <aside className="fixed top-0 left-0 h-screen w-20 hidden md:flex flex-col items-center justify-center py-8 z-50 bg-primary text-primary-foreground">
      <nav className="flex flex-col items-center gap-8">
        <TooltipProvider>
          {navLinks.map((link) => (
            <Tooltip key={link.anchor} delayDuration={0}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => handleNavClick(link.anchor)}
                  className={cn(
                    "group p-3 rounded-full text-primary-foreground/70 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground relative",
                    activeSection === link.anchor && "text-primary-foreground"
                  )}
                >
                  <link.icon className="h-6 w-6" />
                  {activeSection === link.anchor && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary-foreground rounded-full" />
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
