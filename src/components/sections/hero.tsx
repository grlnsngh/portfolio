'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

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
      window.fullpage_api.moveTo('contact');
    }
  };
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center p-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6">
            <p className="text-lg font-medium text-muted-foreground">GURLEEN SINGH</p>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
                Front-End Developer
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl">
                Hi! I'm Gurleen, a Front-End Developer specializing in creating high-performance, scalable, and user-centric web applications with React and Next.js. With extensive experience in architecting complex solutions, I am passionate about driving technical excellence and mentoring team members.
            </p>
            <div className="flex gap-4">
                <Button size="lg">Download CV</Button>
                <Button size="lg" variant="outline" onClick={handleContactClick}>Contact Me</Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Button variant="outline" size="icon" onClick={handleContactClick}>
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative w-80 h-96 md:w-[400px] md:h-[500px] rounded-[50px] overflow-hidden">
            <Image
              src="https://picsum.photos/400/500"
              alt="Portrait of Gurleen"
              fill
              className="object-cover"
              data-ai-hint="professional portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
