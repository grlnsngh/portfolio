import * as React from "react";
import { cn } from "@/lib/utils";
import { sectionElementId } from "@/lib/navigation";

interface ScreenProps {
  /** fullpage.js anchor and URL hash (`/#career`). Unique per screen. */
  anchor: string;
  /**
   * The navigation item this screen belongs to. A group can span several
   * screens (About is two); the sidebar and bottom nav highlight the group.
   */
  group: string;
  tinted?: boolean;
  /**
   * A follow-on screen of its group. Above the desktop breakpoint it is a
   * screen of its own; in native scroll it flows straight on from the
   * previous screen instead of claiming a viewport-height block of its own.
   */
  continuation?: boolean;
  children: React.ReactNode;
}

/**
 * One fullpage.js section.
 *
 * Each screen declares its own anchor with `data-anchor` instead of the
 * parent passing an `anchors` array, so a group that renders a variable number
 * of screens (Projects: one per project) can never get out of step with a
 * hand-maintained list.
 */
export function Screen({
  anchor,
  group,
  tinted,
  continuation,
  children,
}: ScreenProps) {
  return (
    <div
      id={sectionElementId(anchor)}
      data-anchor={anchor}
      data-group={group}
      className={cn(
        "section",
        tinted && "bg-secondary/20",
        continuation && "screen-continued"
      )}
    >
      {children}
    </div>
  );
}
