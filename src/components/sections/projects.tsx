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
import { useState, useEffect, useRef } from "react";

const projects = [
  {
    title: "Shamshersons - Quality Piano Works",
    description:
      "Full-stack web application for a family-owned piano repair and restoration business, featuring modern React 19 architecture with custom hooks (e.g., useFirebaseContent), context providers for global state, and real-time data synchronization via Firebase. Includes drag-and-drop CMS with TinyMCE rich text editing, automated image optimization (Sharp), lazy loading, error boundaries, and SEO optimization (React Helmet). Demonstrates advanced component design, performance optimization, and production-ready build tooling.",
    technologies: [
      { name: "Full-Stack", icon: "🌐" },
      { name: "React 19", icon: "⚛️" },
      { name: "Custom Hooks", icon: "🔗" },
      { name: "Context API", icon: "📡" },
      { name: "Firebase", icon: "🔥" },
      { name: "Drag & Drop (@dnd-kit)", icon: "🎯" },
      { name: "Image Optimization", icon: "🖼️" },
      { name: "SEO (React Helmet)", icon: "�" },
      { name: "TinyMCE", icon: "📝" },
      { name: "EmailJS", icon: "📧" },
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
      "Luxury wedding invitation website built with React 19, featuring custom hooks (e.g., useImagePreloader for performance optimization), advanced state management with useState/useEffect, and real-time countdown timer. Includes lazy loading, web-vitals integration for performance monitoring, interactive modal galleries, Google Sheets API for RSVP, and cultural sensitivity for Sikh wedding traditions. Demonstrates modern React architecture, memory management, accessibility, error handling, and production-ready development practices with Jest and React Testing Library.",
    technologies: [
      { name: "React 19", icon: "⚛️" },
      { name: "Custom Hooks", icon: "🔗" },
      { name: "React Router DOM", icon: "🛣️" },
      { name: "Styled Components", icon: "🎨" },
      { name: "Framer Motion", icon: "🎭" },
      { name: "React Scroll", icon: "📜" },
      { name: "React Icons", icon: "🔗" },
      { name: "React Image Gallery", icon: "🖼️" },
      { name: "Google Sheets API", icon: "📊" },
      { name: "Web Vitals", icon: "📈" },
      { name: "Jest", icon: "🧪" },
      { name: "React Testing Library", icon: "🧪" },
      { name: "CSS Modules", icon: "🎨" },
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
      "Cross-platform desktop application built with Electron and React, featuring real-time progress tracking, download history, and multi-format video support. Integrates yt-dlp for extraction, ffmpeg for processing, and Python scripts for automation. Showcases full-stack development with Node.js backend, advanced UI components, and cross-platform compatibility.",
    technologies: [
      { name: "Electron", icon: "⚡" },
      { name: "React", icon: "⚛️" },
      { name: "yt-dlp", icon: "📥" },
      { name: "ffmpeg", icon: "🎬" },
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "JavaScript", icon: "💛" },
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
  const [dialogImageIndexes, setDialogImageIndexes] = useState<{
    [key: string]: number;
  }>({});
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [fullscreenIndex, setFullscreenIndex] = useState<number>(0);
  const [currentProjectImages, setCurrentProjectImages] = useState<string[]>(
    []
  );

  // Touch gesture state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const touchRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

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

  const nextDialogImage = (projectTitle: string, imagesLength: number) => {
    setDialogImageIndexes((prev) => ({
      ...prev,
      [projectTitle]: ((prev[projectTitle] || 0) + 1) % imagesLength,
    }));
  };

  const prevDialogImage = (projectTitle: string, imagesLength: number) => {
    setDialogImageIndexes((prev) => ({
      ...prev,
      [projectTitle]:
        prev[projectTitle] === 0
          ? imagesLength - 1
          : (prev[projectTitle] || 0) - 1,
    }));
  };

  const openFullscreen = (images: string[], startIndex: number) => {
    setCurrentProjectImages(images);
    setFullscreenIndex(startIndex);
    setFullscreenImage(images[startIndex]);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
    setCurrentProjectImages([]);
    setFullscreenIndex(0);
  };

  const nextFullscreenImage = () => {
    const nextIndex = (fullscreenIndex + 1) % currentProjectImages.length;
    setFullscreenIndex(nextIndex);
    setFullscreenImage(currentProjectImages[nextIndex]);
  };

  const prevFullscreenImage = () => {
    const prevIndex =
      fullscreenIndex === 0
        ? currentProjectImages.length - 1
        : fullscreenIndex - 1;
    setFullscreenIndex(prevIndex);
    setFullscreenImage(currentProjectImages[prevIndex]);
  };

  // Touch gesture handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (projectTitle?: string, imagesLength?: number) => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      if (projectTitle && imagesLength) {
        nextImage(projectTitle, imagesLength);
      } else if (fullscreenImage) {
        nextFullscreenImage();
      }
    }

    if (isRightSwipe) {
      if (projectTitle && imagesLength) {
        prevImage(projectTitle, imagesLength);
      } else if (fullscreenImage) {
        prevFullscreenImage();
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!fullscreenImage) return;

      switch (e.key) {
        case "ArrowLeft":
          prevFullscreenImage();
          break;
        case "ArrowRight":
          nextFullscreenImage();
          break;
        case "Escape":
          closeFullscreen();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [fullscreenImage, fullscreenIndex, currentProjectImages]);

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
              const dialogImageIndex = dialogImageIndexes[project.title] || 0;
              const currentImage = project.images[currentImageIndex];
              const dialogImage = project.images[dialogImageIndex];

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
                  <div
                    ref={touchRef}
                    className="relative h-48 md:h-56 overflow-hidden cursor-pointer group/image"
                    onClick={() =>
                      openFullscreen(project.images, dialogImageIndex)
                    }
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={() =>
                      onTouchEnd(project.title, project.images.length)
                    }
                  >
                    <div className="relative w-full h-full">
                      {project.images.map((image, index) => (
                        <Image
                          key={`${project.title}-${index}`}
                          src={image}
                          alt={`Screenshot of ${project.title} - ${index + 1}`}
                          width={1280}
                          height={720}
                          data-ai-hint={project.imageHint}
                          className={`absolute inset-0 object-cover w-full h-full transform transition-all duration-500 ease-in-out ${
                            index === currentImageIndex
                              ? "translate-x-0 opacity-100 scale-100"
                              : index < currentImageIndex
                              ? "-translate-x-full opacity-0 scale-95"
                              : "translate-x-full opacity-0 scale-95"
                          }`}
                          style={{
                            zIndex: index === currentImageIndex ? 10 : 5,
                          }}
                        />
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Fullscreen Hint */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-4 h-4 inline mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                      Click to expand
                    </div>

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
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage(project.title, project.images.length);
                          }}
                          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 border border-white/20"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage(project.title, project.images.length);
                          }}
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
                        <Badge
                          variant="outline"
                          className="text-xs border-primary/20"
                        >
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
                            onClick={() => {
                              // Initialize dialog with current preview image
                              setDialogImageIndexes((prev) => ({
                                ...prev,
                                [project.title]: currentImageIndex,
                              }));
                            }}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto p-0 gap-0">
                          <div className="relative">
                            {/* Enhanced Image Gallery in Dialog */}
                            <div
                              className="relative h-48 sm:h-64 md:h-80 overflow-hidden rounded-t-lg"
                              onTouchStart={onTouchStart}
                              onTouchMove={onTouchMove}
                              onTouchEnd={() =>
                                onTouchEnd(project.title, project.images.length)
                              }
                            >
                              <div className="relative w-full h-full">
                                {project.images.map((image, index) => (
                                  <Image
                                    key={`${project.title}-dialog-${index}`}
                                    src={image}
                                    alt={`Screenshot of ${project.title} - ${
                                      index + 1
                                    }`}
                                    width={1280}
                                    height={720}
                                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
                                      index === dialogImageIndex
                                        ? "translate-x-0 opacity-100 scale-100"
                                        : index < dialogImageIndex
                                        ? "-translate-x-full opacity-0 scale-95"
                                        : "translate-x-full opacity-0 scale-95"
                                    }`}
                                    style={{
                                      zIndex:
                                        index === dialogImageIndex ? 10 : 5,
                                    }}
                                  />
                                ))}
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                              {/* Enhanced Navigation */}
                              {project.images.length > 1 && (
                                <>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      prevDialogImage(
                                        project.title,
                                        project.images.length
                                      );
                                    }}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
                                  >
                                    <ChevronLeft className="w-5 h-5" />
                                  </button>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      nextDialogImage(
                                        project.title,
                                        project.images.length
                                      );
                                    }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
                                  >
                                    <ChevronRight className="w-5 h-5" />
                                  </button>

                                  {/* Enhanced Indicators */}
                                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    {project.images.map((_, imgIndex) => (
                                      <div
                                        key={imgIndex}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                          imgIndex === dialogImageIndex
                                            ? "bg-white scale-125"
                                            : "bg-white/60 hover:bg-white/80"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>

                            {/* Content Section */}
                            <div className="p-6 space-y-6">
                              <DialogHeader className="space-y-3">
                                <DialogTitle className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                                  {project.title}
                                </DialogTitle>
                                <DialogDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                  {project.description}
                                </DialogDescription>
                              </DialogHeader>

                              {/* Technologies */}
                              <div className="space-y-4">
                                <h4 className="text-lg font-semibold flex items-center gap-2">
                                  <Code className="w-5 h-5 text-primary" />
                                  Technologies Used
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {project.technologies.map((tech) => (
                                    <Badge
                                      key={tech.name}
                                      variant="secondary"
                                      className="text-sm px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                                    >
                                      <span className="mr-2">{tech.icon}</span>
                                      {tech.name}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              {/* Action Buttons */}
                              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border/50">
                                <Button
                                  asChild
                                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300"
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
                                {project.github !== "#" && (
                                  <Button
                                    asChild
                                    variant="outline"
                                    className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                                  >
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
          <div className="text-center mt-8 md:mt-12">
            <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
              Interested in seeing more of my work?
            </p>
            <Button asChild size="sm" className="md:size-lg">
              <Link
                href="https://github.com/grlnsngh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                View All Projects on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Viewer */}
      {fullscreenImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-md"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Main Image */}
            <div
              className="relative w-full h-full flex items-center justify-center"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={() => onTouchEnd()}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {currentProjectImages.map((image, index) => (
                  <Image
                    key={`fullscreen-${index}`}
                    src={image}
                    alt={`Fullscreen view ${index + 1}`}
                    width={1920}
                    height={1080}
                    className={`absolute max-w-full max-h-full object-contain transition-all duration-500 ease-in-out ${
                      index === fullscreenIndex
                        ? "translate-x-0 opacity-100 scale-100"
                        : index < fullscreenIndex
                        ? "-translate-x-full opacity-0 scale-95"
                        : "translate-x-full opacity-0 scale-95"
                    }`}
                    style={{
                      zIndex: index === fullscreenIndex ? 10 : 5,
                    }}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              {currentProjectImages.length > 1 && (
                <>
                  <button
                    onClick={prevFullscreenImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-md"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={nextFullscreenImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-md"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm">
                {fullscreenIndex + 1} / {currentProjectImages.length}
              </div>

              {/* Thumbnail Navigation */}
              {currentProjectImages.length > 1 && (
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 max-w-2xl overflow-x-auto p-2">
                  {currentProjectImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setFullscreenIndex(index);
                        setFullscreenImage(img);
                      }}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === fullscreenIndex
                          ? "border-white scale-110"
                          : "border-white/30 hover:border-white/60"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </TooltipProvider>
  );
}
