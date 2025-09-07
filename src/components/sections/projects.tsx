import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Code, Star, Calendar } from "lucide-react";

const projects = [
  {
    title: "Shamshersons - Quality Piano Works",
    description:
      "Full-stack web application for a family-owned piano repair and restoration business, featuring responsive React frontend with dynamic content management. Includes admin dashboard for editing pages, contact forms via EmailJS, and image management with Firebase Storage. Built with React, Firebase (Auth, Firestore, Storage), TinyMCE for rich text editing, deployed on Cloudflare Pages.",
    technologies: [
      { name: "Full-Stack", icon: "🌐" },
      { name: "React", icon: "⚛️" },
      { name: "Firebase", icon: "�" },
      { name: "EmailJS", icon: "📧" },
      { name: "TinyMCE", icon: "�" },
      { name: "Cloudflare Pages", icon: "☁️" },
    ],
    image: "/shamshersons-preview.webp",
    imageHint: "piano repair website",
    link: "https://shamshersons.pages.dev/",
    github: "#",
    featured: true,
    date: "2024",
  },
  {
    title: "Elegant Wedding Website (Light & Dark Themes)",
    description:
      "Luxury wedding invitation website for Livia & Jaskaran's celebration on October 23, 2025, featuring elegant design with gold accents in light theme and sophisticated dark theme, smooth animations, and interactive elements. Includes sections for events, venue details, RSVP form, countdown timer, and photo gallery, built to provide guests with a seamless digital experience reflecting Sikh wedding traditions.",
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "React Router DOM", icon: "�️" },
      { name: "Styled Components", icon: "🎨" },
      { name: "React Scroll", icon: "📜" },
      { name: "React Icons", icon: "🔗" },
      { name: "React Image Gallery", icon: "🖼️" },
      { name: "Google Sheets Integration", icon: "�" },
    ],
    image: "/girl-side-wedding-invite.webp",
    imageHint: "wedding invitation website",
    link: "https://liviaandjaskaran.pages.dev/",
    github: "#",
    featured: true,
    date: "2025",
  },
  {
    title: "YouTube Video Downloader",
    description:
      "Desktop application for downloading YouTube videos in various formats and qualities, featuring real-time progress tracking and download history. Built with Electron for cross-platform compatibility, React for UI, yt-dlp for video extraction, Node.js for backend, Python scripts for dependency installation.",
    technologies: [
      { name: "Electron", icon: "⚡" },
      { name: "React", icon: "⚛️" },
      { name: "yt-dlp", icon: "�" },
      { name: "ffmpeg", icon: "�" },
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "JavaScript", icon: "�" },
      { name: "HTML/CSS", icon: "🌐" },
    ],
    image: "/youtube-downloader-preview.webp",
    imageHint: "YouTube downloader app",
    link: "https://github.com/grlnsngh/YT",
    github: "https://github.com/grlnsngh/YT",
    featured: false,
    date: "2024",
  },
];

export function Projects() {
  return (
    <TooltipProvider>
      <div className="container mx-auto px-6 md:px-10 py-6 md:py-12 h-full flex items-center">
        <div className="w-full">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="font-headline text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my recent work and technical expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`group overflow-hidden relative shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  project.featured ? "ring-2 ring-primary/20" : ""
                } animate-in fade-in slide-in-from-bottom-${
                  index % 2 === 0 ? "left" : "right"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <Badge
                      variant="default"
                      className="bg-primary text-primary-foreground shadow-lg"
                    >
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Date Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <Badge variant="secondary" className="shadow-lg">
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.date}
                  </Badge>
                </div>

                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    width={1280}
                    height={720}
                    data-ai-hint={project.imageHint}
                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-sm md:text-base line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Tooltip key={tech.name}>
                        <TooltipTrigger asChild>
                          <Badge
                            variant="outline"
                            className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                          >
                            <span className="mr-1">{tech.icon}</span>
                            {tech.name}
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{tech.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button asChild size="sm" className="flex-1">
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Hover overlay with expanded details */}
                <div className="absolute inset-0 bg-black/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 backdrop-blur-sm">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="mb-6 text-gray-300 max-w-sm mx-auto">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech.name}
                          variant="secondary"
                          className="text-xs"
                        >
                          <span className="mr-1">{tech.icon}</span>
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 justify-center">
                      <Button asChild size="sm">
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Code className="w-4 h-4 mr-2" />
                          Source Code
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Interested in seeing more of my work?
            </p>
            <Button asChild size="lg">
              <Link
                href="https://github.com/grlnsngh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
