"use client";

import { useState } from "react";
import "./DeskLamp.css";

/** Desk lamp. Click toggles the light on and off (starts on, as in Figma). */
export default function DeskLamp() {
  const [isOn, setIsOn] = useState(true);

  return (
    <button
      type="button"
      className="desk-lamp"
      aria-label="Desk lamp"
      aria-pressed={isOn}
      data-on={isOn ? "" : undefined}
      onClick={() => setIsOn((on) => !on)}
    >
      <span className="desk-lamp__base" />
      <span className="desk-lamp__stem" />
      <span className="desk-lamp__arm" />
      <span className="desk-lamp__shade-body" />
      <span className="desk-lamp__shade-top" />
      <span className="desk-lamp__glow" />
    </button>
  );
}
