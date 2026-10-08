"use client";

import { useState } from "react";
import SceneImage from "@/components/SceneImage/SceneImage";
import laptopBodySvg from "@/assets/images/laptop/laptop-body.svg";
import brandDotSvg from "@/assets/images/laptop/brand-dot.svg";
import laptopBaseSvg from "@/assets/images/laptop/laptop-base.svg";
import "./Laptop.css";

type LaptopProps = {
  className?: string;
};

/** Laptop on the girl's lap. Click toggles it on (screen glows, "Projects →" shows) and off. */
export default function Laptop({ className = "" }: LaptopProps) {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      type="button"
      className={`laptop ${className}`}
      aria-label="Laptop"
      aria-pressed={isOn}
      data-on={isOn ? "" : undefined}
      onClick={() => setIsOn((on) => !on)}
    >
      <SceneImage src={laptopBodySvg} className="laptop__body" />
      <span className="laptop__screen-light" aria-hidden="true" />
      <SceneImage src={brandDotSvg} className="laptop__brand-dot" />
      <SceneImage src={laptopBaseSvg} className="laptop__base" />
      <span className="laptop__screen-label" aria-hidden="true">
        Projects →
      </span>
    </button>
  );
}
