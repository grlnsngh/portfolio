"use client";
import React, { useState, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { MobileNav } from "@/components/mobile-nav";
import {
  DESKTOP_BREAKPOINT,
  MIN_FULLPAGE_HEIGHT,
  NATIVE_SCROLL_QUERY,
  goToSection,
} from "@/lib/navigation";
import type { Item } from "@fullpage/react-fullpage";

// The page is a list of *screens*, and a nav item can span several of them
// (About is two, Projects is four). Each <Screen> declares its own anchor and
// the nav group it belongs to, so this file no longer keeps a parallel list of
// section ids: the highlight is read straight off the DOM.
const groupOf = (el: Element | null | undefined, fallback: string) =>
  (el as HTMLElement | null | undefined)?.dataset?.group ?? fallback;

const FullpageWrapper = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isNativeScroll, setIsNativeScroll] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(NATIVE_SCROLL_QUERY);
    const update = (e: MediaQueryList | MediaQueryListEvent) =>
      setIsNativeScroll(e.matches);

    update(query);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  // In native scroll fullpage.js has handed off to the browser, so
  // active-section tracking has to come from IntersectionObserver instead of
  // fullpage's onLeave callback.
  useEffect(() => {
    if (!isNativeScroll) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(groupOf(entry.target, "hero"));
          }
        });
      },
      { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    document
      .querySelectorAll<HTMLElement>(".section[data-group]")
      .forEach((screen) => observer.observe(screen));

    return () => observer.disconnect();
  }, [isNativeScroll]);

  // Safety net only. Screens are laid out to fit the viewport, so in normal use
  // fullpage never builds a scroller that can actually scroll. If a window is
  // unusually short (but still above MIN_FULLPAGE_HEIGHT), fullpage falls back
  // to an inner scroller; it gives that scroller tabindex="-1", which leaves a
  // keyboard user unable to scroll it with the arrow keys (axe:
  // scrollable-region-focusable). Promote them to tabindex="0" as they appear.
  // fullpage rebuilds these on resize, hence the observer rather than a
  // one-shot pass.
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

  // Same safety net: if a screen does overflow, wheel events that land while
  // fullpage is mid-transition drag the incoming screen's scroller to the
  // bottom, so you arrive below its heading. Place it explicitly: entering
  // from above starts at the top, entering from below starts at the bottom.
  const placeIncomingScroll = (destination: Item, direction: string) => {
    const scroller =
      destination?.item?.querySelector<HTMLElement>(".fp-overflow");
    if (!scroller) return;
    scroller.scrollTop = direction === "up" ? scroller.scrollHeight : 0;
  };

  const onLeave = (_origin: Item, destination: Item, direction: string) => {
    setActiveSection(groupOf(destination.item, String(destination.anchor)));
    placeIncomingScroll(destination, direction);
  };

  // onLeave runs before the slide; run it again once the screen has landed so
  // momentum arriving during the transition cannot leave it part-scrolled.
  // afterLoad also fires for the initial load, which is what makes a deep link
  // such as /#career highlight its nav item instead of staying on "Home".
  const afterLoad = (_origin: Item, destination: Item, direction: string) => {
    setActiveSection(groupOf(destination.item, String(destination.anchor)));
    if (direction) placeIncomingScroll(destination, direction);
  };

  const handleSectionChange = (section: string) => {
    // Native scroll has no onLeave to update the highlight, so do it here;
    // above the breakpoint fullpage's onLeave does it once the move starts.
    if (isNativeScroll) setActiveSection(section);
    goToSection(section);
  };

  // A single tree serves every viewport. When the viewport is narrower than
  // DESKTOP_BREAKPOINT or shorter than MIN_FULLPAGE_HEIGHT, fullpage.js's
  // `responsiveWidth` / `responsiveHeight` disable the plugin and the screens
  // become plain, natively-scrolling <div>s; Sidebar/MobileNav visibility is
  // handled purely by CSS (lg: variants) so there is no server/client markup
  // mismatch and no duplicate tree to keep in sync.
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
            onLeave={onLeave}
            afterLoad={afterLoad}
            credits={{ enabled: false }}
            licenseKey={"gplv3-license"}
            navigation={true}
            scrollOverflow={true}
            responsiveWidth={DESKTOP_BREAKPOINT}
            responsiveHeight={MIN_FULLPAGE_HEIGHT}
            render={({ fullpageApi: api }) => {
              // Published on window so goToSection() (src/lib/navigation.ts)
              // can drive fullpage.js from anywhere in the tree.
              if (typeof window !== "undefined") {
                window.fullpage_api = api;
              }
              return (
                <ReactFullpage.Wrapper>
                  {/* Each of these renders one or more <Screen>s, which are the
                      <div class="section"> children fullpage.js looks for. */}
                  <Hero />
                  <About />
                  <Projects />
                  <Skills />
                  <Contact />
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
