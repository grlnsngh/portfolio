"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Screen } from "@/components/screen";
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
      { name: "Asynchronous State Management", icon: "⚡" },
    ],
  },
  {
    title: "Styling & UI Libraries",
    icon: Palette,
    technologies: [
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Styled Components", icon: "🎨" },
      { name: "CSS Modules", icon: "🎨" },
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
      { name: "Third-Party API Integration", icon: "🔗" },
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
      { name: "Web Vitals", icon: "📈" },
      { name: "Cross-Platform Development", icon: "🌍" },
      { name: "Husky & Lint Staged", icon: "🐶" },
    ],
  },
  {
    title: "Testing & Quality",
    icon: TestTube,
    technologies: [
      { name: "Jest Testing", icon: "🧪" },
      { name: "React Testing Library", icon: "🧪" },
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

type TechCategory = (typeof techCategories)[number];

function CategoryCard({
  category,
  categoryIndex,
}: {
  category: TechCategory;
  categoryIndex: number;
}) {
  return (
    <Card
      className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-in fade-in slide-in-from-bottom fill-mode-backwards border-0 shadow-sm md:max-lg:last:odd:col-span-2"
      style={{ animationDelay: `${categoryIndex * 100}ms` }}
    >
      {/* Category Header */}
      <div className="px-4 py-3 lg:px-3 lg:py-2 bg-muted/50 border-b">
        <div className="flex items-center gap-3 lg:gap-2">
          <div className="p-2 lg:p-1.5 bg-primary/10 rounded-lg">
            <category.icon className="w-5 h-5 lg:w-4 lg:h-4 text-primary" />
          </div>
          <h3 className="text-lg lg:text-base font-semibold text-foreground">
            {category.title}
          </h3>
        </div>
      </div>

      {/* Technologies */}
      <ul
        role="list"
        className="flex flex-wrap gap-2 p-4 lg:p-3"
        aria-label={`${category.title} technologies`}
      >
        {category.technologies.map((tech, techIndex) => (
          <li
            key={tech.name}
            className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/60 px-3 py-1.5 text-sm font-medium leading-tight text-foreground transition-colors duration-200 hover:border-primary/30 hover:bg-primary/10 animate-in fade-in zoom-in-95 fill-mode-backwards"
            style={{
              animationDelay: `${categoryIndex * 100 + techIndex * 40}ms`,
            }}
          >
            <span aria-hidden="true" className="flex-shrink-0">
              {tech.icon}
            </span>
            {tech.name}
          </li>
        ))}
      </ul>

      {/* Subtle Hover Effect */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Card>
  );
}

// Skills is two screens of three categories each. All six plus the header,
// stats and badges came to ~950px, more than a laptop viewport (~650px) can
// show without scrolling inside the section; split in two, each screen fits.
// On a phone or tablet the two flow into one another as before.
const FIRST_SCREEN_CATEGORIES = 3;

export function Skills() {
  const firstScreen = techCategories.slice(0, FIRST_SCREEN_CATEGORIES);
  const secondScreen = techCategories.slice(FIRST_SCREEN_CATEGORIES);

  return (
    <>
      <Screen anchor="skills" group="skills" tinted>
        <div className="relative w-full min-h-full flex items-safe-center justify-center overflow-hidden py-8 lg:py-10">
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Header. The compact sizes (lg:) apply only where fullpage.js is
                fitting this into one screen; tablets scroll natively and keep
                the roomier phone sizing. They used to switch at md (768px), a
                leftover from when fullpage.js started there. */}
            <div className="text-center mb-8 px-4 lg:px-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4 lg:mb-3">
                <Sparkles className="w-4 h-4" />
                Tech Stack & Expertise
              </div>
              <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 lg:mb-3">
                Technologies I{" "}
                <span className="text-gradient">Love Working With</span>
              </h2>
              <p className="text-muted-foreground text-lg lg:text-base max-w-2xl mx-auto leading-relaxed">
                A comprehensive toolkit of modern technologies and frameworks
                that power my development workflow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-0">
              {firstScreen.map((category, index) => (
                <CategoryCard
                  key={category.title}
                  category={category}
                  categoryIndex={index}
                />
              ))}
            </div>
          </div>
        </div>
      </Screen>

      <Screen anchor="skills-2" group="skills" tinted continuation>
        <div className="relative w-full min-h-full flex items-safe-center justify-center overflow-hidden py-8 lg:py-10">
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-0">
              {secondScreen.map((category, index) => (
                <CategoryCard
                  key={category.title}
                  category={category}
                  categoryIndex={index + FIRST_SCREEN_CATEGORIES}
                />
              ))}
            </div>

            {/* Bottom Stats */}
            <div className="mt-8 text-center px-4 lg:px-0">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {[
                  { value: "20+", label: "Technologies" },
                  { value: "5+", label: "Years Experience" },
                  { value: "15+", label: "Projects Built" },
                  { value: "100%", label: "Passionate" },
                ].map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <div className="text-3xl lg:text-2xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm lg:text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action. These badges are labels, not controls, so they
                carry no 44px minimum height. */}
            <div className="mt-8 lg:mt-6 text-center px-4 lg:px-0">
              <p className="text-muted-foreground mb-4 text-base lg:text-sm">
                Always learning and exploring new technologies to stay ahead of
                the curve
              </p>
              <div className="flex flex-wrap justify-center gap-3 lg:gap-2">
                {[
                  { icon: Zap, label: "Performance Focused" },
                  { icon: Shield, label: "Quality Driven" },
                  { icon: Rocket, label: "Innovation Minded" },
                ].map((item) => (
                  <Badge
                    key={item.label}
                    variant="secondary"
                    className="px-3 py-2 lg:px-2 lg:py-1 text-sm lg:text-xs flex items-center"
                  >
                    <item.icon className="w-4 h-4 lg:w-3 lg:h-3 mr-2 lg:mr-1" />
                    {item.label}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Screen>
    </>
  );
}
