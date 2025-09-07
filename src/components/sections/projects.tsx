import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  Code,
  Star,
  Calendar,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

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
    images: [
      "/images/shamshersons-preview.webp",
      "/images/shamshersons-cms-1.webp",
      "/images/shamshersons-cms-2.webp",
      "/images/shamshersons-cms-3.webp",
      "/images/shamshersons-cms-4.webp",
      "/images/shamshersons-cms-5.webp",
    ],
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
    images: [
      "/images/girl-side-wedding-invite.webp",
      "/images/boy-side-wedding-invite.webp",
    ],
    imageHint: "wedding invitation website",
    link: "https://liviaandjaskaran.pages.dev/",
    github: "#",
    featured: false,
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
    images: ["/images/youtube-downloader-preview.webp"],
    imageHint: "YouTube downloader app",
    link: "https://github.com/grlnsngh/YT",
    github: "https://github.com/grlnsngh/YT",
    featured: false,
    date: "2024",
  },
];

export function Projects() {
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{
    [key: string]: number;
  }>({});

  const nextImage = (projectTitle: string, imagesLength: number) => {
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [projectTitle]: ((prev[projectTitle] || 0) + 1) % imagesLength,
    }));
  };

  const prevImage = (projectTitle: string, imagesLength: number) => {
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [projectTitle]:
        prev[projectTitle] === 0
          ? imagesLength - 1
          : (prev[projectTitle] || 0) - 1,
    }));
  };

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
            {projects.map((project, index) => {
              const currentImageIndex = currentImageIndexes[project.title] || 0;
              const currentImage = project.images[currentImageIndex];

              return (
                <Card
                  key={project.title}
                  className={`group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-primary/10 ${
                    project.featured
                      ? "ring-2 ring-primary/30 shadow-primary/20"
                      : "hover:ring-1 hover:ring-primary/20"
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

                  {/* Image Gallery */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <Image
                      src={currentImage}
                      alt={`Screenshot of ${project.title}`}
                      width={1280}
                      height={720}
                      data-ai-hint={project.imageHint}
                      className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* GitHub Button - Bottom Left on Image */}
                    {project.github !== "#" && (
                      <div className="absolute bottom-4 left-4 z-30">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              asChild
                              size="sm"
                              className="h-10 w-10 p-0 bg-secondary/80 hover:bg-secondary/90 text-secondary-foreground border-0 shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                            >
                              <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="w-5 h-5" />
                              </Link>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View Source Code</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    )}

                    {/* Enhanced Image Navigation */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={() =>
                            prevImage(project.title, project.images.length)
                          }
                          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 border border-white/20"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() =>
                            nextImage(project.title, project.images.length)
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 border border-white/20"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>

                        {/* Enhanced Image Indicators */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                          {project.images.map((_, imgIndex) => (
                            <div
                              key={imgIndex}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                imgIndex === currentImageIndex
                                  ? "bg-white scale-125"
                                  : "bg-white/60 hover:bg-white/80"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Tooltip key={tech.name}>
                          <TooltipTrigger asChild>
                            <Badge
                              variant="outline"
                              className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default hover:scale-105 border-primary/20"
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
                        <Badge variant="outline" className="text-xs border-primary/20">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            size="sm"
                            className="flex-1 bg-primary/90 hover:bg-primary text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl">
                              {project.title}
                            </DialogTitle>
                            <DialogDescription className="text-base">
                              {project.description}
                            </DialogDescription>
                          </DialogHeader>

                          <div className="space-y-6">
                            {/* Image Gallery in Dialog */}
                            <div className="relative">
                              <Image
                                src={currentImage}
                                alt={`Screenshot of ${project.title}`}
                                width={1280}
                                height={720}
                                className="w-full h-64 object-cover rounded-lg"
                              />
                              {project.images.length > 1 && (
                                <>
                                  <button
                                    onClick={() =>
                                      prevImage(
                                        project.title,
                                        project.images.length
                                      )
                                    }
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                                  >
                                    <ChevronLeft className="w-5 h-5" />
                                  </button>
                                  <button
                                    onClick={() =>
                                      nextImage(
                                        project.title,
                                        project.images.length
                                      )
                                    }
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                                  >
                                    <ChevronRight className="w-5 h-5" />
                                  </button>
                                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                                    {project.images.map((_, imgIndex) => (
                                      <div
                                        key={imgIndex}
                                        className={`w-2 h-2 rounded-full ${
                                          imgIndex === currentImageIndex
                                            ? "bg-white"
                                            : "bg-white/50"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>

                            {/* Technologies */}
                            <div>
                              <h4 className="text-lg font-semibold mb-3">
                                Technologies Used
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                  <Badge key={tech.name} variant="secondary">
                                    <span className="mr-1">{tech.icon}</span>
                                    {tech.name}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Links */}
                            <div className="flex gap-3">
                              <Button asChild>
                                <Link
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Live Demo
                                </Link>
                              </Button>
                              {project.github !== "#" && (
                                <Button asChild variant="outline">
                                  <Link
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <Github className="w-4 h-4 mr-2" />
                                    Source Code
                                  </Link>
                                </Button>
                              )}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>

                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
                      >
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
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
