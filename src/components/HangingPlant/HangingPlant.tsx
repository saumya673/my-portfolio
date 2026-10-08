"use client";

import { useHoverToggle } from "@/hooks/useHoverToggle";
import "./HangingPlant.css";

const LEAF_COUNT = 7;

/** Hanging pot plant. Hovering it makes the leaves sway. */
export default function HangingPlant() {
  const { hoverProps } = useHoverToggle();

  return (
    <div className="hanging-plant" aria-hidden="true" {...hoverProps}>
      <div className="hanging-plant__string" />
      <div className="hanging-plant__pot" />
      <div className="hanging-plant__pot-rim" />
      <div className="hanging-plant__leaves">
        {Array.from({ length: LEAF_COUNT }, (_, index) => (
          <div key={index} className={`hanging-plant__leaf hanging-plant__leaf--${index + 1}`} />
        ))}
      </div>
    </div>
  );
}
