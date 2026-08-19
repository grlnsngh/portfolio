// fullpage.js's scrollOverflow feature waits 600ms (400ms while touch-dragging)
// after a section's internal content reaches its scroll limit before it lets a
// further scroll move to the next section - a rubber-band guard against
// accidental double-swipes. At that length it reads as a stall on sections
// tall enough to need internal scrolling. There's no public option for this
// timing (it's a literal inside a closure), so this patches it directly in
// the installed packages and re-applies on every `npm install` via the
// "postinstall" script in package.json.
//
// Three copies need patching, independently, because @fullpage/react-fullpage
// ships fullpage.js's code pre-bundled into its own dist files rather than
// requiring the sibling fullpage.js package at runtime:
//   - @fullpage/react-fullpage/dist/react-fullpage.js       (the "main" entry, actually loaded)
//   - @fullpage/react-fullpage/dist/react-fullpage-umd.js    (UMD build, unused today but patched for consistency)
//   - fullpage.js/dist/fullpage.extensions.min.js            (the standalone package; not on the current
//                                                              require path, but patched defensively in case
//                                                              that ever changes)
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const targets = [
  {
    file: "node_modules/@fullpage/react-fullpage/dist/react-fullpage.js",
    original: "e=en.Y&&n>600;return t&&n>400||e",
    patched: "e=en.Y&&n>200;return t&&n>200||e",
  },
  {
    file: "node_modules/@fullpage/react-fullpage/dist/react-fullpage-umd.js",
    original: "e=en.Y&&n>600;return t&&n>400||e",
    patched: "e=en.Y&&n>200;return t&&n>200||e",
  },
  {
    file: "node_modules/fullpage.js/dist/fullpage.extensions.min.js",
    original: "e=an.Y&&n>600;return t&&n>400||e",
    patched: "e=an.Y&&n>200;return t&&n>200||e",
  },
];

let failed = false;

for (const { file, original, patched } of targets) {
  const target = path.join(root, file);
  let content;
  try {
    content = readFileSync(target, "utf8");
  } catch (err) {
    console.warn(`[patch-fullpage-overflow-delay] skipping ${file}: ${err.message}`);
    continue;
  }

  if (content.includes(patched)) {
    console.log(`[patch-fullpage-overflow-delay] ${file}: already applied, skipping`);
    continue;
  }

  if (!content.includes(original)) {
    failed = true;
    console.error(
      `[patch-fullpage-overflow-delay] ${file}: expected pattern not found. ` +
        "The package was likely upgraded and its minified/bundled output changed. " +
        "Re-check shouldMovePage()'s equivalent in the new build and update this script's strings."
    );
    continue;
  }

  writeFileSync(target, content.split(original).join(patched), "utf8");
  console.log(`[patch-fullpage-overflow-delay] ${file}: applied`);
}

if (failed) {
  process.exit(1);
}
