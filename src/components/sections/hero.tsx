"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

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

const codeSnippets = [
  {
    title: "React Component",
    language: "jsx",
    code: `function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="hero-section">
      <h1>Modern Web Development</h1>
      <p>Building amazing user experiences</p>
    </div>
  );
}`,
  },
  {
    title: "Next.js API Route",
    language: "javascript",
    code: `export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
      message: 'Hello from Next.js API!',
      timestamp: new Date().toISOString()
    });
  }
}`,
  },
  {
    title: "Tailwind Styles",
    language: "css",
    code: `.hero-section {
  @apply flex items-center justify-center;
  @apply min-h-screen bg-gradient-to-br;
  @apply from-blue-500 to-purple-600;
  @apply text-white text-center;
}`,
  },
];

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    // Rotate through code snippets every 4 seconds
    const interval = setInterval(() => {
      setCurrentSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 4000);
    return () => clearInterval(interval);
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
    <section className="relative w-full min-h-screen flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"
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
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
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
            <Button
              size="lg"
              className="w-full sm:w-auto min-h-[48px] text-base font-medium group"
            >
              <Download className="w-4 h-4 mr-2 group-hover:translate-y-[-2px] transition-transform" />
              Download CV
            </Button>
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

        {/* Animated Code Editor */}
        <div
          className={`lg:col-span-5 flex justify-center items-center mt-8 lg:mt-0 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative group">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[30px] lg:rounded-[50px] blur-2xl scale-110 group-hover:scale-125 transition-transform duration-500" />

            {/* Code Editor Container */}
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[450px] lg:w-[420px] lg:h-[520px] rounded-[25px] lg:rounded-[40px] overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
              {/* Editor Header */}
              <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-gray-300 text-sm font-mono">
                    {codeSnippets[currentSnippetIndex].title}
                  </span>
                </div>
              </div>
              {/* Code Content */}
              <div className="bg-gray-900 p-4 h-full overflow-hidden">
                {/* Line Numbers */}
                <div className="flex">
                  <div className="text-gray-600 text-sm font-mono pr-4 select-none">
                    {codeSnippets[currentSnippetIndex].code
                      .split("\n")
                      .map((_, i) => (
                        <div key={i} className="leading-6">
                          {i + 1}
                        </div>
                      ))}
                  </div>

                  {/* Code */}
                  <div className="flex-1">
                    <motion.pre
                      key={currentSnippetIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="text-sm font-mono text-gray-300 leading-6 whitespace-pre-wrap"
                    >
                      {codeSnippets[currentSnippetIndex].code}
                    </motion.pre>
                  </div>
                </div>

                {/* Animated Cursor */}
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-2 h-5 bg-blue-400 ml-1"
                />
              </div>

              {/* Floating Tech Badge */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                <Badge
                  variant="secondary"
                  className="bg-blue-500/90 text-white shadow-lg"
                >
                  <Code className="w-3 h-3 mr-1" />
                  {codeSnippets[currentSnippetIndex].language.toUpperCase()}
                </Badge>
              </div>
            </div>

            {/* Decorative Elements */}
            <div
              className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute -bottom-4 -right-4 w-6 h-6 bg-secondary rounded-full animate-bounce"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 -right-8 w-4 h-4 bg-primary/50 rounded-full animate-pulse"
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
