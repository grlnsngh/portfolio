"use client";
import * as React from "react";
import { useSwipe } from "@/hooks/use-swipe";
import { cn } from "@/lib/utils";

interface SwipeAreaProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onTouchStart" | "onTouchEnd" | "onTouchCancel"
  > {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

/**
 * A div that reports horizontal swipes and swallows the click that follows
 * one. `touch-pan-y` tells the browser it may only pan vertically here, so a
 * sideways drag is delivered to us instead of being claimed as a page gesture.
 */
export function SwipeArea({
  onSwipeLeft,
  onSwipeRight,
  onClick,
  className,
  ...props
}: SwipeAreaProps) {
  const { handlers, consumeSwipe } = useSwipe({ onSwipeLeft, onSwipeRight });

  return (
    <div
      {...props}
      {...handlers}
      className={cn("touch-pan-y", className)}
      onClick={(e) => {
        if (consumeSwipe()) return;
        onClick?.(e);
      }}
    />
  );
}
