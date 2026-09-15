// fullpage.js publishes its API on `window` (see src/app/page.tsx), which is
// how components deep in the tree drive section navigation without prop
// drilling. Declared once here rather than repeated per-component.
declare global {
  interface Window {
    fullpage_api?: {
      moveTo: (section: string) => void;
    };
  }
}

export {};
