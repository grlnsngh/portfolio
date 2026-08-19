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
import { cn } from "@/lib/utils";

// Below this width fullpage.js disables itself (see responsiveWidth below)
// and the same sections become a normal, natively-scrolling document.
const MOBILE_BREAKPOINT = 768;

const anchors = ["hero", "about", "projects", "skills", "contact"];

const sections = [
  { id: "hero", Component: Hero, tinted: false },
  { id: "about", Component: About, tinted: true },
  { id: "projects", Component: Projects, tinted: false },
  { id: "skills", Component: Skills, tinted: true },
  { id: "contact", Component: Contact, tinted: false },
];

const FullpageWrapper = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobile, setIsMobile] = useState(false);
  const fullpageApiRef = useRef<any>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Below the breakpoint fullpage.js hands off to native scrolling, so
  // active-section tracking has to come from IntersectionObserver instead
  // of fullpage's onLeave callback.
  useEffect(() => {
    if (!isMobile) return;

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
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

  // A single tree serves both breakpoints. Below MOBILE_BREAKPOINT,
  // fullpage.js's `responsiveWidth` disables the plugin and these become
  // plain, natively-scrolling <div> sections; Sidebar/MobileNav visibility
  // is handled purely by CSS (md: variants) so there is no server/client
  // markup mismatch and no duplicate tree to keep in sync.
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
        <main>
          <ReactFullpage
            anchors={anchors}
            onLeave={onLeave}
            credits={{ enabled: false }}
            licenseKey={"gplv3-license"}
            navigation={true}
            scrollOverflow={true}
            responsiveWidth={MOBILE_BREAKPOINT}
            render={({ fullpageApi: api }) => {
              fullpageApiRef.current = api;
              // Expose API to window for components that need it
              if (typeof window !== "undefined") {
                (window as any).fullpage_api = api;
              }
              return (
                <ReactFullpage.Wrapper>
                  {sections.map(({ id, Component, tinted }) => (
                    <div
                      key={id}
                      id={id}
                      className={cn(
                        "section min-h-screen flex items-center justify-center",
                        tinted && "bg-secondary/20"
                      )}
                    >
                      <Component />
                    </div>
                  ))}
                </ReactFullpage.Wrapper>
              );
            }}
          />
        </main>
      </div>
      <MobileNav
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
    </>
  );
};

export default function Home() {
  return <FullpageWrapper />;
}
