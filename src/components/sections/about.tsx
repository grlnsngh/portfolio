import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Code,
  Palette,
  Smartphone,
  Globe,
  Coffee,
  Download,
  Mail,
  MapPin,
  Calendar,
  Award,
  Users,
  Zap,
} from "lucide-react";

const highlights = [
  {
    icon: Code,
    label: "Full-Stack Developer",
    description: "Building end-to-end solutions",
  },
  {
    icon: Palette,
    label: "UI/UX Enthusiast",
    description: "Creating beautiful interfaces",
  },
  {
    icon: Smartphone,
    label: "Mobile Developer",
    description: "Cross-platform apps with React Native",
  },
  {
    icon: Globe,
    label: "International Experience",
    description: "Multi-language applications",
  },
];

const stats = [
  { icon: Calendar, value: "5+", label: "Years Experience" },
  { icon: Award, value: "50+", label: "Projects Completed" },
  { icon: Users, value: "100K+", label: "Users Impacted" },
  { icon: Zap, value: "24/7", label: "Problem Solver" },
];

export function About() {
  return (
    <div className="container mx-auto px-6 md:px-10 py-6 md:py-12 h-full flex items-center">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Portrait Section */}
          <div className="lg:col-span-5">
            <div className="relative">
              <Card className="overflow-hidden shadow-2xl rotate-[-2deg] lg:rotate-[-3deg] hover:rotate-0 transition-all duration-500 hover:shadow-primary/20 max-w-sm mx-auto lg:mx-0 group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src="https://picsum.photos/600/800"
                  alt="Portrait of the developer"
                  width={600}
                  height={800}
                  className="aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint="professional portrait"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white/90">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      Remote / Worldwide
                    </span>
                  </div>
                </div>
              </Card>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 lg:-right-8 space-y-3">
                {stats.map((stat, index) => (
                  <Card
                    key={stat.label}
                    className="p-3 shadow-lg animate-in slide-in-from-right"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-2">
                      <stat.icon className="w-4 h-4 text-primary" />
                      <div className="text-center">
                        <div className="text-sm font-bold text-primary">
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      About Me
                    </span>
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Full-Stack Developer & UI/UX Enthusiast
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground text-base lg:text-lg leading-relaxed">
                <p>
                  With over 5 years of experience in web and mobile development,
                  I specialize in creating{" "}
                  <span className="text-foreground font-medium">
                    user-centric applications
                  </span>{" "}
                  that make a difference. My expertise spans from crafting
                  pixel-perfect interfaces to building robust backend systems.
                </p>
                <p>
                  I'm passionate about clean code, modern design patterns, and
                  staying ahead of technology trends. When I'm not coding,
                  you'll find me exploring the latest design trends,
                  contributing to open-source projects, or sharing knowledge
                  with the developer community.
                </p>
                <p>
                  I believe in{" "}
                  <span className="text-foreground font-medium">
                    continuous learning
                  </span>{" "}
                  and the power of collaboration to create amazing digital
                  experiences that users love.
                </p>
              </div>
            </div>

            {/* Skills Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((highlight, index) => (
                <Card
                  key={highlight.label}
                  className="p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group animate-in fade-in slide-in-from-bottom"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-center space-y-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                      <highlight.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm">{highlight.label}</h3>
                    <p className="text-xs text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Featured Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Redux",
                  "Jest",
                  "React Query",
                  "Framer Motion",
                  "ESLint",
                  "Vite",
                  "Git",
                  "Figma",
                ].map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="flex-1 sm:flex-none">
                <Link href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="flex-1 sm:flex-none"
              >
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
