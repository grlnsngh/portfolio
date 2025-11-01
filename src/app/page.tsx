"use client";
import React, { useState, useEffect, useRef } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { MobileNav } from "@/components/mobile-nav";

const anchors = ["hero", "about", "projects", "skills", "contact"];

const FullpageWrapper = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobile, setIsMobile] = useState(false);
  const fullpageApiRef = useRef<any>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track active section on mobile scroll
  useEffect(() => {
    if (!isMobile) return;

    const sections = ["hero", "about", "projects", "skills", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    }, observerOptions);

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [isMobile]);

  const onLeave = (origin: any, destination: any, direction: any) => {
    setActiveSection(destination.anchor);
  };

  const handleSectionChange = (section: string) => {
    if (isMobile) {
      setActiveSection(section);
      // Smooth scroll to section on mobile
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      fullpageApiRef.current?.moveTo(section);
    }
  };

  if (isMobile) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
        <main className="flex-1 overflow-y-auto">
          <section
            id="hero"
            className="min-h-screen flex items-center justify-center"
          >
            <Hero />
          </section>
          <section
            id="about"
            className="min-h-screen flex items-center justify-center bg-secondary/20"
          >
            <About />
          </section>
          <section
            id="projects"
            className="min-h-screen flex items-center justify-center"
          >
            <Projects />
          </section>
          <section
            id="skills"
            className="min-h-screen flex items-center justify-center bg-secondary/20"
          >
            <Skills />
          </section>
          <section
            id="contact"
            className="min-h-screen flex items-center justify-center"
          >
            <Contact />
          </section>
        </main>
        <MobileNav
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
      </div>
    );
  }

  return (
    <>
      <Sidebar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
      <div className="flex flex-col flex-1 md:ml-20">
        <Header
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
        <ReactFullpage
          anchors={anchors}
          onLeave={onLeave}
          credits={{ enabled: false }}
          licenseKey={"gplv3-license"}
          navigation={true}
          render={({ state, fullpageApi: api }) => {
            fullpageApiRef.current = api;
            // Expose API to window for components that need it
            if (typeof window !== "undefined") {
              (window as any).fullpage_api = api;
            }
            return (
              <ReactFullpage.Wrapper>
                <div className="section min-h-screen flex items-center justify-center">
                  <Hero />
                </div>
                <div className="section min-h-screen flex items-center justify-center bg-secondary/20">
                  <About />
                </div>
                <div className="section min-h-screen flex items-center justify-center">
                  <Projects />
                </div>
                <div className="section min-h-screen flex items-center justify-center bg-secondary/20">
                  <Skills />
                </div>
                <div className="section min-h-screen flex items-center justify-center">
                  <Contact />
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    </>
  );
};

export default function Home() {
  return <FullpageWrapper />;
}
