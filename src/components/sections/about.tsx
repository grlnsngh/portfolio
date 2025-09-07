import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  GraduationCap,
  Briefcase,
  Trophy,
  Star,
  ChevronRight,
} from "lucide-react";

const highlights = [
  {
    icon: Code,
    label: "React Developer",
    description: "Building micro-frontends & modern UIs",
  },
  {
    icon: Smartphone,
    label: "React Native Developer",
    description: "Cross-platform mobile applications",
  },
  {
    icon: Smartphone,
    label: "Mobile Developer",
    description: "Native Android & hybrid apps",
  },
  {
    icon: Globe,
    label: "Web Developer",
    description: "Modern web applications",
  },
];

const stats = [
  { icon: Calendar, value: "5+", label: "Years Experience" },
  { icon: Award, value: "5+", label: "Companies" },
  { icon: Code, value: "15+", label: "Technologies" },
  { icon: Zap, value: "50+", label: "React Components" },
];

const timeline = [
  {
    year: "2022-Present",
    title: "Front End Developer II",
    company: "LexisNexis",
    type: "work",
    description:
      "Built Storybook shared component library, created MFEs from scratch, optimized existing micro-frontends. React development for Word add-ins with modern practices.",
    icon: Briefcase,
  },
  {
    year: "Jan-Mar 2022",
    title: "Software Developer",
    company: "Creative Realities",
    type: "work",
    description:
      "Front-end development with JS, Kendo UI, jQuery. Back-end with C# and SQL optimization.",
    icon: Code,
  },
  {
    year: "Jan-Apr 2020",
    title: "Machine Learning Developer (Internship)",
    company: "Dynacare",
    type: "work",
    description:
      "ML model predicting patient volume with 92.35% accuracy using Flask & Bootstrap.",
    icon: Zap,
  },
  {
    year: "Jul 2017-Jun 2018",
    title: "Android Developer (Internship)",
    company: "IT Direct UK, India",
    type: "work",
    description:
      "Android apps with Java, XML, JSON, SQLite. Code testing and performance optimization.",
    icon: Smartphone,
  },
  {
    year: "Jun 2016-Jul 2017",
    title: "Web Developer (Internship)",
    company: "Systomax, India",
    type: "work",
    description:
      "Website development with improved UX (20% traffic increase) using Adobe tools.",
    icon: Globe,
  },
];

export function About() {
  return (
    <div className="container mx-auto px-6 md:px-10 py-6 md:py-12 h-full flex items-center">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Career Timeline Section */}
          <div className="lg:col-span-5">
            <div className="relative">
              <Card className="overflow-hidden shadow-2xl hover:shadow-primary/20 max-w-sm mx-auto lg:mx-0 group">
                <div className="p-6 space-y-4">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">Career Journey</h3>
                    <p className="text-sm text-muted-foreground">
                      Milestones & Achievements
                    </p>
                  </div>

                  <div className="space-y-4">
                    {timeline.map((item, index) => (
                      <div
                        key={item.year}
                        className="relative flex items-start gap-3 group/timeline-item"
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        {/* Timeline Line */}
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover/timeline-item:scale-110 ${
                              item.type === "work"
                                ? "bg-blue-500"
                                : item.type === "education"
                                ? "bg-green-500"
                                : "bg-purple-500"
                            }`}
                          >
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          {index < timeline.length - 1 && (
                            <div className="w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent mt-2"></div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0 pb-4">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                              {item.year}
                            </span>
                            {item.type === "achievement" && (
                              <Trophy className="w-3 h-3 text-yellow-500" />
                            )}
                          </div>
                          <h4 className="font-semibold text-sm mb-1 group-hover/timeline-item:text-primary transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mb-2">
                            {item.company}
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Current Status */}
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-medium">Currently Available</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Open to new opportunities and collaborations
                    </p>
                  </div>
                </div>
              </Card>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 lg:-right-8 space-y-2">
                {stats.map((stat, index) => (
                  <Card
                    key={stat.label}
                    className="p-2 shadow-md animate-in slide-in-from-right hover:shadow-lg transition-shadow duration-200"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-2">
                      <stat.icon className="w-3 h-3 text-primary flex-shrink-0" />
                      <div className="text-left">
                        <div className="text-xs font-bold text-primary">
                          {stat.value}
                        </div>
                        <div className="text-[10px] text-muted-foreground leading-tight">
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
                    Front End Developer
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground text-base lg:text-lg leading-relaxed">
                <p>
                  With over 5 years of experience in software development, I
                  specialize in creating{" "}
                  <span className="text-foreground font-medium">
                    high-performance front-end applications
                  </span>{" "}
                  across web and mobile domains. My expertise spans building
                  React micro-frontends, React Native apps, and Android
                  applications, with additional experience in machine learning,
                  C#, Java, and SQL/MongoDB.
                </p>
                <p>
                  I'm passionate about clean code, modern development practices,
                  and delivering pixel-perfect user experiences. In my current
                  role, I've developed a React component library using Storybook
                  for interactive prototyping and organization-wide consistency,
                  and worked on internal portals, customer-facing software, and
                  micro-frontends. In my free time, I've built React/Next.js
                  websites and React Native apps for clients as a freelancer.
                  I'm always eager to tackle new challenges and stay current
                  with emerging technologies.
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
                  "React Native",
                  "JavaScript",
                  "TypeScript",
                  "C#",
                  "Java",
                  "SQL",
                  "MongoDB",
                  "Android",
                  "HTML5",
                  "CSS",
                  "jQuery",
                  "Kendo UI",
                  "SQLite",
                  "Storybook",
                  "Adobe Photoshop",
                  "Adobe Illustrator",
                  "Git",
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
