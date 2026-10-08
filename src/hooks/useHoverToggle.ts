"use client";

import { useState, type PointerEvent } from "react";

/**
 * Recreates Figma's "While hovering" trigger: active while a mouse is over the
 * element, reverting on leave. Touch and pen have no hover, so a tap toggles
 * the state instead. Taps that land on a nested <button> are ignored so the
 * button keeps its own click behaviour.
 */
export function useHoverToggle() {
  const [isActive, setIsActive] = useState(false);

  const hoverProps = {
    "data-active": isActive ? "" : undefined,
    onPointerEnter(event: PointerEvent) {
      if (event.pointerType === "mouse") setIsActive(true);
    },
    onPointerLeave(event: PointerEvent) {
      if (event.pointerType === "mouse") setIsActive(false);
    },
    onPointerUp(event: PointerEvent) {
      if (event.pointerType === "mouse") return;
      if ((event.target as Element).closest("button")) return;
      setIsActive((active) => !active);
    },
  };

  return { isActive, hoverProps };
}
