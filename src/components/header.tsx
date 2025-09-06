"use client";
import { Logo } from "@/components/logo";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "./sidebar";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    fullpage_api?: {
      moveTo: (section: string) => void;
    };
  }
}

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Header({ activeSection, onSectionChange }: HeaderProps) {
  const handleNavClick = (anchor: string) => {
    onSectionChange(anchor);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        <Logo />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden md:block">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="min-h-[44px] min-w-[44px]"
                >
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <nav className="grid gap-4 sm:gap-6 text-lg font-medium mt-8">
                  {navLinks.map((link) => (
                    <button
                      key={link.anchor}
                      onClick={() => handleNavClick(link.anchor)}
                      className={cn(
                        "flex items-center gap-4 px-3 py-3 text-left text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent transition-colors min-h-[48px]",
                        activeSection === link.anchor &&
                          "text-foreground bg-accent"
                      )}
                    >
                      <link.icon className="h-5 w-5 flex-shrink-0" />
                      <span className="font-medium">{link.label}</span>
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
