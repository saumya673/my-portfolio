"use client";

import SceneImage from "@/components/SceneImage/SceneImage";
import { useHoverToggle } from "@/hooks/useHoverToggle";
import clockFaceSvg from "@/assets/images/wall-clock/clock-face.svg";
import clockCenterSvg from "@/assets/images/wall-clock/clock-center.svg";
import "./WallClock.css";

/** Wall clock. Hovering it nudges the minute hand forward a tick. */
export default function WallClock() {
  const { hoverProps } = useHoverToggle();

  return (
    <div className="wall-clock" aria-hidden="true" {...hoverProps}>
      <SceneImage src={clockFaceSvg} className="wall-clock__face" />
      <div className="wall-clock__tick wall-clock__tick--top" />
      <div className="wall-clock__tick wall-clock__tick--bottom" />
      <div className="wall-clock__tick wall-clock__tick--left" />
      <div className="wall-clock__tick wall-clock__tick--right" />
      <div className="wall-clock__hour-hand" />
      <div className="wall-clock__minute-hand" />
      <SceneImage src={clockCenterSvg} className="wall-clock__center" />
      <div className="wall-clock__hanger" />
    </div>
  );
}
