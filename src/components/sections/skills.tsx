"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Palette,
  Wrench,
  TestTube,
  Cloud,
  Cpu,
  Zap,
  Shield,
  Rocket,
  Sparkles,
} from "lucide-react";

const techCategories = [
  {
    title: "Frontend Frameworks",
    icon: Code,
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Redux", icon: "🔄" },
      { name: "Custom Hooks", icon: "🔗" },
      { name: "Context API", icon: "📡" },
      { name: "Framer Motion", icon: "🎭" },
    ],
  },
  {
    title: "Styling & UI Libraries",
    icon: Palette,
    technologies: [
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Styled Components", icon: "🎨" },
      { name: "Bootstrap", icon: "🅱️" },
      { name: "Chakra UI", icon: "🌈" },
      { name: "Hero UI", icon: "🦸" },
      { name: "Radix UI", icon: "⚡" },
    ],
  },
  {
    title: "Core Technologies",
    icon: Cpu,
    technologies: [
      { name: "HTML/CSS/JS", icon: "🌐" },
      { name: "Node.js", icon: "🟢" },
      { name: "Firebase", icon: "🔥" },
      { name: "RESTful APIs", icon: "🔗" },
      { name: "UI/UX Design", icon: "🎯" },
    ],
  },
  {
    title: "Build & Development",
    icon: Wrench,
    technologies: [
      { name: "Webpack", icon: "📦" },
      { name: "Vite", icon: "⚡" },
      { name: "Babel", icon: "🏗️" },
      { name: "Image Optimization", icon: "🖼️" },
      { name: "Husky & Lint Staged", icon: "🐶" },
    ],
  },
  {
    title: "Testing & Quality",
    icon: TestTube,
    technologies: [
      { name: "Jest Testing", icon: "🧪" },
      { name: "Storybook", icon: "📚" },
      { name: "React Optimization", icon: "🚀" },
      { name: "Error Handling", icon: "⚠️" },
      { name: "i18n Localization", icon: "🌍" },
    ],
  },
  {
    title: "Version Control & Deployment",
    icon: Cloud,
    technologies: [
      { name: "Git & GitHub", icon: "📚" },
      { name: "Vercel", icon: "▲" },
      { name: "Cloudflare Pages", icon: "☁️" },
    ],
  },
];

export function Skills() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-8 px-4 md:px-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4 md:mb-3">
            <Sparkles className="w-4 h-4" />
            Tech Stack & Expertise
          </div>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-3">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Love Working With
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-base max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks that
            power my development workflow
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-3 lg:gap-4 px-4 md:px-0">
          {techCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-in fade-in slide-in-from-bottom border-0 shadow-sm"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Category Header */}
              <div className="px-4 py-3 md:px-3 md:py-2 bg-muted/50 border-b">
                <div className="flex items-center gap-3 md:gap-2">
                  <div className="p-2 md:p-1.5 bg-primary/10 rounded-lg">
                    <category.icon className="w-5 h-5 md:w-4 md:h-4 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-base font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Technologies List */}
              <div className="px-4 py-3 md:px-3 md:py-2 space-y-2 md:space-y-1">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 md:gap-2 px-3 py-2 md:px-2 md:py-1.5 rounded-lg hover:bg-muted/50 transition-colors duration-200 animate-in fade-in slide-in-from-left min-h-[44px] md:min-h-0"
                    style={{
                      animationDelay: `${
                        categoryIndex * 100 + techIndex * 50
                      }ms`,
                    }}
                  >
                    <span className="text-lg md:text-base flex-shrink-0">
                      {tech.icon}
                    </span>
                    <span className="text-base md:text-sm font-medium text-foreground leading-tight">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Subtle Hover Effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-8 md:mt-8 text-center px-4 md:px-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4 max-w-2xl mx-auto">
            <div className="space-y-1">
              <div className="text-3xl md:text-2xl font-bold text-primary">
                20+
              </div>
              <div className="text-sm md:text-xs text-muted-foreground">
                Technologies
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-2xl font-bold text-primary">
                5+
              </div>
              <div className="text-sm md:text-xs text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-2xl font-bold text-primary">
                15+
              </div>
              <div className="text-sm md:text-xs text-muted-foreground">
                Projects Built
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-2xl font-bold text-primary">
                100%
              </div>
              <div className="text-sm md:text-xs text-muted-foreground">
                Passionate
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 md:mt-6 text-center px-4 md:px-0">
          <p className="text-muted-foreground mb-4 md:mb-4 text-base md:text-sm">
            Always learning and exploring new technologies to stay ahead of the
            curve
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-2">
            <Badge
              variant="secondary"
              className="px-3 py-2 md:px-2 md:py-1 text-sm md:text-xs min-h-[44px] md:min-h-0 flex items-center"
            >
              <Zap className="w-4 h-4 md:w-3 md:h-3 mr-2 md:mr-1" />
              Performance Focused
            </Badge>
            <Badge
              variant="secondary"
              className="px-3 py-2 md:px-2 md:py-1 text-sm md:text-xs min-h-[44px] md:min-h-0 flex items-center"
            >
              <Shield className="w-4 h-4 md:w-3 md:h-3 mr-2 md:mr-1" />
              Quality Driven
            </Badge>
            <Badge
              variant="secondary"
              className="px-3 py-2 md:px-2 md:py-1 text-sm md:text-xs min-h-[44px] md:min-h-0 flex items-center"
            >
              <Rocket className="w-4 h-4 md:w-3 md:h-3 mr-2 md:mr-1" />
              Innovation Minded
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
