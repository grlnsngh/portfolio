"use client";
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
import { createPortal } from "react-dom";

const projects = [
  {
    title: "Briza UI React - Modern Component Library",
    description:
      "A modern, lightweight React UI component library built with TypeScript and Vite. Features a comprehensive design system with theme support, accessible form components (Button, Input, Select, Checkbox, Radio), and extensive customization options. Includes 15+ production-ready components with tree-shaking support, zero dependencies (only React as peer), WCAG 2.1 AA accessibility standards, and complete Storybook documentation. Demonstrates advanced TypeScript patterns, component architecture, and modern build tooling.",
    technologies: [
      { name: "TypeScript", icon: "📘" },
      { name: "React 18", icon: "⚛️" },
      { name: "Vite", icon: "⚡" },
      { name: "Storybook", icon: "📖" },
      { name: "Theme System", icon: "🎨" },
      { name: "Accessibility", icon: "♿" },
      { name: "Tree-shakeable", icon: "🌳" },
      { name: "CSS Modules", icon: "🎨" },
      { name: "Design Tokens", icon: "🎯" },
      { name: "Custom Hooks", icon: "🔗" },
      { name: "ESLint", icon: "✅" },
      { name: "Vitest", icon: "🧪" },
      { name: "Playwright", icon: "🎭" },
      { name: "NPM Package", icon: "📦" },
    ],
    images: ["/images/briza-ui-preview.webp"],
    imageHint: "React UI component library",
    link: "https://grlnsngh.github.io/briza-ui-react/",
    github: "https://github.com/grlnsngh/briza-ui-react",
    featured: true,
    date: "2025",
  },
  {
    title: "Briza UI Performance Analytics Dashboard",
    description:
      "A sophisticated React application designed to provide real-time performance monitoring and analytics for the briza-ui-react component library. Features comprehensive performance tracking with Core Web Vitals (LCP, CLS, FCP, INP, TTFB) monitoring, React Profiler API integration, memory usage tracking, and re-render detection. Includes interactive data visualization with Recharts (line charts, bar charts, treemaps), dark/light theme system, responsive mobile-first design, and demo mode with mock data. Built with React 19 concurrent features, TanStack Query for server state, Zustand for state management, and TypeScript strict mode.",
    technologies: [
      { name: "React 19", icon: "⚛️" },
      { name: "TypeScript", icon: "📘" },
      { name: "Vite", icon: "⚡" },
      { name: "React Router", icon: "🛣️" },
      { name: "TanStack Query", icon: "🔄" },
      { name: "Zustand", icon: "🐻" },
      { name: "Recharts", icon: "📊" },
      { name: "Framer Motion", icon: "🎭" },
      { name: "Web Vitals", icon: "📈" },
      { name: "React Profiler", icon: "⏱️" },
      { name: "Briza UI", icon: "🎨" },
      { name: "Vitest", icon: "🧪" },
      { name: "Performance API", icon: "🚀" },
      { name: "Context API", icon: "📡" },
    ],
    images: ["/images/briza-dashboard-preview.webp"],
    imageHint: "performance analytics dashboard",
    link: "https://briza-ui-react-dashboard.vercel.app/",
    github: "https://github.com/grlnsngh/briza-ui-react-dashboard",
    featured: false,
    date: "2025",
  },
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
      { name: "SEO (React Helmet)", icon: "🔍" },
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
    featured: false,
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
      "Cross-platform desktop application built with Electron and React, featuring modular component architecture with custom hooks (useDownloader.js, useDownloadHistory.js) for state management and asynchronous operations. Includes real-time progress tracking, IPC communication via electronService.js, integration with yt-dlp and ffmpeg for video processing, and Python scripts for automation. Demonstrates advanced React patterns, UI/UX design with error handling, cross-platform compatibility, and full-stack development bridging front-end and Node.js backend.",
    technologies: [
      { name: "Electron", icon: "⚡" },
      { name: "React", icon: "⚛️" },
      { name: "React Hooks", icon: "🔗" },
      { name: "Electron IPC", icon: "🔄" },
      { name: "yt-dlp", icon: "📥" },
      { name: "ffmpeg", icon: "🎬" },
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "JavaScript", icon: "💛" },
      { name: "HTML/CSS", icon: "🌐" },
      { name: "CSS Modules", icon: "🎨" },
      { name: "Asynchronous State Management", icon: "⚡" },
      { name: "Cross-Platform Development", icon: "🌍" },
      { name: "Third-Party API Integration", icon: "🔗" },
    ],
    images: ["/images/youtube-downloader-preview.webp"],
    imageHint: "YouTube downloader app",
    link: "https://github.com/grlnsngh/YT",
    github: "https://github.com/grlnsngh/YT",
    featured: false,
    date: "2024",
  },
  {
    title: "Pianoverse - Inventory Management App",
    description:
      "Comprehensive cross-platform mobile inventory management application for pianos, built with React Native and Expo. Features multi-category management (rentable, events, on sale, sold, warehouse), real-time data synchronization with Appwrite backend, password reset system hosted on GitHub Pages, and production-ready mobile architecture. Includes React Native Paper UI components, Redux Toolkit for state management, Expo Router for navigation, image picker and manipulation, push notifications, and date/time picker. Demonstrates full-stack mobile development, API integration, and cross-platform compatibility (iOS, Android, Web).",
    technologies: [
      { name: "React Native", icon: "📱" },
      { name: "Expo", icon: "🔷" },
      { name: "TypeScript", icon: "📘" },
      { name: "Appwrite", icon: "🔥" },
      { name: "Redux Toolkit", icon: "🔴" },
      { name: "Expo Router", icon: "🛣️" },
      { name: "React Native Paper", icon: "🎨" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Expo Image", icon: "🖼️" },
      { name: "Expo Notifications", icon: "🔔" },
      { name: "React Native Charts", icon: "📊" },
      { name: "GitHub Pages", icon: "📄" },
      { name: "Cross-Platform", icon: "🌍" },
      { name: "Jest", icon: "🧪" },
    ],
    images: [
      "/images/pianoverse-preview-1.webp",
      "/images/pianoverse-preview-2.webp",
      "/images/pianoverse-preview-3.webp",
      "/images/pianoverse-preview-4.webp",
    ],
    imageHint: "piano inventory management mobile app",
    link: "https://grlnsngh.github.io/pianoverse/",
    github: "https://github.com/grlnsngh/pianoverse",
    featured: false,
    date: "2025",
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
  const [isMounted, setIsMounted] = useState(false);

  // Touch gesture state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Show first 3 projects in main grid, rest in modal
  const highlightedProjects = projects.slice(0, 3);
  const secondaryProjects = projects.slice(3);

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
    if (!fullscreenImage) return;

    const handleKeyPress = (e: KeyboardEvent) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullscreenImage, fullscreenIndex, currentProjectImages]);

  // The viewer is a fixed overlay, so without this the page (and fullpage.js
  // on desktop) keeps scrolling underneath it. Restores whatever overflow the
  // document had rather than assuming "".
  useEffect(() => {
    if (!fullscreenImage) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = previousOverflow;
    };
  }, [fullscreenImage]);

  // Return focus to where it was when the overlay closes, so keyboard users
  // are not dropped back at the top of the document.
  const restoreFocusRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!fullscreenImage) return;

    restoreFocusRef.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    return () => restoreFocusRef.current?.focus();
  }, [fullscreenImage]);

  return (
    <TooltipProvider>
      <div className="container mx-auto px-6 md:px-10 py-6 md:py-12 h-full flex items-safe-center">
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
            {highlightedProjects.map((project, index) => {
              const currentImageIndex = currentImageIndexes[project.title] || 0;
              const dialogImageIndex = dialogImageIndexes[project.title] || 0;

              return (
                <Card
                  key={project.title}
                  className={`group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-primary/10 ${
                    project.featured
                      ? "ring-2 ring-primary/30 shadow-primary/20"
                      : "hover:ring-1 hover:ring-primary/20"
                  } animate-in fade-in slide-in-from-bottom`}
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
                    className="relative aspect-square overflow-hidden cursor-pointer group/image"
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
                      {project.images.map((image, imageIndex) => (
                        <Image
                          key={`${project.title}-${imageIndex}`}
                          src={image}
                          alt={`Screenshot of ${project.title} - ${
                            imageIndex + 1
                          }`}
                          width={1280}
                          height={1280}
                          // Cards are at most a third of a 1400px container,
                          // so without this the browser is handed the full
                          // 1280w source for a ~430px slot.
                          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                          // The first frame of the first card is the LCP
                          // candidate for this section; the rest of the
                          // carousel is offscreen until the user advances it.
                          priority={index === 0 && imageIndex === 0}
                          loading={
                            index === 0 && imageIndex === 0
                              ? undefined
                              : "lazy"
                          }
                          data-ai-hint={project.imageHint}
                          className={`absolute inset-0 object-cover w-full h-full transform transition-all duration-500 ease-in-out ${
                            imageIndex === currentImageIndex
                              ? "translate-x-0 opacity-100 scale-100"
                              : imageIndex < currentImageIndex
                              ? "-translate-x-full opacity-0 scale-95"
                              : "translate-x-full opacity-0 scale-95"
                          }`}
                          // Frames that are not showing are inert for
                          // assistive tech and excluded from hit testing.
                          aria-hidden={imageIndex !== currentImageIndex}
                          style={{
                            zIndex: imageIndex === currentImageIndex ? 10 : 5,
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
                          aria-label={`Previous image of ${project.title}`}
                          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 border border-white/20"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage(project.title, project.images.length);
                          }}
                          aria-label={`Next image of ${project.title}`}
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
                              className="relative aspect-video overflow-hidden rounded-t-lg"
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
                                    sizes="(min-width: 896px) 896px, 95vw"
                                    loading="lazy"
                                    aria-hidden={index !== dialogImageIndex}
                                    className={`absolute inset-0 w-full h-full object-contain bg-muted transition-all duration-500 ease-in-out ${
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
                                    aria-label="Previous image"
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
                                    aria-label="Next image"
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

          {secondaryProjects.length > 0 && (
            <div className="mt-6 md:mt-8 flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full border-primary/20 px-5 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                  >
                    Browse additional projects
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl w-[95vw]">
                  <DialogHeader className="space-y-2">
                    <DialogTitle>Additional Projects</DialogTitle>
                    <DialogDescription>
                      Quick snapshots of other builds without crowding the main
                      layout.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    {secondaryProjects.map((project) => {
                      const secondaryImageIndex =
                        currentImageIndexes[project.title] || 0;

                      return (
                        <Tooltip key={`secondary-${project.title}`}>
                          <TooltipTrigger asChild>
                            <Card className="border border-border/60 bg-card/70 backdrop-blur overflow-hidden hover:border-primary/40 transition-all duration-300 cursor-help">
                              <div className="flex flex-col sm:flex-row gap-4">
                                {/* Project Image */}
                                <div className="relative w-full sm:w-48 aspect-square sm:aspect-auto flex-shrink-0">
                                  <div className="relative w-full h-full">
                                    {project.images.map((image, index) => (
                                      <Image
                                        key={`secondary-${project.title}-${index}`}
                                        src={image}
                                        alt={`Preview of ${project.title} - ${
                                          index + 1
                                        }`}
                                        width={400}
                                        height={400}
                                        sizes="(min-width: 640px) 192px, 90vw"
                                        loading="lazy"
                                        aria-hidden={
                                          index !== secondaryImageIndex
                                        }
                                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
                                          index === secondaryImageIndex
                                            ? "translate-x-0 opacity-100 scale-100"
                                            : index < secondaryImageIndex
                                            ? "-translate-x-full opacity-0 scale-95"
                                            : "translate-x-full opacity-0 scale-95"
                                        }`}
                                        style={{
                                          zIndex:
                                            index === secondaryImageIndex
                                              ? 10
                                              : 5,
                                        }}
                                      />
                                    ))}
                                  </div>
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                  {/* Navigation for multiple images */}
                                  {project.images.length > 1 && (
                                    <>
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          prevImage(
                                            project.title,
                                            project.images.length
                                          );
                                        }}
                                        aria-label={`Previous image of ${project.title}`}
                                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-1.5 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 z-20"
                                      >
                                        <ChevronLeft className="w-4 h-4" />
                                      </button>
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          nextImage(
                                            project.title,
                                            project.images.length
                                          );
                                        }}
                                        aria-label={`Next image of ${project.title}`}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-1.5 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 z-20"
                                      >
                                        <ChevronRight className="w-4 h-4" />
                                      </button>

                                      {/* Image Indicators */}
                                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                                        {project.images.map((_, imgIndex) => (
                                          <div
                                            key={imgIndex}
                                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                              imgIndex === secondaryImageIndex
                                                ? "bg-white scale-125"
                                                : "bg-white/60 hover:bg-white/80"
                                            }`}
                                          />
                                        ))}
                                      </div>
                                    </>
                                  )}
                                </div>

                                {/* Project Content */}
                                <div className="p-4 flex-1 space-y-3">
                                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                    <h4 className="text-base font-semibold leading-tight">
                                      {project.title}
                                    </h4>
                                    <Badge
                                      variant="secondary"
                                      className="w-fit"
                                    >
                                      {project.date}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                    {project.description}
                                  </p>
                                  <div className="flex flex-wrap gap-2">
                                    {project.technologies
                                      .slice(0, 3)
                                      .map((tech) => (
                                        <Badge
                                          key={`${project.title}-${tech.name}`}
                                          variant="outline"
                                          className="text-xs border-primary/20"
                                        >
                                          <span className="mr-1">
                                            {tech.icon}
                                          </span>
                                          {tech.name}
                                        </Badge>
                                      ))}
                                    {project.technologies.length > 3 && (
                                      <Badge
                                        variant="outline"
                                        className="text-xs border-dashed border-primary/30"
                                      >
                                        +{project.technologies.length - 3}
                                      </Badge>
                                    )}
                                  </div>
                                  <div className="flex flex-wrap gap-2">
                                    <Button
                                      asChild
                                      size="sm"
                                      className="bg-primary/90 text-primary-foreground hover:bg-primary"
                                    >
                                      <Link
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <ExternalLink className="w-4 h-4 mr-1" />
                                        Live Demo
                                      </Link>
                                    </Button>
                                    {project.github !== "#" && (
                                      <Button
                                        asChild
                                        size="sm"
                                        variant="outline"
                                        className="border-primary/30 hover:border-primary/50"
                                      >
                                        <Link
                                          href={project.github}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <Github className="w-4 h-4 mr-1" />
                                          Source
                                        </Link>
                                      </Button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </Card>
                          </TooltipTrigger>
                          <TooltipContent
                            side="bottom"
                            className="max-w-md p-4 space-y-3"
                          >
                            <div>
                              <p className="text-xs font-semibold text-primary mb-1">
                                Description
                              </p>
                              <p className="text-xs leading-relaxed">
                                {project.description}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-primary mb-2">
                                Complete Tech Stack
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {project.technologies.map((tech) => (
                                  <Badge
                                    key={`tooltip-${project.title}-${tech.name}`}
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    <span className="mr-1">{tech.icon}</span>
                                    {tech.name}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      );
                    })}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          )}

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
      {isMounted && fullscreenImage
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`Image ${fullscreenIndex + 1} of ${
                currentProjectImages.length
              }`}
              // Clicking the backdrop dismisses, but clicks that bubble up
              // from the image or controls inside must not.
              onClick={(e) => {
                if (e.target === e.currentTarget) closeFullscreen();
              }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
                {/* Close Button */}
                <button
                  ref={closeButtonRef}
                  onClick={closeFullscreen}
                  aria-label="Close image viewer"
                  className="absolute top-4 right-4 z-50 bg-black/40 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-md"
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
                        sizes="100vw"
                        // Only the frame actually on screen is worth
                        // fetching at full size; neighbours load when the
                        // user navigates to them.
                        loading={index === fullscreenIndex ? undefined : "lazy"}
                        aria-hidden={index !== fullscreenIndex}
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
                        aria-label="Previous image"
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-md"
                      >
                        <ChevronLeft className="w-8 h-8" />
                      </button>
                      <button
                        onClick={nextFullscreenImage}
                        aria-label="Next image"
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
                          aria-label={`View image ${index + 1}`}
                          aria-current={index === fullscreenIndex}
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
                            sizes="64px"
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </TooltipProvider>
  );
}
