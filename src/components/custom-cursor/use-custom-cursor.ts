import { usePathname } from "next/navigation";
import { useEffect, useRef, useSyncExternalStore } from "react";
import { gsap, prefersReducedMotion } from "@/lib";
import {
  HOVER_DURATION_S,
  HOVER_EASE,
  HOVER_SCALE,
  HOVER_TARGET_SELECTOR,
  MOVE_DURATION_S,
  MOVE_EASE,
} from "./custom-cursor.data";
import {
  getIsCoarsePointer,
  getServerIsCoarsePointer,
  subscribeToCoarsePointer,
} from "./custom-cursor.utils";

export default function useCustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isCoarse = useSyncExternalStore(
    subscribeToCoarsePointer,
    getIsCoarsePointer,
    getServerIsCoarsePointer,
  );

  const pathname = usePathname();
  // Re-checks what is under the pointer; set by the effect below, called when
  // the route changes.
  const syncHoverRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (isCoarse || !cursorRef.current) return;

    const reduceMotion = prefersReducedMotion();
    const el = cursorRef.current;

    document.documentElement.classList.add("has-custom-cursor");

    const xTo = gsap.quickTo(el, "x", {
      duration: reduceMotion ? 0 : MOVE_DURATION_S,
      ease: MOVE_EASE,
    });
    const yTo = gsap.quickTo(el, "y", {
      duration: reduceMotion ? 0 : MOVE_DURATION_S,
      ease: MOVE_EASE,
    });

    const isHoverTarget = (target: EventTarget | null) =>
      target instanceof Element &&
      target.closest(HOVER_TARGET_SELECTOR) !== null;

    // The scale follows what is under the pointer, not mouseover/mouseout
    // pairs: a link that is removed while hovered (a click that changes the
    // page) never gets its mouseout, which used to leave the cursor stuck
    // scaled up.
    let hovering = false;
    let lastPointer: { x: number; y: number } | null = null;
    const setHover = (next: boolean) => {
      if (next === hovering) return;
      hovering = next;
      gsap.to(el, {
        scale: next ? HOVER_SCALE : 1,
        duration: reduceMotion ? 0 : HOVER_DURATION_S,
        ease: HOVER_EASE,
      });
    };

    const move = (e: MouseEvent) => {
      lastPointer = { x: e.clientX, y: e.clientY };
      xTo(e.clientX);
      yTo(e.clientY);
      setHover(isHoverTarget(e.target));
    };
    const over = (e: MouseEvent) => setHover(isHoverTarget(e.target));
    // Leaving the window has no element to enter next.
    const out = (e: MouseEvent) => {
      if (!e.relatedTarget) setHover(false);
    };

    syncHoverRef.current = () => {
      if (!lastPointer) return setHover(false);
      setHover(
        isHoverTarget(document.elementFromPoint(lastPointer.x, lastPointer.y)),
      );
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      document.documentElement.classList.remove("has-custom-cursor");
      syncHoverRef.current = null;
    };
  }, [isCoarse]);

  // A new page replaces the element that was under the pointer: reset at once,
  // then settle on whatever the new page has there, once it has rendered.
  useEffect(() => {
    syncHoverRef.current?.();
    const timers = [0, 250, 700].map((delay) =>
      window.setTimeout(() => syncHoverRef.current?.(), delay),
    );
    return () => timers.forEach(window.clearTimeout);
  }, [pathname]);

  return { cursorRef, isCoarse };
}
