import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Screen } from "@/components/screen";
import {
  Code,
  Smartphone,
  Globe,
  Coffee,
  Calendar,
  Award,
  Zap,
  Briefcase,
  Trophy,
} from "lucide-react";

const stats = [
  { icon: Calendar, value: "5+", label: "Years Experience" },
  { icon: Award, value: "5+", label: "Companies" },
  { icon: Code, value: "15+", label: "Technologies" },
  { icon: Zap, value: "50+", label: "React Components" },
];

const expertiseAreas = [
  { icon: Code, title: "React/Next.js", subtitle: "Web apps & SSR" },
  { icon: Smartphone, title: "React Native", subtitle: "Cross-platform" },
  { icon: Zap, title: "Mobile Dev", subtitle: "Native apps" },
  { icon: Briefcase, title: "Components", subtitle: "Storybook" },
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
    title: "Intermediate Software Developer",
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

// About is two screens. Together they were ~1,000px tall, which no laptop
// viewport (~650px) can show without scrolling inside the section; apart each
// fits. Phones and tablets scroll natively, where the two simply read one
// after the other.
export function About() {
  return (
    <>
      <Screen anchor="about" group="about" tinted>
        <div className="container mx-auto w-full min-h-full px-4 sm:px-6 md:px-10 py-8 md:py-10 flex items-safe-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Who: heading and the three paragraphs. */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                    <span className="text-gradient">About Me</span>
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Front End Developer
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
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
                  I’m passionate about clean code, modern development practices,
                  and delivering pixel-perfect user experiences. In my current
                  role, I’ve developed a React component library using Storybook
                  for interactive prototyping and organization-wide consistency,
                  and worked on internal portals, customer-facing software, and
                  micro-frontends. In my free time, I’ve built React/Next.js
                  websites and React Native apps for clients as a freelancer.
                  I’m always eager to tackle new challenges and stay current
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

            {/* What: numbers, focus areas and tools, beside the text on
                desktop (two across) and stacked below it elsewhere. */}
            <div className="lg:col-span-5 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2 sm:gap-3">
                {stats.map((stat, index) => (
                  <Card
                    key={stat.label}
                    className="p-3 shadow-md animate-in fade-in slide-in-from-bottom fill-mode-backwards hover:shadow-lg transition-shadow duration-200"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-2.5">
                      <stat.icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <div className="text-left">
                        <div className="text-base font-bold leading-none text-primary">
                          {stat.value}
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* A 2x2 grid on phones: four across left each tile ~65px wide at
                  320px, too narrow for its own label. */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-center lg:text-left">
                  Expertise Areas
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2">
                  {expertiseAreas.map((area) => (
                    <div
                      key={area.title}
                      className="flex flex-col items-center justify-center space-y-1 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors duration-300 min-w-0 min-h-[80px]"
                    >
                      <area.icon className="w-6 h-6 text-primary" />
                      <span className="text-xs font-medium text-center">
                        {area.title}
                      </span>
                      <span className="text-xs text-muted-foreground text-center">
                        {area.subtitle}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold lg:text-left">
                  Featured Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "React Native",
                    "TypeScript",
                    "Storybook",
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
            </div>
          </div>
        </div>
      </Screen>

      <Screen anchor="career" group="about" tinted continuation>
        <div className="container mx-auto w-full min-h-full px-4 sm:px-6 md:px-10 py-8 md:py-10 flex items-safe-center">
          <div className="w-full">
            <div className="text-center mb-6 lg:mb-10">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-2">
                <span className="text-gradient">Career Journey</span>
              </h2>
              <p className="text-muted-foreground">Milestones & Achievements</p>
            </div>

            {/* A card of vertical entries on phones and tablets; on desktop the
                card chrome drops away and the same entries run left to right
                along a single line, which is what lets five of them fit in one
                screen's height instead of five stacked rows. */}
            <Card className="overflow-hidden shadow-2xl hover:shadow-primary/20 max-w-md lg:max-w-none mx-auto lg:overflow-visible lg:border-0 lg:bg-transparent lg:shadow-none lg:hover:shadow-none">
              <div className="p-6 lg:p-0">
                <ol className="relative space-y-4 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-4">
                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute left-[10%] right-[10%] top-5 h-0.5 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10"
                  />
                  {timeline.map((item, index) => (
                    <li
                      key={item.year}
                      className="relative flex items-start gap-3 lg:flex-col lg:items-center lg:gap-3 lg:text-center group/timeline-item"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="flex flex-col items-center">
                        <div
                          className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover/timeline-item:scale-110 ${
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
                          <div className="w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent mt-2 lg:hidden"></div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0 pb-4 lg:pb-0">
                        <div className="flex items-center gap-2 mb-1 lg:justify-center">
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                            {item.year}
                          </span>
                          {item.type === "achievement" && (
                            <Trophy className="w-3 h-3 text-yellow-500" />
                          )}
                        </div>
                        <h3 className="font-semibold text-sm mb-1 group-hover/timeline-item:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-2">
                          {item.company}
                        </p>
                        <p className="text-xs xl:text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                {/* Current Status */}
                <div className="mt-6 pt-4 border-t border-border/50 lg:mt-10 lg:flex lg:flex-col lg:items-center">
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
          </div>
        </div>
      </Screen>
    </>
  );
}
