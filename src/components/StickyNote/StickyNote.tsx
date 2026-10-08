"use client";

import { useState } from "react";
import SceneImage from "@/components/SceneImage/SceneImage";
import pinDarkSvg from "@/assets/images/sticky-note/pin-dark.svg";
import pinOrangeSvg from "@/assets/images/sticky-note/pin-orange.svg";
import "./StickyNote.css";

type StickyNoteProps = {
  label: string;
  color: "orange" | "cream" | "sky";
  pin: "dark" | "orange";
  className?: string;
};

const PIN_IMAGES = { dark: pinDarkSvg, orange: pinOrangeSvg };

/**
 * Pinboard sticky note with the Figma variants Default / Lifted / Revealed.
 * Hover or keyboard focus lifts it; click or tap reveals its label.
 */
export default function StickyNote({ label, color, pin, className = "" }: StickyNoteProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <button
      type="button"
      className={`sticky-note sticky-note--${color} ${className}`}
      aria-pressed={isRevealed}
      data-revealed={isRevealed ? "" : undefined}
      onClick={() => setIsRevealed((revealed) => !revealed)}
    >
      <span className="sticky-note__paper" aria-hidden="true" />
      <span className="sticky-note__label">{label}</span>
      <SceneImage src={PIN_IMAGES[pin]} className="sticky-note__pin" />
    </button>
  );
}
