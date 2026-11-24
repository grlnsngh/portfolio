// Single source of truth for "which scrolling model is the page in right
// now" and "take me to section X".
//
// Two models, chosen by the viewport:
//
//   fullpage   (>= DESKTOP_BREAKPOINT wide AND >= MIN_FULLPAGE_HEIGHT tall)
//              fullpage.js owns scrolling: one wheel tick swaps a whole
//              screen. Screens are designed to fit the viewport, so nothing
//              needs to scroll inside a screen.
//   native     (anything narrower or shorter)
//              fullpage.js disables itself (`responsiveWidth` /
//              `responsiveHeight`) and the page is an ordinary scrolling
//              document. Phones and tablets live here, and so does a desktop
//              window too short for a screen to be laid out sensibly.
//
// Anything that navigates must use the *same* thresholds. The hero once used a
// 768px cutoff while the page used 1024px, so on a tablet its buttons called
// into a disabled fullpage.js and landed on the wrong section.
//
// Keep these in sync with the media queries in globals.css and the `lg:` /
// `touch:` variants in tailwind.config.ts.

export const DESKTOP_BREAKPOINT = 1024;

/** Below this viewport height a screen cannot fit its content; scroll natively. */
export const MIN_FULLPAGE_HEIGHT = 540;

/** Matches while the page scrolls natively (fullpage.js is switched off). */
export const NATIVE_SCROLL_QUERY = `(max-width: ${
  DESKTOP_BREAKPOINT - 0.02
}px), (max-height: ${MIN_FULLPAGE_HEIGHT - 0.02}px)`;

// fullpage.js refuses to share a name between a section's `data-anchor` and an
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
