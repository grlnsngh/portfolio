"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

declare global {
  interface Window {
    fullpage_api?: {
      moveTo: (section: string) => void;
    };
  }
}

export function Hero() {
  const handleContactClick = () => {
    if (window.fullpage_api) {
      window.fullpage_api.moveTo("contact");
    }
  };
  return (
    <section className="relative w-full flex items-center justify-center p-4 sm:p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center max-w-7xl">
        <div className="space-y-3 sm:space-y-6 text-center md:text-left">
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-tight">
            Front-End Developer
          </h1>
          <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto md:mx-0 leading-relaxed">
            Hi! I&apos;m Gurleen, a skilled developer proficient in React and Next.js. I specialize in building modern, scalable web applications using TypeScript, Redux, Tailwind CSS, and a variety of tools like Webpack, Vite, Jest, and Storybook. With experience in UI/UX design, RESTful APIs, i18n localization, and deployment on Vercel, I create efficient and user-friendly solutions. I also have experience building cross-platform mobile apps using React Native and Expo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start pt-2">
            <Button
              size="lg"
              className="w-full sm:w-auto min-h-[44px] text-sm sm:text-base font-medium"
            >
              Download CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleContactClick}
              className="w-full sm:w-auto min-h-[44px] text-sm sm:text-base font-medium"
            >
              Contact Me
            </Button>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
            <Link
              href="https://github.com/grlnsngh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="min-h-[44px] min-w-[44px]"
              >
                <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/grlnsngh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="min-h-[44px] min-w-[44px]"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:grlnsngh@gmail.com">
              <Button
                variant="outline"
                size="icon"
                className="min-h-[44px] min-w-[44px]"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6 md:mt-0">
          <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 sm:h-96 lg:w-[400px] lg:h-[500px] rounded-[20px] sm:rounded-[30px] lg:rounded-[50px] overflow-hidden shadow-2xl">
            <Image
              src="https://picsum.photos/400/500"
              alt="Portrait of Gurleen"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 400px"
              priority
              loading="eager"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
              data-ai-hint="professional portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
