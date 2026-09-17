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
import type { fullpageApi, Item } from "@fullpage/react-fullpage";

// Below this width fullpage.js disables itself (see responsiveWidth below)
// and the same sections become a normal, natively-scrolling document.
// Tablets belong on that side of the line: between 768px and 1023px every
// section's content is taller than one viewport, so fullpage could only show
// them behind an inner scrollbar. Keep in sync with the 1024px media queries
// in globals.css and the `lg:` variants on Sidebar/MobileNav/Header.
const DESKTOP_BREAKPOINT = 1024;

const anchors = ["hero", "about", "projects", "skills", "contact"];

// fullpage.js refuses to share a name between an `anchors` entry and an
// element id — it logs "data-anchor tags can not have the same value as any
// `id` element" for every section and the two navigation mechanisms fight
// over the hash. The anchors stay bare (so URLs remain /#about) and the
// elements the mobile code path looks up get their own prefixed ids.
const sectionElementId = (anchor: string) => `section-${anchor}`;

const sections = [
  { id: "hero", Component: Hero, tinted: false },
  { id: "about", Component: About, tinted: true },
  { id: "projects", Component: Projects, tinted: false },
  { id: "skills", Component: Skills, tinted: true },
  { id: "contact", Component: Contact, tinted: false },
];

const FullpageWrapper = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isNativeScroll, setIsNativeScroll] = useState(false);
  const fullpageApiRef = useRef<fullpageApi | null>(null);

  useEffect(() => {
    const query = window.matchMedia(`(max-width: ${DESKTOP_BREAKPOINT - 1}px)`);
    const update = (e: MediaQueryList | MediaQueryListEvent) =>
      setIsNativeScroll(e.matches);

    update(query);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  // Below the breakpoint fullpage.js hands off to native scrolling, so
  // active-section tracking has to come from IntersectionObserver instead
  // of fullpage's onLeave callback.
  useEffect(() => {
    if (!isNativeScroll) return;

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id.replace(/^section-/, ""));
        }
      });
    }, observerOptions);

    sections.forEach(({ id }) => {
      const element = document.getElementById(sectionElementId(id));
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [isNativeScroll]);

  // fullpage.js builds its own internal scroll containers for sections
  // taller than the viewport and gives them tabindex="-1", so a keyboard
  // user cannot focus them and therefore cannot scroll them with the arrow
  // keys (axe: scrollable-region-focusable). Promote them to tabindex="0"
  // as they appear. fullpage rebuilds these on resize, hence the observer
  // rather than a one-shot pass.
  useEffect(() => {
    if (isNativeScroll) return;

    const promote = () => {
      document
        .querySelectorAll<HTMLElement>('.fp-overflow[tabindex="-1"]')
        // Guard on "-1" so writing tabindex here cannot re-trigger the
        // observer into a loop.
        .forEach((el) => {
          el.tabIndex = 0;
        });
    };

    promote();

    const observer = new MutationObserver(promote);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributeFilter: ["tabindex"],
    });

    return () => observer.disconnect();
  }, [isNativeScroll]);

  // A section taller than the viewport scrolls inside itself, and wheel events
  // that land while fullpage is mid-transition drag the incoming section's
  // scroller to the bottom — so you arrive below its heading, having skipped
  // the top. Place it explicitly instead: entering from above starts at the
  // top, entering from below starts at the bottom, so the content reads
  // continuously whichever way you are going.
  const placeIncomingScroll = (destination: Item, direction: string) => {
    const scroller =
      destination?.item?.querySelector<HTMLElement>(".fp-overflow");
    if (!scroller) return;
    scroller.scrollTop = direction === "up" ? scroller.scrollHeight : 0;
  };

  const onLeave = (_origin: Item, destination: Item, direction: string) => {
    setActiveSection(String(destination.anchor));
    placeIncomingScroll(destination, direction);
  };

  // onLeave runs before the slide; run it again once the section has landed so
  // momentum arriving during the transition cannot leave it part-scrolled.
  const afterLoad = (_origin: Item, destination: Item, direction: string) => {
    if (direction) placeIncomingScroll(destination, direction);
  };

  const handleSectionChange = (section: string) => {
    if (isNativeScroll) {
      setActiveSection(section);
      // Native scrolling below the desktop breakpoint
      const element = document.getElementById(sectionElementId(section));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      fullpageApiRef.current?.moveTo(section);
    }
  };

  // A single tree serves both breakpoints. Below DESKTOP_BREAKPOINT,
  // fullpage.js's `responsiveWidth` disables the plugin and these become
  // plain, natively-scrolling <div> sections; Sidebar/MobileNav visibility
  // is handled purely by CSS (lg: variants) so there is no server/client
  // markup mismatch and no duplicate tree to keep in sync.
  return (
    <>
      <Sidebar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
      <div className="flex flex-col flex-1 lg:ml-20">
        <Header
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
        <main>
          <ReactFullpage
            anchors={anchors}
            onLeave={onLeave}
            afterLoad={afterLoad}
            credits={{ enabled: false }}
            licenseKey={"gplv3-license"}
            navigation={true}
            scrollOverflow={true}
            responsiveWidth={DESKTOP_BREAKPOINT}
            render={({ fullpageApi: api }) => {
              fullpageApiRef.current = api;
              // Expose API to window for components that need it
              if (typeof window !== "undefined") {
                window.fullpage_api = api;
              }
              return (
                <ReactFullpage.Wrapper>
                  {sections.map(({ id, Component, tinted }) => (
                    <div
                      key={id}
                      id={sectionElementId(id)}
                      className={cn(
                        // No min-h-screen / centring here: above the
                        // breakpoint fullpage sizes the section itself and
                        // .fp-overflow does the centring, below it globals.css
                        // sizes .section to the viewport minus the chrome.
                        // Hard-coding 100vh made every section overflow by the
                        // height of the header.
                        "section",
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
