// Single source of truth for "which scrolling model is the page in right
// now" and "take me to section X".
//
// Above DESKTOP_BREAKPOINT, fullpage.js owns scrolling and sections are
// reached through its API. Below it, fullpage.js disables itself
// (`responsiveWidth`) and the page is an ordinary scrolling document, so
// sections are reached with scrollIntoView. Anything that navigates must pick
// the right one for the *same* threshold; the hero used to use 768px while the
// page used 1024px, so on a tablet its buttons called into a disabled
// fullpage.js and landed on the wrong section.
//
// Keep DESKTOP_BREAKPOINT in sync with the 1024px media queries in
// globals.css and the `lg:` / `touch:` variants in tailwind.config.ts.

export const DESKTOP_BREAKPOINT = 1024;

/** Matches while the page scrolls natively (fullpage.js is switched off). */
export const NATIVE_SCROLL_QUERY = `(max-width: ${DESKTOP_BREAKPOINT - 0.02}px)`;

export const SECTION_ANCHORS = [
  "hero",
  "about",
  "projects",
  "skills",
  "contact",
] as const;

export type SectionAnchor = (typeof SECTION_ANCHORS)[number];

// fullpage.js refuses to share a name between an `anchors` entry and an
// element id, so the elements the native-scroll path looks up get a prefix.
export const sectionElementId = (anchor: string) => `section-${anchor}`;

export function isNativeScroll(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia(NATIVE_SCROLL_QUERY).matches
  );
}

export function goToSection(anchor: string): void {
  if (isNativeScroll()) {
    document
      .getElementById(sectionElementId(anchor))
      ?.scrollIntoView({ behavior: "smooth" });
  } else {
    window.fullpage_api?.moveTo(anchor);
  }
}
