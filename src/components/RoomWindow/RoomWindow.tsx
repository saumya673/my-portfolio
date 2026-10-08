"use client";

import SceneImage from "@/components/SceneImage/SceneImage";
import { useHoverToggle } from "@/hooks/useHoverToggle";
import sunSvg from "@/assets/images/window/sun.svg";
import cloudsSvg from "@/assets/images/window/clouds.svg";
import "./RoomWindow.css";

/** Window with sun and clouds, plus the sill. Hovering the clouds makes them drift. */
export default function RoomWindow() {
  const { hoverProps } = useHoverToggle();

  return (
    <div className="room-window" aria-hidden="true">
      <div className="room-window__frame">
        <SceneImage src={sunSvg} className="room-window__sun" />
        <div className="room-window__clouds" {...hoverProps}>
          <SceneImage src={cloudsSvg} className="room-window__clouds-image" />
        </div>
        <div className="room-window__bar room-window__bar--horizontal" />
        <div className="room-window__bar room-window__bar--vertical" />
      </div>
      <div className="room-window__sill" />
    </div>
  );
}
