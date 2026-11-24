"use client";
import { useRef } from "react";
import type { TouchEvent } from "react";

interface UseSwipeOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  /** Horizontal distance, in px, a drag must cover to count as a swipe. */
  threshold?: number;
}

/**
 * Horizontal swipe detection for carousels.
 *
 * Replaces the shared `touchStart` / `touchEnd` state that every carousel in
 * Projects used to write to at once, which meant a swipe in the details dialog
 * advanced the card carousel *behind* it. Each call keeps its own refs, so each
 * carousel owns its gesture.
 *
 * - A gesture that is mostly vertical is a page scroll, not a swipe.
 * - `consumeSwipe()` lets a click handler on the same element ignore the click
 *   that some browsers still synthesise after a short drag, so swiping a card
 *   no longer also opens the fullscreen viewer.
 */
export function useSwipe({
  onSwipeLeft,
  onSwipeRight,
  threshold = 50,
}: UseSwipeOptions) {
  const origin = useRef<{ x: number; y: number } | null>(null);
  const didSwipe = useRef(false);

  const handlers = {
    onTouchStart: (e: TouchEvent) => {
      didSwipe.current = false;
      const touch = e.touches[0];
      origin.current = { x: touch.clientX, y: touch.clientY };
    },
    onTouchEnd: (e: TouchEvent) => {
      const start = origin.current;
      origin.current = null;
      if (!start) return;

      const touch = e.changedTouches[0];
      const dx = touch.clientX - start.x;
      const dy = touch.clientY - start.y;

      if (Math.abs(dx) < threshold || Math.abs(dx) < Math.abs(dy)) return;

      didSwipe.current = true;
      (dx < 0 ? onSwipeLeft : onSwipeRight)?.();
    },
    onTouchCancel: () => {
      origin.current = null;
    },
  };

  /** True exactly once after a swipe; call it first thing in an onClick. */
  const consumeSwipe = () => {
    const swiped = didSwipe.current;
    didSwipe.current = false;
    return swiped;
  };

  return { handlers, consumeSwipe };
}
