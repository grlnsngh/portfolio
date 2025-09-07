"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
  Code,
  Palette,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "next-themes";

declare global {
  interface Window {
    fullpage_api?: {
      moveTo: (section: string) => void;
    };
  }
}

const highlights = [
  { icon: Code, text: "Clean Code", color: "text-blue-500" },
  { icon: Palette, text: "Modern Design", color: "text-purple-500" },
  { icon: Zap, text: "Fast Performance", color: "text-yellow-500" },
];

// Code rain characters themed to web development
const codeChars = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "useState",
  "useEffect",
  "component",
  "function",
  "const",
  "let",
  "{",
  "}",
  "(",
  ")",
  "[",
  "]",
  "<",
  ">",
  "/",
  "=>",
  "&&",
  "||",
  "div",
  "span",
  "className",
  "onClick",
  "onSubmit",
  "props",
  "async",
  "await",
  "fetch",
  "API",
  "JSON",
  "import",
  "export",
  "npm",
  "yarn",
  "git",
  "commit",
  "push",
  "pull",
  "merge",
  "&&",
  "||",
  "===",
  "!==",
  "++",
  "--",
  "...",
  "??",
  "?.",
];

interface CodeDrop {
  id: number;
  char: string;
  x: number;
  y: number;
  speed: number;
  opacity: number;
  size: number;
}

// CodeRain component for background effect
function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropsRef = useRef<CodeDrop[]>([]);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const isVisibleRef = useRef<boolean>(true);
  const { theme } = useTheme();

  const initializeDrops = useCallback(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const { width, height } = canvas;

    // Fewer drops for mobile, more for desktop
    const dropCount = width < 768 ? 15 : width < 1024 ? 25 : 35;

    dropsRef.current = Array.from({ length: dropCount }, (_, i) => ({
      id: i,
      char: codeChars[Math.floor(Math.random() * codeChars.length)],
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 1 + Math.random() * 2, // Increased speed from 0.5-2 to 1-3
      opacity: 0.1 + Math.random() * 0.3, // Very low opacity
      size: 10 + Math.random() * 4, // Smaller text
    }));
  }, []);

  const animate = useCallback(
    (currentTime: number) => {
      if (!canvasRef.current || !isVisibleRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Throttle animation to 30fps for better performance
      if (currentTime - lastTimeRef.current < 33) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTimeRef.current = currentTime;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw drops
      dropsRef.current.forEach((drop) => {
        // Update position
        drop.y += drop.speed;

        // Reset drop when it goes off screen
        if (drop.y > canvas.height + 20) {
          drop.y = -20;
          drop.x = Math.random() * canvas.width;
          drop.char = codeChars[Math.floor(Math.random() * codeChars.length)];
          drop.opacity = 0.1 + Math.random() * 0.3;
        }

        // Set text style based on theme
        let primaryColor;
        try {
          primaryColor = getComputedStyle(document.documentElement)
            .getPropertyValue("--primary")
            .trim();
          // Ensure we have a valid color value
          if (!primaryColor) {
            primaryColor = theme === "dark" ? "217 91% 60%" : "217 91% 60%";
          }
        } catch (error) {
          // Fallback color
          primaryColor = "217 91% 60%";
        }

        ctx.fillStyle = `hsl(${primaryColor})`;
        ctx.globalAlpha = drop.opacity;
        ctx.font = `${drop.size}px monospace`;
        ctx.textAlign = "center";

        // Draw the character
        ctx.fillText(drop.char, drop.x, drop.y);
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    },
    [theme]
  );

  const handleResize = useCallback(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    // Set canvas size to match container
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Reinitialize drops with new dimensions
    initializeDrops();
  }, [initializeDrops]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initial setup
    handleResize();

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Setup resize listener with debouncing
    let resizeTimeout: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 150);
    };

    // Setup visibility change listener for performance
    const handleVisibilityChange = () => {
      isVisibleRef.current = !document.hidden;
    };

    window.addEventListener("resize", debouncedResize);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", debouncedResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearTimeout(resizeTimeout);
    };
  }, [animate, handleResize]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-30 sm:opacity-40"
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContactClick = () => {
    if (window.fullpage_api) {
      window.fullpage_api.moveTo("contact");
    }
  };

  const scrollToNext = () => {
    if (window.fullpage_api) {
      window.fullpage_api.moveTo("about");
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center p-4 sm:p-6 lg:pr-20 xl:pr-24 overflow-hidden">
      {/* Code Rain Background */}
      <div className="absolute inset-0 z-0">
        <CodeRain />
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 z-1" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse z-1" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse z-1"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-7xl relative z-10">
        {/* Content Section */}
        <div
          className={`lg:col-span-7 space-y-6 text-center lg:text-left transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Greeting */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
              <Sparkles className="w-4 h-4" />
              Available for new opportunities
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-muted-foreground font-medium">
                Hi
              </p>
              <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-tight">
                <span
                  className="text-transparent font-bold hover:text-primary transition-colors duration-300"
                  style={{
                    WebkitTextStroke: "2px hsl(var(--primary))",
                  }}
                >
                  I'm Gurleen
                </span>
              </h1>
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground">
                  <TypeAnimation
                    sequence={[
                      "React Developer",
                      2000,
                      "Next.js Developer",
                      2000,
                      "Frontend Engineer",
                      2000,
                      "Mobile Developer",
                      2000,
                      "UI/UX Designer",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold"
                    cursor={true}
                  />
                </h2>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            I create exceptional digital experiences that combine beautiful
            design with powerful functionality. Let's build something amazing
            together.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.text}
                className={`flex items-center gap-2 px-3 py-2 bg-background/50 backdrop-blur-sm rounded-lg border animate-in fade-in slide-in-from-bottom duration-500`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <highlight.icon className={`w-4 h-4 ${highlight.color}`} />
                <span className="text-sm font-medium">{highlight.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Link
              href="https://drive.google.com/file/d/1ofCl_ckbqShGYy2ExRfzfrg-mj4PGrra/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto min-h-[48px] text-base font-medium group"
              >
                <Download className="w-4 h-4 mr-2 group-hover:translate-y-[-2px] transition-transform" />
                Download CV
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={handleContactClick}
              className="w-full sm:w-auto min-h-[48px] text-base font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Let's Work Together
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start gap-4 pt-6">
            <span className="text-sm text-muted-foreground mr-2">
              Find me on:
            </span>
            <Link
              href="https://github.com/grlnsngh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="min-h-[44px] min-w-[44px] hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/grlnsngh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="min-h-[44px] min-w-[44px] hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:grlnsngh@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="min-h-[44px] min-w-[44px] hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Terminal Interface */}
        <div
          className={`lg:col-span-5 flex justify-center items-center mt-8 lg:mt-0 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative group">
            {/* Background Glow */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[50px] blur-2xl scale-110 group-hover:scale-125 transition-transform duration-500" />

            {/* Terminal Container */}
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[450px] lg:w-[420px] lg:h-[520px] rounded-[25px] lg:rounded-[40px] overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 mb-20 lg:mb-0">
              {/* Terminal Header */}
              <div
                className={`px-4 py-2 flex items-center gap-2 ${
                  theme === "dark"
                    ? "bg-gray-800"
                    : "bg-gray-200 border-b border-gray-300"
                }`}
              >
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span
                  className={`text-sm ml-2 font-mono ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  gurleen@portfolio ~
                </span>
              </div>

              {/* Terminal Body */}
              <div
                className={`h-full p-4 font-mono text-sm overflow-hidden ${
                  theme === "dark" ? "bg-gray-900" : "bg-gray-100"
                }`}
              >
                <div
                  className={`mb-2 ${
                    theme === "dark" ? "text-green-400" : "text-green-600"
                  }`}
                >
                  Welcome to Gurleen's Terminal
                </div>

                {/* Command History */}
                <div
                  className={`space-y-1 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <div>
                    <span className="text-blue-400">$ </span>
                    <span>whoami</span>
                  </div>
                  <div
                    className={`pl-4 ${
                      theme === "dark" ? "text-yellow-300" : "text-yellow-600"
                    }`}
                  >
                    gurleen-singh
                  </div>

                  <div className="mt-3">
                    <span className="text-blue-400">$ </span>
                    <span>ls skills/</span>
                  </div>
                  <div
                    className={`pl-4 ${
                      theme === "dark" ? "text-cyan-300" : "text-cyan-600"
                    }`}
                  >
                    react/ nextjs/ typescript/ tailwind/
                  </div>

                  <div className="mt-3">
                    <span className="text-blue-400">$ </span>
                    <span>cat experience.txt</span>
                  </div>
                  <div
                    className={`pl-4 ${
                      theme === "dark" ? "text-green-300" : "text-green-600"
                    }`}
                  >
                    Frontend Developer | React Specialist
                  </div>

                  <div className="mt-3">
                    <span className="text-blue-400">$ </span>
                    <TypeAnimation
                      sequence={[
                        "npm run build",
                        2000,
                        "git status",
                        2000,
                        "npx create-next-app",
                        2000,
                        "yarn dev",
                        2000,
                      ]}
                      wrapper="span"
                      speed={70}
                      repeat={Infinity}
                      className={
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }
                      cursor={true}
                    />
                  </div>
                </div>

                {/* Animated Cursor Line */}
                <div className="mt-4 flex items-center">
                  <span className="text-blue-400">$ </span>
                  <span
                    className={
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }
                  >
                    ./start-portfolio.sh
                  </span>
                  <span
                    className={`animate-pulse ml-1 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    █
                  </span>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                <Badge
                  variant="secondary"
                  className={`shadow-lg ${
                    theme === "dark"
                      ? "bg-gray-800 text-green-400 border-green-400/20"
                      : "bg-white text-green-600 border-green-600/20"
                  }`}
                >
                  <Code className="w-3 h-3 mr-1" />
                  Developer
                </Badge>
              </div>
            </div>

            {/* Decorative Elements */}
            <div
              className="absolute -top-4 -left-4 w-8 h-8 bg-primary/30 rounded-full animate-bounce"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute -bottom-4 -right-4 w-6 h-6 bg-secondary/30 rounded-full animate-bounce"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 -right-8 w-4 h-4 bg-primary/20 rounded-full animate-pulse"
              style={{ animationDelay: "1.5s" }}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToNext}
          className="rounded-full hover:bg-primary/10 transition-colors"
        >
          <span className="text-lg">↓</span>
          <span className="sr-only">Scroll to next section</span>
        </Button>
      </div>
    </section>
  );
}
