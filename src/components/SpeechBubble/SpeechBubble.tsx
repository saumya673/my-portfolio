"use client";

import SceneImage from "@/components/SceneImage/SceneImage";
import { useHoverToggle } from "@/hooks/useHoverToggle";
import bubbleShapeSvg from "@/assets/images/speech-bubble/bubble-shape.svg";
import "./SpeechBubble.css";

/** Greeting speech bubble — the page heading. Hovering it makes it float up and tilt. */
export default function SpeechBubble() {
  const { hoverProps } = useHoverToggle();

  return (
    <div className="speech-bubble" {...hoverProps}>
      <SceneImage src={bubbleShapeSvg} className="speech-bubble__shape" />
      <h1 className="speech-bubble__text">
        <span className="speech-bubble__line">Hello, I’m Saumya.</span>
        <span className="speech-bubble__line">Welcome To My Portfolio :)</span>
      </h1>
    </div>
  );
}
