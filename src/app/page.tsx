'use client';
import React, { useState, useEffect } from 'react';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { Sidebar } from '@/components/sidebar';
import { Header } from '@/components/header';

const anchors = ['hero', 'about', 'projects', 'skills', 'contact'];

const FullpageWrapper = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-45% 0px -45% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setActiveSection(entry.target.id);

          // Add visual feedback for active section
          document.querySelectorAll('.enhanced-scroll > div').forEach((el) => {
            el.removeAttribute('data-active');
          });
          entry.target.setAttribute('data-active', 'true');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('[id]');

    sections.forEach((section) => {
      if (anchors.includes(section.id)) {
        observer.observe(section);
      }
    });

    // Enhanced mobile scrolling with performance optimizations
    const mainElement = document.querySelector('.enhanced-scroll') as HTMLElement;
    if (mainElement) {
      let isScrolling = false;
      let scrollTimeout: NodeJS.Timeout;
      let touchStartY = 0;
      let touchStartTime = 0;

      const handleScroll = () => {
        if (!isScrolling) {
          isScrolling = true;
          mainElement.style.scrollBehavior = 'auto';
        }

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
          mainElement.style.scrollBehavior = 'smooth';
        }, 150);
      };

      const handleTouchStart = (e: TouchEvent) => {
        touchStartY = e.touches[0].clientY;
        touchStartTime = Date.now();
        mainElement.style.scrollBehavior = 'auto';
      };

      const handleTouchEnd = (e: TouchEvent) => {
        const touchEndY = e.changedTouches[0].clientY;
        const touchDuration = Date.now() - touchStartTime;
        const touchDistance = Math.abs(touchEndY - touchStartY);

        // Detect swipe gestures for better mobile experience
        if (touchDuration < 300 && touchDistance > 50) {
          setTimeout(() => {
            mainElement.style.scrollBehavior = 'smooth';
          }, 100);
        } else {
          mainElement.style.scrollBehavior = 'smooth';
        }
      };

      mainElement.addEventListener('scroll', handleScroll, { passive: true });
      mainElement.addEventListener('touchstart', handleTouchStart, { passive: true });
      mainElement.addEventListener('touchend', handleTouchEnd, { passive: true });

      return () => {
        observer.disconnect();
        mainElement.removeEventListener('scroll', handleScroll);
        mainElement.removeEventListener('touchstart', handleTouchStart);
        mainElement.removeEventListener('touchend', handleTouchEnd);
        clearTimeout(scrollTimeout);
      };
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Sidebar activeSection={activeSection} />
      <div className="flex flex-col flex-1 md:ml-20">
        <Header activeSection={activeSection} />
        <main className="flex-1 overflow-y-auto snap-y snap-mandatory scroll-smooth enhanced-scroll">
          <div id="hero" className="min-h-screen snap-start snap-always flex items-center justify-center transition-all duration-700 ease-out">
            <Hero />
          </div>
          <div id="about" className="min-h-screen snap-start snap-always flex items-center justify-center bg-secondary/20 transition-all duration-700 ease-out">
            <About />
          </div>
          <div id="projects" className="min-h-screen snap-start snap-always flex items-center justify-center transition-all duration-700 ease-out">
            <Projects />
          </div>
          <div id="skills" className="min-h-screen snap-start snap-always flex items-center justify-center bg-secondary/20 transition-all duration-700 ease-out">
            <Skills />
          </div>
          <div id="contact" className="min-h-screen snap-start snap-always flex items-center justify-center transition-all duration-700 ease-out">
            <Contact />
          </div>
        </main>
      </div>
    </>
  );
};

export default function Home() {
  return <FullpageWrapper />;
}
